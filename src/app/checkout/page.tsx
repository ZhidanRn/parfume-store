"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setAddress } from "@/store/addressSlice";
import { z } from "zod";

const addressSchema = z.object({
    fullName: z.string().min(3, "Nama harus minimal 3 karakter"),
    address: z.string().min(10, "Alamat harus lebih jelas"),
    city: z.string().min(3, "Kota harus minimal 3 karakter"),
    postalCode: z.string().regex(/^\d{5}$/, "Kode pos harus 5 digit"),
    phone: z.string().regex(/^08\d{8,11}$/, "Nomor HP tidak valid"),
});

type AddressForm = z.infer<typeof addressSchema>;

interface CartItem {
    name: string;
    quantity: number;
    price: number;
}

const Checkout = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state: RootState) => state.cart.items);
    const [form, setForm] = useState<AddressForm>({
        fullName: "",
        address: "",
        city: "",
        postalCode: "",
        phone: "",
    });

    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const result = addressSchema.safeParse(form);
        
        if (!result.success) {
            setError(result.error.errors[0].message);
            return;
        }

        dispatch(setAddress(form));
        redirectToWhatsApp(form, cart);
    };

    const redirectToWhatsApp = (address: AddressForm, cart: CartItem[]) => {
        const phoneNumber = "6282147840202";
        let message = `Halo, saya ingin memesan produk berikut:\n\n`;

        cart.forEach((item, index) => {
            message += `${index + 1}. ${item.name} - ${item.quantity} x Rp${item.price.toLocaleString("id-ID")}.000\n`;
        });

        message += `\n**Total Harga:** Rp${cart.reduce((total, item) => total + item.price * item.quantity, 0).toLocaleString("id-ID")}.000\n`;
        message += `\n**Alamat Pengiriman:**\n`;
        message += `Nama: ${address.fullName}\nAlamat: ${address.address}\nKota: ${address.city}\nKode Pos: ${address.postalCode}\nTelepon: ${address.phone}\n`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.location.href = whatsappUrl;
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            <h2 className="text-2xl font-bold mb-4">Alamat Pengiriman</h2>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="fullName" value={form.fullName} onChange={handleChange} placeholder="Nama Lengkap" className="w-full p-3 border rounded-lg" />
                <input type="text" name="address" value={form.address} onChange={handleChange} placeholder="Alamat Lengkap" className="w-full p-3 border rounded-lg" />
                <input type="text" name="city" value={form.city} onChange={handleChange} placeholder="Kota" className="w-full p-3 border rounded-lg" />
                <input type="text" name="postalCode" value={form.postalCode} onChange={handleChange} placeholder="Kode Pos" className="w-full p-3 border rounded-lg" />
                <input type="text" name="phone" value={form.phone} onChange={handleChange} placeholder="Nomor HP" className="w-full p-3 border rounded-lg" />
                <button type="submit" className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition">Lanjutkan ke WhatsApp</button>
            </form>
        </div>
    );
};

export default Checkout;