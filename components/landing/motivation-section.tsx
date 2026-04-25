import { motivation } from "@/data/site";
import { SectionTitle } from "./section-title";

export function MotivationSection() {
  return (
    <section id="motivation" className="anchor-offset section-shell py-20 sm:py-24">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionTitle
          eyebrow="加入理由"
          title="我更希望在真实任务里被看见，而不是只停留在“我愿意”"
          description="对我来说，三下乡的意义不仅是参与活动，更是在团队协作中承担具体职责，用稳定输出支持大家把事情做成。"
        />
        <div className="card-surface rounded-[2rem] border-orangeAccent/15 p-7 sm:p-8">
          <p className="text-base leading-9 text-ink/78">{motivation}</p>
        </div>
      </div>
    </section>
  );
}
