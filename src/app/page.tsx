"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./home-reference.module.css";

const nav = [
  ["About Us", "/leadership"],
  ["Ministries", "/ministries"],
  ["Messages", "/messages"],
  ["Prayer", "/prayer"],
  ["Visit", "/visit"],
];

const values = [
  {
    title: "Come As You Are",
    copy: "You do not need to have everything figured out before you walk through the doors. There is room for you here.",
    image: "/images/family-community.jpg",
  },
  {
    title: "Faith For Real Life",
    copy: "We believe God’s Word speaks into ordinary life — your family, your work, your decisions, your struggles, and your future.",
    image: "/images/congregation-worship.jpg",
  },
  {
    title: "We Grow Together",
    copy: "Church is more than a service. It is people learning, serving, praying, worshiping, and becoming stronger together.",
    image: "/images/community-men.jpg",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className={styles.page}>
      <header className={styles.nav}>
        <Link href="/" className={styles.brand}>
          <span className={styles.brandMark}>✚</span>
          <span>Church of the Harvest</span>
        </Link>

        <nav className={styles.navLinks} aria-label="Primary navigation">
          {nav.map(([label, href]) => (
            <Link key={label} href={href}>{label}</Link>
          ))}
          <Link href="#give" className={styles.navGive}>Give</Link>
        </nav>

        <button
          className={styles.menuButton}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "×" : "☰"}
        </button>

        <div className={`${styles.mobilePanel} ${menuOpen ? styles.open : ""}`}>
          {nav.map(([label, href]) => (
            <Link key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</Link>
          ))}
          <Link href="#give" onClick={() => setMenuOpen(false)}>Give</Link>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <Image
            src="/images/congregation.jpg"
            alt="Church of the Harvest congregation"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 60vw"
            className={styles.heroPhoto}
          />
          <div className={styles.heroImageWash} aria-hidden="true" />
        </div>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>Laurel, Mississippi</p>
          <h1>A place for real people to meet a real God.</h1>
          <p>
            Church of the Harvest is a community where people can worship, grow,
            belong, and take meaningful next steps with Jesus together.
          </p>
          <div className={styles.buttonRow}>
            <Link href="/visit" className={`${styles.button} ${styles.buttonSolid}`}>Plan a Visit</Link>
            <Link href="/messages" className={styles.button}>Watch a Message</Link>
          </div>
        </div>
      </section>

      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          CHURCH OF THE HARVEST — CHURCH OF THE HARVEST — CHURCH OF THE HARVEST —
        </div>
      </div>

      <section className={styles.intro}>
        <div>
          <p className={styles.kicker}>A church for people, not performance</p>
          <h2>There is room for you here.</h2>
        </div>
        <div className={styles.introBody}>
          <p>
            Walking into church can feel uncertain when you do not know what to expect.
            We want Church of the Harvest to feel different: honest, welcoming, grounded,
            and centered on the presence of God.
          </p>
          <p>
            Come meet people who are still growing, still learning, and still believing
            God can transform lives.
          </p>
          <p className={styles.serviceLine}>Join us in Laurel, Mississippi</p>
          <div className={styles.buttonRow}>
            <Link href="/leadership" className={`${styles.button} ${styles.buttonSolid}`}>Our Story</Link>
            <Link href="/visit" className={styles.button}>Visit This Sunday</Link>
          </div>
        </div>
      </section>

      <section className={styles.featurePhoto}>
        <Image src="/images/church-community-formal.jpg" alt="Church of the Harvest church family" width={1600} height={900} />
      </section>

      <section className={styles.why}>
        <div className={styles.whyHeader}>
          <h2>Why Church of the Harvest?</h2>
          <p>Because faith is meant to be lived with people.</p>
        </div>

        <div className={styles.whyGrid}>
          {values.map((item) => (
            <article className={styles.whyCard} key={item.title}>
              <Image src={item.image} alt="" width={900} height={675} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.support}>
        <div className={styles.supportImage}>
          <Image src="/images/congregation-worship.jpg" alt="Church of the Harvest worship service" width={1100} height={1200} />
        </div>
        <div className={styles.supportCopy}>
          <p className={styles.kicker}>You do not have to carry it alone</p>
          <h2>We are here for you.</h2>
          <p>
            Whether you need prayer, encouragement, or simply someone to stand with you,
            your church family is ready to meet you where you are.
          </p>
          <div className={styles.buttonRow}>
            <Link href="/prayer" className={styles.button}>Request Prayer</Link>
          </div>
        </div>
      </section>

      <section className={styles.connect} id="give">
        <div className={styles.connectGrid}>
          <h2>Stay connected.</h2>
          <div>
            <p>
              Keep up with messages, gatherings, ministries, and what God is doing through
              Church of the Harvest.
            </p>
            <form className={styles.signup} onSubmit={(event) => event.preventDefault()}>
              <input type="email" aria-label="Email address" placeholder="Your email address" />
              <button type="submit">Join</button>
            </form>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>Church of the<br />Harvest</div>
          <div>
            <h4>Explore</h4>
            <Link href="/leadership">About Us</Link>
            <Link href="/ministries">Ministries</Link>
            <Link href="/messages">Messages</Link>
          </div>
          <div>
            <h4>Next Steps</h4>
            <Link href="/visit">Plan a Visit</Link>
            <Link href="/prayer">Prayer</Link>
            <a href="https://cash.app/$seedofharvest342">Give</a>
          </div>
          <div>
            <h4>Location</h4>
            <p>342 Hoy Rd<br />Laurel, MS 39443</p>
          </div>
        </div>
        <div className={styles.footerBottom}>© Church of the Harvest. All rights reserved.</div>
      </footer>
    </main>
  );
}
