import Link from "next/link";

export const metadata = {
  title: "Ministries | Church of the Harvest",
  description: "Explore ministries and ways to get connected at Church of the Harvest in Laurel, Mississippi.",
};

const ministries = [
  "Men of Standard",
  "Women of Purpose",
  "Seeds of the Harvest",
  "Marriage Ministry",
  "Praise Team",
  "Food Through the Word",
  "Hospitality",
  "Media Team",
  "Intercessors",
  "Choir",
  "Ushers",
  "Groundskeepers",
  "Interior Designers",
  "Armor Bearers",
  "Pastor’s Aide",
  "Security Team",
  "Parking Team",
  "Singles Ministry",
  "Custodians",
  "Deacons",
  "Kitchen Committee",
];

export default function MinistriesPage() {
  return (
    <main className="min-h-screen bg-[#FAF6EE] text-[#0F0F08]">
      <section className="px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1320px]">
          <Link href="/" className="inline-flex items-center gap-3 text-sm text-black/50 transition hover:text-[#8B6116]">← Back to Church of the Harvest</Link>
          <div className="py-20 lg:py-28">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#8B6116]">Find your place</p>
            <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
              <h1 className="display-title max-w-5xl text-6xl font-semibold leading-[.9] tracking-[-0.06em] sm:text-7xl lg:text-9xl">There is a place for you here.</h1>
              <p className="max-w-xl text-lg leading-8 text-black/55">Church of the Harvest offers many ways to serve, connect, grow, and support the life of the ministry.</p>
            </div>

            <div className="mt-16 grid gap-px overflow-hidden rounded-[2.5rem] border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
              {ministries.map((ministry, index) => (
                <article key={ministry} className="group min-h-64 bg-[#FAF6EE] p-7 transition duration-300 hover:-translate-y-1 hover:bg-white lg:p-9">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-[0.2em] text-[#9A6B16]">{String(index + 1).padStart(2, "0")}</span>
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-black/10 transition group-hover:bg-[#0F0F08] group-hover:text-white">↗</span>
                  </div>
                  <h2 className="display-title mt-20 text-3xl font-semibold tracking-[-0.04em]">{ministry}</h2>
                </article>
              ))}
            </div>

            <div className="mt-12 rounded-[2.5rem] bg-[#C8922A] p-8 sm:p-10 lg:flex lg:items-center lg:justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-black/55">Ready to connect?</p>
                <p className="display-title mt-3 text-4xl font-semibold">We’ll help you find your place.</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-4 lg:mt-0">
                <a href="mailto:churchoftheharvest601@gmail.com?subject=Ministry%20Connection" className="inline-flex items-center justify-center rounded-full bg-[#0F0F08] px-7 py-4 font-semibold text-[#F5E6C8]">Contact the Church →</a>
                <Link href="/visit" className="inline-flex items-center justify-center rounded-full border border-black/20 px-7 py-4 font-semibold">Plan Your Visit</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
