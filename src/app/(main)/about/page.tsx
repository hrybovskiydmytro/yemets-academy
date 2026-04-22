import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900">

      {/* HERO */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1CA0AB]">
              Про платформу
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
              Експертна пренатальна кардіодіагностика нового рівня
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Yemets Academy — це платформа, яка об’єднує клінічну експертизу,
              структурований розбір кейсів та сучасний підхід до прийняття
              медичних рішень ще до народження дитини.
            </p>
          </div>
        </div>
      </section>

      {/* VALUE */}
      <section className="bg-[#E8F6F7]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold">Експертний аналіз</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Кожен кейс проходить перевірку спеціалістами з досвідом роботи
                у складних клінічних випадках.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold">Маршрутизація пацієнта</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Формування чіткої стратегії подальших дій та рекомендацій для лікаря або пацієнта.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold">Основа для масштабування</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Архітектура платформи дозволяє розвивати клінічний датасет та інтегрувати AI у майбутньому.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1CA0AB]">
              Клінічне лідерство
            </p>

            <h2 className="mt-4 text-4xl font-semibold">
              Люди, які стоять за експертизою
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              Платформа базується на реальному клінічному досвіді та авторитеті
              спеціалістів у сфері дитячої кардіохірургії та пренатальної діагностики.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">

            {/* Yemets */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="relative w-full overflow-hidden rounded-2xl bg-slate-100">
  <Image
    src="/team/yemets.jpg"
    alt="Ємець"
    width={600}
    height={800}
    className="h-auto w-full object-contain"
  />
</div>

              <h3 className="mt-6 text-2xl font-semibold">
                Професор Ілля Ємець
              </h3>

              <p className="text-sm text-[#1CA0AB] mt-1">
                Засновник
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Кардіохірург світового рівня з понад 30-річним досвідом.
                Засновник Українського дитячого кардіологічного центру.
                Один із провідних експертів у сфері неонатальної та дитячої кардіохірургії.
              </p>
            </div>

            {/* Kurkevych */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="relative w-full overflow-hidden rounded-2xl bg-slate-100">
  <Image
    src="/team/kurkevych.jpg"
    alt="Куркевич"
    width={600}
    height={800}
    className="h-auto w-full object-contain"
  />
</div>
              <h3 className="mt-6 text-2xl font-semibold">
                Андрій Куркевич
              </h3>

              <p className="text-sm text-[#1CA0AB] mt-1">
                Клінічний експерт
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Спеціаліст у сфері пренатальної діагностики та фетальної медицини.
                Займається складними клінічними кейсами та експертною оцінкою
                ще до народження дитини.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* MVP */}
      <section className="bg-[#0B1F24]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-semibold text-white">
              Поточна версія — робочий MVP
            </h2>

            <p className="mt-6 text-lg text-white/70">
              Система вже дозволяє приймати кейси, проводити первинну валідацію,
              формувати експертні висновки та вибудовувати клінічну маршрутизацію.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}