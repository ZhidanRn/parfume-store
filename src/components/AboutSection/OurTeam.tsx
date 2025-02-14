import Image from "next/image";

export default function OurTeam() {
    return (
        <section className="py-16 sm:py-20 px-6 sm:px-12">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
                    Tim Kami
                </h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
                    Di balik setiap produk berkualitas adalah tim yang penuh semangat dan kreativitas. Berikut adalah orang-orang yang membuat semuanya mungkin.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="relative h-48 w-48 mx-auto rounded-full overflow-hidden mb-4">
                            <Image
                                src="https://randomuser.me/api/portraits/men/10.jpg"
                                alt="Team Member 1"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            John Doe
                        </h3>
                        <p className="text-gray-600">Founder & CEO</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="relative h-48 w-48 mx-auto rounded-full overflow-hidden mb-4">
                            <Image
                                src="https://randomuser.me/api/portraits/men/2.jpg"
                                alt="Team Member 2"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            Jane Smith
                        </h3>
                        <p className="text-gray-600">Head of Perfumery</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="relative h-48 w-48 mx-auto rounded-full overflow-hidden mb-4">
                            <Image
                                src="https://randomuser.me/api/portraits/men/3.jpg"
                                alt="Team Member 3"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            Michael Lee
                        </h3>
                        <p className="text-gray-600">Marketing Director</p>
                    </div>
                </div>
            </div>
        </section>
    );
}