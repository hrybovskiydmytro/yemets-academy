import Link from "next/link";

export default function CaseRevisionPage() {
  return (
    <main className="min-h-screen bg-[#E8F6F7] px-6 py-16 md:px-10">
      <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E83B3E]">
          Статус кейсу
        </p>

        <h1 className="mt-4 text-3xl font-semibold md:text-4xl">
          Матеріали потребують доопрацювання
        </h1>

        <p className="mt-4 max-w-2xl text-slate-600">
          Первинна перевірка показала, що кейс поки не може бути прийнятий до
          розгляду. Будь ласка, оновіть матеріали згідно з коментарями нижче.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-[#E83B3E]/20 bg-[#FFF5F5] p-6">
            <h2 className="text-lg font-semibold text-slate-900">
              Причини повернення
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
              <li>• Відсутня одна з обов’язкових проекцій</li>
              <li>• Недостатня якість відеоматеріалу</li>
              <li>• Неповний пакет скринів для оцінки</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-lg font-semibold text-slate-900">
              Наступні дії
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
              <li>1. Оновити матеріали у медичному хмарному сховищі</li>
              <li>2. Перевірити доступ до сховища</li>
              <li>3. Повторно надіслати кейс через платформу</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-slate-200 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1CA0AB]">
            Коментар адміністратора
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Будь ласка, додайте відсутню проекцію та оновіть відео у захищеному
            медичному хмарному сховищі. Після цього кейс можна повторно
            відправити на перевірку.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/submit-case"
            className="rounded-full bg-[#1CA0AB] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Оновити та надіслати повторно
          </Link>

          <Link
            href="/case-status"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-800 transition hover:border-slate-400"
          >
            Переглянути інший статус
          </Link>
        </div>
      </div>
    </main>
  );
}