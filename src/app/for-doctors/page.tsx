export default function ForDoctorsPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 md:px-10">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1CA0AB]">
          Для лікарів
        </p>
        <h1 className="mt-4 text-4xl font-semibold">
          Станьте лікарем-партнером Yemets Academy
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Працюйте за міжнародним стандартом, передавайте кейси на експертний аналіз та
          отримуйте додаткову професійну й фінансову цінність.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 p-6">
            <h2 className="text-xl font-semibold">Що отримує лікар</h2>
            <ul className="mt-4 space-y-3 text-slate-600">
              <li>• Протокол Yemets Academy</li>
              <li>• Експертну підтримку</li>
              <li>• Підвищення якості діагностики</li>
              <li>• Професійний розвиток і сертифікацію</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 p-6">
            <h2 className="text-xl font-semibold">Як це працює</h2>
            <ul className="mt-4 space-y-3 text-slate-600">
              <li>1. Лікар проводить УЗД за протоколом</li>
              <li>2. Передає доступ до матеріалів</li>
              <li>3. Кейс проходить перевірку</li>
              <li>4. Після оплати формується експертний висновок</li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <a
            href="/submit-case"
            className="inline-flex rounded-full bg-[#1CA0AB] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Почати роботу
          </a>
        </div>
      </div>
    </main>
  );
}