import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Booking = () => {
    return (
        <section id="booking" className="bg-black/90 text-primary-foreground py-16 md:py-24">
            <div className="container">
                <div className="grid gap-8 md:grid-cols-2">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                            Ready for Your Next Tattoo?
                        </h2>
                        <p className="mt-4">
                            Book a consultation with one of our artists to discuss your ideas and
                            get started on your custom tattoo journey.
                        </p>
                        <ul className="mt-8 space-y-4">
                            <li className="flex items-center gap-3">
                                <Clock className="h-5 w-5 text-primary/70" />
                                <span>Free consultation to discuss your design</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Clock className="h-5 w-5 text-primary/70" />
                                <span>Custom artwork created for your approval</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Clock className="h-5 w-5 text-primary/70" />
                                <span>Flexible scheduling for your convenience</span>
                            </li>
                        </ul>
                        <div className="mt-10">
                            <Image
                                src="/TattooMachine.png"
                                alt="Tattoo machine"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                    <Card className="bg-background text-foreground">
                        <CardContent className="p-6">
                            <h3 className="text-xl font-bold">Book Your Consultation</h3>
                            <form className="mt-4 grid gap-4">
                                <div className="grid gap-2">
                                    <label htmlFor="name" className="text-sm font-medium">
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <label htmlFor="email" className="text-sm font-medium">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="Your email"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <label htmlFor="phone" className="text-sm font-medium">
                                        Phone
                                    </label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="Your phone number"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <label htmlFor="artist" className="text-sm font-medium">
                                        Preferred Artist (Optional)
                                    </label>
                                    <select
                                        id="artist"
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                                        <option value="">No preference</option>
                                        <option value="alex">Alex Rivera</option>
                                        <option value="sam">Sam Chen</option>
                                        <option value="jordan">Jordan Taylor</option>
                                    </select>
                                </div>
                                <div className="grid gap-2">
                                    <label htmlFor="description" className="text-sm font-medium">
                                        Tattoo Description
                                    </label>
                                    <textarea
                                        id="description"
                                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="Describe your tattoo idea, size, placement, etc."
                                    />
                                </div>
                                <Button type="submit" className="w-full">
                                    Submit Request
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Booking;
