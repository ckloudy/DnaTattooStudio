"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
            <div className="container flex h-16 items-center justify-between py-4">
                <Link href="/" className="flex items-center gap-2 text-xl font-bold">
                    <span className="text-primary">DNA</span>TATTOO STUDIO
                </Link>
                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-6">
                    <Link href="#services" className="text-sm font-medium hover:text-primary">
                        Services
                    </Link>
                    <Link href="#artists" className="text-sm font-medium hover:text-primary">
                        Artists
                    </Link>
                    <Link href="#Work" className="text-sm font-medium hover:text-primary">
                        Work
                    </Link>
                    <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
                        Testimonials
                    </Link>
                    <Link href="#contact" className="text-sm font-medium hover:text-primary">
                        Contact
                    </Link>
                </nav>

                <div className="flex items-center gap-2">
                    {/* Desktop Button */}
                    <Button asChild className="hidden md:inline-flex">
                        <Link href="#booking">Book Now</Link>
                    </Button>

                    {/* Mobile Toggle Button */}
                    <Button
                        variant="outline"
                        size="icon"
                        className="md:hidden"
                        onClick={toggleMenu}>
                        <span className="sr-only">Toggle menu</span>
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
                            className="h-6 w-6">
                            <line x1="4" x2="20" y1="12" y2="12" />
                            <line x1="4" x2="20" y1="6" y2="6" />
                            <line x1="4" x2="20" y1="18" y2="18" />
                        </svg>
                    </Button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-2 p-4 space-y-2 bg-white shadow-inner border-t text-center">
                    <Link href="#services" className="block text-sm font-medium hover:text-primary">
                        Services
                    </Link>
                    <Link href="#artists" className="block text-sm font-medium hover:text-primary">
                        Artists
                    </Link>
                    <Link href="#Work" className="block text-sm font-medium hover:text-primary">
                        Work
                    </Link>
                    <Link
                        href="#testimonials"
                        className="block text-sm font-medium hover:text-primary">
                        Testimonials
                    </Link>
                    <Link href="#contact" className="block text-sm font-medium hover:text-primary">
                        Contact
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Nav;
