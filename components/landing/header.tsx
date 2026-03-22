"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import type { User } from "next-auth";
import { UserNav } from "@/components/landing/user-nav";

export function Header({ user }: { user?: any }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="homepage-header fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
              <Image src="/logo.svg" alt="ZhiJi Logo" width={32} height={32} />
            </div>
            <span className="font-semibold text-foreground hidden sm:block">
              ZhiJi
            </span>
          </Link>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            {user && user.type === "regular" ? (
              <UserNav user={user} />
            ) : (
              <>
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="hidden sm:inline-flex"
                >
                  <Link href="/login">登录</Link>
                </Button>
                <Button asChild size="sm" className="hidden sm:inline-flex">
                  <Link href="/register">注册</Link>
                </Button>
              </>
            )}

            {/* Mobile Menu Button */}
            {!(user && user.type === "regular") && (
              <button
                type="button"
                className="sm:hidden p-2 text-muted-foreground hover:text-foreground"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "关闭菜单" : "打开菜单"}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {!(user && user.type === "regular") && (
        <div
          className={cn(
            "sm:hidden overflow-hidden transition-all duration-300 border-b border-border",
            mobileMenuOpen ? "max-h-64" : "max-h-0 border-b-0"
          )}
        >
          <nav className="px-4 py-4 flex flex-col gap-2 bg-background">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="w-full justify-center"
            >
              <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                登录
              </Link>
            </Button>
            <Button asChild size="sm" className="w-full justify-center">
              <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                注册
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
