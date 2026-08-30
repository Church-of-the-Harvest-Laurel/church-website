const Arrow = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
    <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#07120d] text-white">
      <section className="hero-shell relative min-h-screen">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="hero-grid" />

        <header className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-7 lg:px-10">
          <a href="#" className="group flex items-center gap-3" aria-label="Church of the Harvest home">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-lg font-semibold backdrop-blur-md transition group-hover:scale-105">
              H
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold tracking-[0.18em] text-white">CHURCH OF THE</span>
              <span className="block text-sm tracking-[0.34em] text-[#e7c77a]">HARVEST</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/75 md:flex">
            <a className="nav-link" href="#welcome">New Here</a>
            <a className="nav-link" href="#message">Messages</a>
            <a className="nav-link" href="#community">Community</a>
            <a className="rounded-full border border-white/20 bg-white/10 px-5 py-2.5 font-medium text-white backdrop-blur-md transition hover:bg-white hover:text-[#07120d]" href="#visit">
              Plan Your Visit
            </a>
          </nav>
        </header>

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-104px)] w-full max-w-7xl items-center px-6 pb-20 pt-10 lg:px-10">
          <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
            <div className="max-w-4xl">
              <div className="reveal-up inline-flex items-center gap-3 rounded-full border border-[#e7c77a]/25 bg-[#e7c77a]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#f5dfaa] backdrop-blur-md">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#e7c77a]" />
                There is a place for you here
              </div>

              <h1 className="reveal-up reveal-delay-1 mt-7 max-w-4xl text-balance text-6xl font-semibold leading-[0.93] tracking-[-0.055em] sm:text-7xl lg:text-[6.6rem]">
                Come as you are.
                <span className="block bg-gradient-to-r from-[#f4e3b7] via-[#e7c77a] to-[#d99c55] bg-clip-text text-transparent">
                  Leave renewed.
                </span>
              </h1>

              <p className="reveal-up reveal-delay-2 mt-8 max-w-2xl text-lg leading-8 text-white/68 sm:text-xl">
                A vibrant church family where faith becomes real, people become family, and every generation can discover purpose, hope, and a deeper walk with God.
              </p>

              <div className="reveal-up reveal-delay-3 mt-9 flex flex-col gap-4 sm:flex-row">
                <a href="#visit" className="primary-cta group inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 font-semibold">
                  Plan Your First Visit
                  <Arrow />
                </a>
                <a href="#message" className="secondary-cta inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 font-semibold">
                  Watch Latest Message
                  <span aria-hidden="true">▶</span>
                </a>
              </div>

              <div className="reveal-up reveal-delay-4 mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-white/55">
                <span className="flex items-center gap-2"><span className="text-[#e7c77a]">✦</span> Worship</span>
                <span className="flex items-center gap-2"><span className="text-[#e7c77a]">✦</span> Community</span>
                <span className="flex items-center gap-2"><span className="text-[#e7c77a]">✦</span> Purpose</span>
                <span className="flex items-center gap-2"><span className="text-[#e7c77a]">✦</span> Hope</span>
              </div>
            </div>

            <div className="relative hidden min-h-[590px] lg:block">
              <div className="portrait-card portrait-card-main absolute right-0 top-2 h-[525px] w-[390px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-[radial-gradient(circle_at_40%_20%,rgba(231,199,122,.28),transparent_35%),linear-gradient(145deg,#183426,#08130d_70%)] shadow-2xl">
                <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(120deg,transparent_20%,rgba(255,255,255,.08)_50%,transparent_80%)]" />
                <div className="absolute inset-x-8 bottom-8 rounded-[1.8rem] border border-white/12 bg-black/25 p-6 backdrop-blur-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e7c77a]">This Sunday</p>
                  <p className="mt-2 text-2xl font-semibold">Expect something real.</p>
                  <p className="mt-2 text-sm leading-6 text-white/65">Authentic worship. A meaningful message. A community ready to welcome you.</p>
                </div>
                <div className="absolute left-10 top-12 h-28 w-28 rounded-full bg-[#d7a85d]/20 blur-2xl" />
                <div className="absolute right-8 top-20 text-[8rem] font-black leading-none text-white/[0.04]">H</div>
              </div>

              <div className="floating-card absolute bottom-6 left-2 w-56 rounded-3xl border border-white/12 bg-white/10 p-5 backdrop-blur-xl">
                <span className="text-2xl">✦</span>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#e7c77a]">You Belong</p>
                <p className="mt-2 text-lg font-semibold leading-snug">Not just a place to attend. A family to grow with.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-[#f7f2e8] to-transparent" />
      </section>

      <section id="welcome" className="relative bg-[#f7f2e8] px-6 py-24 text-[#102018] lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow">More than Sunday</p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Find your people.<br />Grow your faith.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#102018]/65 lg:justify-self-end">
              Church should feel like coming home. Whether you are exploring faith, returning after a long time away, or ready to go deeper, there is room for your story here.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {[
              ["01", "Plan a Visit", "Know exactly what to expect before you walk through the doors."],
              ["02", "Find Community", "Meet people, build real relationships, and never do life alone."],
              ["03", "Take Your Next Step", "Discover ways to grow, serve, lead, and live your faith with purpose."],
            ].map(([number, title, copy]) => (
              <article key={number} className="experience-card group rounded-[2rem] border border-[#102018]/10 bg-white/60 p-7 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold tracking-[0.18em] text-[#916e2f]">{number}</span>
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-[#102018]/10 transition group-hover:translate-x-1 group-hover:bg-[#102018] group-hover:text-white">↗</span>
                </div>
                <h3 className="mt-16 text-2xl font-semibold tracking-[-0.03em]">{title}</h3>
                <p className="mt-3 leading-7 text-[#102018]/60">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="message" className="relative bg-[#0b1a12] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="message-visual relative min-h-[480px] overflow-hidden rounded-[2.5rem] border border-white/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_30%,rgba(231,199,122,.28),transparent_30%),linear-gradient(160deg,#274331,#09140e_70%)]" />
            <button aria-label="Play latest message" className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-white/12 text-2xl backdrop-blur-xl transition hover:scale-110 hover:bg-white hover:text-[#102018]">▶</button>
            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e7c77a]">Latest Message</p>
                <p className="mt-2 text-2xl font-semibold">A word for where you are.</p>
              </div>
              <span className="hidden rounded-full border border-white/15 bg-black/20 px-4 py-2 text-xs text-white/70 sm:inline">Watch now</span>
            </div>
          </div>

          <div className="lg:pl-10">
            <p className="eyebrow text-[#e7c77a]">Faith for real life</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">Messages that meet you in the middle of life.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/62">Practical, biblical, hope-filled teaching designed to help you know God more deeply and live with courage every day.</p>
            <a href="#" className="mt-8 inline-flex items-center gap-3 font-semibold text-[#f0d99f] transition hover:gap-5">Explore Messages <Arrow /></a>
          </div>
        </div>
      </section>

      <section id="community" className="bg-[#f7f2e8] px-6 py-24 text-[#102018] lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl rounded-[2.75rem] bg-[#dcae58] px-7 py-14 sm:px-12 lg:px-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#102018]/60">Your next chapter can start here</p>
              <h2 className="mt-5 max-w-4xl text-5xl font-semibold leading-[.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">You don&apos;t have to have it all together to walk through the door.</h2>
            </div>
            <div className="lg:justify-self-end">
              <p className="max-w-md text-lg leading-8 text-[#102018]/68">Come experience a church that is passionate about Jesus and serious about people.</p>
              <a id="visit" href="#" className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#102018] px-7 py-4 font-semibold text-white transition hover:-translate-y-1 hover:shadow-xl">Plan Your Visit <Arrow /></a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#07120d] px-6 py-10 text-white/55 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>Church of the Harvest</p>
          <p>Come as you are. Grow into who you were created to be.</p>
        </div>
      </footer>
    </main>
  );
}
