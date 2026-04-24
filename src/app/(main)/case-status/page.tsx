"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

function CaseStatusContent() {
  const searchParams = useSearchParams();
  const caseId = searchParams.get("caseId");

  const [item, setItem] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!caseId) {
      setLoading(false);
      return;
    }

    fetch(`/api/case-status/${caseId}`)
      .then((r) => r.json())
      .then((data) => {
        setItem(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [caseId]);

  return (
    <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1CA0AB]">
        Case Status
      </p>

      <h1 className="mt-4 text-3xl font-semibold">Статус кейсу</h1>

      {loading ? (
        <p className="mt-6 text-slate-600">Завантаження...</p>
      ) : item && !item.error ? (
        <div className="mt-8 space-y-4">
          <div className="rounded-2xl bg-[#E8F6F7] p-4">
            <p className="text-sm text-slate-500">Case ID</p>
            <p className="mt-1 font-medium">{item.id}</p>
          </div>

          <div className="rounded-2xl bg-[#E8F6F7] p-4">
            <p className="text-sm text-slate-500">Статус</p>
            <p className="mt-1 font-medium">{item.status}</p>
          </div>

          {item.payment_link && (
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-sm text-slate-500">Оплата</p>
              <a
                href={item.payment_link}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block rounded-full bg-[#1CA0AB] px-5 py-2.5 text-sm font-medium text-white"
              >
                Перейти до оплати
              </a>
            </div>
          )}

          <div className="rounded-2xl border border-slate-200 p-4 text-sm text-slate-600">
            Якщо статус або оплата не оновилися автоматично, використайте
            індивідуальне посилання з email.
          </div>
        </div>
      ) : (
        <p className="mt-6 text-red-600">Кейс не знайдено</p>
      )}
    </div>
  );
}

export default function CaseStatusPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] px-6 py-16 md:px-10">
      <Suspense fallback={<div className="mx-auto max-w-3xl">Завантаження...</div>}>
        <CaseStatusContent />
      </Suspense>
    </main>
  );
}