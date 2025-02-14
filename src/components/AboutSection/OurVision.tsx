import Image from "next/image";

export default function OurVision() {
    return (
        <section className="bg-gray-50 py-16 sm:py-20 px-6 sm:px-12">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
                    Visi & Misi Kami
                </h2>
            </div>
            
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div className="relative h-[400px] md:h-[500px] w-full rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src="/images/vision.jpg"
                        alt="Visi & Misi Kami"
                        fill
                        className="object-cover"
                    />
                </div>
                
                {/* Text Content */}
                <div className="space-y-8">
                    {/* Visi Section */}
                    <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                            Visi Kami
                        </h3>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Menjadi brand parfum terkemuka yang dikenal di seluruh dunia, dengan aroma khas perempuan yang elegan dan mewah, serta memberikan pengalaman yang menyegarkan dan meningkatkan kepercayaan diri bagi setiap penggunanya.
                        </p>
                    </div>
                    
                    {/* Misi Section */}
                    <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                            Misi Kami
                        </h3>
                        <ul className="list-disc list-outside text-lg text-gray-700 leading-relaxed space-y-2">
                            <li><strong>Produk Berkualitas Tinggi:</strong> Menghadirkan parfum dengan bahan-bahan unggul dan inovatif.</li>
                            <li><strong>Menjangkau Berbagai Segmen:</strong> Menciptakan parfum untuk semua kalangan dengan harga terjangkau.</li>
                            <li><strong>Fokus pada Inovasi:</strong> Mengembangkan aroma yang menarik sesuai selera konsumen.</li>
                            <li><strong>Meningkatkan Kepercayaan Diri:</strong> Memberikan kesan mewah dan kenyamanan bagi pengguna.</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            {/* Keunggulan Section */}
            <div className="max-w-6xl mx-auto mt-16">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
                    Keunggulan PT. Salsabila Saputra Sinaed (Salna)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ul className="list-disc list-outside text-lg text-gray-700 leading-relaxed space-y-2">
                        <li><strong>Inovasi dan Kualitas:</strong> Parfum dengan aroma unik dan berkualitas tinggi.</li>
                        <li><strong>Harga Terjangkau:</strong> Premium namun tetap dapat diakses oleh semua kalangan.</li>
                        <li><strong>Produk untuk Semua:</strong> Tersedia untuk wanita, pria, dan unisex.</li>
                        <li><strong>Bersaing dengan Brand Ternama:</strong> Kualitas yang mampu menyaingi merek besar.</li>
                    </ul>
                    <ul className="list-disc list-outside text-lg text-gray-700 leading-relaxed space-y-2">
                        <li><strong>Pengalaman Mewah:</strong> Meningkatkan kepercayaan diri pengguna.</li>
                        <li><strong>Potensi Global:</strong> Siap meraih pasar internasional.</li>
                        <li><strong>Branding Elegan:</strong> Ciri khas dengan identitas yang kuat.</li>
                    </ul>
                </div>
            </div>
            
            {/* Closing Statement */}
            <div className="max-w-4xl mx-auto text-center mt-16">
                <p className="text-lg text-gray-700 leading-relaxed">
                    Kami berkomitmen untuk terus berinovasi dan menjaga standar kualitas tinggi agar Salna Parfum menjadi bagian tak terpisahkan dari keseharian Anda.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                    Terima kasih telah menjadi bagian dari perjalanan kami. Mari ciptakan kesan tak terlupakan bersama Salna Parfum!
                </p>
            </div>
        </section>
    );
}
