'use client';

import { motion } from "framer-motion";
import ProductCard from "@/components/common/ProductCard";
import Link from "next/link";
import productData from "@/data/product.json";

export default function ProductPage() {
    return (
        <section className="relative min-h-screen py-16">
            <div className="container mx-auto px-6">
                {/* Judul Halaman */}
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl font-extrabold text-center text-gray-900 mt-10 tracking-wide"
                >
                    Semua Parfum
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center text-gray-500 mt-3 text-lg"
                >
                    Jelajahi berbagai aroma pilihan yang cocok untuk Anda
                </motion.p>

                {/* Grid Produk */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12"
                >
                    {productData.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} inView={true} />
                    ))}
                </motion.div>

                {/* Tombol Kembali */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <Link href="/">
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-gray-800 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-900 transition duration-200 text-lg"
                        >
                            Kembali ke Beranda
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
