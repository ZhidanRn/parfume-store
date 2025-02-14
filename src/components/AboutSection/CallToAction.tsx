import Link from "next/link";

export default function CallToAction() {
    return (
        <section className="bg-gradient-to-r from-red-600 to-pink-600 py-16 sm:py-20 px-6 sm:px-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Temukan Aroma yang Cocok untuk Anda
            </h2>
            <p className="text-lg text-white/90 mb-8">
                Jelajahi koleksi parfum Salna dan temukan aroma yang mencerminkan kepribadian Anda.
            </p>
            <Link href="/products">
                <button className="px-8 py-3 sm:px-10 sm:py-4 bg-white text-red-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300">
                    Lihat Koleksi
                </button>
            </Link>
        </section>
    );
}