import { fitDirections, fitProofs, fitSummary } from "@/data/site";

export function FitSection() {
  return (
    <section id="fit" className="anchor-offset section-shell py-16 sm:py-20">
      <div className="rounded-[2rem] border border-forest/10 bg-forest px-6 py-9 text-cream sm:px-8 sm:py-10 lg:px-12 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="max-w-3xl">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-orangeSoft">
              {fitSummary.eyebrow}
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
              {fitSummary.title}
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-cream/75 sm:text-base">
              {fitSummary.description}
            </p>
          </div>

          <div className="lg:justify-self-end">
            <a
              href="#contact"
              className="inline-flex rounded-full border border-orangeSoft/40 bg-white/10 px-6 py-3 text-sm font-semibold text-cream transition hover:-translate-y-0.5 hover:border-orangeSoft hover:bg-white/16"
            >
              {fitSummary.cta}
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {fitDirections.map((item) => (
            <article
              key={item.role}
              className="rounded-3xl border border-white/10 bg-white/8 p-6 backdrop-blur-sm"
            >
              <p className="text-sm font-medium tracking-[0.14em] text-orangeSoft">
                {item.label}
              </p>
              <h3 className="mt-3 text-2xl font-semibold">{item.role}</h3>
              <p className="mt-5 text-sm leading-7 text-cream/78">{item.detail}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {fitProofs.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.75rem] border border-white/8 bg-white/5 p-5"
            >
              <h3 className="text-base font-semibold text-cream">{item.title}</h3>
             <div className="mt-3 space-y-3 text-sm leading-7 text-cream/68">
  {item.text.map((paragraph, index) => (
    <p key={index}>{paragraph}</p>
  ))}
</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
