import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative h-[400px] sm:h-[500px] flex items-center justify-center text-center">
            <div className="absolute inset-0">
                <Image
                    src="/images/flower.png"
                    alt="Tentang Kami"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/30"></div>
            </div>
            <div className="relative z-10 px-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-2xl">
                    Tentang Kami
                </h1>
                <p className="mt-4 text-lg sm:text-xl text-white/90 drop-shadow-lg max-w-2xl mx-auto">
                    Menghadirkan aroma yang memikat dan membangkitkan kepercayaan diri.
                </p>
            </div>
        </section>
    );
}