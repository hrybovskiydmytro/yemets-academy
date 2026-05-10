export default function EventsPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1CA0AB]">
              Academy & Events
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
              Освітні ініціативи та професійна спільнота
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Yemets Academy розвивається не лише як сервіс експертного розгляду
              кейсів, а також як професійна платформа знань, подій та співпраці
              для лікарів.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#E8F6F7]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-xl font-semibold">Професійні форуми</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Майбутні зустрічі для обговорення складних клінічних кейсів,
                методології та підходів у пренатальній кардіології.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-xl font-semibold">Освітні матеріали</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Поступове формування бази знань для лікарів, партнерів та
                медичних центрів.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-xl font-semibold">Professional updates</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Оновлення щодо розвитку платформи, кейсів, досліджень та
                міжнародного розширення.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1CA0AB]">
              Майбутні події
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Заплановані формати
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1CA0AB]">
                Forum
              </p>
              <h3 className="mt-3 text-2xl font-semibold">
                Cardiac Case Review Forum
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Формат професійного розбору складних кейсів із залученням
                експертів у сфері фетальної кардіології.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1CA0AB]">
                Education
              </p>
              <h3 className="mt-3 text-2xl font-semibold">
                Yemets Academy Clinical Sessions
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Освітні сесії для лікарів-партнерів, присвячені якості матеріалів,
                маршрутизації та клінічному прийняттю рішень.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}