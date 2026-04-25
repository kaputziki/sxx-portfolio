"use client";

import { useState } from "react";
import { contact } from "@/data/site";
import { SectionTitle } from "./section-title";

const contactItems = [
  { label: "微信", value: contact.wechat, copyLabel: "复制微信号" },
  { label: "手机", value: contact.phone, copyLabel: "复制手机号" },
  { label: "邮箱", value: contact.email, copyLabel: "复制邮箱" },
];

export function ContactSection() {
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);

  async function handleCopy(label: string, value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedLabel(label);
      window.setTimeout(() => setCopiedLabel(null), 1800);
    } catch {
      setCopiedLabel(null);
    }
  }

  return (
    <section id="contact" className="anchor-offset section-shell pb-24 pt-16 sm:pb-28 sm:pt-20">
      <div className="rounded-[2rem] border border-forest/10 bg-white/78 p-7 shadow-card backdrop-blur-sm sm:p-10">
        <SectionTitle
          eyebrow="联系方式"
          title={contact.title}
          description={contact.description}
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {contactItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => handleCopy(item.label, item.value)}
              className="group rounded-3xl border border-line bg-cream/68 p-5 text-left transition hover:-translate-y-0.5 hover:border-orangeAccent/45 hover:bg-white"
            >
              <p className="text-sm text-ink/55">{item.label}</p>
              <p className="mt-2 text-lg font-semibold text-ink">{item.value}</p>
              <p className="mt-4 text-sm font-medium text-forest transition group-hover:text-orangeAccent">
                {copiedLabel === item.label ? "已复制" : item.copyLabel}
              </p>
            </button>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href={contact.resumeHref}
            className="inline-flex items-center justify-center rounded-full bg-orangeAccent px-7 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-forest"
          >
            {contact.resumeLabel}
          </a>
          <a
            href="#fit"
            className="inline-flex items-center justify-center rounded-full border border-forest/15 bg-white/80 px-7 py-4 text-base font-semibold text-forest transition hover:-translate-y-0.5 hover:border-orangeAccent hover:text-orangeAccent"
          >
            {contact.backToFitLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
