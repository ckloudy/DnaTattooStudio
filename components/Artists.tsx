import Image from "next/image";
import ArtistCards from "./ArtistCards";

const Artists = () => {
    return (
        <section id="artists" className="py-16 md:py-24 bg-black/90 relative">
            <div className="container">
                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-bold tracking-tight sm:text-6xl text-white">
                        Meet Our Incredible Artists
                    </h2>
                    <p className="mt-4 text-muted-foreground">
                        Talented professionals dedicated to bringing your tattoo ideas to life
                    </p>
                </div>
                <ArtistCards />
            </div>
            <div>
                <Image
                    src="/divider2.png"
                    alt="divider"
                    width={1440}
                    height={100}
                    priority
                    className="absolute -bottom-16 sm:-bottom-20 md:-bottom-30 lg:-bottom-40"
                />
            </div>
        </section>
    );
};

export default Artists;
