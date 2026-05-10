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

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await fetch("/api/submit-investor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Request failed");
      }

      setSuccess("Your inquiry has been submitted successfully.");
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
    } catch (err: any) {
      setError(err.message || "Submission failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <section className="bg-[#0B1F24]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1CA0AB]">
              Investor Inquiry
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-6xl">
              Explore investment opportunities with Yemets Academy
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
              Yemets Academy is developing an expert-led prenatal cardiology
              platform with a specialized telemedicine model, clinical case
              routing, and future AI-assisted diagnostic infrastructure.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-[0.9fr_1.1fr] md:px-10">
          <aside className="space-y-6">
            <div className="rounded-3xl bg-[#E8F6F7] p-8">
              <h2 className="text-2xl font-semibold">Why this matters</h2>

              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-sm font-semibold text-[#1CA0AB]">01</p>
                  <p className="mt-1 text-sm leading-7 text-slate-700">
                    Specialized prenatal cardiology is a high-trust, expert-driven
                    field with strong need for international second opinion and
                    case routing infrastructure.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#1CA0AB]">02</p>
                  <p className="mt-1 text-sm leading-7 text-slate-700">
                    The platform starts with manual expert processing and builds
                    toward structured clinical datasets and future AI-assisted
                    workflows.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#1CA0AB]">03</p>
                  <p className="mt-1 text-sm leading-7 text-slate-700">
                    The model separates operational case flow from investor and
                    early partner acquisition to keep each audience focused.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold">What we are building</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <li>- Expert-led prenatal cardiology review flow</li>
                <li>- Secure medical cloud submission process</li>
                <li>- Case status and payment workflow</li>
                <li>- Partner doctor network</li>
                <li>- Future clinical dataset and AI-ready infrastructure</li>
              </ul>
            </div>
          </aside>

          <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1CA0AB]">
              Request Information
            </p>

            <h2 className="mt-4 text-3xl font-semibold">
              Submit investor details
            </h2>

            <p className="mt-4 text-slate-600">
              Leave your contact information and investment interest. The team
              will follow up with the relevant materials and next steps.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <input
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-[#1CA0AB]"
                placeholder="Full Name"
                value={form.full_name}
                onChange={(e) => setForm({ ...form, full_name: e.target.value })}
                required
              />

              <input
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-[#1CA0AB]"
                placeholder="Company / Fund"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
              />

              <input
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-[#1CA0AB]"
                placeholder="Country"
                value={form.country}
                onChange={(e) => setForm({ ...form, country: e.target.value })}
              />

              <input
                type="email"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-[#1CA0AB]"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />

              <input
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-[#1CA0AB]"
                placeholder="Phone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />

              <input
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-[#1CA0AB]"
                placeholder="Indicative investment interest"
                value={form.budget}
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
              />

              <textarea
                rows={4}
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-[#1CA0AB]"
                placeholder="Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />

              {success && (
                <div className="rounded-2xl bg-green-50 px-4 py-3 text-sm text-green-700">
                  {success}
                </div>
              )}

              {error && (
                <div className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-[#1CA0AB] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Request Investor Information"}
              </button>
            </form>
          </section>
        </div>
      </section>
    </main>
  );
}