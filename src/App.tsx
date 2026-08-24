import { TopBar, Nav } from "./sections/nav";
import { Hero } from "./sections/hero";
import { Capabilities } from "./sections/capabilities";
import { Industries, Certifications } from "./sections/industries";
import { Work } from "./sections/work";
import { Stack } from "./sections/stack";
import { Process } from "./sections/process";
import { Engagements } from "./sections/engagements";
import { Studio, Testimonials } from "./sections/studio";
import { Faq } from "./sections/faq";
import { Contact, Footer } from "./sections/contact";

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink antialiased">
      {/* film grain over everything */}
      <div className="noise-overlay" aria-hidden />

      <TopBar />
      <Nav />

      <main>
        <Hero />
        <Capabilities />
        <Industries />
        <Certifications />
        <Work />
        <Stack />
        <Process />
        <Engagements />
        <Studio />
        <Testimonials />
        <Faq />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
