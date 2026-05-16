"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Loader2,
  Lock,
  Mail,
  User,
  ShieldCheck,
  ArrowLeft,
} from "lucide-react";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role }),
      });

      if (!res.ok) {
        throw new Error(
          "فشل تسجيل الحساب، البريد الإلكتروني قد يكون مستخدماً بالفعل",
        );
      }

      const data = await res.json();

      if (data.success) {
        router.push("/login");
      } else {
        setError(data.message || "فشل تسجيل الحساب");
      }
    } catch (err: any) {
      setError(err.message || "حدث خطأ غير متوقع، برجاء المحاولة لاحقاً");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-slate-50/50 p-4"
      dir="rtl"
    >
      <Card className="w-full max-w-md border-slate-200/80 shadow-lg">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold tracking-tight text-indigo-600">
            إنشاء حساب جديد
          </CardTitle>
          <CardDescription className="text-slate-500">
            انضم إلى منصة EduCore التعليمية الذكية
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignup} className="space-y-4">
            {error && (
              <div className="p-3 text-xs font-medium text-rose-600 bg-rose-50 border border-rose-100 rounded-lg">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="name">الاسم بالكامل</Label>
              <div className="relative">
                <User className="absolute right-3 top-2.5 h-4 w-4 text-slate-400" />
                <Input
                  id="name"
                  placeholder="عمر نصار"
                  className="pr-10"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">البريد الإلكتروني الأكاديمي</Label>
              <div className="relative">
                <Mail className="absolute right-3 top-2.5 h-4 w-4 text-slate-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="name@university.edu"
                  className="pr-10"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">كلمة المرور</Label>
              <div className="relative">
                <Lock className="absolute right-3 top-2.5 h-4 w-4 text-slate-400" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">نوع الحساب (الدور)</Label>
              <div className="relative">
                <ShieldCheck className="absolute right-3 top-2.5 h-4 w-4 text-slate-400" />
                <select
                  id="role"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pr-10 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="student">طالب (Student)</option>
                  <option value="professor">أستاذ / دكتور (Professor)</option>
                  <option value="admin">مدير النظام / العميد (Admin)</option>
                </select>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white mt-2"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="ml-2 h-4 w-4 animate-spin" /> جاري تسجيل
                  الحساب...
                </>
              ) : (
                "إنشاء الحساب"
              )}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4 border-t border-slate-100 pt-4 text-center text-sm text-slate-500">
          <div className="hover:text-indigo-600 transition-colors">
            لديك حساب بالفعل؟{" "}
            <Link
              href="/login"
              className="font-semibold text-indigo-600 underline underline-offset-4"
            >
              سجل الدخول هنا
            </Link>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-slate-600"
          >
            العودة للصفحة الرئيسية <ArrowLeft className="w-3 h-3" />
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
