import { experienceSummary, experiences } from "@/data/site";
import { SectionTitle } from "./section-title";

export function ExperienceSection() {
  return (
    <section id="experience" className="anchor-offset section-shell py-16 sm:py-20">
      <SectionTitle
        eyebrow={experienceSummary.eyebrow}
        title={experienceSummary.title}
        description={experienceSummary.description}
      />
      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {experiences.map((item, index) => (
          <article
            key={item.title}
            className="card-surface relative overflow-hidden p-6 sm:p-7"
          >
            <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-orangeSoft/40 blur-2xl" />
            <p className="text-sm font-medium tracking-[0.14em] text-forest/60">
              证据 {index + 1}
              </p>
            <h3 className="mt-3 text-xl font-semibold text-ink">{item.title}</h3>

<img
  src={item.image}
  alt={item.title}
  className="mt-5 w-full rounded-2xl border border-slate-200 object-cover"
/>

<div className="mt-5 space-y-4 max-w-2xl text-sm leading-7 text-ink/72">
  {item.text.map((paragraph, paragraphIndex) => (
    <p key={paragraphIndex}>{paragraph}</p>
  ))}
</div>
          </article>
        ))}
      </div>
    </section>
  );
}
