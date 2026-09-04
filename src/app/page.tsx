"use client";

import Link from "next/link";
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

const ministries = [
  "Men of Standard", "Women of Purpose", "Seeds of the Harvest", "Marriage Ministry", "Praise Team",
  "Food Through the Word", "Hospitality", "Media Team", "Intercessors", "Choir",
];

const sermons = [
  { title: "Did You Come Expecting?", meta: "Pastor Robert Lewis · Luke 6:12-15", id: "7KwEhozE_Kc" },
  { title: "What Are You Asking God?", meta: "Pastor Robert Lewis · Church of the Harvest", id: "wu1tNQkcdNs" },
  { title: "Pastor Robert Lewis Preaching", meta: "Pastor Robert Lewis · Church of the Harvest", id: "B9Lh694lK4s" },
];

const mobileLinks = [
  ["New Here", "#welcome"],
  ["Messages", "/messages"],
  ["Ministries", "/ministries"],
  ["Leadership", "/leadership"],
  ["Visit", "/visit"],
  ["Prayer", "/prayer"],
  ["Give", "#give"],
];

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
          <Link href="/" className="group flex items-center gap-3" aria-label="Church of the Harvest home">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-[#E8B84B]/30 bg-[#C8922A]/10 text-[#E8B84B] backdrop-blur-xl transition duration-300 group-hover:rotate-6 group-hover:scale-105"><CrossMark /></span>
            <span className="leading-tight">
              <span className="block text-[11px] font-semibold tracking-[0.26em] text-white/65">CHURCH OF THE</span>
              <span className="block text-base font-semibold tracking-[0.2em] text-[#E8B84B]">HARVEST</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-white/70 md:flex">
            <Link className="nav-link" href="#welcome">New Here</Link>
            <Link className="nav-link" href="/messages">Messages</Link>
            <Link className="nav-link" href="/ministries">Ministries</Link>
            <Link className="nav-link" href="/leadership">Leadership</Link>
            <Link className="nav-link" href="/prayer">Prayer</Link>
            <Link className="nav-link" href="/visit">Visit</Link>
            <Link className="rounded-full border border-[#E8B84B]/30 bg-[#C8922A]/10 px-5 py-2.5 font-semibold text-[#F5E6C8] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-[#C8922A] hover:text-[#0F0F08]" href="#give">Give</Link>
          </nav>

          <button onClick={() => setMenuOpen(true)} aria-label="Open navigation" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.06] md:hidden">
            <span className="space-y-1.5"><span className="block h-px w-5 bg-white" /><span className="block h-px w-5 bg-white" /></span>
          </button>
        </header>

        <div className={`mobile-panel ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
          <button onClick={() => setMenuOpen(false)} aria-label="Close navigation" className="absolute right-5 top-6 grid h-11 w-11 place-items-center rounded-full border border-white/15 text-2xl">×</button>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E8B84B]">Church of the Harvest</p>
          <div className="mt-12 flex flex-col gap-2">
            {mobileLinks.map(([label, href]) => (
              <Link key={label} href={href} onClick={() => setMenuOpen(false)} className="mobile-link">{label}</Link>
            ))}
          </div>
        </div>

        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-96px)] w-full max-w-[1440px] items-center px-5 pb-20 pt-8 sm:px-8 lg:px-12">
          <div className="grid w-full items-center gap-16 lg:grid-cols-[1.04fr_.96fr]">
            <div className="max-w-4xl">
              <div className="reveal-up inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#E8B84B]"><span className="h-px w-10 bg-[#C8922A]" /> Laurel, Mississippi</div>
              <h1 className="hero-title reveal-up reveal-delay-1 mt-7 text-balance text-[clamp(4rem,10vw,8.6rem)] font-semibold leading-[0.82] tracking-[-0.065em]">
                Faith that <span className="hero-script block">moves.</span><span className="block">People who grow.</span>
              </h1>
              <p className="reveal-up reveal-delay-2 mt-8 max-w-2xl text-lg leading-8 text-white/60 sm:text-xl">A church family rooted in God&apos;s Word, built in love, and committed to seeing lives transformed through Jesus Christ.</p>
              <div className="reveal-up reveal-delay-3 mt-9 flex flex-col gap-4 sm:flex-row">
                <Link href="/visit" className="primary-cta group inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 font-semibold">Plan Your Visit <Arrow /></Link>
                <Link href="/messages" className="secondary-cta inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 font-semibold">Watch a Message <span aria-hidden="true">▶</span></Link>
              </div>
            </div>

            <div className="relative hidden min-h-[680px] lg:block">
              <div className="hero-stage absolute inset-0">
                <div className="stage-ring stage-ring-one" />
                <div className="stage-ring stage-ring-two" />
                <div className="hero-photo-shell absolute inset-[10%] overflow-hidden rounded-[48%_48%_42%_42%/42%_42%_58%_58%] border border-[#E8B84B]/20">
                  <div className="hero-photo absolute inset-0" style={{ backgroundImage: "linear-gradient(to top,rgba(15,15,8,.88) 0%,rgba(15,15,8,.12) 55%),url(https://img.youtube.com/vi/7KwEhozE_Kc/maxresdefault.jpg)" }} />
                  <div className="absolute inset-x-7 bottom-8">
                    <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#E8B84B]">From the house</p>
                    <p className="display-title mt-2 text-3xl font-semibold">Real people. Real faith. Real transformation.</p>
                  </div>
                </div>
                <div className="stage-word">HARVEST</div>
              </div>

              <Link href="/visit" className="service-glass absolute bottom-4 left-0 w-[88%] max-w-md rounded-[2rem] border border-white/10 bg-black/45 p-7 backdrop-blur-2xl transition hover:-translate-y-2 hover:border-[#E8B84B]/30">
                <div className="flex items-center justify-between gap-4">
                  <div><p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#E8B84B]">Sunday Gathering</p><p className="mt-2 text-4xl font-semibold tracking-[-0.04em]">10:00 AM</p></div>
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-[#C8922A] text-[#0F0F08]">↗</span>
                </div>
                <div className="mt-6 border-t border-white/10 pt-5 text-sm leading-6 text-white/55">342 Hoy Rd · Laurel, MS 39443</div>
              </Link>
            </div>
          </div>
        </div>

        <div className="ticker absolute inset-x-0 bottom-0 z-20 border-y border-white/10 bg-black/25 py-3 backdrop-blur-xl">
          <div className="ticker-track text-[11px] font-semibold uppercase tracking-[0.32em] text-white/55"><span>Worship</span><b>✦</b><span>Community</span><b>✦</b><span>Purpose</span><b>✦</b><span>Hope</span><b>✦</b><span>Worship</span><b>✦</b><span>Community</span><b>✦</b><span>Purpose</span><b>✦</b><span>Hope</span></div>
        </div>
      </section>

      <section id="welcome" className="relative bg-[#FAF6EE] px-5 py-24 text-[#0F0F08] sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-end"><p className="eyebrow">More than a Sunday</p><h2 className="display-title max-w-5xl text-5xl font-semibold leading-[.96] tracking-[-0.055em] sm:text-6xl lg:text-8xl">A place to belong before you believe you belong.</h2></div>
          <div className="mt-16 grid gap-px overflow-hidden rounded-[2.5rem] border border-black/10 bg-black/10 md:grid-cols-3">
            {highlights.map(([number, title, copy]) => (
              <article key={number} className="experience-card group bg-[#FAF6EE] p-8 lg:p-10">
                <div className="flex items-center justify-between"><span className="text-xs font-bold tracking-[0.22em] text-[#9A6B16]">{number}</span><span className="grid h-11 w-11 place-items-center rounded-full border border-black/10 transition duration-300 group-hover:rotate-45 group-hover:bg-[#0F0F08] group-hover:text-white">↗</span></div>
                <h3 className="mt-24 text-3xl font-semibold tracking-[-0.04em]">{title}</h3><p className="mt-4 max-w-sm leading-7 text-black/55">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="message" className="relative bg-[#0F0F08] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="message-glow" />
        <div className="relative z-10 mx-auto max-w-[1320px]">
          <div className="mb-14 grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><p className="eyebrow eyebrow-light">Messages from the house</p><h2 className="display-title text-5xl font-semibold leading-[.96] tracking-[-0.055em] sm:text-6xl lg:text-8xl">Truth for where you are. Faith for where you&apos;re going.</h2></div>
          <div className="grid gap-5 lg:grid-cols-3">
            {sermons.map((sermon, index) => (
              <a key={sermon.id} href={`https://www.youtube.com/watch?v=${sermon.id}`} target="_blank" rel="noreferrer" className={`group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] ${index === 0 ? "lg:col-span-2" : ""}`}>
                <div className={`relative overflow-hidden bg-[#2A2A18] ${index === 0 ? "aspect-[16/8.5]" : "aspect-[4/3]"}`} style={{ backgroundImage: `linear-gradient(to top,rgba(15,15,8,.5),transparent 55%),url(https://img.youtube.com/vi/${sermon.id}/maxresdefault.jpg)`, backgroundSize: "cover", backgroundPosition: "center" }}>
                  <span className="absolute left-6 top-6 text-[10px] font-bold uppercase tracking-[0.25em] text-[#E8B84B]">Recent Message</span><span className="absolute bottom-6 right-6 grid h-16 w-16 place-items-center rounded-full bg-[#E8B84B] text-xl text-[#0F0F08] shadow-2xl transition duration-300 group-hover:scale-110">▶</span>
                </div>
                <div className="p-6 lg:p-8"><h3 className="display-title text-3xl font-semibold tracking-[-0.04em]">{sermon.title}</h3><p className="mt-2 text-sm text-white/45">{sermon.meta}</p></div>
              </a>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-5">
            <Link href="/messages" className="inline-flex items-center gap-3 font-semibold text-[#F5E6C8] transition hover:gap-5">Explore all messages <Arrow /></Link>
            <a href="https://www.youtube.com/@churchoftheharvestlaurelms251" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-sm font-semibold text-white/55 transition hover:text-[#E8B84B]">YouTube channel ↗</a>
          </div>
        </div>
      </section>

      <section id="ministries" className="relative bg-[#FAF6EE] px-5 py-24 text-[#0F0F08] sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-end"><div><p className="eyebrow">There is a place for you</p><h2 className="display-title mt-5 text-5xl font-semibold leading-[.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">Find your people. Find your place.</h2></div><p className="max-w-xl text-lg leading-8 text-black/55 lg:justify-self-end">Church is not something you simply attend. It is a family you become part of, a place to grow, serve, and make a difference.</p></div>
          <div className="ministry-marquee mt-16 overflow-hidden border-y border-black/10 py-6"><div className="ministry-track">{[...ministries, ...ministries].map((ministry, index) => <span key={`${ministry}-${index}`} className="inline-flex items-center gap-7 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl"><span>{ministry}</span><b className="text-[#C8922A]">✦</b></span>)}</div></div>
          <div className="mt-10 flex justify-end"><Link href="/ministries" className="inline-flex items-center gap-3 font-semibold text-[#6f4a0d] transition hover:gap-5">Explore ministries <Arrow /></Link></div>
        </div>
      </section>

      <section id="leadership" className="relative overflow-hidden bg-[#1C1C10] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="absolute -right-32 -top-32 h-[34rem] w-[34rem] rounded-full border border-[#C8922A]/15" />
        <div className="absolute -right-10 -top-10 h-[22rem] w-[22rem] rounded-full border border-[#E8B84B]/10" />
        <div className="relative z-10 mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div className="leadership-visual group relative min-h-[620px] overflow-hidden rounded-[2.75rem] border border-[#C8922A]/20 bg-black" style={{ backgroundImage: "linear-gradient(to top,rgba(15,15,8,.96) 0%,rgba(15,15,8,.18) 62%),url(https://img.youtube.com/vi/B9Lh694lK4s/maxresdefault.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(232,184,75,.18),transparent_28%)]" />
            <div className="absolute inset-x-8 bottom-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#E8B84B]">Senior Pastor</p>
              <p className="display-title mt-2 text-5xl font-semibold">Pastor Robert L. Lewis</p>
              <p className="mt-3 max-w-md text-sm leading-6 text-white/55">Preaching, teaching, and leading with a heart to see lives transformed through Jesus Christ.</p>
            </div>
          </div>

          <div className="lg:pl-8">
            <p className="eyebrow eyebrow-light">Leading with purpose</p>
            <h2 className="display-title mt-6 text-5xl font-semibold leading-[.96] tracking-[-0.055em] sm:text-6xl lg:text-8xl">A ministry built to see lives transformed.</h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/55">Pastor Robert L. Lewis faithfully serves God&apos;s people with wisdom, compassion, and integrity, with a passion for helping people grow in faith and walk in their God-given purpose.</p>
            <div className="mt-10 border-t border-white/10 pt-8"><p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#E8B84B]">First Lady</p><p className="display-title mt-2 text-4xl font-semibold">Evangelist Tonya L. Lewis</p><p className="mt-3 max-w-xl text-white/50">Together they have dedicated their lives to ministry, leadership, and community outreach.</p></div>
            <div className="mt-9 flex flex-wrap gap-4"><Link href="/leadership" className="primary-cta inline-flex items-center gap-3 rounded-full px-6 py-3.5 font-semibold">Meet our leadership <Arrow /></Link><Link href="/prayer" className="secondary-cta inline-flex items-center gap-3 rounded-full px-6 py-3.5 font-semibold">Request prayer</Link></div>
          </div>
        </div>
      </section>

      <section id="visit" className="relative overflow-hidden bg-[#C8922A] px-5 py-24 text-[#0F0F08] sm:px-8 lg:px-12 lg:py-32">
        <div className="visit-sun" />
        <div className="relative z-10 mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <div><p className="text-[11px] font-bold uppercase tracking-[0.28em] text-black/55">This Sunday · 10:00 AM</p><h2 className="display-title mt-6 max-w-5xl text-6xl font-semibold leading-[.88] tracking-[-0.065em] sm:text-7xl lg:text-9xl">Come see what God is doing.</h2></div>
          <div className="lg:justify-self-end"><p className="max-w-md text-lg leading-8 text-black/65">342 Hoy Rd, Laurel, MS 39443</p><p className="mt-4 max-w-md leading-7 text-black/55">Come as you are. We&apos;ll make sure you know where to go and what to expect when you arrive.</p><div className="mt-8 flex flex-wrap gap-3"><Link href="/visit" className="inline-flex items-center gap-3 rounded-full bg-[#0F0F08] px-7 py-4 font-semibold text-[#F5E6C8] transition hover:-translate-y-1 hover:shadow-2xl">Plan Your Visit <Arrow /></Link><a href="https://www.google.com/maps/search/?api=1&query=342+Hoy+Rd+Laurel+MS+39443" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full border border-black/20 px-7 py-4 font-semibold transition hover:bg-black/5">Directions ↗</a></div></div>
        </div>
      </section>

      <section id="give" className="bg-[#0F0F08] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-8 rounded-[2.5rem] border border-[#C8922A]/20 bg-[#C8922A]/[0.06] p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
          <div><p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#E8B84B]">Generosity</p><h2 className="display-title mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Give with purpose.</h2><p className="mt-3 text-white/50">Cash App: $seedofharvest342</p></div>
          <a href="https://cash.app/$seedofharvest342" target="_blank" rel="noreferrer" className="primary-cta inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 font-semibold">Give via Cash App <Arrow /></a>
        </div>
      </section>

      <footer className="bg-[#0F0F08] px-5 pb-10 pt-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1320px] border-t border-white/10 pt-10">
          <div className="grid gap-10 md:grid-cols-[1.2fr_.8fr] md:items-end">
            <div><p className="display-title text-4xl font-semibold">Church of the Harvest</p><p className="mt-2 text-sm text-white/40">342 Hoy Rd · Laurel, Mississippi 39443</p><a className="mt-1 block text-sm text-white/40 transition hover:text-[#E8B84B]" href="mailto:churchoftheharvest601@gmail.com">churchoftheharvest601@gmail.com</a></div>
            <div className="flex flex-wrap gap-5 text-sm text-white/50 md:justify-end"><Link className="transition hover:text-[#E8B84B]" href="/visit">Visit</Link><Link className="transition hover:text-[#E8B84B]" href="/prayer">Prayer</Link><a className="transition hover:text-[#E8B84B]" href="https://www.facebook.com/churchoftheharvestlaurelms" target="_blank" rel="noreferrer">Facebook</a><a className="transition hover:text-[#E8B84B]" href="https://www.youtube.com/@churchoftheharvestlaurelms251" target="_blank" rel="noreferrer">YouTube</a></div>
          </div>
          <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-7 text-xs uppercase tracking-[0.18em] text-white/25 sm:flex-row sm:justify-between"><span>Moving forward with a new way of living.</span><span>Laurel, Mississippi</span></div>
        </div>
      </footer>
    </main>
  );
}
