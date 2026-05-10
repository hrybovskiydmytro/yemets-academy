import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-[#F8FAFC]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1.05fr_0.95fr] md:px-10 md:py-28">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1CA0AB]">
              Yemets Academy
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
              Онлайн-платформа експертної пренатальної кардіодіагностики
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Ви передаєте медичний кейс, команда експертів перевіряє матеріали,
              проводить фаховий аналіз і допомагає зрозуміти подальший клінічний
              маршрут ще до народження дитини.
            </p>

            <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">
                Простими словами:
              </p>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl bg-[#E8F6F7] p-4 text-sm">
                  1. Ви передаєте кейс
                </div>
                <div className="rounded-2xl bg-[#E8F6F7] p-4 text-sm">
                  2. Експерти аналізують
                </div>
                <div className="rounded-2xl bg-[#E8F6F7] p-4 text-sm">
                  3. Ви отримуєте висновок
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/submit-case"
                className="rounded-full bg-[#1CA0AB] px-7 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Передати кейс
              </Link>

              <Link
                href="/doctor-application"
                className="rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 transition hover:border-[#1CA0AB]"
              >
                Стати лікарем-партнером
              </Link>

              <Link
                href="/why-important"
                className="rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 transition hover:border-[#1CA0AB]"
              >
                Чому це важливо
              </Link>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="relative h-[430px] overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src="/team/yemets.jpg"
                alt="Професор Ілля Ємець"
                fill
                priority
                className="object-contain p-4"
              />
            </div>
            <p className="mt-5 text-sm leading-7 text-slate-600">
              Платформа розвивається під клінічним керівництвом професора Іллі
              Ємця та експертів у сфері пренатальної діагностики.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1CA0AB]">
              Що ми робимо
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Допомагаємо отримати експертну оцінку складного кардіологічного кейсу
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 p-8">
              <h3 className="text-xl font-semibold">Експертна інтерпретація</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Аналіз матеріалів обстеження профільними спеціалістами, які мають
                досвід роботи зі складними пренатальними кейсами.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-8">
              <h3 className="text-xl font-semibold">Клінічна ясність</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Допомога у розумінні діагнозу, ризиків, наступних кроків та
                можливого маршруту медичної допомоги.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-8">
              <h3 className="text-xl font-semibold">Другий експертний погляд</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Можливість отримати незалежну фахову оцінку без фізичного візиту
                до іншої країни чи центру.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#E8F6F7]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1CA0AB]">
              З якими ситуаціями працюємо
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Фокус на складних випадках пренатальної кардіології
            </h2>
            <p className="mt-5 text-slate-600">
              Остаточний перелік патологій буде погоджено з медичною командою.
              На сайті цей блок має показувати експертність простими словами.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              "Підозра на вроджену ваду серця",
              "Складний або неясний результат УЗД",
              "Потреба у другій експертній думці",
              "Планування подальшої клінічної тактики",
            ].map((item) => (
              <div key={item} className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="text-sm font-medium leading-7">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[0.9fr_1.1fr] md:px-10 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1CA0AB]">
              Ваша команда експертів
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Під керівництвом професора Іллі Ємця
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Кейс розглядається в межах експертної медичної логіки, сформованої
              навколо досвіду професора Іллі Ємця та спеціалістів з пренатальної
              діагностики.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-flex rounded-full bg-[#1CA0AB] px-6 py-3 text-sm font-semibold text-white"
            >
              Детальніше про платформу
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="relative h-72 overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src="/team/yemets.jpg"
                  alt="Професор Ілля Ємець"
                  fill
                  className="object-contain p-3"
                />
              </div>
              <h3 className="mt-5 text-xl font-semibold">Професор Ілля Ємець</h3>
              <p className="mt-2 text-sm text-[#1CA0AB]">Клінічне керівництво</p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="relative h-72 overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src="/team/kurkevych.jpg"
                  alt="Андрій Куркевич"
                  fill
                  className="object-contain p-3"
                />
              </div>
              <h3 className="mt-5 text-xl font-semibold">Андрій Куркевич</h3>
              <p className="mt-2 text-sm text-[#1CA0AB]">Пренатальна діагностика</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0B1F24]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Передайте кейс для експертного розгляду
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/70">
              Після подачі кейсу команда перевірить матеріали, визначить статус
              заявки та відкриє наступний крок.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/submit-case"
                className="rounded-full bg-[#1CA0AB] px-6 py-3 text-sm font-semibold text-white"
              >
                Передати кейс
              </Link>

              <Link
                href="/doctor-application"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white"
              >
                Стати партнером
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}