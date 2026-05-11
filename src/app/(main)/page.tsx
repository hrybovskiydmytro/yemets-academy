import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative min-h-[760px] overflow-hidden bg-[#062B2F]">
        <Image
          src="/hero-fetus.jpg"
          alt="Експертна діагностика серця майбутньої дитини"
          fill
          priority
          className="object-cover opacity-90"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#062B2F]/95 via-[#062B2F]/65 to-transparent" />

        <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-end px-6 pb-20 md:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#1CA0AB]">
              YEMETS ACADEMY
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-tight text-white md:text-6xl">
              Експертна діагностика серця майбутньої дитини
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-9 text-white/85">
              Народжуйте з упевненістю у здоровʼї серця вашої майбутньої дитини.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">
              Міжнародний експертний стандарт пренатальної кардіодіагностики за
              методологією професора Іллі Ємця.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/submit-case"
                className="rounded-full bg-[#1CA0AB] px-7 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Передати кейс
              </Link>

              <Link
                href="/doctor-application"
                className="rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                Стати лікарем-партнером
              </Link>

              <Link
                href="/about"
                className="rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                Про методологію
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-[#E8F6F7] p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1CA0AB]">
                01
              </p>
              <h3 className="mt-4 text-xl font-semibold">Передайте кейс</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Лікар або майбутня мама передає матеріали обстеження через
                захищене медичне хмарне сховище.
              </p>
            </div>

            <div className="rounded-3xl bg-[#E8F6F7] p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1CA0AB]">
                02
              </p>
              <h3 className="mt-4 text-xl font-semibold">Отримайте експертну оцінку</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Команда проводить фаховий аналіз матеріалів за методологією
                YEMETS ACADEMY.
              </p>
            </div>

            <div className="rounded-3xl bg-[#E8F6F7] p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1CA0AB]">
                03
              </p>
              <h3 className="mt-4 text-xl font-semibold">Майте зрозумілий маршрут</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Ви отримуєте висновок, пояснення результату та подальший план дій.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[0.9fr_1.1fr] md:px-10 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1CA0AB]">
              Спокій та ясність
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Ми допомагаємо родині не залишатися наодинці зі складним питанням
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Наша задача — не створювати страх, а дати більше ясності, експертну
              підтримку та зрозумілий наступний крок у ситуації, коли потрібна
              фахова оцінка серця майбутньої дитини.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-semibold">Що ви отримуєте</h3>

            <div className="mt-6 space-y-4">
              {[
                "Письмовий експертний висновок",
                "Пояснення, що означають результати саме у вашій ситуації",
                "Рекомендації щодо наступних медичних кроків",
                "Можливість подальшої консультації за потреби",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-7 text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1CA0AB]">
              Коли варто звернутися
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Для складних або неочевидних клінічних ситуацій
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Платформа створена для випадків, де важлива додаткова експертна
              оцінка, підтвердження діагнозу або розуміння подальшого маршруту.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              "Підозра на вроджену ваду серця",
              "Складний або неясний результат УЗД",
              "Порушення ритму серця плода",
              "Потреба у другій експертній думці",
              "Підготовка до пологів з урахуванням ризиків",
              "Планування подальшої клінічної тактики",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-5 h-10 w-10 rounded-full bg-[#E8F6F7]" />
                <p className="text-base font-medium leading-7">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#E8F6F7]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1fr_0.95fr] md:px-10 md:items-center">
          <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1CA0AB]">
              Методологія професора Ємця
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Авторська методологія, сформована роками клінічної практики
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              YEMETS ACADEMY поєднує пренатальну діагностику, кардіохірургію
              новонароджених та клінічну маршрутизацію в єдиний підхід до допомоги
              майбутній дитині.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-[#F8FAFC] p-5">
                <p className="text-2xl font-semibold">30+ років</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  клінічного досвіду
                </p>
              </div>

              <div className="rounded-2xl bg-[#F8FAFC] p-5">
                <p className="text-2xl font-semibold">10 000+</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  кардіохірургічних операцій
                </p>
              </div>

              <div className="rounded-2xl bg-[#F8FAFC] p-5">
                <p className="text-2xl font-semibold">CHSS</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  почесне членство у професійній спільноті
                </p>
              </div>

              <div className="rounded-2xl bg-[#F8FAFC] p-5">
                <p className="text-2xl font-semibold">300+</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  пацієнтів у межах програми
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="relative h-[520px] overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src="/team/yemets.jpg"
                alt="Професор Ілля Ємець"
                fill
                className="object-contain p-4"
              />
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-600">
              Професор Ілля Ємець — автор методології, що поєднує кардіохірургію
              та акушерство у клінічному маршруті допомоги дитині.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1CA0AB]">
              Як це працює
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Зрозумілий шлях від матеріалів до експертного висновку
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {[
              ["01", "Передача кейсу", "Ви передаєте матеріали через захищене сховище."],
              ["02", "Перевірка", "Команда перевіряє повноту та якість матеріалів."],
              ["03", "Експертний аналіз", "Фахівці аналізують кейс за методологією YEMETS ACADEMY."],
              ["04", "Висновок", "Ви отримуєте пояснення результату та наступні кроки."],
            ].map(([num, title, text]) => (
              <div key={num} className="rounded-3xl border border-slate-200 p-6">
                <p className="text-sm font-semibold text-[#1CA0AB]">{num}</p>
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0B1F24]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[0.9fr_1.1fr] md:px-10 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1CA0AB]">
              Ваша команда експертів
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl">
              Під клінічним керівництвом професора Іллі Ємця
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/70">
              Платформа розвивається за участі фахівців у сфері пренатальної
              діагностики, фетальної медицини та дитячої кардіології.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-flex rounded-full bg-[#1CA0AB] px-6 py-3 text-sm font-semibold text-white"
            >
              Детальніше про команду
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-6">
              <div className="relative h-72 overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src="/team/yemets.jpg"
                  alt="Професор Ілля Ємець"
                  fill
                  className="object-contain p-3"
                />
              </div>
              <h3 className="mt-5 text-xl font-semibold">Професор Ілля Ємець</h3>
              <p className="mt-2 text-sm text-[#1CA0AB]">
                Методологія та клінічне керівництво
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6">
              <div className="relative h-72 overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src="/team/kurkevych.jpg"
                  alt="Андрій Куркевич"
                  fill
                  className="object-contain p-3"
                />
              </div>
              <h3 className="mt-5 text-xl font-semibold">Андрій Куркевич</h3>
              <p className="mt-2 text-sm text-[#1CA0AB]">
                Пренатальна діагностика
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
            <div className="grid gap-10 md:grid-cols-[1fr_0.8fr] md:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1CA0AB]">
                  Наступний крок
                </p>

                <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
                  Передайте кейс для експертного розгляду
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Після подачі команда перевірить матеріали, визначить статус
                  заявки та відкриє наступний крок.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <Link
                  href="/submit-case"
                  className="rounded-full bg-[#1CA0AB] px-7 py-4 text-center text-sm font-semibold text-white"
                >
                  Передати кейс
                </Link>

                <Link
                  href="/doctor-application"
                  className="rounded-full border border-slate-300 bg-white px-7 py-4 text-center text-sm font-semibold text-slate-900"
                >
                  Стати лікарем-партнером
                </Link>

                <Link
                  href="/about"
                  className="rounded-full border border-slate-300 bg-white px-7 py-4 text-center text-sm font-semibold text-slate-900"
                >
                  Дізнатися більше
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}