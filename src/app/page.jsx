import AboutUs from "./components/AboutUs";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import ServiceAreaSection from "./components/ServiceAreaSection";

export default function Home() {
  return (
    <div>
      <Banner />
      <AboutUs />
      <ServiceAreaSection />
      <Footer />
    </div>
  );
}
