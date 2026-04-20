import Link from "next/link";

export default function InvestorsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0B1F24]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(28,160,171,0.35),_transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(232,59,62,0.08),_transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#1CA0AB]">
              Для інвесторів
            </p>

            <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
              Saving Babies&apos; Hearts Before They&apos;re Born
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
              Yemets Academy — міжнародна платформа експертної пренатальної
              кардіодіагностики, що поєднує клінічну експертизу, AI-assisted
              workflow, маршрутизацію пацієнтів та довгострокове формування
              клінічного датасету.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="rounded-full bg-[#1CA0AB] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Про платформу
              </Link>

              <Link
                href="/submit-case"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-white/40"
              >
                Передати кейс
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1CA0AB]">
              Проблема
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Congenital Heart Defects — найпоширеніша вроджена вада з величезною людською та економічною ціною
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            <div className="rounded-3xl border border-slate-200 p-6">
              <p className="text-4xl font-semibold text-slate-900">1.35M</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                дітей щороку народжуються з CHD
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <p className="text-4xl font-semibold text-slate-900">~350,000</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                критичних випадків, що потребують негайного втручання
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <p className="text-4xl font-semibold text-slate-900">$9.8B</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                щорічне економічне навантаження
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <p className="text-4xl font-semibold text-slate-900">~168,000</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                infant deaths / year без своєчасного виявлення
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EARLY DETECTION */}
      <section className="bg-[#E8F6F7]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1CA0AB]">
              Чому це критично
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Рання пренатальна діагностика та правильний діагноз рятують життя й зменшують витрати
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Пізнє виявлення формує emergency pathway, збільшує інтенсивність
              лікування, витрати та ризики. Рання діагностика дозволяє перейти
              від хаотичного реагування до планового клінічного маршруту.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="font-semibold">Early Detection</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Виявлення до postnatal collapse і до втрати часу на прийняття рішень.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="font-semibold">Correct Diagnosis</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Чітке розуміння типу, тяжкості та клінічної тактики.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="font-semibold">Planned Delivery & Surgery</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Готовність акушерської та кардіохірургічної команди ще до народження.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1CA0AB]">
              Рішення
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              AI-assisted expert diagnostics of a future baby&apos;s heart
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Yemets Academy трансформує якість скринінгу, точність діагностики
              та готовність до лікування через експертну каскадну модель.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="font-semibold">AI CHD Capture at Routine Ultrasound</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Автоматичне виявлення підозрілих аномалій ще на рівні routine anatomy scan.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="font-semibold">AI-Assisted Fetal Cardiology Diagnosis</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Експертна валідація спеціалізованими fetal cardiologists.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="font-semibold">Surgery-Driven Clinical Routing</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Плановий маршрут вагітності, delivery planning та підготовка до лікування.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-[#F8FAFC] p-6">
              <p className="text-4xl font-semibold text-[#1CA0AB]">95%</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                detection
              </p>
            </div>

            <div className="rounded-3xl bg-[#F8FAFC] p-6">
              <p className="text-4xl font-semibold text-[#1CA0AB]">92%</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                accuracy
              </p>
            </div>

            <div className="rounded-3xl bg-[#F8FAFC] p-6">
              <p className="text-4xl font-semibold text-[#1CA0AB]">Planned</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                treatment замість emergency care
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1CA0AB]">
              Workflow
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Five-step integrated diagnostic process
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-5">
            {[
              ["01", "Primary Screening", "OB-GYN виконує скринінг за протоколом."],
              ["02", "Seamless Capture", "Матеріали безпечно передаються у workflow."],
              ["03", "AI Triage", "AI відбирає high-risk cases для пріоритетної оцінки."],
              ["04", "Expert Validation", "Експерти підтверджують лише flagged cases."],
              ["05", "Actionable Report", "Формується висновок та подальший клінічний маршрут."],
            ].map(([num, title, text]) => (
              <div key={num} className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-[#1CA0AB]">{num}</p>
                <h3 className="mt-3 font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODEL */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1CA0AB]">
              Integrated Model
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Expert network, AI platform and knowledge centers
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="font-semibold">Fetal Cardiology Experts</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Глобальна мережа експертів, що забезпечує клінічну якість та diagnosis relay.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="font-semibold">AI-Assisted Tech Platform</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                AI + telemedicine infrastructure для масштабування workflow.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="font-semibold">Yemets Space & Academy</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Expert hub, training capability та knowledge center для лікарів.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY ADOPTION */}
      <section className="bg-[#E8F6F7]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1CA0AB]">
              Adoption Drivers
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Why healthcare systems will adopt this
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="font-semibold">Augments Existing Protocols</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Посилює наявні протоколи без руйнування existing workflow.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="font-semibold">Improves Economic Model</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Дає кращу economics через раннє виявлення та pay-per-case model.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="font-semibold">Reduces Medical Risk & Liability</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Знижує malpractice exposure і покращує defensibility клінічних рішень.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MOAT */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1CA0AB]">
              Competitive Advantage
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Three irreplaceable assets build defensible moats
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 p-6">
              <p className="text-3xl font-semibold text-slate-900">25+ Years</p>
              <h3 className="mt-3 font-semibold">Clinical Data</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Довгостроковий surgical-validated dataset, який складно відтворити конкурентам.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="font-semibold">The Yemets Method</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Клінічно валідований підхід до діагностики та treatment planning.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="font-semibold">The Yemets Team</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Доступ до Prof. Yemets, глобальної експертизи та багаторічної клінічної практики.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MARKET */}
      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1CA0AB]">
              Market
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              $8.6B TAM, targeting $64M SOM
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <p className="text-4xl font-semibold text-[#1CA0AB]">$8.6B</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">TAM</p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <p className="text-4xl font-semibold text-[#1CA0AB]">$1.28B</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">SAM</p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <p className="text-4xl font-semibold text-[#1CA0AB]">$64M</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">SOM</p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="font-semibold">AI Pathology Screening</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">$5,000</p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="font-semibold">Expert Diagnosis & Routing</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">$375</p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="font-semibold">Direct Patient Consultation</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">$225</p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="font-semibold">Physician Certification</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">$900</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
              <img
                src="/team/yemets.jpg"
                alt="Prof. Ilya Yemets"
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1CA0AB]">
                Founder
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                Prof. Ilya Yemets — global cardiac authority
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Піонер philosophy of the “First Hours of Life” у neonatal cardiac surgery.
                Засновник Українського дитячого кардіологічного центру, лідер
                клінічної інновації та автор масштабної наукової бази.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-4">
                <div className="rounded-2xl bg-[#F8FAFC] p-4">
                  <p className="text-2xl font-semibold text-slate-900">40+</p>
                  <p className="mt-2 text-xs uppercase text-slate-500">Years Practice</p>
                </div>
                <div className="rounded-2xl bg-[#F8FAFC] p-4">
                  <p className="text-2xl font-semibold text-slate-900">10,000+</p>
                  <p className="mt-2 text-xs uppercase text-slate-500">Surgeries</p>
                </div>
                <div className="rounded-2xl bg-[#F8FAFC] p-4">
                  <p className="text-2xl font-semibold text-slate-900">~50%</p>
                  <p className="mt-2 text-xs uppercase text-slate-500">Infants Under 1</p>
                </div>
                <div className="rounded-2xl bg-[#F8FAFC] p-4">
                  <p className="text-2xl font-semibold text-slate-900">300+</p>
                  <p className="mt-2 text-xs uppercase text-slate-500">Publications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRACTION */}
      <section className="bg-[#0F172A]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1CA0AB]">
              Traction
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              Launching with clinical data, protocols and expert hub in Kyiv
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6">
              <h3 className="font-semibold">What&apos;s Already Built</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <li>• 25+ years clinical data</li>
                <li>• Team assembled</li>
                <li>• Clinical protocol developed and validated</li>
                <li>• Kyiv pilot center secured</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-6">
              <h3 className="font-semibold">What&apos;s Launching Now</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <li>• Pilot center in Kyiv</li>
                <li>• First 40 devices / 50 physicians / 2,500 diagnoses target</li>
                <li>• AI platform architecture defined</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-6">
              <h3 className="font-semibold">What Seed Funds</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <li>• Transition to working product + revenue</li>
                <li>• Scale clinical operations</li>
                <li>• Validate AI models on fresh clinical data stream</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/about"
              className="rounded-full bg-[#1CA0AB] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Команда та платформа
            </Link>

            <Link
              href="/submit-case"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-white/40"
            >
              Product Flow
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}