"use client";

import { useEffect, useState } from "react";

export default function ManageDoctorsPage() {
  const [items, setItems] = useState<any[]>([]);
  const [savingId, setSavingId] = useState<number | null>(null);

  const loadDoctors = async () => {
    const res = await fetch("/api/admin/doctors");
    const data = await res.json();
    setItems(data);
  };

  useEffect(() => {
    loadDoctors();
  }, []);

  const updateDoctorField = (id: number, field: string, value: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const saveDoctor = async (item: any) => {
    setSavingId(item.id);

    await fetch(`/api/admin/doctors/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: item.status,
      }),
    });

    setSavingId(null);
    await loadDoctors();
  };

  const sendEmail = (item: any) => {
    const subject = encodeURIComponent("Yemets Academy - Partner Application");
    const body = encodeURIComponent(
      `Hello,\n\n` +
        `Thank you for your interest in becoming a partner.\n\n` +
        `Current status: ${item.status}\n\n` +
        `We will contact you with the next steps.\n\n` +
        `Best regards,\nYemets Academy`
    );

    window.location.href = `mailto:${item.email}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen bg-white px-6 py-16 md:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1CA0AB]">
          Manage
        </p>
        <h1 className="mt-4 text-3xl font-semibold">Doctors</h1>

        <div className="mt-8 overflow-x-auto rounded-3xl border border-slate-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#F8FAFC]">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Clinic</th>
                <th className="px-4 py-3">Specialty</th>
                <th className="px-4 py-3">Country</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="border-t border-slate-200 align-top">
                  <td className="px-4 py-3">{item.full_name}</td>
                  <td className="px-4 py-3">{item.clinic}</td>
                  <td className="px-4 py-3">{item.specialty}</td>
                  <td className="px-4 py-3">{item.country}</td>
                  <td className="px-4 py-3">{item.email}</td>

                  <td className="px-4 py-3">
                    <select
                      value={item.status || "new"}
                      onChange={(e) =>
                        updateDoctorField(item.id, "status", e.target.value)
                      }
                      className="rounded-xl border border-slate-300 px-3 py-2"
                    >
                      <option value="new">new</option>
                      <option value="contacted">contacted</option>
                      <option value="qualified">qualified</option>
                      <option value="rejected">rejected</option>
                      <option value="partnered">partnered</option>
                    </select>
                  </td>

                  <td className="px-4 py-3">
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => saveDoctor(item)}
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