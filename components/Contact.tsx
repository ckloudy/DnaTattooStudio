import Link from "next/link";
import { Instagram, Facebook, MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
    return (
        <section id="contact" className="py-16 md:py-24">
            <div className="container">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Visit Our Studio
                    </h2>
                    <p className="mt-4 text-muted-foreground">
                        Drop by to meet our artists or discuss your tattoo ideas in person
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-2">
                    <div className="aspect-video relative overflow-hidden rounded-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2294.7715400649713!2d-2.932799508953449!3d54.88937920258409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487d1a2e27bb6777%3A0xd1334bb5596bdb6c!2s126%20Botchergate%2C%20Carlisle%20CA1%201SH!5e0!3m2!1sen!2suk!4v1741948695391!5m2!1sen!2suk"
                            width="650"
                            height="350"
                            className="object-cover"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-bold">Contact Information</h3>
                            <ul className="mt-4 space-y-4">
                                <li className="flex items-center gap-3">
                                    <MapPin className="h-5 w-5 text-primary" />
                                    <span>126 Botchergate, Carlisle CA1 1SH</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone className="h-5 w-5 text-primary" />
                                    <span>07808 557881</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Mail className="h-5 w-5 text-primary" />
                                    <span>info@dnatattoostudio.com</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">Hours</h3>
                            <ul className="mt-4 space-y-2">
                                <li className="flex justify-between">
                                    <span>Monday - Friday</span>
                                    <span>10:00 AM - 5:00 PM</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Saturday</span>
                                    <span>10:00 AM - 5:00 PM</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Sunday</span>
                                    <span>Closed</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">Follow Us</h3>
                            <div className="mt-4 flex gap-4">
                                <Button variant="outline" size="icon" asChild>
                                    <Link
                                        href="https://www.instagram.com/dnatattooscarlisle/"
                                        target="_blank"
                                        aria-label="Instagram">
                                        <Instagram className="h-5 w-5" />
                                    </Link>
                                </Button>
                                <Button variant="outline" size="icon" asChild>
                                    <Link
                                        href="https://www.facebook.com/p/DNATattooStudio-100086546057681/"
                                        target="_blank"
                                        aria-label="Facebook">
                                        <Facebook className="h-5 w-5" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
