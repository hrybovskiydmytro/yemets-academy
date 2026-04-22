import Link from "next/link";

export default function InvestorsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden bg-[#0B1F24]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(28,160,171,0.35),_transparent_45%)]" />
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32 relative">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1CA0AB]">
              Investor & Early Partner Access
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-6xl">
              Join Yemets Academy at the earliest stage
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
              Yemets Academy is building an expert-led prenatal cardiology platform
              designed to improve early detection, expert validation, and clinical
              routing before birth.
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
              This early access program is intended for international partners,
              forward-looking clinics, and first supporters who want to secure an
              early position before full-scale launch.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/early-access"
                className="rounded-full bg-[#1CA0AB] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Join for $100
              </Link>

              <Link
                href="/invest-application"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-white/40"
              >
                Investor Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 p-6">
              <p className="text-3xl font-semibold">$8.6B</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Total addressable market in congenital heart defect related care.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <p className="text-3xl font-semibold">25+ Years</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Clinical experience, validated methods, and long-term data foundation.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <p className="text-3xl font-semibold">$100</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Early partner reservation to join the first international wave.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1CA0AB]">
              Why join now
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Early supporters secure priority access before international rollout
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="font-semibold">Priority Position</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Be among the first clinics, experts, and partners considered for
                early collaboration.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="font-semibold">Direct Updates</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Receive launch updates, pilot announcements, and first access to
                future partnership terms.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="font-semibold">Brand Alignment</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Join a mission-driven medical initiative backed by expert clinical leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="rounded-3xl bg-[#0B1F24] p-8 md:p-12 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1CA0AB]">
              Early Access Offer
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Reserve your place for $100
            </h2>
            <p className="mt-4 max-w-2xl text-white/70">
              Fill in your details, complete the payment, and receive confirmation
              of your early access position.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/early-access"
                className="rounded-full bg-[#1CA0AB] px-6 py-3 text-sm font-medium text-white"
              >
                Fill Details & Pay
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}