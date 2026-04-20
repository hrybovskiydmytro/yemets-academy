export default function SubmitCasePage() {
  return (
    <main className="min-h-screen bg-[#E8F6F7] px-6 py-16 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1CA0AB]">
            Передати кейс
          </p>
          <h1 className="mt-4 text-3xl font-semibold md:text-4xl">
            Надіслати матеріали на експертний аналіз
          </h1>
          <p className="mt-4 max-w-2xl text-slate-600">
            Передайте доступ до захищеного медичного хмарного сховища для перевірки
            якості матеріалів та подальшого експертного висновку.
          </p>

          <form className="mt-8 space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium">Хто подає кейс?</label>
              <div className="grid gap-3 md:grid-cols-2">
                <button
                  type="button"
                  className="rounded-2xl border border-[#1CA0AB] bg-[#E8F6F7] p-4 text-left"
                >
                  <div className="font-medium">Я лікар</div>
                  <div className="mt-1 text-sm text-slate-600">
                    Для приватних лікарів та клінік
                  </div>
                </button>
                <button
                  type="button"
                  className="rounded-2xl border border-slate-300 p-4 text-left"
                >
                  <div className="font-medium">Я пацієнт</div>
                  <div className="mt-1 text-sm text-slate-600">
                    Самостійна передача матеріалів
                  </div>
                </button>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Посилання на захищене медичне хмарне сховище
              </label>
              <input
                type="text"
                placeholder="DICOM / PACS / захищене медичне хмарне сховище"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-[#1CA0AB]"
              />
              <p className="mt-2 text-xs leading-6 text-slate-500">
                На першому етапі платформа працює через доступ до зовнішнього
                захищеного медичного хмарного сховища без прямого зберігання
                вихідних матеріалів на сайті.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium">Ім’я</label>
                <input
                  type="text"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-[#1CA0AB]"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-[#1CA0AB]"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium">Телефон</label>
                <input
                  type="text"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-[#1CA0AB]"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Клініка / центр</label>
                <input
                  type="text"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-[#1CA0AB]"
                />
              </div>
            </div>

            <div className="space-y-3 rounded-2xl border border-slate-200 p-5">
              <label className="flex gap-3 text-sm text-slate-700">
                <input type="checkbox" />
                <span>Я погоджуюсь з умовами оферти</span>
              </label>
              <label className="flex gap-3 text-sm text-slate-700">
                <input type="checkbox" />
                <span>Я даю згоду на обробку персональних даних</span>
              </label>
              <label className="flex gap-3 text-sm text-slate-700">
                <input type="checkbox" />
                <span>
                  Я даю згоду на використання деперсоналізованих даних у наукових та навчальних цілях
                </span>
              </label>
            </div>

            <a
              href="/case-status"
              className="inline-flex rounded-full bg-[#1CA0AB] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Надіслати кейс
            </a>
          </form>
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl bg-[#0B1F24] p-8 text-white shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1CA0AB]">
              Workflow
            </p>
            <h2 className="mt-4 text-2xl font-semibold">
              Медичний маршрут обробки кейсу
            </h2>

            <div className="mt-6 space-y-5">
              <div>
                <p className="text-sm font-semibold text-[#1CA0AB]">01</p>
                <p className="mt-1 text-white/80">
                  Передача доступу до захищеного медичного хмарного сховища
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1CA0AB]">02</p>
                <p className="mt-1 text-white/80">
                  Первинна перевірка повноти та якості матеріалів
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1CA0AB]">03</p>
                <p className="mt-1 text-white/80">
                  Після прийняття кейсу відкривається оплата
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1CA0AB]">04</p>
                <p className="mt-1 text-white/80">
                  Експертний висновок передається у погоджений канал взаємодії
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1CA0AB]">
              Важливо
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
              <li>• Платформа орієнтована насамперед на приватних лікарів і клініки.</li>
              <li>• Оплата відбувається лише після прийняття кейсу до розгляду.</li>
              <li>• Деперсоналізовані матеріали можуть формувати клінічний датасет.</li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}