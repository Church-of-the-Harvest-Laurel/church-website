"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "./motivation.css";

const nav = [["About","/leadership"],["New Here?","/visit"],["Ministries","/ministries"],["Sermons","/messages"],["Prayer","/prayer"]];
const ministries = ["Seeds of the Harvest","Men of Standard","Women of Purpose","Marriage Ministry"];

export default function Home(){
 const [open,setOpen]=useState(false);
 return <main className="mc">
  <header className="mc-nav">
   <Link href="/" className="mc-logo"><Image src="/images/church-logo.jpg" alt="Church of the Harvest" width={260} height={200} priority/></Link>
   <nav>{nav.map(([n,h])=><Link key={n} href={h}>{n}</Link>)}<Link href="#give">Give</Link></nav>
   <button onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open?"Close":"Menu"}</button>
   {open&&<div className="mc-mobile">{nav.map(([n,h])=><Link key={n} href={h} onClick={()=>setOpen(false)}>{n}</Link>)}<Link href="#give">Give</Link></div>}
  </header>

  <section className="mc-top">
   <div className="mc-topline"><span>In Laurel As It Is In Heaven</span><span>Join Us This Sunday</span><strong>10:00 AM</strong><Link href="/visit">New Here?</Link></div>
   <div className="mc-hero-photo"><Image src="/images/congregation.jpg" alt="Church of the Harvest worship service" fill priority sizes="100vw"/></div>
  </section>

  <section className="mc-mission">
   <p>CHURCH OF THE HARVEST · LAUREL, MISSISSIPPI</p>
   <h1>Love God. Love People.<br/>Grow Together.</h1>
   <h2>We are a church family rooted in God&apos;s Word, built in love, and committed to seeing lives transformed through Jesus Christ.</h2>
   <div className="mc-actions"><Link href="/visit">Plan My Visit</Link><Link href="/leadership">Who We Are</Link></div>
  </section>

  <section className="mc-photo-pair">
   <div><Image src="/images/family-community.jpg" alt="Church family" fill sizes="50vw"/></div>
   <div><Image src="/images/church-community-formal.jpg" alt="Church community" fill sizes="50vw"/></div>
  </section>

  <section className="mc-events">
   <div className="mc-title-row"><h2>Life at the Harvest</h2><Link href="/ministries">View Ministries</Link></div>
   <div className="mc-event-grid">
    <article><Image src="/images/community-men.jpg" alt="Men of Standard" fill sizes="33vw"/><div><small>MINISTRY</small><h3>Men of Standard</h3><Link href="/ministries">Learn More</Link></div></article>
    <article><Image src="/images/family-community.jpg" alt="Church family" fill sizes="33vw"/><div><small>COMMUNITY</small><h3>Growing Together</h3><Link href="/ministries">Learn More</Link></div></article>
    <article><Image src="/images/congregation.jpg" alt="Sunday worship" fill sizes="33vw"/><div><small>SUNDAY</small><h3>Worship Together</h3><Link href="/visit">Plan Your Visit</Link></div></article>
   </div>
  </section>

  <section className="mc-welcome">
   <p>Welcome Home</p><h2>There is a place here for Everybody</h2>
   <div className="mc-ministry-links">{ministries.map(x=><Link href="/ministries" key={x}><span>{x}</span><b>Learn More →</b></Link>)}</div>
  </section>

  <section className="mc-sermon">
   <div className="mc-sermon-image"><Image src="https://img.youtube.com/vi/7KwEhozE_Kc/maxresdefault.jpg" alt="Latest sermon" fill sizes="60vw"/></div>
   <div className="mc-sermon-copy"><p>Latest Sermon</p><h2>Did You Come Expecting?</h2><span>Pastor Robert Lewis · Luke 6:12–15</span><a href="https://www.youtube.com/watch?v=7KwEhozE_Kc" target="_blank" rel="noreferrer">Watch Now</a></div>
  </section>

  <section className="mc-invite">
   <div className="mc-invite-copy"><p>Join us This Sunday</p><h2>You&apos;re Invited</h2><h3>Whether you are exploring faith, looking for a church home, or have been a believer for years, there is a place for you here.</h3><Link href="/visit">Plan your Visit</Link></div>
   <div className="mc-invite-images"><div><Image src="/images/congregation.jpg" alt="Sunday at Church of the Harvest" fill sizes="50vw"/></div><div><Image src="/images/church-community-formal.jpg" alt="Church community" fill sizes="50vw"/></div></div>
  </section>

  <section id="give" className="mc-service">
   <div><p>Sunday Services</p><h2>10:00 AM</h2><span>342 Hoy Rd<br/>Laurel, MS 39443</span></div>
   <div><p>Generosity</p><h2>Give</h2><span>Cash App · $seedofharvest342</span><a href="https://cash.app/$seedofharvest342" target="_blank" rel="noreferrer">Give Now</a></div>
  </section>

  <footer className="mc-footer"><Image src="/images/church-logo.jpg" alt="Church of the Harvest" width={220} height={170}/><div><Link href="/leadership">About</Link><Link href="/visit">New Here?</Link><Link href="/messages">Sermons</Link><Link href="/ministries">Ministries</Link><Link href="/prayer">Prayer</Link></div><p>© Church of the Harvest · Laurel, Mississippi</p></footer>
 </main>;
}
