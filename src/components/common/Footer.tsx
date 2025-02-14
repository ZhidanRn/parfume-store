import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-black text-white py-10 mt-16">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Footer Content */}
            <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                {/* Company Info */}
                <div className="mb-6 md:mb-0">
                    <h2 className="text-2xl font-bold">MyStore</h2>
                    <p className="mt-2 text-gray-300 text-sm">
                        📍 Jl. Magelang No.188, Karangwaru, Kec. Tegalrejo, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55242 <br />
                        📞 0812-3456-7890 <br />
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
                © {new Date().getFullYear()} MyStore. All Rights Reserved.
            </div>
        </footer>
    );
}
