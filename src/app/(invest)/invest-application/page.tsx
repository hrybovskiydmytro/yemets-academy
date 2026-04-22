"use client";

import { useState } from "react";

export default function InvestApplicationPage() {
  const [form, setForm] = useState({
    full_name: "",
    company: "",
    country: "",
    email: "",
    phone: "",
    interest_type: "investor",
    budget: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/submit-investor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setSuccess("Investor inquiry submitted");
      setForm({
        full_name: "",
        company: "",
        country: "",
        email: "",
        phone: "",
        interest_type: "investor",
        budget: "",
        message: "",
      });
    }
  };

  return (
    <main className="min-h-screen bg-white px-6 py-16 md:px-10">
      <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1CA0AB]">
          Investor Inquiry
        </p>
        <h1 className="mt-4 text-3xl font-semibold">Request investment information</h1>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <input className="w-full rounded-2xl border border-slate-300 px-4 py-3" placeholder="Full Name" value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })} />
          <input className="w-full rounded-2xl border border-slate-300 px-4 py-3" placeholder="Company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
          <input className="w-full rounded-2xl border border-slate-300 px-4 py-3" placeholder="Country" value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} />
          <input className="w-full rounded-2xl border border-slate-300 px-4 py-3" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <input className="w-full rounded-2xl border border-slate-300 px-4 py-3" placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          <input className="w-full rounded-2xl border border-slate-300 px-4 py-3" placeholder="Indicative investment interest" value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} />
          <textarea rows={4} className="w-full rounded-2xl border border-slate-300 px-4 py-3" placeholder="Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />

          {success && (
            <div className="rounded-2xl bg-green-50 px-4 py-3 text-sm text-green-700">
              {success}
            </div>
          )}

          <button type="submit" className="rounded-full bg-[#1CA0AB] px-6 py-3 text-sm font-medium text-white">
            Request Information
          </button>
        </form>
      </div>
    </main>
  );
}