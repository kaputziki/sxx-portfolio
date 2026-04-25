import Link from "next/link";
import { samples } from "@/data/site";
import { SectionTitle } from "./section-title";

export function SamplesSection() {
  return (
    <section id="samples" className="anchor-offset section-shell py-20 sm:py-24">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionTitle
          eyebrow="能力样例预览"
          title="先看方向，再逐步补充真实样例"
          description="这一版先把样例入口和卡片结构搭好。后续你可以把自己的文案、整理材料、表达稿件逐步补进去，形成完整的申请证据链。"
        />
        <Link
          href="/examples"
          className="inline-flex rounded-full border border-forest/15 px-5 py-3 text-sm font-semibold text-forest transition hover:border-orangeAccent hover:text-orangeAccent"
        >
          进入样例页预留入口
        </Link>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {samples.map((item) => (
          <article key={item.title} className="card-surface p-6">
            <span className="inline-flex rounded-full bg-forestSoft/60 px-3 py-1 text-xs font-semibold text-forest">
              {item.caption}
            </span>
            <h3 className="mt-5 text-xl font-semibold text-ink">{item.title}</h3>
            <p className="mt-4 text-sm leading-7 text-ink/72">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
