import HeroSection from "@/components/AboutSection/HeroSection";
import AboutContent from "@/components/AboutSection/AboutContent";
import OurVision from "@/components/AboutSection/OurVision";
import OurTeam from "@/components/AboutSection/OurTeam";
import CallToAction from "@/components/AboutSection/CallToAction";

export default function AboutPage() {
    return (
        <main className="bg-white text-gray-900">
            <HeroSection />
            <AboutContent />
            <OurVision />
            <OurTeam />
            <CallToAction />
        </main>
    );
}