import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ProductModal from "./ProductModal";

interface Product {
    id: number;
    image: string;
    name: string;
    price30: number;
    price50: number;
}

interface ProductCardProps {
    product: Product;
    index: number;
    inView: boolean;
}

const ProductCard = ({ product, index, inView }: ProductCardProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                exit={{ opacity: 0, y: 40, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.07 }}
                whileHover={{ scale: 1.05, boxShadow: "0 12px 40px rgba(0, 0, 0, 0.12)" }}
                className="bg-white rounded-2xl p-6 overflow-hidden transition-shadow duration-300 shadow-lg cursor-pointer"
                onClick={handleCardClick}
            >
                <div className="relative w-full h-72">
                    <Image 
                        src={product.image}
                        alt={product.name}
                        layout="fill" 
                        objectFit="cover" 
                        className="rounded-xl"
                    />
                </div>
                <h3 className="text-xl mt-5 text-gray-900">{product.name}</h3>
                <div className="mt-3 space-y-1 font-thin">
                    <p className="text-gray-600 text-lg">
                        30ml: <span className="text-red-500">{product.price30}rb</span>
                    </p>
                    <p className="text-gray-600 text-lg">
                        50ml: <span className="text-red-500">{product.price50}rb</span>
                    </p>
                </div>
            </motion.div>

            {/* Render Modal jika isModalOpen true */}
            {isModalOpen && (
                <ProductModal 
                    product={product} 
                    onClose={handleCloseModal} 
                />
            )}
        </>
    );
};

export default ProductCard;