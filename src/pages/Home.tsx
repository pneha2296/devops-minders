import ClientsSection from "../components/home/ClientsSection";
import { FAQSection } from "../components/home/FAQSection";
import { TestimonialsSection } from "../components/home/TestimonialsSection";
import { WhyUsSection } from "../components/home/WhyUsSection";

export default function Home() {
  return (
    <>
      <WhyUsSection />
      <ClientsSection />
      <TestimonialsSection />
      <FAQSection />
    </>
  )
}
