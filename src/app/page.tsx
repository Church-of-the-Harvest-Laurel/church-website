"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Arrow = () => <span aria-hidden="true">↗</span>;

const ministries = [
  "Men of Standard",
  "Women of Purpose",
  "Seeds of the Harvest",
  "Marriage Ministry",
  "Praise Team",
  "Hospitality",
  "Media Team",
  "Intercessors",
  "Choir",
  "Food Through the Word",
];

const messages = [
  { title: "Did You Come Expecting?", id: "7KwEhozE_Kc" },
  { title: "What Are You Asking God?", id: "wu1tNQkcdNs" },
  { title: "Pastor Robert Lewis Preaching", id: "B9Lh694lK4s" },
];

const mobileLinks = [
  ["New Here", "#new-here"],
  ["Messages", "/messages"],
  ["Ministries", "/ministries"],
  ["Leadership", "/leadership"],
  ["Prayer", "/prayer"],
  ["Visit", "/visit"],
  ["Give", "#give"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="wow-page">
      <section className="wow-hero">
        <Image
          src="/images/congregation.jpg"
          alt="Church of the Harvest congregation worshipping together"
          fill
          priority
          sizes="100vw"
          className="wow-hero-image"
        />
        <div className="wow-hero-shade" />
        <div className="wow-hero-grain" />

        <header className="wow-nav">
          <Link href="/" className="wow-brand" aria-label="Church of the Harvest home">
            <span className="wow-logo-wrap">
              <Image src="/images/church-logo.jpg" alt="Church of the Harvest" width={160} height={124} priority className="wow-logo" />
            </span>
            <span className="wow-brand-copy">
              <span>CHURCH OF THE</span>
              <strong>HARVEST</strong>
            </span>
          </Link>

          <nav className="wow-desktop-nav" aria-label="Primary navigation">
            <Link href="#new-here">New Here</Link>
            <Link href="/messages">Messages</Link>
            <Link href="/ministries">Ministries</Link>
            <Link href="/leadership">Leadership</Link>
            <Link href="/prayer">Prayer</Link>
            <Link href="/visit">Visit</Link>
            <Link href="#give" className="wow-nav-give">Give</Link>
          </nav>

          <button className="wow-menu-button" aria-label="Open navigation" onClick={() => setMenuOpen(true)}>
            <span /><span />
          </button>
        </header>

        <div className={`wow-mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
          <button className="wow-menu-close" aria-label="Close navigation" onClick={() => setMenuOpen(false)}>×</button>
          <p>CHURCH OF THE HARVEST</p>
          <div>
            {mobileLinks.map(([label, href]) => (
              <Link key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</Link>
            ))}
          </div>
        </div>

        <div className="wow-hero-content">
          <p className="wow-kicker">LAUREL, MISSISSIPPI · SUNDAY 10:00 AM</p>
          <h1>
            <span>FAITH</span>
            <span className="wow-gold">THAT MOVES.</span>
          </h1>
          <div className="wow-hero-bottom">
            <p>A church family rooted in God&apos;s Word, built in love, and committed to seeing lives transformed through Jesus Christ.</p>
            <div className="wow-hero-actions">
              <Link href="/visit" className="wow-button wow-button-gold">Plan Your Visit <Arrow /></Link>
              <Link href="/messages" className="wow-button wow-button-glass">Watch a Message <span aria-hidden="true">▶</span></Link>
            </div>
          </div>
        </div>

        <Link href="/visit" className="wow-service-pill">
          <span>THIS SUNDAY</span>
          <strong>10:00 AM</strong>
          <em>342 Hoy Rd · Laurel, MS</em>
          <b>↗</b>
        </Link>

        <div className="wow-scroll-cue"><span>SCROLL TO EXPERIENCE</span><i /></div>
      </section>

      <section id="new-here" className="wow-manifesto">
        <div className="wow-manifesto-line">YOU DON&apos;T JUST</div>
        <div className="wow-manifesto-line wow-outline">ATTEND CHURCH.</div>
        <div className="wow-manifesto-line">YOU FIND FAMILY.</div>
      </section>

      <section className="wow-story">
        <div className="wow-story-sticky">
          <div className="wow-story-image wow-story-image-one">
            <Image src="/images/family-community.jpg" alt="Church of the Harvest family and community" fill sizes="(max-width: 900px) 100vw, 55vw" />
          </div>
          <div className="wow-story-copy">
            <p className="wow-eyebrow">NEW HERE?</p>
            <h2>Come as you are.<br/><em>Grow from there.</em></h2>
            <p>There is room here for your questions, your family, your story and your next step. We want your first visit to feel clear, warm and easy.</p>
            <Link href="/visit" className="wow-text-link">START HERE <Arrow /></Link>
          </div>
          <div className="wow-story-image wow-story-image-two">
            <Image src="/images/church-community-formal.jpg" alt="Church of the Harvest community gathering" fill sizes="(max-width: 900px) 100vw, 30vw" />
          </div>
        </div>
      </section>

      <section className="wow-ministry" id="ministries-home">
        <div className="wow-section-head">
          <p className="wow-eyebrow">FIND YOUR PEOPLE</p>
          <h2>MINISTRY<br/><span>IN MOTION.</span></h2>
        </div>

        <div className="wow-ministry-gallery">
          <article className="wow-ministry-card wow-ministry-card-large">
            <Image src="/images/community-men.jpg" alt="Church of the Harvest men together" fill sizes="(max-width: 900px) 92vw, 46vw" />
            <div><span>01</span><h3>MEN OF<br/>STANDARD</h3></div>
          </article>
          <article className="wow-ministry-card">
            <Image src="/images/family-community.jpg" alt="Church of the Harvest family community" fill sizes="(max-width: 900px) 92vw, 34vw" />
            <div><span>02</span><h3>FAMILY &<br/>COMMUNITY</h3></div>
          </article>
          <article className="wow-ministry-card wow-ministry-card-wide">
            <Image src="/images/congregation-worship.jpg" alt="Church of the Harvest worship" fill sizes="(max-width: 900px) 92vw, 52vw" />
            <div><span>03</span><h3>WORSHIP<br/>& PRAISE</h3></div>
          </article>
          <article className="wow-ministry-card">
            <Image src="/images/church-community-formal.jpg" alt="Church of the Harvest community" fill sizes="(max-width: 900px) 92vw, 34vw" />
            <div><span>04</span><h3>ONE<br/>CHURCH</h3></div>
          </article>
        </div>

        <div className="wow-marquee" aria-hidden="true">
          <div>{[...ministries, ...ministries].map((item, i) => <span key={`${item}-${i}`}>{item}<b>✦</b></span>)}</div>
        </div>
        <div className="wow-ministry-cta"><Link href="/ministries" className="wow-button wow-button-dark">Explore All Ministries <Arrow /></Link></div>
      </section>

      <section className="wow-leadership">
        <div className="wow-leadership-media">
          <Image src="/images/pastor-robert-tonya-lewis.jpg" alt="Pastor Robert L. Lewis and Evangelist Tonya L. Lewis" fill sizes="(max-width: 900px) 100vw, 55vw" className="wow-leadership-photo" />
          <div className="wow-leadership-fallback" aria-hidden="true" />
        </div>
        <div className="wow-leadership-copy">
          <p className="wow-eyebrow">LEADING WITH PURPOSE</p>
          <h2>PASTOR ROBERT<br/><span>& TONYA LEWIS</span></h2>
          <p>A ministry built to see lives transformed. Pastor Robert L. Lewis and Evangelist Tonya L. Lewis serve with a heart for faith, family, leadership and community.</p>
          <Link href="/leadership" className="wow-button wow-button-gold">Meet Our Leadership <Arrow /></Link>
        </div>
      </section>

      <section className="wow-messages">
        <div className="wow-section-head wow-section-head-light">
          <p className="wow-eyebrow">MESSAGES FROM THE HOUSE</p>
          <h2>TRUTH THAT<br/><span>MEETS YOU HERE.</span></h2>
        </div>
        <div className="wow-message-grid">
          {messages.map((message, index) => (
            <a className={`wow-message-card ${index === 0 ? "wow-message-featured" : ""}`} key={message.id} href={`https://www.youtube.com/watch?v=${message.id}`} target="_blank" rel="noreferrer">
              <Image src={`https://img.youtube.com/vi/${message.id}/maxresdefault.jpg`} alt="" fill sizes={index === 0 ? "(max-width: 900px) 94vw, 60vw" : "(max-width: 900px) 94vw, 34vw"} />
              <div className="wow-message-shade" />
              <span className="wow-play">▶</span>
              <div className="wow-message-title"><small>WATCH NOW</small><h3>{message.title}</h3></div>
            </a>
          ))}
        </div>
        <Link href="/messages" className="wow-text-link wow-text-link-light">EXPLORE ALL MESSAGES <Arrow /></Link>
      </section>

      <section className="wow-visit">
        <div className="wow-visit-image">
          <Image src="/images/congregation.jpg" alt="Church of the Harvest congregation" fill sizes="100vw" />
        </div>
        <div className="wow-visit-overlay" />
        <div className="wow-visit-copy">
          <p className="wow-eyebrow">THIS SUNDAY · 10:00 AM</p>
          <h2>YOUR SEAT<br/>IS WAITING.</h2>
          <p>342 Hoy Rd, Laurel, MS 39443</p>
          <div>
            <Link href="/visit" className="wow-button wow-button-gold">Plan Your Visit <Arrow /></Link>
            <a href="https://www.google.com/maps/search/?api=1&query=342+Hoy+Rd+Laurel+MS+39443" target="_blank" rel="noreferrer" className="wow-button wow-button-glass">Directions <Arrow /></a>
          </div>
        </div>
      </section>

      <section id="give" className="wow-give">
        <p>GENEROSITY CHANGES THINGS.</p>
        <h2>GIVE WITH<br/><em>PURPOSE.</em></h2>
        <span>Cash App · $seedofharvest342</span>
        <a href="https://cash.app/$seedofharvest342" target="_blank" rel="noreferrer" className="wow-button wow-button-dark">Give Now <Arrow /></a>
      </section>

      <footer className="wow-footer">
        <div className="wow-footer-brand">
          <Image src="/images/church-logo.jpg" alt="Church of the Harvest" width={190} height={147} />
          <div><strong>CHURCH OF THE HARVEST</strong><span>Moving forward with a new way of living.</span></div>
        </div>
        <div className="wow-footer-links">
          <Link href="/visit">Visit</Link><Link href="/messages">Messages</Link><Link href="/ministries">Ministries</Link><Link href="/leadership">Leadership</Link><Link href="/prayer">Prayer</Link>
          <a href="https://www.facebook.com/churchoftheharvestlaurelms" target="_blank" rel="noreferrer">Facebook ↗</a>
          <a href="https://www.youtube.com/@churchoftheharvestlaurelms251" target="_blank" rel="noreferrer">YouTube ↗</a>
        </div>
        <div className="wow-footer-meta"><span>342 Hoy Rd · Laurel, Mississippi 39443</span><a href="mailto:churchoftheharvest601@gmail.com">churchoftheharvest601@gmail.com</a></div>
      </footer>
    </main>
  );
}
