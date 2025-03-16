import { Card } from "@/components/ui/card";

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-16 md:py-24 bg-black/90 text-white">
            <div className="container">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                        Client Testimonials
                    </h2>
                    <p className="mt-4 text-muted-foreground">Word On The Street Is...</p>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                            name: "Jamie L.",
                            quote: "Absolutely love my new tattoo! The artist took my rough idea and turned it into something better than I could have imagined.",
                        },
                        {
                            name: "Chris M.",
                            quote: "The studio is clean, professional, and welcoming. My artist made me feel comfortable throughout the whole process, especially as a first-timer.",
                        },
                        {
                            name: "Taylor S.",
                            quote: "I've been to many studios, but the level of detail and care here is unmatched. Will definitely be back for my next piece.",
                        },
                        {
                            name: "Olivia S.",
                            quote: "I've been to many studios, but the level of detail and care here is unmatched. Will definitely be back for my next piece.",
                        },
                        {
                            name: "Amanda P.",
                            quote: "I've been to many studios, but the level of detail and care here is unmatched. Will definitely be back for my next piece.",
                        },
                        {
                            name: "Hayley W.",
                            quote: "I've been to many studios, but the level of detail and care here is unmatched. Will definitely be back for my next piece.",
                        },
                    ].map((testimonial, index) => (
                        <Card
                            key={index}
                            className="p-6 bg-black/90 text-white border border-white/15">
                            <div className="flex items-start gap-4">
                                <div className="h-24 w-24 overflow-hidden rounded-full">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-message-circle text-primary">
                                        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-white/60">"{testimonial.quote}"</p>
                                    <p className="mt-4 font-medium">{testimonial.name}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
