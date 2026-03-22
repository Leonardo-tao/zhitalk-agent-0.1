import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="homepage-footer py-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
              <Image src="/logo.svg" alt="ZhiJi Logo" width={32} height={32} />
            </div>
            <span className="font-semibold text-foreground">ZhiJi</span>
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ZhiJi. All rights reserved.
          </p>
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link
              href="#features"
              className="hover:text-foreground transition-colors"
            >
              功能介绍
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              关于我们
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
