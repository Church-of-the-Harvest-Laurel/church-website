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
            style={{ objectFit: "cover" }}
          />
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

      <div className={styles.featurePhoto}>
        <Image
          src="/images/church-community-formal.jpg"
          alt="Church of the Harvest church family"
          width={1800}
          height={1100}
          sizes="100vw"
        />
      </div>

      <section className={styles.why}>
        <div className={styles.whyHeader}>
          <h2>Why Church of the Harvest</h2>
          <p>What you can expect when you become part of this church family.</p>
        </div>

        <div className={styles.whyGrid}>
          {values.map((value) => (
            <article key={value.title} className={styles.whyCard}>
              <Image src={value.image} alt="" width={900} height={700} sizes="(max-width: 900px) 100vw, 33vw" />
              <div>
                <h3>{value.title}</h3>
                <p>{value.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.support}>
        <div className={styles.supportImage}>
          <Image
            src="/images/family-community.jpg"
            alt="People connecting at Church of the Harvest"
            width={1400}
            height={1200}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
        <div className={styles.supportCopy}>
          <p className={styles.kicker}>Prayer & Support</p>
          <h2>You do not have to carry it alone.</h2>
          <p>
            Whatever season you are walking through, we believe prayer matters and
            community matters. Tell us how we can stand with you.
          </p>
          <div className={styles.buttonRow}>
            <Link href="/prayer" className={styles.button}>Request Prayer</Link>
            <Link href="/ministries" className={styles.button}>Find Community</Link>
          </div>
        </div>
      </section>

      <section className={styles.connect}>
        <div className={styles.connectGrid}>
          <div>
            <p className={styles.kicker}>Stay Connected</p>
            <h2>Keep up with what is happening.</h2>
          </div>
          <p>
            Church gets stronger when people stay connected beyond Sunday. Follow the
            life of the church, hear about upcoming gatherings, and find your next step.
          </p>
        </div>
        <div className={styles.signup}>
          <input aria-label="Email address" type="email" placeholder="Email address" />
          <button type="button">Join Updates →</button>
        </div>
      </section>

      <footer className={styles.footer} id="give">
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>Church of<br />the Harvest</div>
          <div>
            <h4>About</h4>
            <Link href="/leadership">Leadership</Link>
            <Link href="/visit">Plan a Visit</Link>
            <Link href="/prayer">Prayer</Link>
          </div>
          <div>
            <h4>Connect</h4>
            <Link href="/ministries">Ministries</Link>
            <Link href="/messages">Messages</Link>
            <Link href="/visit">Location</Link>
          </div>
          <div>
            <h4>Take a Step</h4>
            <Link href="/visit">Come Sunday</Link>
            <Link href="/ministries">Get Involved</Link>
            <Link href="#give">Give</Link>
          </div>
        </div>
        <div className={styles.footerBottom}>© 2026 Church of the Harvest</div>
      </footer>
    </main>
  );
}
