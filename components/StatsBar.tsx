import React from "react";
import Image from "next/image";

const StatsBar = () => {
    return (
        <div>
            <section className="py-12 bg-black/90 relative mt-8">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="space-y-2">
                            <div className="text-primary text-4xl font-bold">15+</div>
                            <p className="text-muted-foreground">Years Experience</p>
                        </div>
                        <div className="space-y-2">
                            <div className="text-primary text-4xl font-bold">2,000+</div>
                            <p className="text-muted-foreground">Happy Clients</p>
                        </div>
                        <div className="space-y-2">
                            <div className="text-primary text-4xl font-bold">25+</div>
                            <p className="text-muted-foreground">Awards Won</p>
                        </div>
                        <div className="space-y-2">
                            <div className="text-primary text-4xl font-bold">3</div>
                            <p className="text-muted-foreground">Expert Artists</p>
                        </div>
                    </div>
                </div>
                <div>
                    <Image
                        src="/divider2.png"
                        alt="divider"
                        width={1440}
                        height={100}
                        priority
                        className="absolute bottom-[250px] md:bottom-[120px] rotate-180"
                    />
                    <Image
                        src="/divider2.png"
                        alt="divider"
                        width={1440}
                        height={100}
                        priority
                        className="absolute top-[250px] md:top-[120px]"
                    />
                </div>
            </section>
        </div>
    );
};

export default StatsBar;
