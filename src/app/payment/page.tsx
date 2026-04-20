import Link from "next/link";

export default function PaymentPage() {
  return (
    <main className="min-h-screen bg-[#E8F6F7] px-6 py-16 md:px-10">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_380px]">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1CA0AB]">
            Оплата
          </p>

          <h1 className="mt-4 text-3xl font-semibold md:text-4xl">
            Оплата експертного висновку
          </h1>

          <p className="mt-4 max-w-2xl text-slate-600">
            Матеріали прийняті до розгляду. Наступний крок — підтвердження
            оплати для запуску експертного аналізу кейсу.
          </p>

          <div className="mt-8 rounded-3xl border border-slate-200 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1CA0AB]">
              Що включено
            </p>

            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
              <li>• Первинна перевірка повноти та якості матеріалів</li>
              <li>• Експертний аналіз кейсу</li>
              <li>• Формування експертного висновку</li>
              <li>• Повернення результату у погоджений канал взаємодії</li>
            </ul>
          </div>

          <div className="mt-8 rounded-3xl border border-slate-200 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1CA0AB]">
              Інтеграція еквайрингу
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              На цьому етапі демонструється структура сторінки, підготовлена під
              підключення еквайрингу. Фактична платіжна інтеграція буде
              реалізована після фінального погодження платіжного сценарію.
            </p>
          </div>
        </div>

        <aside className="rounded-3xl bg-[#0B1F24] p-8 text-white shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1CA0AB]">
            Summary
          </p>

          <div className="mt-6 space-y-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-white/70">Послуга</span>
              <span className="font-medium">Expert Opinion</span>
            </div>

            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-white/70">Термін</span>
              <span className="font-medium">24–48 годин</span>
            </div>

            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-white/70">Статус</span>
              <span className="font-medium text-[#1CA0AB]">Прийнято</span>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-white/70">До сплати</span>
              <span className="text-3xl font-semibold">$120</span>
            </div>
          </div>

          <button className="mt-8 w-full rounded-full bg-[#1CA0AB] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90">
            Перейти до оплати
          </button>

          <p className="mt-4 text-xs leading-6 text-white/50">
            Демо-екран для презентації платіжного сценарію. На наступному етапі
            тут буде підключено реальний еквайринг.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/case-status"
              className="rounded-full border border-white/15 px-4 py-2 text-xs text-white/80 transition hover:border-white/30"
            >
              Назад до статусу
            </Link>
            <Link
              href="/submit-case"
              className="rounded-full border border-white/15 px-4 py-2 text-xs text-white/80 transition hover:border-white/30"
            >
              Новий кейс
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
}