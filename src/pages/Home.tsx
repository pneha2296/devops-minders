import HeroSection from "../components/home/HeroSection";
import ClientsSection from "../components/home/ClientsSection";
import { FAQSection } from "../components/home/FAQSection";
import { ServicesSection } from "../components/home/ServicesSection";
import { TestimonialsSection } from "../components/home/TestimonialsSection";
import { WhyUsSection } from "../components/home/WhyUsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <ClientsSection />
      <TestimonialsSection />
      <FAQSection />
    </>
  )
}
