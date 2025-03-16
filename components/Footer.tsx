import Link from "next/link";

const Footer = () => {
    return (
        <footer className="border-t bg-muted py-8">
            <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
                <div className="flex items-center gap-2 text-xl font-bold">
                    <span className="text-primary">DNA</span>TATTOO STUDIO
                </div>
                <p className="text-center text-sm text-muted-foreground md:text-left">
                    © {new Date().getFullYear()} DNA Tattoo Studio. All rights reserved.
                </p>
                <nav className="flex gap-4 text-sm">
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                        Privacy Policy
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                        Terms of Service
                    </Link>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
