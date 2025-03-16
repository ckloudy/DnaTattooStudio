import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="py-12">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left Column - Content */}
                    <div className="flex flex-col items-start text-left space-y-6">
                        <div className="space-y-3">
                            <p className="text-primary font-medium">Premium Tattoo Studio</p>
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                                Artistry in Our Blood, Ink in Our DNA.
                            </h1>
                            <p className="max-w-xl text-lg text-muted-foreground">
                                We&apos;re a small tattoo studio in Carlisle, UK. We create custom
                                tattoos crafted by expert artists. We take your inspiration and
                                vision, and create something unique to you!
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" asChild>
                                <Link href="#booking">Book a Consultation</Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link href="#gallery">View Our Work</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Right Column - Angled Image */}
                    <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
                        <div className="absolute inset-0 transform origin-top-left hero-clip">
                            <Image
                                src="/dnaShop.jpg"
                                alt="Tattoo artist at work"
                                fill
                                className="object-cover object-center"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
