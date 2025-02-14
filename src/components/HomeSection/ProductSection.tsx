'use client';

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProductCard from "../common/ProductCard";
import Link from "next/link";
import productData from "@/data/product.json"

export default function ProductSection({ displayCount = 4 }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <section ref={ref} className="relative min-h-screen mt-12">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-5xl font-extrabold text-center text-gray-900 tracking-wide"
                >
                    Koleksi Parfum
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center text-gray-500 mt-3 text-lg"
                >
                    Temukan aroma terbaik yang cocok untuk gaya Anda
                </motion.p>

                {/* Grid Produk */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
                    {productData.slice(0, displayCount).map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} inView={inView} />
                    ))}
                </div>

                {/* Tombol Selengkapnya */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center mt-12"
                >
                    <Link href="/products">
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-red-500 text-white font-semibold rounded-lg shadow-lg hover:bg-red-600 transition duration-200 text-lg"
                        >
                            Lihat Semua Produk
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}