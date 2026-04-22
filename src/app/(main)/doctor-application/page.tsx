"use client";

import { useState } from "react";

export default function DoctorApplicationPage() {
  const [form, setForm] = useState({
    full_name: "",
    clinic: "",
    specialty: "",
    country: "",
    email: "",
    phone: "",
    monthly_volume: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/submit-doctor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setSuccess("Заявка партнера успішно надіслана");
      setForm({
        full_name: "",
        clinic: "",
        specialty: "",
        country: "",
        email: "",
        phone: "",
        monthly_volume: "",
        message: "",
      });
    }
  };

  return (
    <main className="min-h-screen bg-white px-6 py-16 md:px-10">
      <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1CA0AB]">
          For Doctors
        </p>
        <h1 className="mt-4 text-3xl font-semibold">Стати лікарем-партнером</h1>
        <p className="mt-4 text-slate-600">
          Залиште заявку для підключення до партнерської мережі в Україні.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <input className="w-full rounded-2xl border border-slate-300 px-4 py-3" placeholder="Повне ім’я" value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })} />
          <input className="w-full rounded-2xl border border-slate-300 px-4 py-3" placeholder="Клініка / медичний центр" value={form.clinic} onChange={(e) => setForm({ ...form, clinic: e.target.value })} />
          <input className="w-full rounded-2xl border border-slate-300 px-4 py-3" placeholder="Спеціалізація" value={form.specialty} onChange={(e) => setForm({ ...form, specialty: e.target.value })} />
          <input className="w-full rounded-2xl border border-slate-300 px-4 py-3" placeholder="Країна" value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} />
          <input className="w-full rounded-2xl border border-slate-300 px-4 py-3" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <input className="w-full rounded-2xl border border-slate-300 px-4 py-3" placeholder="Телефон" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          <input className="w-full rounded-2xl border border-slate-300 px-4 py-3" placeholder="Кількість кейсів на місяць" value={form.monthly_volume} onChange={(e) => setForm({ ...form, monthly_volume: e.target.value })} />
          <textarea rows={4} className="w-full rounded-2xl border border-slate-300 px-4 py-3" placeholder="Коментар" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />

          {success && (
            <div className="rounded-2xl bg-green-50 px-4 py-3 text-sm text-green-700">
              {success}
            </div>
          )}

          <button type="submit" className="rounded-full bg-[#1CA0AB] px-6 py-3 text-sm font-medium text-white">
            Стати партнером
          </button>
        </form>
      </div>
    </main>
  );
}