"use client";

import { useState } from "react";

const Arrow = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
    <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CrossMark = () => (
  <svg viewBox="0 0 64 64" aria-hidden="true" className="h-8 w-8">
    <path d="M29 5h6v22h22v6H35v26h-6V33H7v-6h22V5Z" fill="currentColor" />
  </svg>
);

const highlights = [
  ["01", "Plan Your Visit", "Know where to go, what to expect, and walk in with confidence."],
  ["02", "Find Your People", "Build meaningful relationships and become part of a church family."],
  ["03", "Grow With Purpose", "Discover ministries, serve others, and live out your God-given calling."],
];

const ministries = ["Men of Standard", "Women of Purpose", "Seeds of the Harvest", "Marriage Ministry", "Praise Team", "Food Through the Word"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="overflow-hidden bg-[#0F0F08] text-white">
      <section className="hero-shell relative min-h-[100svh]">
        <div className="hero-noise" />
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="hero-grid" />
        <div className="hero-halo" />

        <header className="relative z-40 mx-auto flex w-full max-w-[1440px] items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
          <a href="#" className="group flex items-center gap-3" aria-label="Church of the Harvest home">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-[#E8B84B]/30 bg-[#C8922A]/10 text-[#E8B84B] backdrop-blur-xl transition duration-300 group-hover:rotate-6 group-hover:scale-105">
              <CrossMark />
            </span>
            <span className="leading-tight">
              <span className="block text-[11px] font-semibold tracking-[0.26em] text-white/65">CHURCH OF THE</span>
              <span className="block text-base font-semibold tracking-[0.2em] text-[#E8B84B]">HARVEST</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a className="nav-link" href="#welcome">New Here</a>
            <a className="nav-link" href="#message">Messages</a>
            <a className="nav-link" href="#ministries">Ministries</a>
            <a className="nav-link" href="#visit">Visit</a>
            <a className="rounded-full border border-[#E8B84B]/30 bg-[#C8922A]/10 px-5 py-2.5 font-semibold text-[#F5E6C8] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-[#C8922A] hover:text-[#0F0F08]" href="#give">Give</a>
          </nav>

          <button onClick={() => setMenuOpen(true)} aria-label="Open navigation" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.06] md:hidden">
            <span className="space-y-1.5"><span className="block h-px w-5 bg-white" /><span className="block h-px w-5 bg-white" /></span>
          </button>
        </header>

        <div className={`mobile-panel ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
          <button onClick={() => setMenuOpen(false)} aria-label="Close navigation" className="absolute right-5 top-6 grid h-11 w-11 place-items-center rounded-full border border-white/15 text-2xl">×</button>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E8B84B]">Church of the Harvest</p>
          <div className="mt-12 flex flex-col gap-2">
            {[['New Here','#welcome'],['Messages','#message'],['Ministries','#ministries'],['Visit','#visit'],['Give','#give']].map(([label, href]) => (
              <a key={label} href={href} onClick={() => setMenuOpen(false)} className="mobile-link">{label}</a>
            ))}
          </div>
        </div>

        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-96px)] w-full max-w-[1440px] items-center px-5 pb-20 pt-8 sm:px-8 lg:px-12">
          <div className="grid w-full items-center gap-16 lg:grid-cols-[1.04fr_.96fr]">
            <div className="max-w-4xl">
              <div className="reveal-up inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#E8B84B]">
                <span className="h-px w-10 bg-[#C8922A]" />
                Laurel, Mississippi
              </div>

              <h1 className="hero-title reveal-up reveal-delay-1 mt-7 text-balance text-[clamp(4rem,10vw,8.6rem)] font-semibold leading-[0.82] tracking-[-0.065em]">
                Faith that
                <span className="hero-script block">moves.</span>
                <span className="block">People who grow.</span>
              </h1>

              <p className="reveal-up reveal-delay-2 mt-8 max-w-2xl text-lg leading-8 text-white/60 sm:text-xl">
                A church family rooted in God&apos;s Word, built in love, and committed to seeing lives transformed through Jesus Christ.
              </p>

              <div className="reveal-up reveal-delay-3 mt-9 flex flex-col gap-4 sm:flex-row">
                <a href="#visit" className="primary-cta group inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 font-semibold">
                  Plan Your Visit <Arrow />
                </a>
                <a href="#message" className="secondary-cta inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 font-semibold">
                  Watch a Message <span aria-hidden="true">▶</span>
                </a>
              </div>
            </div>

            <div className="relative hidden min-h-[650px] lg:block">
              <div className="hero-stage absolute inset-0">
                <div className="stage-ring stage-ring-one" />
                <div className="stage-ring stage-ring-two" />
                <div className="stage-cross">†</div>
                <div className="stage-word">HARVEST</div>
              </div>

              <div className="service-glass absolute bottom-10 left-0 right-0 mx-auto w-[88%] max-w-md rounded-[2rem] border border-white/10 bg-black/30 p-7 backdrop-blur-2xl">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#E8B84B]">Sunday Gathering</p>
                    <p className="mt-2 text-4xl font-semibold tracking-[-0.04em]">10:00 AM</p>
                  </div>
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-[#C8922A] text-[#0F0F08]">↗</span>
                </div>
                <div className="mt-6 border-t border-white/10 pt-5 text-sm leading-6 text-white/55">342 Hoy Rd · Laurel, MS 39443</div>
              </div>
            </div>
          </div>
        </div>

        <div className="ticker absolute inset-x-0 bottom-0 z-20 border-y border-white/10 bg-black/25 py-3 backdrop-blur-xl">
          <div className="ticker-track text-[11px] font-semibold uppercase tracking-[0.32em] text-white/55">
            <span>Worship</span><b>✦</b><span>Community</span><b>✦</b><span>Purpose</span><b>✦</b><span>Hope</span><b>✦</b><span>Worship</span><b>✦</b><span>Community</span><b>✦</b><span>Purpose</span><b>✦</b><span>Hope</span>
          </div>
        </div>
      </section>

      <section id="welcome" className="relative bg-[#FAF6EE] px-5 py-24 text-[#0F0F08] sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
            <p className="eyebrow">More than a Sunday</p>
            <h2 className="display-title max-w-5xl text-5xl font-semibold leading-[.96] tracking-[-0.055em] sm:text-6xl lg:text-8xl">A place to belong before you believe you belong.</h2>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-[2.5rem] border border-black/10 bg-black/10 md:grid-cols-3">
            {highlights.map(([number, title, copy]) => (
              <article key={number} className="experience-card group bg-[#FAF6EE] p-8 lg:p-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.22em] text-[#9A6B16]">{number}</span>
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-black/10 transition duration-300 group-hover:rotate-45 group-hover:bg-[#0F0F08] group-hover:text-white">↗</span>
                </div>
                <h3 className="mt-24 text-3xl font-semibold tracking-[-0.04em]">{title}</h3>
                <p className="mt-4 max-w-sm leading-7 text-black/55">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="message" className="relative bg-[#0F0F08] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="message-glow" />
        <div className="relative z-10 mx-auto max-w-[1320px]">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div className="message-visual group relative min-h-[560px] overflow-hidden rounded-[2.75rem] border border-white/10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_35%,rgba(200,146,42,.30),transparent_25%),linear-gradient(145deg,#2A2A18,#0F0F08_72%)]" />
              <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(115deg,transparent_35%,rgba(255,255,255,.18)_50%,transparent_65%)] transition duration-700 group-hover:translate-x-10" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[18rem] font-black leading-none text-white/[0.025]">H</div>
              <button aria-label="Play latest message" className="play-button absolute left-1/2 top-1/2 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-white/10 text-2xl backdrop-blur-xl">▶</button>
              <div className="absolute inset-x-8 bottom-8 flex items-end justify-between gap-6">
                <div><p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#E8B84B]">Latest Message</p><p className="mt-2 text-3xl font-semibold">A word for real life.</p></div>
                <span className="hidden text-sm text-white/45 sm:block">Watch now →</span>
              </div>
            </div>

            <div className="lg:pl-10">
              <p className="eyebrow eyebrow-light">Faith for real life</p>
              <h2 className="display-title mt-6 text-5xl font-semibold leading-[.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">Truth that meets you where you are—and moves you forward.</h2>
              <p className="mt-7 max-w-xl text-lg leading-8 text-white/55">Biblical teaching centered on spiritual growth, purpose, and living a victorious life in Christ.</p>
              <a href="#" className="mt-9 inline-flex items-center gap-3 font-semibold text-[#F5E6C8] transition hover:gap-5">Explore Messages <Arrow /></a>
            </div>
          </div>
        </div>
      </section>

      <section id="ministries" className="relative bg-[#FAF6EE] px-5 py-24 text-[#0F0F08] sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
            <div><p className="eyebrow">There is a place for you</p><h2 className="display-title mt-5 text-5xl font-semibold leading-[.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">Find your people. Find your place.</h2></div>
            <p className="max-w-xl text-lg leading-8 text-black/55 lg:justify-self-end">Church is not something you simply attend. It is a family you become part of, a place to grow, serve, and make a difference.</p>
          </div>

          <div className="ministry-marquee mt-16 overflow-hidden border-y border-black/10 py-6">
            <div className="ministry-track">
              {[...ministries, ...ministries].map((ministry, index) => <span key={`${ministry}-${index}`} className="inline-flex items-center gap-7 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl"><span>{ministry}</span><b className="text-[#C8922A]">✦</b></span>)}
            </div>
          </div>
        </div>
      </section>

      <section id="visit" className="relative overflow-hidden bg-[#C8922A] px-5 py-24 text-[#0F0F08] sm:px-8 lg:px-12 lg:py-32">
        <div className="visit-sun" />
        <div className="relative z-10 mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-black/55">This Sunday · 10:00 AM</p>
            <h2 className="display-title mt-6 max-w-5xl text-6xl font-semibold leading-[.88] tracking-[-0.065em] sm:text-7xl lg:text-9xl">Come see what God is doing.</h2>
          </div>
          <div className="lg:justify-self-end">
            <p className="max-w-md text-lg leading-8 text-black/65">342 Hoy Rd, Laurel, MS 39443</p>
            <p className="mt-4 max-w-md leading-7 text-black/55">Come as you are. We&apos;ll make sure you know where to go and what to expect when you arrive.</p>
            <a href="https://www.google.com/maps/search/?api=1&query=342+Hoy+Rd+Laurel+MS+39443" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#0F0F08] px-7 py-4 font-semibold text-[#F5E6C8] transition hover:-translate-y-1 hover:shadow-2xl">Get Directions <Arrow /></a>
          </div>
        </div>
      </section>

      <section id="give" className="bg-[#0F0F08] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-8 rounded-[2.5rem] border border-[#C8922A]/20 bg-[#C8922A]/[0.06] p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
          <div><p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#E8B84B]">Generosity</p><h2 className="display-title mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Give with purpose.</h2><p className="mt-3 text-white/50">Cash App: $seedofharvest342</p></div>
          <a href="#" className="primary-cta inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 font-semibold">Giving Options <Arrow /></a>
        </div>
      </section>

      <footer className="bg-[#0F0F08] px-5 pb-10 pt-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1320px] border-t border-white/10 pt-10">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="display-title text-3xl font-semibold">Church of the Harvest</p><p className="mt-2 text-sm text-white/40">Laurel, Mississippi</p></div>
            <p className="max-w-md text-sm leading-6 text-white/35 sm:text-right">Moving forward with a new way of living.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
