"use client";

import React, { useState } from "react";
import { 
  Users, 
  BookOpen, 
  Clock, 
  Plus, 
  CheckCircle, 
  FileText,
  Calendar,
  AlertCircle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";

export default function ProfessorDashboard() {
  const [isCourseModalOpen, setIsCourseModalOpen] = useState(false);
  const [isAssignmentModalOpen, setIsAssignmentModalOpen] = useState(false);

  const stats = [
    { title: "إجمالي الطلاب", value: "142 طالب", icon: Users, color: "text-blue-500", bg: "bg-blue-50" },
    { title: "المواد الدراسية", value: "4 مواد", icon: BookOpen, color: "text-purple-500", bg: "bg-purple-50" },
    { title: "الواجبات النشطة", value: "6 واجبات", icon: FileText, color: "text-orange-500", bg: "bg-orange-50" },
    { title: "نسبة الحضور العام", value: "92%", icon: CheckCircle, color: "text-green-500", bg: "bg-green-50" },
  ];

  const currentCourses = [
    { id: "CS101", name: "مقدمة في علوم الحاسب", students: 45, time: "الأحد - 09:00 ص", room: "مدرج أ" },
    { id: "CS204", name: "هياكل البيانات والخوارزميات", students: 38, time: "الإثنين - 11:00 ص", room: "معمل 3" },
    { id: "CS302", name: "هندسة البرمجيات", students: 35, time: "الأربعاء - 01:00 م", room: "مدرج ج" },
    { id: "CS401", name: "تطوير تطبيقات الويب باستخدام Next.js", students: 24, time: "الخميس - 10:00 ص", room: "معمل الحاسبات المتطور" },
  ];

  return (
    <div className="p-6 md:p-10 space-y-8 max-w-7xl mx-auto" dir="rtl">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b pb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">لوحة تحكم الأستاذ</h1>
          <p className="text-slate-500 mt-1">مرحباً بك مجدداً د. عمر نصار. إليك نظرة عامة على موادك وطلابك اليوم.</p>
        </div>
        <div className="flex gap-3">
          <Button className="gap-2" onClick={() => setIsCourseModalOpen(true)}>
            <Plus className="h-4 w-4" /> إضافة محاضرة جديدة
          </Button>
          <Button variant="outline" className="gap-2" onClick={() => setIsAssignmentModalOpen(true)}>
            إضافة واجب <FileText className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium text-slate-500">{stat.title}</CardTitle>
              <div className={`p-2 rounded-lg ${stat.bg}`}>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">المواد الدراسية الحالية</CardTitle>
              <CardDescription>قائمة بالمواد التي تقوم بتدريسها خلال هذا الفصل الدراسي.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-right border-collapse">
                  <thead>
                    <tr className="border-b text-slate-400 text-sm">
                      <th className="pb-3 font-semibold">المادة</th>
                      <th className="pb-3 font-semibold">عدد الطلاب</th>
                      <th className="pb-3 font-semibold">الموعد</th>
                      <th className="pb-3 font-semibold">المكان</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y text-sm text-slate-700">
                    {currentCourses.map((course) => (
                      <tr key={course.id} className="hover:bg-slate-50/50 transition-colors">
                        <td className="py-4 font-medium text-slate-900">
                          <div>{course.name}</div>
                          <span className="text-xs text-slate-400 font-mono">{course.id}</span>
                        </td>
                        <td className="py-4">{course.students} طالب</td>
                        <td className="py-4 flex items-center gap-1 text-slate-500">
                          <Clock className="h-3.5 w-3.5" /> {course.time}
                        </td>
                        <td className="py-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                            {course.room}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">آخر التحديثات والواجبات</CardTitle>
              <CardDescription>الواجبات والتنبيهات المضافة مؤخراً للطلاب.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 bg-slate-50 rounded-lg border-r-4 border-orange-500 space-y-1">
                <div className="text-sm font-semibold text-slate-900">واجب: هياكل البيانات (شجرة البحث الثنائية)</div>
                <div className="text-xs text-slate-500 flex justify-between">
                  <span>متبقي: يومين</span>
                  <span>تسلّم: 28/38</span>
                </div>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border-r-4 border-blue-500 space-y-1">
                <div className="text-sm font-semibold text-slate-900">إعلان مهم: تأجيل محاضرة الخميس القادم</div>
                <div className="text-xs text-slate-500">تم النشر لجميع طلاب مادة تطوير الويب.</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Dialog open={isCourseModalOpen} onOpenChange={setIsCourseModalOpen}>
        <DialogContent className="sm:max-w-[500px]" dir="rtl">
          <DialogHeader className="text-right">
            <DialogTitle className="text-xl font-bold flex items-center gap-2">
              <Plus className="h-5 w-5 text-primary" /> إضافة محاضرة جديدة للجدول
            </DialogTitle>
            <DialogDescription className="text-slate-500 mt-1">
              أدخل تفاصيل المحاضرة وتوقيتها لتظهر لجميع الطلاب المسجلين بالمادة.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4 text-right">
            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-700">اختر المادة الدراسية</label>
              <select className="w-full p-2.5 rounded-lg border bg-background text-sm focus:ring-2 focus:ring-primary outline-none">
                <option>مقدمة في علوم الحاسب (CS101)</option>
                <option>هياكل البيانات والخوارزميات (CS204)</option>
                <option>هندسة البرمجيات (CS302)</option>
                <option>تطوير تطبيقات الويب (CS401)</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700">اليوم</label>
                <select className="w-full p-2.5 rounded-lg border bg-background text-sm focus:ring-2 focus:ring-primary outline-none">
                  <option>الأحد</option>
                  <option>الإثنين</option>
                  <option>الثلاثاء</option>
                  <option>الأربعاء</option>
                  <option>الخميس</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700">الموقع / القاعة</label>
                <input type="text" placeholder="مثال: مدرج أ" className="w-full p-2.5 rounded-lg border bg-background text-sm focus:ring-2 focus:ring-primary outline-none" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700">وقت البدء</label>
                <input type="time" className="w-full p-2.5 rounded-lg border bg-background text-sm focus:ring-2 focus:ring-primary outline-none text-right" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700">وقت الانتهاء</label>
                <input type="time" className="w-full p-2.5 rounded-lg border bg-background text-sm focus:ring-2 focus:ring-primary outline-none text-right" />
              </div>
            </div>
          </div>

          <DialogFooter className="flex gap-2 sm:justify-start pt-4 border-t">
            <Button type="submit" className="px-6" onClick={() => setIsCourseModalOpen(false)}>حفظ وإضافة</Button>
            <Button variant="outline" onClick={() => setIsCourseModalOpen(false)}>إلغاء</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isAssignmentModalOpen} onOpenChange={setIsAssignmentModalOpen}>
        <DialogContent className="sm:max-w-[500px]" dir="rtl">
          <DialogHeader className="text-right">
            <DialogTitle className="text-xl font-bold flex items-center gap-2 text-slate-900">
              <AlertCircle className="h-5 w-5 text-orange-500" /> نشر واجب دراسي جديد
            </DialogTitle>
            <DialogDescription className="text-slate-500 mt-1">
              قم بإنشاء واجب وتحديد موعد التسليم النهائي والدرجات المستحقة للطلاب.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4 text-right">
            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-700">المادة المستهدفة</label>
              <select className="w-full p-2.5 rounded-lg border bg-background text-sm focus:ring-2 focus:ring-primary outline-none">
                <option>تطوير تطبيقات الويب باستخدام Next.js (CS401)</option>
                <option>هياكل البيانات والخوارزميات (CS204)</option>
                <option>هندسة البرمجيات (CS302)</option>
                <option>مقدمة في علوم الحاسب (CS101)</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-700">عنوان الواجب</label>
              <input 
                type="text" 
                placeholder="مثال: بناء نموذج قاعدة بيانات لمتجر إلكتروني" 
                className="w-full p-2.5 rounded-lg border bg-background text-sm focus:ring-2 focus:ring-primary outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-700">وصف المتطلبات</label>
              <textarea 
                rows={3}
                placeholder="اكتب تفاصيل وشروط الواجب هنا..." 
                className="w-full p-2.5 rounded-lg border bg-background text-sm focus:ring-2 focus:ring-primary outline-none resize-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700">آخر موعد للتسليم</label>
                <input 
                  type="date" 
                  className="w-full p-2.5 rounded-lg border bg-background text-sm focus:ring-2 focus:ring-primary outline-none text-right"
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700">الدرجة الكلية (النقاط)</label>
                <input 
                  type="number" 
                  placeholder="10" 
                  className="w-full p-2.5 rounded-lg border bg-background text-sm focus:ring-2 focus:ring-primary outline-none"
                />
              </div>
            </div>
          </div>

          <DialogFooter className="flex gap-2 sm:justify-start pt-4 border-t">
            <Button type="submit" className="px-6 bg-orange-600 hover:bg-orange-700" onClick={() => setIsAssignmentModalOpen(false)}>
              نشر الواجب للطلاب
            </Button>
            <Button variant="outline" onClick={() => setIsAssignmentModalOpen(false)}>
              إلغاء
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

    </div>
  );
}