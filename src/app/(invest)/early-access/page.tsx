"use client";

import { useState } from "react";

export default function EarlyAccessPage() {
  const [form, setForm] = useState({
    full_name: "",
    company: "",
    country: "",
    email: "",
    phone: "",
    interest_type: "early_partner",
    budget: "100",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const PAYMENT_LINK = "https://stripe.com/pay/cs_test_a1b2c3d4e5f6g7h8i9j0";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
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

      window.location.href = PAYMENT_LINK;
    } catch (err: any) {
      setError(err.message || "Submission failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] px-6 py-16 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-[1fr_0.9fr]">
          <section className="rounded-3xl bg-[#0B1F24] p-8 text-white md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1CA0AB]">
              Early Access
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              Become an Early Access Partner
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              Reserve your place before international rollout and receive priority
              access to future partnership updates, launch milestones, and early
              market positioning.
            </p>

            <div className="mt-8 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
              <p className="text-sm uppercase tracking-[0.18em] text-white/60">
                Early Reservation
              </p>
              <p className="mt-2 text-5xl font-semibold">$100</p>
              <p className="mt-3 text-sm leading-7 text-white/70">
                One-time early access reservation for first-wave international
                supporters and partners.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <p className="font-medium">Priority Position</p>
                <p className="mt-1 text-sm leading-7 text-white/70">
                  Be considered among the earliest international partner contacts.
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <p className="font-medium">Launch Updates</p>
                <p className="mt-1 text-sm leading-7 text-white/70">
                  Receive direct updates on pilots, expansion milestones, and next
                  rollout steps.
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <p className="font-medium">Early Relationship Building</p>
                <p className="mt-1 text-sm leading-7 text-white/70">
                  Establish contact before broader public onboarding begins.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
              Limited early access availability. This page is intended for serious
              early supporters, clinics, and strategic market participants.
            </div>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1CA0AB]">
              Reserve Your Spot
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-slate-900">
              Fill in your details and proceed to payment
            </h2>

            <p className="mt-4 text-slate-600">
              Submit your information below to secure your early access reservation.
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
                placeholder="Company / Clinic"
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

              <textarea
                rows={4}
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-[#1CA0AB]"
                placeholder="What makes you interested in joining early?"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />

              <div className="rounded-2xl bg-[#E8F6F7] p-4">
                <p className="text-sm text-slate-600">Reservation Fee</p>
                <p className="mt-1 text-2xl font-semibold text-slate-900">$100</p>
              </div>

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
                {loading ? "Processing..." : "Reserve My Spot for $100"}
              </button>

              <p className="text-center text-xs leading-6 text-slate-500">
                After submitting your details, you will be redirected to complete
                the payment.
              </p>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}