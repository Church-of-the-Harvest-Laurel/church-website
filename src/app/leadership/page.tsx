import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Leadership | Church of the Harvest",
  description: "Meet Pastor Robert L. Lewis and Evangelist Tonya L. Lewis of Church of the Harvest in Laurel, Mississippi.",
};

export default function LeadershipPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0F0F08] text-white">
      <section className="relative min-h-screen px-5 py-8 sm:px-8 lg:px-12">
        <div className="absolute -right-32 -top-32 h-[36rem] w-[36rem] rounded-full border border-[#C8922A]/15" />
        <div className="absolute right-12 top-12 h-[22rem] w-[22rem] rounded-full border border-[#E8B84B]/10" />
        <div className="absolute bottom-0 left-0 h-[30rem] w-[30rem] rounded-full bg-[#C8922A]/[0.06] blur-3xl" />

        <header className="relative z-20 mx-auto flex max-w-[1320px] items-center justify-between py-4">
          <Link href="/" className="text-xs font-bold uppercase tracking-[0.26em] text-[#E8B84B]">Church of the Harvest</Link>
          <Link href="/visit" className="rounded-full border border-[#E8B84B]/25 px-5 py-2.5 text-sm font-semibold text-[#F5E6C8] transition hover:bg-[#C8922A] hover:text-[#0F0F08]">Plan Your Visit</Link>
        </header>

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-96px)] max-w-[1320px] items-center gap-14 py-12 lg:grid-cols-[.92fr_1.08fr] lg:py-20">
          <div className="relative">
            <div className="absolute -inset-5 rounded-[3.25rem] border border-[#C8922A]/10" />
            <div className="relative min-h-[560px] overflow-hidden rounded-[2.75rem] border border-[#E8B84B]/20 bg-[#1C1C10] sm:min-h-[680px]">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "linear-gradient(to top,rgba(15,15,8,.96) 0%,rgba(15,15,8,.08) 62%),url('/images/pastor-robert-tonya-lewis.jpg')" }} />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(232,184,75,.20),transparent_30%)]" />
              <div className="absolute inset-x-7 bottom-7 sm:inset-x-10 sm:bottom-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E8B84B]">Senior Leadership</p>
                <h1 className="display-title mt-3 text-4xl font-semibold leading-none sm:text-5xl">Pastor Robert L. Lewis</h1>
                <p className="display-title mt-2 text-2xl text-[#F5E6C8] sm:text-3xl">& Evangelist Tonya L. Lewis</p>
              </div>
            </div>
          </div>

          <div className="max-w-2xl lg:pl-8">
            <p className="eyebrow eyebrow-light">Leading with purpose</p>
            <h2 className="display-title mt-6 text-6xl font-semibold leading-[.9] tracking-[-0.055em] sm:text-7xl lg:text-[6.4rem]">A ministry built to see lives <span className="text-[#E8B84B]">transformed.</span></h2>
            <p className="mt-8 max-w-xl text-lg leading-8 text-white/55">Pastor Robert L. Lewis serves Church of the Harvest with a heart for God&apos;s Word, people, and purposeful spiritual growth. Together with Evangelist Tonya L. Lewis, the leadership of the house reflects a commitment to faith, family, and ministry.</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/messages" className="primary-cta inline-flex items-center justify-center rounded-full px-7 py-4 font-semibold">Watch a Message <span className="ml-3">↗</span></Link>
              <Link href="/prayer" className="secondary-cta inline-flex items-center justify-center rounded-full px-7 py-4 font-semibold">Request Prayer</Link>
            </div>
            <div className="mt-14 border-t border-white/10 pt-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#E8B84B]">Church of the Harvest</p>
              <p className="mt-2 text-sm text-white/45">342 Hoy Rd · Laurel, Mississippi 39443 · Sunday 10:00 AM</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
