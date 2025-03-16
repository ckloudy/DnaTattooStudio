"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";
import Image from "next/image";

const ArtistCards = () => {
    return (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
                {
                    name: "Alex Rivera",
                    specialty: "Realism & Portraits",
                    bio: "With over 10 years of experience, Alex specializes in photorealistic tattoos that capture incredible detail.",
                    image: "/AlexRivera.jpg",
                },
                {
                    name: "Sam Chen",
                    specialty: "Japanese & Traditional",
                    bio: "Sam's work combines traditional Japanese techniques with contemporary influences for unique pieces.",
                    image: "/SamChen.jpg",
                },
                {
                    name: "Jordan Taylor",
                    specialty: "Blackwork & Geometric",
                    bio: "Jordan creates bold, striking designs with clean lines and perfect symmetry creating visually stunning pieces.",
                    image: "/JordanTaylor.jpg",
                },
            ].map((artist, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}>
                    <Card key={index} className="overflow-hidden">
                        <div className="aspect-square relative">
                            <Image
                                src={artist.image || "/placeholder.svg"}
                                alt={artist.name}
                                fill
                                className="object-cover object-top"
                            />
                        </div>
                        <CardContent className="p-6">
                            <h3 className="text-xl font-bold">{artist.name}</h3>
                            <p className="text-primary">{artist.specialty}</p>
                            <p className="mt-2 text-muted-foreground">{artist.bio}</p>
                            <Button variant="outline" className="mt-4 w-full">
                                View Portfolio
                            </Button>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </div>
    );
};

export default ArtistCards;
