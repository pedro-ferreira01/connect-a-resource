import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Differentials from "@/components/Differentials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <SocialProof />
      <Services />
      <Testimonials />
      <Differentials />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
