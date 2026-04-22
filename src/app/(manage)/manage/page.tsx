import Link from "next/link";

export default function ManagePage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] px-6 py-16 md:px-10">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1CA0AB]">
          Internal Panel
        </p>
        <h1 className="mt-4 text-3xl font-semibold">Manage</h1>
        <p className="mt-4 text-slate-600">
          Внутрішня панель для роботи із заявками, партнерами та investor leads.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Link href="/manage/cases" className="rounded-3xl bg-white p-6 shadow-sm transition hover:shadow-md">
            <h2 className="text-xl font-semibold">Cases</h2>
            <p className="mt-2 text-sm text-slate-600">
              Пацієнти та подані кейси
            </p>
          </Link>

          <Link href="/manage/doctors" className="rounded-3xl bg-white p-6 shadow-sm transition hover:shadow-md">
            <h2 className="text-xl font-semibold">Doctors</h2>
            <p className="mt-2 text-sm text-slate-600">
              Партнерські заявки лікарів
            </p>
          </Link>

          <Link href="/manage/investors" className="rounded-3xl bg-white p-6 shadow-sm transition hover:shadow-md">
            <h2 className="text-xl font-semibold">Investors</h2>
            <p className="mt-2 text-sm text-slate-600">
              Investor inquiries та early access
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}