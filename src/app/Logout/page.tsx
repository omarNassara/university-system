"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogOut, Loader2 } from "lucide-react";

export function LogoutButton() {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const router = useRouter();

  async function handleLogout() {
    setIsLoggingOut(true);
    try {
      const res = await fetch("/api/auth/logout", { method: "POST" });
      if (res.ok) {
        router.push("/");
        router.refresh();
      }
    } catch (err) {
      console.error("فشل تسجيل الخروج:", err);
    } finally {
      setIsLoggingOut(false);
    }
  }

  return (
    <Button
      variant="ghost"
      onClick={handleLogout}
      className="text-rose-600 hover:text-rose-700 hover:bg-rose-50 gap-2 text-xs font-medium"
      disabled={isLoggingOut}
    >
      {isLoggingOut ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        <LogOut className="w-4 h-4" />
      )}
      تسجيل الخروج
    </Button>
  );
}
