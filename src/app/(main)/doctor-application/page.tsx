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

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await fetch("/api/submit-doctor", {
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

      setSuccess("Заявку успішно надіслано");
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
    } catch (err: any) {
      setError(err.message || "Помилка при відправці заявки");
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
              Для лікарів та клінік
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-6xl">
              Партнерська мережа для передачі складних пренатальних кейсів
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
              Yemets Academy підключає лікарів та медичні центри до експертної
              маршрутизації складних випадків у сфері фетальної кардіології та
              пренатальної діагностики.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-[0.9fr_1.1fr] md:px-10">
          <aside className="space-y-6">
            <div className="rounded-3xl bg-[#E8F6F7] p-8">
              <h2 className="text-2xl font-semibold">Як працює партнерство</h2>

              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-sm font-semibold text-[#1CA0AB]">01</p>
                  <p className="mt-1 text-sm leading-7 text-slate-700">
                    Лікар або клініка подає заявку на підключення.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#1CA0AB]">02</p>
                  <p className="mt-1 text-sm leading-7 text-slate-700">
                    Команда перевіряє профіль, спеціалізацію та тип кейсів.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#1CA0AB]">03</p>
                  <p className="mt-1 text-sm leading-7 text-slate-700">
                    Після погодження лікар отримує зрозумілий процес передачі
                    матеріалів.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#1CA0AB]">04</p>
                  <p className="mt-1 text-sm leading-7 text-slate-700">
                    Кейси передаються на експертний розгляд через захищене
                    медичне хмарне сховище.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold">Для кого</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <li>- лікарі пренатальної діагностики;</li>
                <li>- акушери-гінекологи;</li>
                <li>- фетальні спеціалісти;</li>
                <li>- медичні центри та клініки;</li>
                <li>- партнери з України та Молдови.</li>
              </ul>
            </div>
          </aside>

          <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1CA0AB]">
              Partner Application
            </p>

            <h2 className="mt-4 text-3xl font-semibold">
              Заявка лікаря-партнера
            </h2>

            <p className="mt-4 text-slate-600">
              Заповніть коротку форму, щоб команда Yemets Academy могла
              звʼязатися з вами та погодити формат співпраці.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <input
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-[#1CA0AB]"
                placeholder="Повне ім’я"
                value={form.full_name}
                onChange={(e) => setForm({ ...form, full_name: e.target.value })}
                required
              />

              <input
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-[#1CA0AB]"
                placeholder="Клініка / медичний центр"
                value={form.clinic}
                onChange={(e) => setForm({ ...form, clinic: e.target.value })}
              />

              <input
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-[#1CA0AB]"
                placeholder="Спеціалізація"
                value={form.specialty}
                onChange={(e) => setForm({ ...form, specialty: e.target.value })}
              />

              <input
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-[#1CA0AB]"
                placeholder="Країна"
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
                placeholder="Телефон"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />

              <input
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-[#1CA0AB]"
                placeholder="Орієнтовна кількість кейсів на місяць"
                value={form.monthly_volume}
                onChange={(e) =>
                  setForm({ ...form, monthly_volume: e.target.value })
                }
              />

              <textarea
                rows={4}
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-[#1CA0AB]"
                placeholder="Коментар"
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
                {loading ? "Відправка..." : "Надіслати заявку"}
              </button>
            </form>
          </section>
        </div>
      </section>
    </main>
  );
}