import { Routes, Route } from "react-router-dom";
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
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route
            path="/industries"
            element={
              <>
                <Industries />
                <Certifications />
              </>
            }
          />
          <Route path="/work" element={<Work />} />
          <Route path="/stack" element={<Stack />} />
          <Route path="/process" element={<Process />} />
          <Route path="/engagements" element={<Engagements />} />
          <Route
            path="/studio"
            element={
              <>
                <Studio />
                <Testimonials />
              </>
            }
          />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}