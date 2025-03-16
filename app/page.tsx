import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Services from "@/components/Services";
import Artists from "@/components/Artists";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">
                <Hero />

                <StatsBar />

                <Services />

                <Artists />

                <Gallery />

                <Testimonials />

                <Booking />

                <Contact />
            </main>
        </div>
    );
}
