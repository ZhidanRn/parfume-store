import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Rochester } from "next/font/google";

const rochester = Rochester({ subsets: ["latin"], weight: "400" });

export default function Footer() {
    return (
        <footer className="relative bg-black text-white py-10 mt-16">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Footer Content */}
            <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                {/* Company Info */}
                <div className="mb-6 md:mb-0">
                    <h2 className={`text-3xl font-semibold ${rochester.className}`}>Salna</h2>
                    <p className="mt-2 text-gray-300 text-sm">
                        📍 Jl. Magelang No.188, Karangwaru, Kec. Tegalrejo, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55242 <br />
                        📞 +62821-4784-0202 <br />
                        ✉️ email@salna.com
                    </p>
                </div>

                {/* Social Media Links */}
                <div>
                    <h3 className="text-lg font-semibold">Ikuti Kami</h3>
                    <div className="flex justify-center md:justify-start mt-2 space-x-4">
                        <Link href="https://facebook.com" target="_blank">
                            <Facebook className="w-6 h-6 text-gray-400 hover:text-white transition" />
                        </Link>
                        <Link href="https://instagram.com" target="_blank">
                            <Instagram className="w-6 h-6 text-gray-400 hover:text-white transition" />
                        </Link>
                        <Link href="https://twitter.com" target="_blank">
                            <Twitter className="w-6 h-6 text-gray-400 hover:text-white transition" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="relative z-10 text-center text-gray-500 text-sm mt-6">
                © {new Date().getFullYear()} Salna. All Rights Reserved.
            </div>
        </footer>
    );
}
