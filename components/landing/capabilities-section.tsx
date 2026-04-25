import { capabilities } from "@/data/site";
import { SectionTitle } from "./section-title";

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="anchor-offset section-shell py-20 sm:py-24">
      <SectionTitle
        eyebrow="我能为队伍做什么"
        title="我更适合承担那些需要稳、清楚、能落地的工作"
        description="我希望负责人能快速看到，我不是泛泛地“愿意参与”，而是能够在新宣、调研、材料与组织支持这些具体岗位里承担清晰职责。"
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {capabilities.map((item, index) => (
          <article key={item.title} className="card-surface p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orangeSoft text-sm font-semibold text-orangeAccent">
                0{index + 1}
              </span>
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
            </div>
            <p className="mt-5 text-sm leading-7 text-ink/72">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
