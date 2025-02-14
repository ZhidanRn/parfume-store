import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice"; // Import action dari cartSlice

interface Product {
    id: number;
    image: string;
    name: string;
    price30: number;
    price50: number;
}

interface ProductModalProps {
    product: Product;
    onClose: () => void;
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {
    const [selectedSize, setSelectedSize] = useState<"30ml" | "50ml">("30ml");
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const handleSizeChange = (size: "30ml" | "50ml") => {
        setSelectedSize(size);
    };

    const handleIncrement = () => {
        setQuantity(prev => prev + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };

    const handleAddToCart = () => {
        const cartItem = {
            id: product.id,
            name: product.name,
            image: product.image,
            size: selectedSize,
            price: selectedSize === "30ml" ? product.price30 : product.price50,
            quantity: quantity,
        };
        dispatch(addToCart(cartItem));
        onClose();
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                onClick={onClose}
            >
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="bg-white rounded-2xl p-6 w-11/12 max-w-md"
                    onClick={(e) => e.stopPropagation()}
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
                        <div className="flex space-x-4">
                            {["30ml", "50ml"].map((size) => (
                                <motion.button
                                    key={size}
                                    onClick={() => handleSizeChange(size as "30ml" | "50ml")}
                                    className={`px-4 py-2 rounded-lg ${selectedSize === size ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700"}`}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    {size}
                                </motion.button>
                            ))}
                        </div>
                        <p className="text-gray-600 text-lg">
                            Price: <span className="text-red-500">
                                {selectedSize === "30ml" ? product.price30 : product.price50}rb
                            </span>
                        </p>
                        <div className="flex items-center space-x-4">
                            <motion.button
                                onClick={handleDecrement}
                                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg"
                                whileTap={{ scale: 0.9 }}
                            >
                                -
                            </motion.button>
                            <span className="text-lg">{quantity}</span>
                            <motion.button
                                onClick={handleIncrement}
                                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg"
                                whileTap={{ scale: 0.9 }}
                            >
                                +
                            </motion.button>
                        </div>
                    </div>
                    <div className="mt-6 flex justify-end space-x-4">
                        <motion.button
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg"
                            whileTap={{ scale: 0.9 }}
                        >
                            Close
                        </motion.button>
                        <motion.button
                            onClick={handleAddToCart}
                            className="px-4 py-2 bg-red-500 text-white rounded-lg"
                            whileTap={{ scale: 0.9 }}
                        >
                            Add to Cart
                        </motion.button>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProductModal;