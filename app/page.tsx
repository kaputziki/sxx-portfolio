import { ContactSection } from "@/components/landing/contact-section";
import { ExperienceSection } from "@/components/landing/experience-section";
import { FitSection } from "@/components/landing/fit-section";
import { HeroSection } from "@/components/landing/hero-section";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";

export default function HomePage() {
  return (
    <main className="page-shell">
      <SiteHeader />
      <HeroSection />
      <FitSection />
      <ExperienceSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
