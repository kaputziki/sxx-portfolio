import { heroContent } from "@/data/site";

export function HeroSection() {
  return (
    <section className="section-shell relative pb-16 pt-14 sm:pb-20 sm:pt-20">
      <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="max-w-3xl">
          <span className="eyebrow">{heroContent.badge}</span>
          <p className="text-base font-semibold tracking-[0.25em] text-forest/70">
            {heroContent.name}
          </p>
          <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
  <span className="block">{heroContent.titleLine1}</span>
  <span className="block">{heroContent.titleLine2}</span>
  <span className="block">{heroContent.titleLine3}</span>
  <span className="block">{heroContent.titleLine4}</span>
          </h1>
          <p className="mt-4 text-sm font-medium tracking-[0.12em] text-forest/58">
            {heroContent.pageLabel}
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-ink/80 sm:text-xl">
            {heroContent.subtitle}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-ink/72">
            {heroContent.summary}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#fit"
              className="rounded-full bg-forest px-7 py-4 text-center text-base font-semibold text-cream shadow-lg shadow-forest/10 transition hover:-translate-y-0.5 hover:bg-forest/92"
            >
              立即查看岗位适配
            </a>
            <a
              href="#contact"
              className="rounded-full border border-forest/15 bg-white/75 px-7 py-4 text-center text-base font-semibold text-forest transition hover:-translate-y-0.5 hover:border-orangeAccent hover:bg-white hover:text-orangeAccent"
            >
              直接联系我
            </a>
          </div>
        </div>

        <div className="card-surface relative overflow-hidden p-6 sm:p-8">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-forest via-forest/65 to-orangeAccent" />
          <div className="grid gap-5">
            <div>
              <p className="text-sm text-ink/55">{heroContent.quickJudgeTitle}</p>
              <p className="mt-2 text-2xl font-semibold text-ink">
                {heroContent.quickJudgeRole}
              </p>
            </div>
            <div className="grid gap-3 text-sm text-ink/72 sm:grid-cols-2">
              {heroContent.quickJudgeTags.map((tag) => (
                <div key={tag} className="rounded-2xl border border-line bg-white/80 p-4">
                  {tag}
                </div>
              ))}
            </div>
            <a
              href="#fit"
              className="inline-flex w-fit text-sm font-semibold text-orangeAccent transition hover:text-forest"
            >
              查看岗位适配 ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
