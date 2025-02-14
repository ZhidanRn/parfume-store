import Image from "next/image";

export default function AboutContent() {
    return (
        <section className="py-16 sm:py-20 px-6 sm:px-12">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src="/images/team.jpg"
                            alt="Cerita Kami"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                            PT Salsabila Saputra Sinaed
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            PT Salsabila Saputra Sinaed hadir dengan semangat menghadirkan aroma yang tak hanya memikat, tetapi juga membangkitkan kepercayaan diri. Dengan brand Salna, kami menawarkan beragam pilihan parfum berkualitas tinggi yang dirancang khusus untuk memanjakan indera penciuman. Aroma unik kami, yang terinspirasi dari keindahan alam dan tren terkini, mampu meningkatkan self-value setiap individu.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Tak hanya itu, kami juga berkomitmen untuk menyediakan produk dengan harga terjangkau tanpa mengorbankan kualitas, sehingga parfum Salna dapat dinikmati oleh semua kalangan.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}