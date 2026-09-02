import Link from "next/link";

export const metadata = {
  title: "Messages | Church of the Harvest",
  description: "Watch messages from Pastor Robert L. Lewis and Church of the Harvest in Laurel, Mississippi.",
};

const sermons = [
  { title: "Did You Come Expecting?", meta: "Pastor Robert Lewis · Luke 6:12-15", id: "7KwEhozE_Kc" },
  { title: "What Are You Asking God?", meta: "Pastor Robert Lewis · Church of the Harvest", id: "wu1tNQkcdNs" },
  { title: "Pastor Robert Lewis Preaching", meta: "Pastor Robert Lewis · Church of the Harvest", id: "B9Lh694lK4s" },
];

export default function MessagesPage() {
  return (
    <main className="min-h-screen bg-[#0F0F08] text-white">
      <section className="px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1320px]">
          <Link href="/" className="inline-flex items-center gap-3 text-sm text-white/55 transition hover:text-[#E8B84B]">← Back to Church of the Harvest</Link>
          <div className="py-20 lg:py-28">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#E8B84B]">Messages from the house</p>
            <h1 className="display-title mt-6 max-w-5xl text-6xl font-semibold leading-[.9] tracking-[-0.06em] sm:text-7xl lg:text-9xl">Truth for where you are. Faith for where you&apos;re going.</h1>

            <div className="mt-16 grid gap-6 lg:grid-cols-3">
              {sermons.map((sermon, index) => (
                <a key={sermon.id} href={`https://www.youtube.com/watch?v=${sermon.id}`} target="_blank" rel="noreferrer" className={`group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] ${index === 0 ? "lg:col-span-2" : ""}`}>
                  <div className={`relative overflow-hidden bg-[#2A2A18] ${index === 0 ? "aspect-[16/8.5]" : "aspect-[4/3]"}`} style={{ backgroundImage: `linear-gradient(to top,rgba(15,15,8,.6),transparent 55%),url(https://img.youtube.com/vi/${sermon.id}/maxresdefault.jpg)`, backgroundSize: "cover", backgroundPosition: "center" }}>
                    <span className="absolute left-6 top-6 text-[10px] font-bold uppercase tracking-[0.25em] text-[#E8B84B]">Message</span>
                    <span className="absolute bottom-6 right-6 grid h-16 w-16 place-items-center rounded-full bg-[#E8B84B] text-xl text-[#0F0F08] shadow-2xl transition duration-300 group-hover:scale-110">▶</span>
                  </div>
                  <div className="p-6 lg:p-8">
                    <h2 className="display-title text-3xl font-semibold tracking-[-0.04em]">{sermon.title}</h2>
                    <p className="mt-2 text-sm text-white/45">{sermon.meta}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <a href="https://www.youtube.com/@churchoftheharvestlaurelms251" target="_blank" rel="noreferrer" className="primary-cta inline-flex items-center justify-center rounded-full px-7 py-4 font-semibold">View All on YouTube →</a>
              <Link href="/visit" className="secondary-cta inline-flex items-center justify-center rounded-full px-7 py-4 font-semibold">Plan Your Visit</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
