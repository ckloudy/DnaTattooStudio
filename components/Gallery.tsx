import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const Gallery = () => {
    return (
        <section id="Work" className="bg-muted py-16 md:py-32">
            <div className="container">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Our Recent Work
                    </h2>
                    <p className="mt-4 text-muted-foreground">
                        Browse our portfolio of tattoos across different styles
                    </p>
                </div>
                <Tabs defaultValue="all" className="w-full">
                    <div className="flex justify-center">
                        <TabsList>
                            <TabsTrigger value="all">All</TabsTrigger>
                            <TabsTrigger value="realism">Realism</TabsTrigger>
                            <TabsTrigger value="traditional">Traditional</TabsTrigger>
                            <TabsTrigger value="japanese">Japanese</TabsTrigger>
                            <TabsTrigger value="blackwork">Blackwork</TabsTrigger>
                        </TabsList>
                    </div>
                    <TabsContent value="all" className="mt-8">
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                            {Array.from({ length: 12 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="aspect-square relative overflow-hidden rounded-md">
                                    <Image
                                        src={`/tattoo${index + 1}.jpg`}
                                        alt={`Tattoo artwork ${index + 1}`}
                                        fill
                                        className="object-cover transition-all hover:scale-110"
                                    />
                                </div>
                            ))}
                        </div>
                    </TabsContent>
                    {["realism", "traditional", "japanese", "blackwork"].map((style) => (
                        <TabsContent key={style} value={style} className="mt-8">
                            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                                {Array.from({ length: 8 }).map((_, index) => (
                                    <div
                                        key={index}
                                        className="aspect-square relative overflow-hidden rounded-md">
                                        <Image
                                            src={`https://placehold.co/600x400.png`}
                                            // ${style.charAt(0).toUpperCase() + style.slice(1)
                                            // } ${index + 1}`}

                                            alt={`${style} tattoo artwork ${index + 1}`}
                                            fill
                                            className="object-cover transition-all hover:scale-110"
                                        />
                                    </div>
                                ))}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
                <div className="mt-10 text-center">
                    <Button size="lg" variant="default" asChild>
                        <Link
                            href="https://www.instagram.com/dnatattooscarlisle/"
                            target="_blank"
                            className="inline-flex items-center gap-2">
                            Follow Us on Instagram
                            <Instagram className="h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
