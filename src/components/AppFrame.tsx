"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

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

  <Link href="/about" className="text-sm text-slate-700 hover:text-slate-900">
    Про платформу
  </Link>

  <Link href="/why-important" className="text-sm text-slate-700 hover:text-slate-900">
    Чому це важливо
  </Link>

  <Link href="/research" className="text-sm text-slate-700 hover:text-slate-900">
    Дослідження
  </Link>

  <Link href="/events" className="text-sm text-slate-700 hover:text-slate-900">
    Події
  </Link>

  <Link href="/doctor-application" className="text-sm text-slate-700 hover:text-slate-900">
    Для лікарів
  </Link>

  <Link href="/submit-case" className="text-sm text-slate-700 hover:text-slate-900">
    Передати кейс
  </Link>
</nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0B1F24] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1CA0AB]">
              YEMETS ACADEMY
            </p>

            <p className="mt-4 max-w-sm text-sm leading-7 text-white/70">
              Експертна діагностика серця майбутньої дитини за методологією
              професора Іллі Ємця.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Платформа</p>
            <div className="mt-4 space-y-3 text-sm text-white/60">
              <p>Про платформу</p>
              <p>Методологія</p>
              <p>Дослідження</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Для користувачів</p>
            <div className="mt-4 space-y-3 text-sm text-white/60">
              <p>Передати кейс</p>
              <p>Для лікарів</p>
              <p>Статус кейсу</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Контакти</p>
            <div className="mt-4 space-y-3 text-sm text-white/60">
              <p>Yemets Academy</p>
              <p>Expert prenatal cardiology</p>
              <p>Ukraine / International</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/40">
          © 2026 Yemets Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
export default function AppFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}