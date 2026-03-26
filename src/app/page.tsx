import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { ProjectsShowcase } from "@/components/projects-showcase";
import { AboutTeaser } from "@/components/about-teaser";
import { ContactCTA } from "@/components/contact-cta";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ProjectsShowcase />
        <AboutTeaser />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
