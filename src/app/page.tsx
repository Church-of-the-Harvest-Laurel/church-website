"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "./clean-slate.css";

const nav = [
  ["Visit", "/visit"],
  ["Messages", "/messages"],
  ["Ministries", "/ministries"],
  ["Leadership", "/leadership"],
  ["Prayer", "/prayer"],
];

const ministries = [
  "Men of Standard",
  "Women of Purpose",
  "Seeds of the Harvest",
  "Marriage Ministry",
  "Praise Team",
  "Food Through the Word",
];

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="clean-home">
      <section className="clean-hero">
        <div className="clean-hero-media">
          <Image src="/images/congregation.jpg" alt="Church congregation in worship" fill priority sizes="100vw" />
        </div>
        <div className="clean-hero-overlay" />

        <header className="clean-nav">
          <Link className="clean-brand" href="/" aria-label="Church of the Harvest home">
            <Image className="clean-brand-logo" src="/images/church-logo.jpg" alt="Church of the Harvest" width={100} height={100} priority />
            <span className="clean-brand-copy"><span>CHURCH OF THE</span><span>HARVEST</span></span>
          </Link>
          <nav className="clean-nav-links" aria-label="Primary navigation">
            {nav.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}
            <Link className="clean-give" href="#give">Give</Link>
          </nav>
          <button className="clean-menu" onClick={() => setOpen(true)} aria-label="Open menu">Menu</button>
        </header>

        <aside className={`clean-drawer ${open ? "open" : ""}`} aria-hidden={!open}>
          <button className="clean-drawer-close" onClick={() => setOpen(false)} aria-label="Close menu">×</button>
          <p className="clean-kicker gold">Church of the Harvest</p>
          <nav>
            {nav.map(([label, href]) => <Link key={label} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
            <Link href="#give" onClick={() => setOpen(false)}>Give</Link>
          </nav>
        </aside>

        <div className="clean-hero-inner">
          <div className="clean-hero-copy">
            <p className="clean-kicker gold">Laurel, Mississippi · Sunday 10:00 AM</p>
            <h1><span>Come</span><span>Expecting.</span></h1>
            <p className="clean-hero-sub">A place to meet Jesus, find your people, and leave different than you came.</p>
            <div className="clean-hero-actions">
              <Link className="clean-btn gold" href="/visit">Plan Your Visit <span>→</span></Link>
              <Link className="clean-btn ghost" href="/messages">Watch a Message <span>▶</span></Link>
            </div>
          </div>
          <div className="clean-service-rail">
            <small>This Sunday</small>
            <strong>10:00<br />AM</strong>
            <span>342 Hoy Rd<br />Laurel, MS 39443</span>
          </div>
        </div>
      </section>

      <div className="clean-pulse" aria-hidden="true">
        <div className="clean-pulse-track">
          <span>Faith</span><b>✦</b><span>Family</span><b>✦</b><span>Worship</span><b>✦</b><span>Purpose</span><b>✦</b><span>Hope</span><b>✦</b><span>Faith</span><b>✦</b><span>Family</span><b>✦</b><span>Worship</span><b>✦</b><span>Purpose</span><b>✦</b><span>Hope</span><b>✦</b>
        </div>
      </div>

      <section className="clean-manifesto">
        <div className="clean-manifesto-grid">
          <div className="clean-manifesto-sticky">
            <p className="clean-kicker">This is more than Sunday</p>
            <p>Church should feel alive. Honest. Hopeful. Like a place where your story matters and your next chapter can begin.</p>
          </div>
          <div>
            <h2>There is room for <em>your story</em> here.</h2>
            <p className="clean-manifesto-lead">Bring your questions. Bring your family. Bring the parts of life that are still unfinished. You do not have to have everything figured out before you walk through the door.</p>
            <div className="clean-manifesto-links">
              <Link className="clean-line-link" href="/visit">What to expect →</Link>
              <Link className="clean-line-link" href="/leadership">Meet our leadership →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="clean-photo-story" aria-label="Church life">
        <div className="clean-photo-story-grid">
          <figure className="clean-photo big">
            <Image src="/images/family-community.jpg" alt="Church family spending time together" fill sizes="(max-width:700px) 100vw, 55vw" />
            <figcaption className="clean-photo-tag">Real people. Real community.</figcaption>
          </figure>
          <figure className="clean-photo small">
            <Image src="/images/church-community-formal.jpg" alt="Church community gathering together" fill sizes="(max-width:700px) 100vw, 43vw" />
            <figcaption className="clean-photo-tag">A place to belong.</figcaption>
          </figure>
        </div>
      </section>

      <section className="clean-sunday">
        <div className="clean-sunday-grid">
          <div>
            <p className="clean-kicker gold">Your seat is waiting</p>
            <h2>Sunday<span>Starts Here.</span></h2>
          </div>
          <div className="clean-sunday-copy">
            <p>You do not need a perfect life, the perfect outfit, or the perfect words. Just come. We would love to meet you.</p>
            <div className="clean-sunday-details">
              <strong>Sunday · 10:00 AM</strong>
              <span>342 Hoy Rd · Laurel, Mississippi 39443</span>
            </div>
            <Link className="clean-btn gold" href="/visit">Plan My First Visit <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="clean-life">
        <div className="clean-life-head">
          <div><p className="clean-kicker">Church life</p></div>
          <div>
            <h2>Find where you belong.</h2>
            <p>Faith grows in community. Explore ministries, build relationships, serve with purpose, and discover where your gifts can make a difference.</p>
          </div>
        </div>
        <div className="clean-life-list">
          {ministries.map((name, index) => (
            <Link className="clean-life-row" key={name} href="/ministries">
              <span className="num">0{index + 1}</span><strong>{name}</strong><b>↗</b>
            </Link>
          ))}
        </div>
      </section>

      <section className="clean-message">
        <div className="clean-message-grid">
          <div className="clean-message-copy">
            <div>
              <p className="clean-kicker gold">Latest message</p>
              <h2>Did You Come Expecting?</h2>
              <p className="clean-message-meta">Pastor Robert Lewis · Luke 6:12–15</p>
            </div>
            <div className="clean-hero-actions">
              <a className="clean-btn gold" href="https://www.youtube.com/watch?v=7KwEhozE_Kc" target="_blank" rel="noreferrer">Watch Now <span>→</span></a>
              <Link className="clean-btn ghost" href="/messages">All Messages</Link>
            </div>
          </div>
          <a className="clean-message-media" href="https://www.youtube.com/watch?v=7KwEhozE_Kc" target="_blank" rel="noreferrer" aria-label="Watch Did You Come Expecting?">
            <Image src="/images/congregation-worship.jpg" alt="Worship at Church of the Harvest" fill sizes="(max-width:980px) 100vw, 58vw" />
            <span className="clean-play">▶</span>
          </a>
        </div>
      </section>

      <section className="clean-invite">
        <div className="clean-invite-copy">
          <p className="clean-kicker">One invitation can change everything</p>
          <h2>Come<br />Home.</h2>
          <p>Whether you are rediscovering faith, looking for a church family, or simply wondering what is next, there is a place for you here.</p>
          <div className="clean-hero-actions">
            <Link className="clean-btn dark" href="/visit">I&apos;m New Here <span>→</span></Link>
            <Link className="clean-btn" href="/prayer">Request Prayer</Link>
          </div>
        </div>
        <div className="clean-invite-photo">
          <Image src="/images/community-men.jpg" alt="People connecting at Church of the Harvest" fill sizes="(max-width:980px) 100vw, 50vw" />
        </div>
      </section>

      <footer id="give" className="clean-footer">
        <div className="clean-footer-top">
          <div className="clean-footer-brand">
            <Image className="clean-footer-logo" src="/images/church-logo.jpg" alt="Church of the Harvest" width={220} height={170} />
            <div><h3>Church of<br />the Harvest</h3><p>342 Hoy Rd<br />Laurel, MS 39443</p></div>
          </div>
          <div className="clean-footer-links">
            <div><span>EXPLORE</span><Link href="/visit">Visit</Link><Link href="/messages">Messages</Link><Link href="/ministries">Ministries</Link></div>
            <div><span>CONNECT</span><Link href="/leadership">Leadership</Link><Link href="/prayer">Prayer</Link><a href="https://cash.app/$seedofharvest342" target="_blank" rel="noreferrer">Give</a></div>
          </div>
        </div>
        <div className="clean-footer-bottom"><span>Church of the Harvest · Laurel, Mississippi</span><span>Come expecting.</span></div>
      </footer>
    </main>
  );
}
