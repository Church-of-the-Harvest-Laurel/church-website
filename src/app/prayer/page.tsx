export const metadata = {
  title: "Prayer | Church of the Harvest",
  description: "Share a prayer request with Church of the Harvest in Laurel, Mississippi.",
};

const email = "churchoftheharvest601@gmail.com";

export default function PrayerPage() {
  return (
    <main className="min-h-screen bg-[#0F0F08] text-white">
      <section className="relative overflow-hidden px-5 py-10 sm:px-8 lg:px-12">
        <div className="absolute -right-40 top-0 h-[34rem] w-[34rem] rounded-full border border-[#C8922A]/15" />
        <div className="mx-auto max-w-[1200px]">
          <a href="/" className="inline-flex items-center gap-3 text-sm text-white/55 transition hover:text-[#E8B84B]">← Back to Church of the Harvest</a>
          <div className="grid min-h-[78vh] items-center gap-14 py-16 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#E8B84B]">We&apos;re here for you</p>
              <h1 className="display-title mt-6 max-w-4xl text-6xl font-semibold leading-[.9] tracking-[-0.06em] sm:text-7xl lg:text-8xl">You don&apos;t have to carry it alone.</h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/55">Send your prayer request to the Church of the Harvest ministry team. We&apos;ll receive it by email and can follow up with you if you choose to include your contact information.</p>
              <a href={`mailto:${email}?subject=Prayer%20Request%20-%20Church%20of%20the%20Harvest`} className="primary-cta mt-9 inline-flex items-center justify-center rounded-full px-7 py-4 font-semibold">Send a Prayer Request →</a>
            </div>

            <div className="rounded-[2.75rem] border border-[#C8922A]/20 bg-[#C8922A]/[0.07] p-8 backdrop-blur-xl sm:p-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#E8B84B]">Prayer & Care</p>
              <p className="display-title mt-8 text-4xl font-semibold leading-tight">A church family that stands with you.</p>
              <p className="mt-5 leading-7 text-white/50">For general ministry questions or prayer follow-up, email us directly at:</p>
              <a className="mt-3 block break-all text-lg font-semibold text-[#F5E6C8]" href={`mailto:${email}`}>{email}</a>
              <div className="mt-10 border-t border-white/10 pt-7 text-sm leading-6 text-white/40">Church of the Harvest · 342 Hoy Rd · Laurel, MS 39443</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
