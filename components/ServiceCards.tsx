"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

import { Card, CardContent } from "@/components/ui/card";

const ServiceCards = () => {
    return (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
                {
                    title: "Custom Tattoos",
                    description:
                        "Unique designs created specifically for you, based on your ideas and vision.",
                    image: "/custom.jpg",
                },
                {
                    title: "Cover-Ups",
                    description: "Transform existing tattoos into new designs that you'll love.",
                    image: "/coverupImage.jpg",
                },
                {
                    title: "Traditional",
                    description:
                        "Bold lines and vibrant colors in the classic American traditional style.",
                    image: "/traditional.jpg",
                },
                {
                    title: "Realism",
                    description: "Photorealistic tattoos that capture incredible detail and depth.",
                    image: "/Realism.webp",
                },
                {
                    title: "Blackwork",
                    description: "Striking designs using solid black ink with bold negative space.",
                    image: "/blackout.jpg",
                },
                {
                    title: "Japanese",
                    description:
                        "Traditional Japanese imagery with flowing compositions and rich symbolism.",
                    image: "/japanese.webp",
                },
            ].map((service, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}>
                    <Card className="overflow-hidden">
                        <div className="aspect-video relative">
                            <Image
                                src={service.image || "/placeholder.svg"}
                                alt={service.title}
                                fill
                                className="object-cover transition-transform hover:scale-105"
                            />
                        </div>
                        <CardContent className="p-6">
                            <h3 className="text-xl font-bold">{service.title}</h3>
                            <p className="mt-2 text-muted-foreground">{service.description}</p>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </div>
    );
};

export default ServiceCards;
