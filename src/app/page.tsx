import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0B1F24]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(28,160,171,0.35),_transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(232,59,62,0.08),_transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#1CA0AB]">
              YEMETS ACADEMY
            </p>

            <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
              Експертна діагностика серця майбутньої дитини
            </h1>

            <p className="mt-4 text-lg text-white/80">
              Новий стандарт медицини
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Платформа передачі та обробки медичних кейсів для експертного аналізу,
              маршрутизації та формування клінічного датасету.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/submit-case"
                className="rounded-full bg-[#1CA0AB] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Передати кейс
              </Link>

              <Link
                href="/for-doctors"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-white/40"
              >
                Для лікарів
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Час до народження — єдиний момент, коли можна змінити результат
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Саме на етапі вагітності можна вплинути на прогноз життя дитини:
              обрати правильну клініку, команду та медичну стратегію.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="font-semibold">Рання діагностика</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Виявлення патологій ще до народження дитини та підготовка до
                правильного маршруту допомоги.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="font-semibold">Експертне рішення</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Підтвердження складних та сумнівних випадків із формуванням
                експертного висновку.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="font-semibold">Маршрутизація</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Чітке розуміння подальших дій, місця народження та клінічної тактики.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#E8F6F7]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1CA0AB]">
              Як це працює
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Простий маршрут передачі кейсу
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-[#1CA0AB]">01</p>
              <h3 className="mt-3 font-semibold">Передача доступу</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Лікар або пацієнт надає посилання на захищене медичне хмарне сховище.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-[#1CA0AB]">02</p>
              <h3 className="mt-3 font-semibold">Перевірка якості</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Адміністратор перевіряє повноту та якість матеріалів згідно протоколу.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-[#1CA0AB]">03</p>
              <h3 className="mt-3 font-semibold">Оплата</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Після прийняття кейсу до розгляду відкривається наступний крок — оплата.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-[#1CA0AB]">04</p>
              <h3 className="mt-3 font-semibold">Експертний висновок</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Результат повертається у погоджений канал взаємодії після обробки кейсу.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MEDICAL CLOUD */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1CA0AB]">
                Захищена інфраструктура
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                Робота через захищене медичне хмарне сховище
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                На першому етапі платформа працює через зовнішнє захищене медичне
                хмарне сховище без прямого завантаження вихідних матеріалів на сайт.
                Це дозволяє зберегти безпечний маршрут передачі кейсів та закласти
                основу для подальших інтеграцій.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-8">
              <div className="space-y-4">
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-sm font-semibold text-slate-900">
                    DICOM / PACS / захищені медичні системи
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-sm font-semibold text-slate-900">
                    Контроль доступу та перевірка якості
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-sm font-semibold text-slate-900">
                    Основа для формування клінічного датасету
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT PLATFORM */}
      <section className="bg-[#F8FAFC]">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16 md:px-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1CA0AB]">
              Про платформу
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Міжнародна експертиза, клініка, інвестиції та AI
            </h2>
            <p className="mt-4 text-slate-600">
              Yemets Academy об’єднує медичну експертизу, міжнародну клінічну
              практику, інфраструктуру та AI-вектор розвитку в єдину систему.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/about"
              className="rounded-full bg-[#1CA0AB] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Дізнатися більше
            </Link>
          </div>
        </div>
      </section>

      {/* FOR DOCTORS CTA */}
      <section className="bg-[#0F172A]">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16 md:px-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1CA0AB]">
              Для лікарів
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              Головна ціль платформи — робота з лікарями та клініками для покращення якісті життя кожною людини
            </h2>
            <p className="mt-4 text-white/70">
              Передавайте кейси, отримуйте експертну підтримку та працюйте за
              єдиним міжнародним стандартом.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/for-doctors"
              className="rounded-full bg-[#1CA0AB] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Для лікарів
            </Link>
            <Link
              href="/submit-case"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-white/40"
            >
              Передати кейс
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}