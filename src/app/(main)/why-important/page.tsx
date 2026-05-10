export default function WhyImportantPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1CA0AB]">
              Чому це важливо
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
              Рання експертна оцінка допомагає діяти впевненіше
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Ця сторінка пояснює, чому додаткова експертна інтерпретація
              пренатального кардіологічного кейсу може бути важливою для родини
              та лікаря. Ми не створюємо страх, а допомагаємо отримати більше
              ясності у складній ситуації.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#E8F6F7]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-xl font-semibold">Розуміння ситуації</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Родина отримує більш чітке пояснення того, що відбувається і які
                наступні кроки можливі.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-xl font-semibold">Підтримка лікаря</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Лікар може отримати додаткову експертну думку щодо складного або
                неочевидного кейсу.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-xl font-semibold">Планування дій</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Висновок допомагає краще підготуватися до подальшого медичного
                маршруту.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Що дає експертний розгляд
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              "Перевірка якості та повноти матеріалів",
              "Додаткова інтерпретація складного випадку",
              "Пояснення можливих ризиків без зайвого тиску",
              "Рекомендації щодо наступних медичних кроків",
            ].map((item) => (
              <div key={item} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <p className="text-lg font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}