import Link from "next/link";

export const metadata = {
  title: "Plan Your Visit | Church of the Harvest",
  description: "Plan your Sunday visit to Church of the Harvest in Laurel, Mississippi.",
};

export default function VisitPage() {
  return (
    <main className="min-h-screen bg-[#FAF6EE] text-[#0F0F08]">
      <section className="relative overflow-hidden px-5 py-10 sm:px-8 lg:px-12">
        <div className="absolute -right-40 -top-20 h-[38rem] w-[38rem] rounded-full border border-[#C8922A]/20" />
        <div className="mx-auto max-w-[1200px]">
          <Link href="/" className="inline-flex items-center gap-3 text-sm text-black/50 transition hover:text-[#8B6116]">← Back to Church of the Harvest</Link>
          <div className="grid min-h-[78vh] items-center gap-14 py-16 lg:grid-cols-[1.05fr_.95fr]">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#8B6116]">This Sunday · 10:00 AM</p>
              <h1 className="display-title mt-6 max-w-4xl text-6xl font-semibold leading-[.88] tracking-[-0.065em] sm:text-7xl lg:text-9xl">Your first visit can feel easy.</h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-black/55">Come as you are. Church of the Harvest gathers Sunday at 10:00 AM in Laurel, Mississippi.</p>
              <a href="https://www.google.com/maps/search/?api=1&query=342+Hoy+Rd+Laurel+MS+39443" target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center justify-center rounded-full bg-[#0F0F08] px-7 py-4 font-semibold text-[#F5E6C8] transition hover:-translate-y-1">Get Directions →</a>
            </div>
            <div className="grid gap-4">
              <div className="rounded-[2rem] bg-[#C8922A] p-8"><p className="text-[10px] font-bold uppercase tracking-[0.28em] text-black/55">Sunday Gathering</p><p className="display-title mt-3 text-6xl font-semibold tracking-[-0.05em]">10:00 AM</p></div>
              <div className="rounded-[2rem] border border-black/10 bg-white/70 p-8"><p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#8B6116]">Location</p><p className="display-title mt-3 text-3xl font-semibold">342 Hoy Rd</p><p className="mt-1 text-black/50">Laurel, MS 39443</p></div>
              <div className="rounded-[2rem] border border-black/10 bg-white/70 p-8"><p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#8B6116]">Questions before Sunday?</p><a href="mailto:churchoftheharvest601@gmail.com" className="mt-3 block font-semibold">churchoftheharvest601@gmail.com</a></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
