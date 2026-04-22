"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SubmitCasePage() {
  const router = useRouter();

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    country: "",
    role: "patient",
    cloud_link: "",
    notes: "",
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
      const res = await fetch("/api/submit-case", {
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

      setSuccess("Кейс успішно надіслано");
      router.push(`/case-status?caseId=${data.case.id}`);
    } catch (err: any) {
      setError(err.message || "Помилка при відправці кейсу");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#E8F6F7] px-6 py-16 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1CA0AB]">
            Передати кейс
          </p>

          <h1 className="mt-4 text-3xl font-semibold md:text-4xl">
            Надіслати матеріали на експертний аналіз
          </h1>

          <p className="mt-4 max-w-2xl text-slate-600">
            Передайте доступ до захищеного медичного хмарного сховища для
            перевірки якості матеріалів та подальшого експертного висновку.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Хто подає кейс?
              </label>

              <div className="grid gap-3 md:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setForm({ ...form, role: "doctor" })}
                  className={`rounded-2xl border p-4 text-left transition ${
                    form.role === "doctor"
                      ? "border-[#1CA0AB] bg-[#E8F6F7]"
                      : "border-slate-300 bg-white"
                  }`}
                >
                  <div className="font-medium">Я лікар</div>
                  <div className="mt-1 text-sm text-slate-600">
                    Для приватних лікарів та клінік
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setForm({ ...form, role: "patient" })}
                  className={`rounded-2xl border p-4 text-left transition ${
                    form.role === "patient"
                      ? "border-[#1CA0AB] bg-[#E8F6F7]"
                      : "border-slate-300 bg-white"
                  }`}
                >
                  <div className="font-medium">Я пацієнт</div>
                  <div className="mt-1 text-sm text-slate-600">
                    Самостійна передача матеріалів
                  </div>
                </button>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Повне ім’я
              </label>
              <input
                type="text"
                value={form.full_name}
                onChange={(e) =>
                  setForm({ ...form, full_name: e.target.value })
                }
                required
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-[#1CA0AB]"
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-[#1CA0AB]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Телефон
                </label>
                <input
                  type="text"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-[#1CA0AB]"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium">Країна</label>
                <input
                  type="text"
                  value={form.country}
                  onChange={(e) =>
                    setForm({ ...form, country: e.target.value })
                  }
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-[#1CA0AB]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Тип подання
                </label>
                <div className="flex h-[50px] items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-600">
                  {form.role === "doctor"
                    ? "Подача від лікаря / клініки"
                    : "Подача від пацієнта"}
                </div>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Посилання на захищене медичне хмарне сховище
              </label>
              <input
                type="text"
                value={form.cloud_link}
                onChange={(e) =>
                  setForm({ ...form, cloud_link: e.target.value })
                }
                placeholder="DICOM / PACS / захищене медичне хмарне сховище"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-[#1CA0AB]"
              />
              <p className="mt-2 text-xs leading-6 text-slate-500">
                На першому етапі платформа працює через доступ до зовнішнього
                захищеного медичного хмарного сховища без прямого зберігання
                вихідних матеріалів на сайті.
              </p>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Коментар</label>
              <textarea
                rows={4}
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                placeholder="Додаткова інформація щодо кейсу"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-[#1CA0AB]"
              />
            </div>

            <div className="space-y-3 rounded-2xl border border-slate-200 p-5">
              <label className="flex gap-3 text-sm text-slate-700">
                <input type="checkbox" required />
                <span>Я погоджуюсь з умовами оферти</span>
              </label>
              <label className="flex gap-3 text-sm text-slate-700">
                <input type="checkbox" required />
                <span>Я даю згоду на обробку персональних даних</span>
              </label>
              <label className="flex gap-3 text-sm text-slate-700">
                <input type="checkbox" />
                <span>
                  Я даю згоду на використання деперсоналізованих даних у наукових
                  та навчальних цілях
                </span>
              </label>
            </div>

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
              className="inline-flex rounded-full bg-[#1CA0AB] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-60"
            >
              {loading ? "Відправка..." : "Надіслати кейс"}
            </button>
          </form>
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl bg-[#0B1F24] p-8 text-white shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1CA0AB]">
              Workflow
            </p>
            <h2 className="mt-4 text-2xl font-semibold">
              Медичний маршрут обробки кейсу
            </h2>

            <div className="mt-6 space-y-5">
              <div>
                <p className="text-sm font-semibold text-[#1CA0AB]">01</p>
                <p className="mt-1 text-white/80">
                  Передача доступу до захищеного медичного хмарного сховища
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-[#1CA0AB]">02</p>
                <p className="mt-1 text-white/80">
                  Первинна перевірка повноти та якості матеріалів
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-[#1CA0AB]">03</p>
                <p className="mt-1 text-white/80">
                  Після прийняття кейсу відкривається оплата
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-[#1CA0AB]">04</p>
                <p className="mt-1 text-white/80">
                  Експертний висновок передається у погоджений канал взаємодії
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1CA0AB]">
              Інструкція
            </p>

            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
              <li>• Використовуйте лише захищене медичне хмарне сховище.</li>
              <li>• Перевірте, що доступ до посилання відкритий для перегляду.</li>
              <li>• Додайте базову контактну інформацію для зворотного зв’язку.</li>
              <li>• Після прийняття кейсу ви отримаєте наступний крок для оплати.</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1CA0AB]">
              Важливо
            </p>

            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
              <li>• Платформа не зберігає вихідні медичні файли напряму на сайті.</li>
              <li>• Усі матеріали проходять ручну первинну перевірку.</li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}