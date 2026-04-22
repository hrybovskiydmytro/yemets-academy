"use client";

import { useEffect, useState } from "react";

export default function ManageCasesPage() {
  const [items, setItems] = useState<any[]>([]);
  const [savingId, setSavingId] = useState<number | null>(null);

  const loadCases = async () => {
    const res = await fetch("/api/admin/cases");
    const data = await res.json();
    setItems(data);
  };

  useEffect(() => {
    loadCases();
  }, []);

  const updateCaseField = (id: number, field: string, value: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const saveCase = async (item: any) => {
    setSavingId(item.id);

    await fetch(`/api/admin/cases/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: item.status,
        payment_link: item.payment_link || "",
      }),
    });

    setSavingId(null);
    await loadCases();
  };

  const sendEmail = (item: any) => {
    const subject = encodeURIComponent("Yemets Academy - Case Update");
    const body = encodeURIComponent(
      `Hello,\n\nYour case status: ${item.status}\n\n` +
        `Payment link: ${item.payment_link || "not provided"}\n\n` +
        `Case ID: ${item.id}\n\nBest regards,\nYemets Academy`
    );

    window.location.href = `mailto:${item.email}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen bg-white px-6 py-16 md:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1CA0AB]">
          Manage
        </p>
        <h1 className="mt-4 text-3xl font-semibold">Cases</h1>

        <div className="mt-8 overflow-x-auto rounded-3xl border border-slate-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#F8FAFC]">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Country</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Payment Link</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="border-t border-slate-200 align-top">
                  <td className="px-4 py-3">{item.full_name}</td>
                  <td className="px-4 py-3">{item.email}</td>
                  <td className="px-4 py-3">{item.country}</td>

                  <td className="px-4 py-3">
                    <select
                      value={item.status || "new"}
                      onChange={(e) =>
                        updateCaseField(item.id, "status", e.target.value)
                      }
                      className="rounded-xl border border-slate-300 px-3 py-2"
                    >
                      <option value="new">new</option>
                      <option value="accepted">accepted</option>
                      <option value="in_progress">in progress</option>
                      <option value="rejected">rejected</option>
                      <option value="completed">completed</option>
                    </select>
                  </td>

                  <td className="px-4 py-3">
                    <input
                      type="text"
                      value={item.payment_link || ""}
                      onChange={(e) =>
                        updateCaseField(item.id, "payment_link", e.target.value)
                      }
                      placeholder="https://payment-link..."
                      className="w-[260px] rounded-xl border border-slate-300 px-3 py-2"
                    />
                  </td>

                  <td className="px-4 py-3">
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => saveCase(item)}
                        className="rounded-full bg-[#1CA0AB] px-4 py-2 text-white"
                      >
                        {savingId === item.id ? "Saving..." : "Save"}
                      </button>

                      <button
                        onClick={() => sendEmail(item)}
                        className="rounded-full border border-slate-300 px-4 py-2"
                      >
                        Send Email
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}