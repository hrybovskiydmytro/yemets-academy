"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const BASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export default function CaseStatusPage() {
  const searchParams = useSearchParams();
  const caseId = searchParams.get("caseId");

  const [item, setItem] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCase = async () => {
      if (!caseId) {
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(
          `${BASE_URL}/rest/v1/cases?id=eq.${caseId}&select=*`,
          {
            headers: {
              apikey: ANON_KEY,
              Authorization: `Bearer ${ANON_KEY}`,
              "Content-Type": "application/json",
            },
            cache: "no-store",
          }
        );

        const data = await res.json();

        if (Array.isArray(data) && data.length > 0) {
          setItem(data[0]);
        } else {
          setItem(null);
        }
      } catch {
        setItem(null);
      } finally {
        setLoading(false);
      }
    };

    loadCase();
  }, [caseId]);

  return (
    <main className="min-h-screen bg-[#F8FAFC] px-6 py-16 md:px-10">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1CA0AB]">
          Статус кейсу
        </p>

        <h1 className="mt-4 text-3xl font-semibold">Перевірка статусу</h1>

        {loading ? (
          <p className="mt-6 text-slate-600">Завантаження...</p>
        ) : item ? (
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
              Якщо статус не оновився автоматично, використайте посилання з email
              або зв’яжіться з командою платформи.
            </div>
          </div>
        ) : (
          <p className="mt-6 text-red-600">Кейс не знайдено</p>
        )}
      </div>
    </main>
  );
}