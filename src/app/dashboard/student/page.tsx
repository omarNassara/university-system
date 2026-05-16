import React from "react";
import {
  BookOpen,
  Calendar,
  Award,
  Clock,
  FileText,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function StudentDashboard() {
  const stats = [
    {
      title: "المواد المسجلة",
      value: "5 مواد",
      description: "الفصل الدراسي الحالي",
      icon: BookOpen,
      color: "text-pink-600 bg-pink-50",
    },
    {
      title: "المعدل التراكمي (GPA)",
      value: "3.65",
      description: "ممتاز مرتفع",
      icon: Award,
      color: "text-purple-600 bg-purple-50",
    },
    {
      title: "نسبة الحضور الشاملة",
      value: "94%",
      description: "ملتزم جداً",
      icon: CheckCircle2,
      color: "text-emerald-600 bg-emerald-50",
    },
    {
      title: "الواجبات المعلقة",
      value: "مهمتان",
      description: "مطلوب التسليم هذا الأسبوع",
      icon: Clock,
      color: "text-amber-600 bg-amber-50",
    },
  ];

  const todayClasses = [
    {
      name: "هياكل البيانات والخوارزميات",
      code: "CS204",
      time: "11:00 ص - 01:00 م",
      room: "معمل 3",
      doctor: "د. عمر نصار",
    },
    {
      name: "تطوير تطبيقات الويب باستخدام Next.js",
      code: "CS401",
      time: "01:30 م - 03:30 م",
      room: "مدرج ج",
      doctor: "أ.د. أحمد رأفت",
    },
  ];

  const grades = [
    { name: "مقدمة في علوم الحاسب", code: "CS101", grade: "A", percentage: 95 },
    { name: "هندسة البرمجيات", code: "CS302", grade: "-A", percentage: 89 },
    {
      name: "تفاعل الإنسان والحاسب",
      code: "CS202",
      grade: "B+",
      percentage: 84,
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
            لوحة التحكم الأكاديمية
          </h1>
          <p className="text-slate-500 mt-1 text-sm">
            مرحباً بك مجدداً في EduCore. إليك ملخص بمحاضراتك، واجباتك، ومستواك
            الدراسي اليوم.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="gap-2 text-xs font-medium border-pink-200 text-pink-700 hover:bg-pink-50"
          >
            <Calendar className="w-4 h-4" /> الجدول الدراسي الكامل
          </Button>
          <Button className="gap-2 bg-pink-600 hover:bg-pink-700 text-white text-xs font-medium">
            <FileText className="w-4 h-4" /> السجل الأكاديمي (Transcript)
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
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-pink-600" />
              <h2 className="text-lg font-bold text-slate-800">
                محاضرات اليوم
              </h2>
            </div>
            <span className="text-xs text-slate-400 font-medium">
              السبت، 16 مايو 2026
            </span>
          </div>

          <div className="grid gap-4">
            {todayClasses.map((cls, idx) => (
              <Card
                key={idx}
                className="border-slate-200/80 shadow-sm hover:border-pink-200 transition-colors"
              >
                <CardContent className="p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded text-slate-500">
                      {cls.code}
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      {cls.name}
                    </h3>
                    <p className="text-xs text-slate-400">
                      أستاذ المادة: {cls.doctor}
                    </p>
                  </div>
                  <div className="flex items-center gap-6 text-sm text-slate-600 bg-slate-50/80 p-3 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-slate-400" />
                      <span>{cls.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-pink-500"></span>
                      <span className="font-medium text-slate-900">
                        {cls.room}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-pink-600" />
            <h2 className="text-lg font-bold text-slate-800">
              نتائج المواد الأخيرة
            </h2>
          </div>

          <Card className="border-slate-200/80 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-xs font-bold text-slate-400">
                الفصل الدراسي السابق
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              {grades.map((grade, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <div>
                      <span className="font-bold text-slate-800">
                        {grade.name}
                      </span>
                      <span className="text-slate-400 mr-1.5 font-mono">
                        ({grade.code})
                      </span>
                    </div>
                    <span className="font-bold text-pink-600 bg-pink-50 px-2 py-0.5 rounded text-xs">
                      {grade.grade}
                    </span>
                  </div>
                  <Progress
                    value={grade.percentage}
                    className="h-1.5 bg-slate-100"
                  />
                </div>
              ))}

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-500" /> تظهر
                  الدرجات فور اعتمادها
                </span>
                <Button
                  variant="link"
                  className="p-0 h-auto text-xs text-pink-600"
                >
                  تفاصيل الدرجات
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
