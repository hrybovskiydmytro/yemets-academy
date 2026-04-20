export default function CaseStatusPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 md:px-10">
      <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1CA0AB]">
          Статус кейсу
        </p>
        <h1 className="mt-4 text-3xl font-semibold">Кейс отримано та перевірено</h1>
        <p className="mt-4 text-slate-600">
          Матеріали прийняті до розгляду. Наступний крок — оплата експертного аналізу.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-[#E8F6F7] p-5">
            <p className="text-sm text-slate-500">Статус</p>
            <p className="mt-2 font-semibold">Прийнято</p>
          </div>
          <div className="rounded-2xl bg-[#E8F6F7] p-5">
            <p className="text-sm text-slate-500">Термін</p>
            <p className="mt-2 font-semibold">24–48 годин</p>
          </div>
          <div className="rounded-2xl bg-[#E8F6F7] p-5">
            <p className="text-sm text-slate-500">Вартість</p>
            <p className="mt-2 font-semibold">$120</p>
          </div>
        </div>

        <div className="mt-8">
          <a
            href="/payment"
            className="inline-flex rounded-full bg-[#1CA0AB] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Перейти до оплати
          </a>
        </div>
      </div>
    </main>
  );
}