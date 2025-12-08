import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import MusicTestimonials from "@/components/TestimonialCards";
import UpComingWebinars from "@/components/UpComingWebinars";

export default function Home() {
  return (
    <main className="min-h-screen antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <MusicTestimonials />
      <UpComingWebinars />
    </main>
  );
}
