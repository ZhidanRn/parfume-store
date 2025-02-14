"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Rochester } from "next/font/google";
import Cart from "@/components/common/Cart";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const rochester = Rochester({ subsets: ["latin"], weight: "400" });

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false); // State untuk mengontrol tampilan cart
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const cartItems = useSelector((state: RootState) => state.cart.items);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isHome = pathname === "/";

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-lg 
                    ${isHome && !isScrolled ? "bg-transparent" : "bg-gray-100 bg-opacity-90 shadow-lg"}`}
            >
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/">
                        <span className={`text-3xl font-extrabold tracking-wide ${rochester.className} ${isScrolled || !isHome ? "text-red-500" : "text-white"}`}>
                            SALNA
                        </span>
                    </Link>
                    
                    {/* Navigasi - Desktop */}
                    <ul className={`hidden md:flex space-x-6 font-medium ${isScrolled || !isHome ? "text-gray-900 font-bold" : "text-white"}`}>
                        {[
                            { href: "/", label: "Beranda" },
                            { href: "/products", label: "Produk" },
                            { href: "/about", label: "Tentang Kami" },
                        ].map(({ href, label }) => (
                            <li key={href}>
                                <Link 
                                    href={href} 
                                    className={`hover:text-red-500 transition ${pathname === href ? "text-red-500 border-b-2 border-red-500" : ""}`}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Ikon Keranjang dan Menu */}
                    <div className="flex items-center space-x-4">
                        <div className="relative cursor-pointer">
                            <button onClick={() => setIsCartOpen(true)}>
                                <ShoppingCart className={`w-7 h-7 hover:text-red-500 transition duration-300 ${isScrolled || !isHome ? "text-gray-900" : "text-white"}`} />
                            </button>
                            {/* Tampilkan jumlah item di keranjang */}
                            {cartItems.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-md animate-bounce">
                                    {cartItems.length}
                                </span>
                            )}
                        </div>

                        {/* Hamburger Menu (Mobile) */}
                        <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden ${isScrolled || !isHome ? "text-gray-900" : "text-white"}}`}>
                            {isOpen ? <X className={`w-7 h-7 ${isScrolled || !isHome ? "text-gray-900" : "text-white"}`} /> : <Menu className={`w-7 h-7 ${isScrolled || !isHome ? "text-gray-900" : "text-white"}`} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-gray-100 bg-opacity-50 shadow-md py-4">
                        <ul className="text-center text-gray-900 space-y-4">
                            {[
                                { href: "/", label: "Beranda" },
                                { href: "/products", label: "Produk" },
                                { href: "/about", label: "Tentang Kami" },
                            ].map(({ href, label }) => (
                                <li key={href}>
                                    <Link 
                                        href={href} 
                                        className={`block py-2 hover:text-red-500 ${pathname === href ? "text-red-500 font-bold" : ""}`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </nav>

            {/* Tampilkan Cart */}
            <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </>
    );
}