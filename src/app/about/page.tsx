import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[#0B1F24]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1CA0AB]">
            Про платформу
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
            Yemets Academy — міжнародна медична платформа експертної діагностики
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Платформа створена навколо експертизи професора Іллі Ємця у сфері
            діагностики серця майбутньої дитини та побудована як міжнародна
            система, що поєднує клінічну експертизу, стандартизацію,
            маршрутизацію та формування клінічного датасету.
          </p>
        </div>
      </section>

      <section className="bg-[#E8F6F7]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1CA0AB]">
              Місія
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Підвищити якість ранньої діагностики серця майбутньої дитини
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Мета Yemets Academy — зробити експертну думку доступною ще до
              народження дитини, забезпечити правильну маршрутизацію,
              допомогти лікарям працювати в єдиному стандарті та створити
              фундамент для майбутніх AI-рішень.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1CA0AB]">
              Команда
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Люди, які формують стандарт
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white transition hover:shadow-lg">
              <div className="h-64 w-full">
                <img
                  src="/team/yemets.jpg"
                  alt="Професор Ілля Ємець"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase text-[#1CA0AB]">
                  Засновник
                </p>
                <h3 className="mt-2 text-xl font-semibold">Професор Ілля Ємець</h3>
                <p className="mt-3 text-sm text-slate-600">
                  Кардіохірург світового рівня з понад 30-річним досвідом.
                  Почесний член Американського товариства дитячих кардіохірургів.
                  Київ, Україна.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white transition hover:shadow-lg">
              <div className="h-64 w-full">
                <img
                  src="/team/kruk.jpg"
                  alt="В’ячеслав Крук"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase text-[#1CA0AB]">
                  Засновник
                </p>
                <h3 className="mt-2 text-xl font-semibold">В’ячеслав Крук</h3>
                <p className="mt-3 text-sm text-slate-600">
                  Засновник і президент медичного холдингу «Інтосана».
                  Відень, Австрія.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white transition hover:shadow-lg">
              <div className="h-64 w-full">
                <img
                  src="/team/kogan.jpg"
                  alt="Тімур Коган"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase text-[#1CA0AB]">
                  Інвестиції
                </p>
                <h3 className="mt-2 text-xl font-semibold">Тімур Коган</h3>
                <p className="mt-3 text-sm text-slate-600">
                  Засновник та керуючий партнер «Capital 8X».
                  Нью-Йорк, США.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white transition hover:shadow-lg">
              <div className="h-64 w-full">
                <img
                  src="/team/kurkevych.jpg"
                  alt="Андрій Куркевич"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase text-[#1CA0AB]">
                  Наука
                </p>
                <h3 className="mt-2 text-xl font-semibold">Андрій Куркевич</h3>
                <p className="mt-3 text-sm text-slate-600">
                  Заступник директора з наукової роботи Українського дитячого
                  кардіологічного центру. Німеччина.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white transition hover:shadow-lg">
              <div className="h-64 w-full">
                <img
                  src="/team/hovseev.jpg"
                  alt="Дмитро Гавсієв"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase text-[#1CA0AB]">
                  Клініка
                </p>
                <h3 className="mt-2 text-xl font-semibold">Дмитро Гавсієв</h3>
                <p className="mt-3 text-sm text-slate-600">
                  Директор Перинатального центру міста Києва, професор.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white transition hover:shadow-lg">
              <div className="h-64 w-full">
                <img
                  src="/team/stolyarik.jpg"
                  alt="Алекс Столярик"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase text-[#1CA0AB]">
                  AI
                </p>
                <h3 className="mt-2 text-xl font-semibold">Алекс Столярик</h3>
                <p className="mt-3 text-sm text-slate-600">
                  Експерт Stanford AI Robotics & Education.
                  Сан-Франциско, США.
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-3xl text-center">
            <p className="text-xl font-medium text-slate-800">
              Разом вони змінюють не просто медицину — вони змінюють старт життя.
            </p>
            <p className="mt-4 text-lg text-slate-600">
              Сьогодні — це врятовані життя. Завтра — це майбутні генії.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Дані, які створюють майбутнє діагностики
          </h2>
          <p className="mt-6 max-w-3xl text-lg text-slate-600">
            Кожен кейс формує клінічний датасет і закладає основу для AI-рішень
            нового покоління.
          </p>

          <div className="mt-10">
            <Link
              href="/submit-case"
              className="rounded-full bg-[#1CA0AB] px-6 py-3 text-white"
            >
              Передати кейс
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}