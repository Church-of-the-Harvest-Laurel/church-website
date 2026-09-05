import Link from "next/link";

export const metadata = {
  title: "Plan Your Visit | Church of the Harvest",
  description: "Plan your Sunday visit to Church of the Harvest in Laurel, Mississippi.",
};

export default function VisitPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FAF6EE] text-[#0F0F08]">
      <section className="relative overflow-hidden px-5 py-8 sm:px-8 lg:px-12">
        <div className="absolute -right-48 -top-28 h-[42rem] w-[42rem] rounded-full border border-[#C8922A]/20" />
        <div className="absolute right-8 top-20 h-[24rem] w-[24rem] rounded-full border border-[#C8922A]/10" />
        <div className="absolute -left-40 bottom-0 h-[26rem] w-[26rem] rounded-full bg-[#C8922A]/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1280px]">
          <header className="flex items-center justify-between py-4">
            <Link href="/" className="text-xs font-bold uppercase tracking-[0.24em] text-[#8B6116]">Church of the Harvest</Link>
            <Link href="/prayer" className="rounded-full border border-black/10 px-5 py-2.5 text-sm font-semibold transition hover:bg-[#0F0F08] hover:text-[#F5E6C8]">Need Prayer?</Link>
          </header>

          <div className="grid min-h-[78vh] items-center gap-14 py-16 lg:grid-cols-[1.08fr_.92fr] lg:py-20">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#8B6116]">This Sunday · 10:00 AM</p>
              <h1 className="display-title mt-6 max-w-5xl text-6xl font-semibold leading-[.86] tracking-[-0.07em] sm:text-7xl lg:text-[7.5rem]">Your first visit can feel <span className="text-[#C8922A]">easy.</span></h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-black/55 sm:text-xl">Church of the Harvest gathers Sunday at 10:00 AM in Laurel, Mississippi. Start here, get the details, and arrive knowing exactly where you&apos;re headed.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="https://www.google.com/maps/search/?api=1&query=342+Hoy+Rd+Laurel+MS+39443" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-[#0F0F08] px-7 py-4 font-semibold text-[#F5E6C8] transition hover:-translate-y-1 hover:shadow-2xl">Get Directions →</a>
                <a href="mailto:churchoftheharvest601@gmail.com?subject=Planning%20a%20Visit%20to%20Church%20of%20the%20Harvest" className="inline-flex items-center justify-center rounded-full border border-black/15 px-7 py-4 font-semibold transition hover:bg-black/5">Ask a Question</a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[3rem] border border-[#C8922A]/15" />
              <div className="relative overflow-hidden rounded-[2.6rem] bg-[#0F0F08] p-7 text-white shadow-[0_35px_90px_rgba(15,15,8,.18)] sm:p-9">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#C8922A]/20 blur-3xl" />
                <div className="relative z-10">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E8B84B]">Sunday at a glance</p>
                  <div className="mt-7 border-b border-white/10 pb-7">
                    <p className="display-title text-6xl font-semibold tracking-[-0.06em] sm:text-7xl">10:00 <span className="text-2xl text-white/45">AM</span></p>
                    <p className="mt-2 text-sm text-white/45">Sunday Main Service</p>
                  </div>
                  <div className="py-7">
                    <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#E8B84B]">Location</p>
                    <p className="display-title mt-3 text-3xl font-semibold">342 Hoy Rd</p>
                    <p className="mt-1 text-white/45">Laurel, MS 39443</p>
                  </div>
                  <div className="border-t border-white/10 pt-7">
                    <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#E8B84B]">Questions?</p>
                    <a href="mailto:churchoftheharvest601@gmail.com" className="mt-3 block break-all text-sm font-semibold text-white/75 transition hover:text-[#E8B84B]">churchoftheharvest601@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-white/55 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#8B6116]">Before you arrive</p>
            <h2 className="display-title text-5xl font-semibold leading-[.94] tracking-[-0.055em] sm:text-6xl lg:text-7xl">One address. One time. One simple next step.</h2>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            <article className="rounded-[2rem] border border-black/10 bg-[#FAF6EE] p-7"><p className="text-xs font-bold tracking-[0.2em] text-[#8B6116]">01</p><h3 className="mt-14 text-2xl font-semibold">Save the time</h3><p className="mt-3 leading-7 text-black/50">Sunday Main Service begins at 10:00 AM.</p></article>
            <article className="rounded-[2rem] border border-black/10 bg-[#FAF6EE] p-7"><p className="text-xs font-bold tracking-[0.2em] text-[#8B6116]">02</p><h3 className="mt-14 text-2xl font-semibold">Save the address</h3><p className="mt-3 leading-7 text-black/50">342 Hoy Rd, Laurel, Mississippi 39443.</p></article>
            <article className="rounded-[2rem] border border-black/10 bg-[#C8922A] p-7"><p className="text-xs font-bold tracking-[0.2em] text-black/55">03</p><h3 className="mt-14 text-2xl font-semibold">Come see us</h3><p className="mt-3 leading-7 text-black/60">Use directions below and make Church of the Harvest part of your Sunday.</p></article>
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            <a href="https://www.google.com/maps/search/?api=1&query=342+Hoy+Rd+Laurel+MS+39443" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-[#0F0F08] px-7 py-4 font-semibold text-[#F5E6C8]">Open in Maps ↗</a>
            <Link href="/messages" className="inline-flex items-center justify-center rounded-full border border-black/15 px-7 py-4 font-semibold">Watch a Message</Link>
            <Link href="/" className="inline-flex items-center justify-center rounded-full border border-black/15 px-7 py-4 font-semibold">Back Home</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
