"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Menu,
  Book,
  GraduationCap,
  LogOut,
  Moon,
  Sun,
  Bell,
  User,
  Settings,
} from "lucide-react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuHorizontalList, 
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { useEffect, useState } from "react";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "لوحة تحكم المدير",
    href: "/dashboard/admin",
    description: "إدارة المستخدمين والمواد والإحصائيات العامة.",
  },
  {
    title: "لوحة تحكم الأستاذ",
    href: "/dashboard/professor",
    description: "إدارة المواد والدرجات والطلاب المسجلين.",
  },
  {
    title: "لوحة تحكم الطالب",
    href: "/dashboard/student",
    description: "عرض الجدول والدرجات والمواد المسجلة.",
  },
];

const arabicPaths: Record<string, string> = {
  dashboard: "لوحة التحكم",
  admin: "المدير",
  professor: "الأستاذ",
  student: "الطالب",
  login: "تسجيل الدخول",
  signup: "إنشاء حساب",
  courses: "المواد",
  settings: "الإعدادات",
  profile: "البيانات الشخصية",
  notifications: "الإشعارات",
};

interface UserSession {
  id: string;
  email: string;
  name: string;
  role: "admin" | "professor" | "student";
}

export function Header() {
  const { setTheme, theme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState<UserSession | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch("/api/auth/me");
        const data = await res.json();
        if (data.success) {
          setUser(data.user);
        }
      } catch {}
    }
    fetchUser();
  }, [pathname]);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "post" });
    setUser(null);
    router.push("/login");
  };

  const paths = pathname.split("/").filter(Boolean);

  return (
    <header
      className={cn(
        "sticky top-0 w-full z-50 transition-all duration-300 border-b backdrop-blur-sm",
        scrolled
          ? "bg-background/90 dark:bg-background/90 shadow-sm py-2 border-border/60"
          : "bg-background/40 dark:bg-background/40 py-4 border-transparent",
      )}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 ml-8">
            <div className="bg-primary p-1.5 rounded-lg shadow-sm">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-l from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              EduCore
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>الأكاديمية</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_.75fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-indigo-500 to-purple-600 p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <Book className="h-6 w-6 text-white" />
                            <div className="mb-2 mt-4 text-lg font-medium text-white">
                              التميز الأكاديمي
                            </div>
                            <p className="text-xs leading-tight text-white/90">
                              اكتشف برامجنا العالمية المصممة لقادة المستقبل.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/courses" title="برامج البكالوريوس">
                        شهادات في العلوم والهندسة والآداب.
                      </ListItem>
                      <ListItem href="/courses" title="الدراسات العليا">
                        برامج الماجستير والدكتوراه.
                      </ListItem>
                      <ListItem href="/courses" title="التعلم عن بعد">
                        خيارات مرنة للمهنيين.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {user && (
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>لوحات التحكم</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {components
                          .filter((component) => {
                            if (user.role === "admin") return true;
                            if (user.role === "professor")
                              return component.href === "/dashboard/professor";
                            if (user.role === "student")
                              return component.href === "/dashboard/student";
                            return false;
                          })
                          .map((component) => (
                            <ListItem
                              key={component.title}
                              title={component.title}
                              href={component.href}
                            >
                              {component.description}
                            </ListItem>
                          ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                )}

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/campus"
                    className={navigationMenuTriggerStyle()}
                  >
                    الحياة الجامعية
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right Section: Theme & Profile */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">تبديل الوضع</span>
            </Button>

            {user ? (
              <div className="flex items-center gap-3 border-r pr-3">
                <Link href="/notifications">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full relative text-slate-600 dark:text-slate-300"
                  >
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-1.5 left-1.5 h-2 w-2 bg-red-500 rounded-full animate-pulse" />
                  </Button>
                </Link>

                {/* تعديل مساحة بروفايل المستخدم لعرض أنظف للاسم والدور الوظيفي */}
                <Link
                  href="/profile"
                  className="flex items-center gap-2 bg-muted/60 px-3 py-1.5 rounded-full hover:bg-muted transition-colors"
                >
                  <div className="bg-primary/10 p-1 rounded-full">
                    <User className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex flex-col text-right text-xs">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      {user.name}
                    </span>
                    <span className="text-[10px] text-muted-foreground">
                      {user.role === "professor"
                        ? "أستاذ مادة"
                        : user.role === "admin"
                          ? "المدير"
                          : "طالب"}
                    </span>
                  </div>
                </Link>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLogout}
                  className="text-destructive hover:text-destructive hover:bg-destructive/10 rounded-lg gap-1.5"
                >
                  <LogOut className="w-4 h-4" />
                  خروج
                </Button>
              </div>
            ) : (
              <Link href="/login">
                <Button
                  variant="secondary"
                  size="sm"
                  className="rounded-full px-6 font-medium shadow-sm border"
                >
                  تسجيل الدخول
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>

              <SheetContent side="left" className="w-75 sm:w-100">
                <SheetHeader>
                  <SheetTitle className="text-right flex items-center gap-2">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    قائمة EduCore
                  </SheetTitle>
                </SheetHeader>
                <div className="grid gap-6 py-6 text-right">
                  {user && (
                    <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <User className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{user.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {user.email}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="grid gap-2">
                    <h3 className="text-xs font-semibold text-muted-foreground tracking-wider mb-1">
                      لوحات التحكم
                    </h3>
                    {user ? (
                      components
                        .filter((component) => {
                          if (user.role === "admin") return true;
                          if (user.role === "professor")
                            return component.href === "/dashboard/professor";
                          if (user.role === "student")
                            return component.href === "/dashboard/student";
                          return false;
                        })
                        .map((component) => (
                          <Link
                            key={component.title}
                            href={component.href}
                            className="text-sm font-medium py-2 hover:text-primary transition-colors border-b border-border/40"
                          >
                            {component.title}
                          </Link>
                        ))
                    ) : (
                      <p className="text-xs text-muted-foreground">
                        قم بتسجيل الدخول لعرض اللوحات
                      </p>
                    )}
                  </div>

                  <div className="grid gap-2 pt-4">
                    <h3 className="text-xs font-semibold text-muted-foreground tracking-wider mb-1">
                      الحساب
                    </h3>
                    {user ? (
                      <>
                        <Link
                          href="/settings"
                          className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors py-1"
                        >
                          <Settings className="w-4 h-4" />
                          الإعدادات
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="flex items-center gap-2 text-sm font-medium text-destructive hover:opacity-80 transition-colors py-1 text-right"
                        >
                          <LogOut className="h-4 w-4" />
                          تسجيل الخروج
                        </button>
                      </>
                    ) : (
                      <Link
                        href="/login"
                        className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors py-1"
                      >
                        <User className="w-4 h-4" />
                        تسجيل الدخول
                      </Link>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {paths.length > 0 && (
          <div className="hidden md:block py-2 mt-1 border-t border-border/20">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">الرئيسية</BreadcrumbLink>
                </BreadcrumbItem>
                {paths.map((path, index) => {
                  const href = `/${paths.slice(0, index + 1).join("/")}`;
                  const isLast = index === paths.length - 1;
                  const title =
                    arabicPaths[path] ||
                    path.charAt(0).toUpperCase() + path.slice(1);

                  return (
                    <React.Fragment key={path}>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        {isLast ? (
                          <BreadcrumbPage>{title}</BreadcrumbPage>
                        ) : (
                          <BreadcrumbLink href={href}>{title}</BreadcrumbLink>
                        )}
                      </BreadcrumbItem>
                    </React.Fragment>
                  );
                })}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        )}
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-right",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-slate-900 dark:text-slate-100">
            {title}
          </div>
          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground mt-1">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
