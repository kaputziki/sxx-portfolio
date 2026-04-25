import Link from "next/link";

const placeholders = [
  {
    title: "文案样例",
    hint: "可补充活动推文、人物采访稿、实践记录整理。",
  },
  {
    title: "材料样例",
    hint: "可补充调研记录、总结提纲、资料归档页面。",
  },
  {
    title: "表达样例",
    hint: "可补充自我介绍稿、汇报提纲、展示页面说明。",
  },
];

export default function ExamplesPage() {
  return (
    <main className="page-shell min-h-screen">
      <section className="section-shell py-16 sm:py-24">
        <Link
          href="/"
          className="inline-flex rounded-full border border-forest/15 px-4 py-2 text-sm font-semibold text-forest transition hover:border-orangeAccent hover:text-orangeAccent"
        >
          ← 返回首页
        </Link>

        <div className="mt-8 max-w-3xl">
          <span className="eyebrow">样例页预留</span>
          <h1 className="section-title">后续可在这里逐步补充真实样例</h1>
          <p className="section-lead">
            我已经把二级页面入口和版式空间留好。后续你可以按模块继续添加 markdown
            文案、截图、PDF 链接、按钮跳转或更完整的项目说明。
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {placeholders.map((item) => (
            <article key={item.title} className="card-surface p-6">
              <h2 className="text-xl font-semibold text-ink">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-ink/72">{item.hint}</p>
              <div className="mt-6 rounded-3xl border border-dashed border-forest/15 bg-cream/55 px-4 py-10 text-center text-sm text-ink/45">
                样例内容待补充
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
