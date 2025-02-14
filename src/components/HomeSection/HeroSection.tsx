import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="min-h-screen">
            <div className="absolute inset-0 w-full h-full">
                <div className="relative w-full h-full">
                    <Image
                        className="object-cover"
                        src="/images/bg-img.png"
                        alt="Hero Background"
                        fill
                        priority
                    />
                    <Image 
                        className="object-cover"
                        src="/images/red-overlay.png"
                        alt="Hero Background"
                        fill
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-red-500/50 to-black/50"></div>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
                    <h1 className="text-6xl md:text-5xl font-extrabold drop-shadow-2xl tracking-wide">
                        Temukan Aroma yang Menggoda
                    </h1>
                    <p className="mt-4 max-w-5xl text-lg md:text-xl drop-shadow-lg opacity-90">
                        Selami dunia keharuman yang memikat dengan koleksi parfum kami yang dirancang khusus untuk mengekspresikan kepribadian Anda. Setiap semprotan adalah perjalanan yang membawa Anda ke dalam nuansa elegan dan menawan, sempurna untuk setiap momen berharga dalam hidup Anda.
                    </p>
                    <Link href="/products">
                        <button 
                            className="mt-6 px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition duration-300"
                        >
                            Jelajahi Koleksi Kami
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}