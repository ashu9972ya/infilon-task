import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import HeroSection from "@/components/hero/HeroSection";
import Plans from "@/components/plans/Plans";

export default function Home() {
  return (
<div>
  <Header/>
  <HeroSection/>
  <Plans/>
  <Contact/>
  <Footer/>
</div>
  );
}
