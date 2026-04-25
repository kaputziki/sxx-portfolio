import Link from "next/link";
import { navigation } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-cream/80 backdrop-blur-md">
      <div className="section-shell flex h-16 items-center justify-between">
        <Link href="/" className="text-sm font-semibold tracking-[0.18em] text-forest">
          钟宇松 / 申请页
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-ink/78 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-forest"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full border border-forest/15 bg-white/70 px-4 py-2 text-sm font-medium text-forest transition hover:border-forest hover:bg-forest hover:text-cream"
        >
          直接联系我
        </a>
      </div>
    </header>
  );
}
