"use client";

import React from "react";
import { 
  Compass, 
  MapPin, 
  Calendar, 
  Users, 
  BookOpen, 
  Trophy, 
  Home as HomeIcon, 
  ArrowLeft,
  Sparkles
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CampusLifePage() {
  const facilities = [
    {
      title: "المكتبة المركزية",
      description: "تضم أكثر من 50,000 كتاب ومصدر رقمي، مع قاعات مخصصة للمذاكرة الفردية والجماعية.",
      icon: BookOpen,
      imageColor: "from-blue-500 to-indigo-600",
      location: "المبنى ج - الدور الثاني"
    },
    {
      title: "المجمع الرياضي والأولمبي",
      description: "ملاعب كرة قدم، صالات رياضية مغطاة، ومسبح أولمبي متاح لجميع الطلاب وأعضاء هيئة التدريس.",
      icon: Trophy,
      imageColor: "from-amber-500 to-orange-600",
      location: "المنطقة الشرقية للحرم"
    },
    {
      title: "السكن الجامعي المطور",
      description: "بيئة سكنية مريحة وآمنة ومجهزة بالكامل بإنترنت عالي السرعة وخدمات متكاملة للطلاب المغتربين.",
      icon: HomeIcon,
      imageColor: "from-pink-500 to-rose-600",
      location: "بجوار البوابة الشمالية"
    }
  ];

  const clubs = [
    { name: "نادي مطوري جوجل (GDSC)", members: "+250 عضو", category: "تقني", color: "text-blue-600 bg-blue-50" },
    { name: "عشيرة الجوالة والخدمة العامة", members: "+120 عضو", category: "اجتماعي", color: "text-emerald-600 bg-emerald-50" },
    { name: "نادي المناظرات والثقافة", members: "+80 عضو", category: "ثقافي", color: "text-purple-600 bg-purple-50" },
    { name: "الجمعية العلمية للهندسة", members: "+180 عضو", category: "أكاديمي", color: "text-indigo-600 bg-indigo-50" },
  ];

  const events = [
    {
      title: "هاكاثون EduCore السنوي للبرمجيات",
      date: "25 مايو 2026",
      time: "09:00 ص",
      location: "قاعة المؤتمرات الكبرى",
      status: "التسجيل مفتوح"
    },
    {
      title: "الملتقى التوظيفي الأول للشركات الناشئة",
      date: "02 يونيو 2026",
      time: "10:00 ص",
      location: "صالة المعارض الرئيسية",
      status: "قريباً"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/60 p-6 md:p-12 space-y-12" dir="rtl">
      
      {/* هيدر ترحيبي علوي جذاب */}
      <div className="text-center space-y-4 max-w-3xl mx-auto border-b pb-8 border-slate-200">
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" /> نبض الحرم الجامعي
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          الحياة الجامعية في EduCore
        </h1>
        <p className="text-lg text-slate-500">
          اكتشف المرافق المتطورة، الأنشطة الطلابية الحافلة، والفعاليات التي تصنع مستقبلك خارج قاعات المحاضرات.
        </p>
      </div>

      {/* قسم المرافق الرئيسية */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Compass className="w-5 h-5 text-indigo-600" />
          <h2 className="text-2xl font-bold text-slate-800">جولة في مرافقنا المتميزة</h2>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          {facilities.map((fac, idx) => {
            const Icon = fac.icon;
            return (
              <Card key={idx} className="overflow-hidden border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className={`h-32 bg-gradient-to-r ${fac.imageColor} flex items-center justify-center relative`}>
                    <Icon className="w-12 h-12 text-white opacity-90" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900">{fac.title}</CardTitle>
                    <CardDescription className="text-slate-500 text-sm leading-relaxed mt-1">
                      {fac.description}
                    </CardDescription>
                  </CardHeader>
                </div>
                <CardFooter className="bg-slate-50/80 border-t border-slate-100 px-6 py-3 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{fac.location}</span>
                  </div>
                  <Button variant="link" className="p-0 h-auto text-xs text-indigo-600 font-semibold">استكشاف المرفق</Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-indigo-600" />
            <h2 className="text-2xl font-bold text-slate-800">الفعاليات والأحداث القادمة</h2>
          </div>

          <div className="space-y-4">
            {events.map((ev, idx) => (
              <Card key={idx} className="border-slate-200 shadow-sm hover:border-indigo-100 transition-colors">
                <CardContent className="p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="space-y-2">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${idx === 0 ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-amber-50 text-amber-700 border border-amber-100'}`}>
                      {ev.status}
                    </span>
                    <h3 className="text-base font-bold text-slate-900">{ev.title}</h3>
                    <div className="flex flex-wrap gap-4 text-xs text-slate-500 mt-1">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{ev.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{ev.location}</span>
                      </div>
                    </div>
                  </div>
                  <Button size="sm" variant={idx === 0 ? "default" : "outline"} className={idx === 0 ? "bg-indigo-600 hover:bg-indigo-700 text-white text-xs" : "text-xs"}>
                    {idx === 0 ? "سجل الآن" : "تفاصيل الفعالية"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-indigo-600" />
            <h2 className="text-2xl font-bold text-slate-800">الأندية الطلابية</h2>
          </div>

          <Card className="border-slate-200 shadow-sm">
            <CardContent className="p-4 space-y-4">
              <p className="text-xs text-slate-400 font-medium">شارك اهتماماتك مع زملائك وانضم لأحد الكيانات النشطة داخل الجامعة:</p>
              
              <div className="space-y-3">
                {clubs.map((club, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors">
                    <div>
                      <h4 className="text-sm font-bold text-slate-800">{club.name}</h4>
                      <span className="text-[11px] text-slate-400">{club.members}</span>
                    </div>
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${club.color}`}>
                      {club.category}
                    </span>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" className="w-full text-xs font-semibold border-indigo-100 text-indigo-600 hover:bg-indigo-50 mt-2">
                عرض كافة الأنشطة الطلابية
              </Button>
            </CardContent>
          </Card>
        </div>

      </div>

      <div className="text-center pt-4">
        <Link href="/">
          <Button variant="ghost" className="text-slate-400 hover:text-slate-600 text-xs gap-1">
            العودة للصفحة الرئيسية <ArrowLeft className="w-3.5 h-3.5" />
          </Button>
        </Link>
      </div>

    </div>
  );
}