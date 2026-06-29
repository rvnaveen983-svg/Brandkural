import HeroSection from "@/components/header"
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServiceSection";
import WhyChooseUs from "@/components/WhychooseUs";
import LeadForm from "@/components/LeadForm";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection/>
      <ServicesSection/>
      <WhyChooseUs/>
      <LeadForm/>
    </main>
  );
}