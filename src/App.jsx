import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import FeaturedRooms from "./components/FeaturedRooms/FeaturedRooms";
import ServiceHighlights from "./components/ServiceHighlights/ServiceHighlights";
import Testimonials from "./components/Testimonials/Testimonials";
import TeamSection from "./components/Team/TeamSection";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <section id="hero">
            <Hero />
          </section>
          <section id="features">
            <Features />
          </section>
          <section id="featured-rooms">
            <FeaturedRooms />
          </section>
          <section id="services">
            <ServiceHighlights />
          </section>
          <section id="testimonials">
            <Testimonials />
          </section>
          <section id="team">
            <TeamSection />
          </section>
          <section id="footer">
            <Footer />
          </section>
        </main>
        <ScrollToTop />
      </div>
    </>
  );
}

export default App;

