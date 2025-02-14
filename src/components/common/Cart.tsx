"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, X, Trash } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import Image from "next/image";
import { removeFromCart } from "@/store/cartSlice";
import Link from "next/link";

interface CartProps {
    isOpen: boolean;
    onClose: () => void;
}

interface CartItem {
    id: number;
    name: string;
    image: string;
    size: "30ml" | "50ml";
    price: number;
    quantity: number;
}

const Cart = ({ isOpen, onClose }: CartProps) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);

    // Menghitung total harga
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    // Fungsi untuk memformat harga
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'decimal',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(price);
    };

    const handleRemoveItem = (id: number, size: "30ml" | "50ml") => {
        dispatch(removeFromCart({ id, size }));
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }} 
                    exit={{ x: "100%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-lg z-50"
                >
                    <div className="flex justify-between items-center p-6 border-b">
                        <h2 className="text-xl font-bold">Keranjang Belanja</h2>
                        <button onClick={onClose} className="text-gray-500 hover:text-red-500">
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                    <div className="p-6 overflow-y-auto h-[calc(100vh-210px)]">
                        {cartItems.length === 0 ? (
                            <div className="text-center text-gray-500">
                                <ShoppingCart className="w-12 h-12 mx-auto mb-4" />
                                <p>Keranjang Anda kosong.</p>
                            </div>
                        ) : (
                            <ul>
                                {cartItems.map((item: CartItem) => (
                                    <li key={`${item.id}-${item.size}`} className="mb-4 flex justify-between items-center">
                                        <div className="flex items-center space-x-4">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                width={64}
                                                height={64}
                                                className="w-16 h-16 rounded-lg object-cover"
                                            />
                                            <div>
                                                <h3 className="text-lg">{item.name}</h3>
                                                <p className="text-sm text-gray-500">
                                                    {item.size} - {formatPrice(item.price)}rb x {item.quantity}
                                                </p>
                                            </div>
                                        </div>
                                        <button onClick={() => handleRemoveItem(item.id, item.size)} className="text-gray-500 hover:text-red-500">
                                            <Trash className="w-5 h-5" />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="p-6 border-t">
                        <h3 className="text-lg font-semibold flex justify-between">
                            <span>
                                Total Harga:
                            </span>
                            <span>
                                {
                                    cartItems.length === 0 ? (
                                        <span className="text-gray-500">Rp 0.0</span>
                                    ) : (
                                        <span className="text-gray-500">Rp {formatPrice(totalPrice)}.000</span>
                                    )
                                }
                            </span>
                        </h3>
                        {
                            cartItems.length === 0 ? (
                                <button
                                        onClick={onClose}
                                        className="w-full disabled:bg-gray-300 text-white py-3 rounded-lg cursor-not-allowed mt-4"
                                        disabled
                                        
                                    >
                                        Lanjutkan Transaksi
                                </button>
                            ) : (
                                <Link href="/checkout">
                                    <button
                                        onClick={onClose}
                                        className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition mt-4"
                                    >
                                        Lanjutkan Transaksi
                                    </button>
                                </Link>
                            )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Cart;