import Image from 'next/image'
import { Star, Facebook, Twitter, Instagram } from 'lucide-react'

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header Section */}
            <header className="bg-brown-800 text-white py-4">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Leather Luxe</h1>
                    <nav>
                        <ul className="flex space-x-4">
                            <li><a href="#" className="hover:text-brown-300">Home</a></li>
                            <li><a href="#" className="hover:text-brown-300">About</a></li>
                            <li><a href="#" className="hover:text-brown-300">Gallery</a></li>
                            <li><a href="#" className="hover:text-brown-300">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-brown-700 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-4">Step into Luxury</h2>
                    <p className="text-xl mb-8">Handcrafted leather shoes for the discerning gentleman</p>
                    <a href="#" className="bg-white text-brown-800 py-2 px-6 rounded-full text-lg font-semibold hover:bg-brown-100 transition duration-300">Shop Now</a>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-2">Quality Materials</h3>
                            <p>We use only the finest leather for our shoes.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-2">Handcrafted</h3>
                            <p>Each pair is meticulously crafted by skilled artisans.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-2">Comfort</h3>
                            <p>Our shoes are designed for all-day comfort.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-2">Timeless Style</h3>
                            <p>Classic designs that never go out of fashion.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="bg-brown-100 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
                    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <Star className="text-yellow-400" />
                            <Star className="text-yellow-400" />
                            <Star className="text-yellow-400" />
                            <Star className="text-yellow-400" />
                            <Star className="text-yellow-400" />
                        </div>
                        <p className="text-lg mb-4">"The quality of these shoes is unmatched. I've never felt more comfortable and stylish!"</p>
                        <p className="font-semibold">- John Doe</p>
                    </div>
                </div>
            </section>

            {/* Image Gallery */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Collection</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                            <div key={i} className="relative h-64 overflow-hidden rounded-lg">
                                <Image
                                    src={`/placeholder.svg?height=256&width=256`}
                                    alt={`Shoe ${i}`}
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-transform duration-300 hover:scale-110"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-brown-800 text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-between">
                        <div className="w-full md:w-1/3 mb-6 md:mb-0">
                            <h3 className="text-xl font-bold mb-2">Leather Luxe</h3>
                            <p>Crafting luxury for your feet since 1990.</p>
                        </div>
                        <div className="w-full md:w-1/3 mb-6 md:mb-0">
                            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
                            <ul>
                                <li><a href="#" className="hover:text-brown-300">Home</a></li>
                                <li><a href="#" className="hover:text-brown-300">About</a></li>
                                <li><a href="#" className="hover:text-brown-300">Gallery</a></li>
                                <li><a href="#" className="hover:text-brown-300">Contact</a></li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/3">
                            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="hover:text-brown-300"><Facebook /></a>
                                <a href="#" className="hover:text-brown-300"><Twitter /></a>
                                <a href="#" className="hover:text-brown-300"><Instagram /></a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <p>&copy; 2023 Leather Luxe. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}