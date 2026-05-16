import React from "react";
import {
  Users,
  GraduationCap,
  BookOpen,
  DollarSign,
  ShieldAlert,
  UserCheck,
  Plus,
  Building2,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AdminDashboard() {
  const stats = [
    {
      title: "إجمالي الطلاب",
      value: "3,450",
      description: "+12% منذ الشهر الماضي",
      icon: Users,
      color: "text-blue-600 bg-blue-50",
    },
    {
      title: "أعضاء هيئة التدريس",
      value: "180",
      description: "نشطين في 8 كليات",
      icon: GraduationCap,
      color: "text-purple-600 bg-purple-50",
    },
    {
      title: "المواد الدراسية",
      value: "420",
      description: "تحديث مستمر للمناهج",
      icon: BookOpen,
      color: "text-emerald-600 bg-emerald-50",
    },
    {
      title: "صندوق الإيرادات",
      value: "45,200 €",
      description: "الرسوم والمصروفات المستلمة",
      icon: DollarSign,
      color: "text-amber-600 bg-amber-50",
    },
  ];

  const faculties = [
    {
      name: "كلية علوم الحاسب ومعلومات",
      dean: "أ.د.كريم أحمد",
      students: 1200,
      status: "مستقرة",
    },
    {
      name: "كلية الهندسة",
      dean: "أ.د. أحمد زايد",
      students: 950,
      status: "مستقرة",
    },
    {
      name: "كلية إدارة الأعمال",
      dean: "أ.د. أسامة أيمن",
      students: 800,
      status: "تحتاج مراجعة جداول",
    },
    {
      name: "كلية اللغات والترجمة",
      dean: "أ.د. يوسف الجارحي",
      students: 500,
      status: "مستقرة",
    },
  ];

  return (
    <div
      className="p-6 md:p-10 space-y-8 bg-slate-50/50 min-h-screen"
      dir="rtl"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b pb-6 border-slate-200">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
            لوحة تحكم المدير العام
          </h1>
          <p className="text-slate-500 mt-1 text-sm">
            مرحباً بك مجدداً. إليك نظرة شاملة على أداء الجامعة، الكليات، وإدارة
            الصلاحيات اليوم.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2 text-xs font-medium">
            <ShieldAlert className="w-4 h-4" /> سجل العمليات الأمنية
          </Button>
          <Button className="gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium">
            <Plus className="w-4 h-4" /> إضافة كلية جديدة
          </Button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card
              key={index}
              className="shadow-sm border-slate-200/80 hover:shadow-md transition-shadow"
            >
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-xs font-bold text-slate-500">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-lg ${stat.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-slate-900">
                  {stat.value}
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* جدول الكليات - يأخذ مساحة 2/3 */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-indigo-600" />
              <h2 className="text-lg font-bold text-slate-800">
                حالة الكليات والأقسام
              </h2>
            </div>
            <Button variant="link" className="text-indigo-600 text-xs">
              عرض الكل
            </Button>
          </div>

          <Card className="border-slate-200/80 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-right border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100/70 border-b border-slate-200 text-slate-600 font-semibold">
                    <th className="p-4">الكلية</th>
                    <th className="p-4">العميد</th>
                    <th className="p-4">عدد الطلاب</th>
                    <th className="p-4">الحالة</th>
                    <th className="p-4 text-left">إجراءات</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {faculties.map((faculty, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-slate-50/50 transition-colors"
                    >
                      <td className="p-4 font-medium text-slate-900">
                        {faculty.name}
                      </td>
                      <td className="p-4 text-slate-500">{faculty.dean}</td>
                      <td className="p-4 font-mono">{faculty.students}</td>
                      <td className="p-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            faculty.status === "مستقرة"
                              ? "bg-emerald-50 text-emerald-700"
                              : "bg-amber-50 text-amber-700"
                          }`}
                        >
                          {faculty.status}
                        </span>
                      </td>
                      <td className="p-4 text-left">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-indigo-600 hover:text-indigo-700 font-medium text-xs"
                        >
                          إدارة
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-indigo-600" />
            <h2 className="text-lg font-bold text-slate-800">
              طلبات توثيق الأساتذة
            </h2>
          </div>

          <Card className="border-slate-200/80 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-xs font-bold text-slate-400">
                تحتاج إلى موافقة الإدارة
              </CardTitle>
              <CardDescription className="text-xs">
                أعضاء هيئة تدريس جدد قاموا بالتسجيل وينتظرون تفعيل الصلاحيات.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 border border-slate-100 rounded-xl bg-slate-50/50 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-900">
                    د. رامي أحمد
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    قسم هندسة البرمجيات
                  </p>
                </div>
                <div className="flex gap-1.5">
                  <Button
                    size="sm"
                    className="h-7 text-[11px] bg-emerald-600 hover:bg-emerald-700 text-white px-3"
                  >
                    قبول
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-7 text-[11px] text-rose-600 hover:bg-rose-50 px-2"
                  >
                    رفض
                  </Button>
                </div>
              </div>

              <div className="p-3 border border-slate-100 rounded-xl bg-slate-50/50 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-900">
                    د. عمر الخولي
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    قسم الذكاء الاصطناعي
                  </p>
                </div>
                <div className="flex gap-1.5">
                  <Button
                    size="sm"
                    className="h-7 text-[11px] bg-emerald-600 hover:bg-emerald-700 text-white px-3"
                  >
                    قبول
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-7 text-[11px] text-rose-600 hover:bg-rose-50 px-2"
                  >
                    رفض
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
