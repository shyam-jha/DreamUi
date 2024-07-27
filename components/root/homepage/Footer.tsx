import Link from "next/link";

const Footer = () => {
    return (
        <footer className="mt-12 py-6 border-t">
            <div className="container md:mx-auto flex flex-col md:flex-row items-center justify-between">
                <div>
                    <p className="text-sm text-muted-foreground">&copy; 2024 Dream UI. All rights reserved.</p>
                </div>
                <nav className="flex items-center gap-4">
                    <Link href="#" className="text-sm hover:underline" prefetch={false}>
                        Terms of Service
                    </Link>
                    <Link href="#" className="text-sm hover:underline" prefetch={false}>
                        Privacy Policy
                    </Link>
                    <Link href="#" className="text-sm hover:underline" prefetch={false}>
                        Sitemap
                    </Link>
                    <Link href="#" className="text-sm hover:underline" prefetch={false}>
                        Contact Us
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <Link href="#" className="text-sm hover:underline" prefetch={false}>
                        Twitter
                    </Link>
                    <Link href="#" className="text-sm hover:underline" prefetch={false}>
                        LinkedIn
                    </Link>
                    <Link href="#" className="text-sm hover:underline" prefetch={false}>
                        GitHub
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;