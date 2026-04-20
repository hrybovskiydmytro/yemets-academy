import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Yemets Academy",
  description: "Експертна діагностика серця майбутньої дитини",
};

function BrandLogo() {
  return (
    <Link href="/" className="flex items-center">
      <div className="relative h-20 w-[320px]">
        <Image
          src="/logo.png"
          alt="Yemets Academy"
          fill
          sizes="320px"
          className="object-contain"
          priority
        />
      </div>
    </Link>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <BrandLogo />

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-sm text-slate-700 hover:text-slate-900">
            Головна
          </Link>
          <Link href="/for-doctors" className="text-sm text-slate-700 hover:text-slate-900">
            Для лікарів
          </Link>
          <Link href="/submit-case" className="text-sm text-slate-700 hover:text-slate-900">
            Передати кейс
          </Link>
          <Link href="/about" className="text-sm text-slate-700 hover:text-slate-900">
            Про платформу
          </Link>
          <Link href="/case-status" className="text-sm text-slate-700 hover:text-slate-900">
            Статус
          </Link>
        </nav>

        <Link
          href="/submit-case"
          className="rounded-full bg-[#1CA0AB] px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
        >
          Передати кейс
        </Link>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-[0.16em] text-[#1CA0AB]">
              YEMETS ACADEMY
            </p>
            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">
              Платформа передачі та обробки медичних кейсів для експертного аналізу,
              маршрутизації та формування клінічного датасету.
            </p>
          </div>
          <div className="text-sm text-slate-500">Новий стандарт медицини</div>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className="bg-white text-slate-900 antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}