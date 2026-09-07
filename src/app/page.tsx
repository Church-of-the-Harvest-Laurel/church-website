"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "./motivation.css";

const nav = [
  ["New Here", "/visit"],
  ["Messages", "/messages"],
  ["Ministries", "/ministries"],
  ["Leadership", "/leadership"],
  ["Prayer", "/prayer"],
];

const ministryLinks = [
  "Men of Standard",
  "Women of Purpose",
  "Marriage Ministry",
  "Seeds of the Harvest",
  "Praise Team",
  "Food Through the Word",
];

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="coh-home">
      <header className="coh-header">
        <Link className="coh-brand" href="/" aria-label="Church of the Harvest home">
          <Image
            src="/images/church-logo.jpg"
            alt="Church of the Harvest"
            width={360}
            height={278}
            priority
            className="coh-logo"
          />
        </Link>
        <nav className="coh-nav" aria-label="Primary navigation">
          {nav.map(([label, href]) => (
            <Link key={label} href={href}>{label}</Link>
          ))}
          <Link className="coh-nav-cta" href="#give">Give</Link>
        </nav>
        <button className="coh-menu-button" onClick={() => setOpen(true)} aria-label="Open menu">Menu</button>
      </header>

      <div className={`coh-mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <button onClick={() => setOpen(false)} aria-label="Close menu">Close</button>
        <nav>
          {nav.map(([label, href]) => (
            <Link key={label} href={href} onClick={() => setOpen(false)}>{label}</Link>
          ))}
          <Link href="#give" onClick={() => setOpen(false)}>Give</Link>
        </nav>
      </div>

      <section className="coh-hero">
        <Image
          src="/images/congregation.jpg"
          alt="Church of the Harvest congregation worshipping together"
          fill
          priority
          sizes="100vw"
          className="coh-hero-photo"
        />
        <div className="coh-hero-shade" />
        <div className="coh-hero-content">
          <p className="coh-overline light">Laurel, Mississippi</p>
          <h1>Love God.<br />Love People.<br /><em>Grow Together.</em></h1>
          <p className="coh-hero-copy">A church family rooted in God&apos;s Word, built in love, and committed to seeing lives transformed through Jesus Christ.</p>
          <div className="coh-hero-actions">
            <Link className="coh-button gold" href="/visit">Plan My Visit <span>→</span></Link>
            <Link className="coh-button clear" href="/messages">Watch a Message <span>▶</span></Link>
          </div>
        </div>
        <div className="coh-sunday-strip">
          <div>
            <span>JOIN US THIS SUNDAY</span>
            <strong>10:00 AM</strong>
          </div>
          <div className="coh-sunday-address">342 Hoy Rd · Laurel, MS 39443</div>
          <Link href="/visit">New here? Start here →</Link>
        </div>
      </section>

      <section className="coh-intro">
        <div className="coh-intro-copy-wrap">
          <p className="coh-overline">WELCOME HOME</p>
          <h2>There is a place here for <em>everybody.</em></h2>
          <p className="coh-lead">We believe church should feel like family. A place where you can encounter God, build real relationships, grow in faith, and make a difference.</p>
          <div className="coh-intro-actions">
            <Link className="coh-text-link" href="/visit">Plan your first visit →</Link>
            <Link className="coh-text-link" href="/leadership">Meet our leadership →</Link>
          </div>
        </div>
        <div className="coh-intro-photos">
          <figure className="coh-photo tall">
            <Image src="/images/family-community.jpg" alt="Church of the Harvest family and community" fill sizes="(max-width: 900px) 100vw, 58vw" />
          </figure>
          <figure className="coh-photo offset">
            <Image src="/images/church-community-formal.jpg" alt="Church of the Harvest community gathering" fill sizes="(max-width: 900px) 100vw, 38vw" />
          </figure>
        </div>
      </section>

      <section className="coh-ministries">
        <div className="coh-section-head">
          <div>
            <p className="coh-overline">FIND YOUR PEOPLE</p>
            <h2>There&apos;s a place<br />for you here.</h2>
          </div>
          <p>Church is more than attending a service. Find a ministry, build community, serve with purpose, and grow with people who will walk with you.</p>
        </div>

        <div className="coh-ministry-feature">
          <Link href="/ministries" className="coh-ministry-photo">
            <Image src="/images/community-men.jpg" alt="Men of Standard at Church of the Harvest" fill sizes="(max-width: 900px) 100vw, 60vw" />
            <div className="coh-image-caption"><span>MINISTRY</span><strong>Men of Standard</strong><b>Explore →</b></div>
          </Link>
          <div className="coh-ministry-list">
            <p className="coh-overline">MORE WAYS TO CONNECT</p>
            {ministryLinks.slice(1).map((name) => (
              <Link key={name} href="/ministries"><span>{name}</span><b>↗</b></Link>
            ))}
            <Link className="coh-all-ministries" href="/ministries">View all ministries →</Link>
          </div>
        </div>
      </section>

      <section className="coh-message">
        <div className="coh-message-label">
          <p className="coh-overline light">LATEST MESSAGE</p>
          <h2>Messages from<br />the house.</h2>
        </div>
        <a className="coh-message-media" href="https://www.youtube.com/watch?v=7KwEhozE_Kc" target="_blank" rel="noreferrer">
          <Image src="https://img.youtube.com/vi/7KwEhozE_Kc/maxresdefault.jpg" alt="Did You Come Expecting? sermon" fill sizes="(max-width: 900px) 100vw, 62vw" />
          <span className="coh-play">▶</span>
        </a>
        <div className="coh-message-copy">
          <p>Pastor Robert Lewis · Luke 6:12–15</p>
          <h3>Did You Come Expecting?</h3>
          <a href="https://www.youtube.com/watch?v=7KwEhozE_Kc" target="_blank" rel="noreferrer" className="coh-button gold">Watch Now <span>→</span></a>
          <Link className="coh-text-link light-link" href="/messages">Browse all messages →</Link>
        </div>
      </section>

      <section className="coh-invite">
        <div className="coh-invite-copy">
          <p className="coh-overline">JOIN US THIS SUNDAY</p>
          <h2>You&apos;re invited.</h2>
          <p>Whether you are exploring faith, looking for a church home, or ready for a fresh start, we would love to welcome you to Church of the Harvest.</p>
          <div className="coh-visit-details"><strong>Sunday · 10:00 AM</strong><span>342 Hoy Rd, Laurel, MS 39443</span></div>
          <Link className="coh-button dark" href="/visit">Plan Your Visit <span>→</span></Link>
        </div>
        <div className="coh-invite-photo">
          <Image src="/images/congregation-worship.jpg" alt="Worship at Church of the Harvest" fill sizes="(max-width: 900px) 100vw, 50vw" />
        </div>
      </section>

      <section id="give" className="coh-give">
        <p className="coh-overline">GENEROSITY</p>
        <h2>Give with purpose.</h2>
        <p>Your generosity helps support the ministry and mission of Church of the Harvest.</p>
        <div className="coh-give-row">
          <strong>Cash App · $seedofharvest342</strong>
          <a className="coh-button gold" href="https://cash.app/$seedofharvest342" target="_blank" rel="noreferrer">Give Now <span>→</span></a>
        </div>
      </section>

      <footer className="coh-footer">
        <div className="coh-footer-brand">
          <Image src="/images/church-logo.jpg" alt="Church of the Harvest" width={300} height={232} />
          <p>342 Hoy Rd<br />Laurel, Mississippi 39443</p>
        </div>
        <div className="coh-footer-links">
          <div><span>EXPLORE</span><Link href="/visit">New Here</Link><Link href="/messages">Messages</Link><Link href="/ministries">Ministries</Link></div>
          <div><span>CONNECT</span><Link href="/leadership">Leadership</Link><Link href="/prayer">Prayer</Link><a href="https://www.youtube.com/@churchoftheharvestlaurelms251" target="_blank" rel="noreferrer">YouTube</a></div>
        </div>
        <div className="coh-footer-bottom">Church of the Harvest · Laurel, Mississippi</div>
      </footer>
    </main>
  );
}
