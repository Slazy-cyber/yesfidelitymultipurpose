import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import { ChevronLeft, ChevronRight, Sparkles, Trash2, Shield, Package, Layers, Recycle, TrendingUp, Wheat, Apple, Leaf, Sprout } from 'lucide-react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer.jsx';

const carouselImages = [
    '/wasteC.jpg',
    '/FreshCo.jpg',
    '/Recycle.jpg',



];

const HeroPage = () => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
    };


    const cardVariants = {
        offscreen: {
            y: 60,
            opacity: 0,
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.3,
                duration: 0.8,
            },
        },
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Delay between each card animation
            },
        },
    };

    return (
        <>
            <Navbar />


            <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Carousel Background */}
                <div className="absolute inset-0">
                    {carouselImages.map((image, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                                }`}
                        >
                            <div
                                className="w-full h-full bg-cover bg-center"
                                style={{ backgroundImage: `url(${image})` }}
                            />
                            <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay for text readability */}
                        </div>
                    ))}
                </div>

                {/* Carousel Controls */}
                <button
                    onClick={prevSlide}
                    className="absolute left-8 z-10 p-3 rounded-full bg-white/80 hover:bg-white text-gray-800 transition"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-8 z-10 p-3 rounded-full bg-white/80 hover:bg-white text-gray-800 transition"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {carouselImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition ${index === currentIndex ? 'bg-white' : 'bg-white/50'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 max-w-4xl mx-auto px-8 text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8">
                        YES-FIDELITY MULTIPURPOSE
                        Sustainable Solutions for a Better Tomorrow
                    </h1>
                    <p className="text-lg md:text-xl mb-12 text-gray-100">
                        Our company provides sustainable agricultural solutions, encompassing the production, supply, and distribution of processed and unprocessed products . We also specialize in buying and selling recyclable materials like plastics, paper, cartons, and metals. Additionally, our comprehensive cleaning services ensure hygienic, organized, and safe environments for homes and offices through efficient, tailored residential and corporate solutions.
                    </p>
                    <div  className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button  onClick={() => navigate('/cleaning')}  className="px-8 py-4 bg-green-600 hover:bg-green-700 rounded-full font-semibold text-lg flex items-center gap-2 transition">
                            Explore Our Services
                            <ChevronRight className="w-5 h-5" />
                        </button>
                        <button  onClick={() => navigate('/contact')} className="px-8 py-4 bg-white/20 hover:bg-white/30 backdrop-blur rounded-full font-semibold text-lg transition">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>


            <section className="py-16 px-4 bg-linear-to-b from-green-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column: Text + Service Cards */}
                        <div className="space-y-12">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                            >
                                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                    Cleaning Services & Waste Management
                                </h2>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Cleaning Services and Waste Management:

                                    Cleaning Services:
                                    We offer comprehensive cleaning solutions for homes and offices, ensuring well-organized, hygienic, and safe environments.

                                    Waste Management:
                                    We provide effective waste collection, evacuation, and disposal services designed to minimize environmental impact. Through responsible waste handling and recycling initiatives,

                                </p>
                            </motion.div>

                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                className="grid sm:grid-cols-2 gap-6"
                            >


                                {/* Card 2: Waste Collection */}
                                <motion.div
                                    variants={cardVariants}
                                    whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                                    className="bg-white rounded-2xl shadow-lg p-8 text-center transition"
                                >
                                    <img src="/wasteC.jpg" alt="Waste collection" className="w-full h-32 object-cover rounded-xl mb-4" />
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                                        <Trash2 className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Cleaning Services
                                    </h3>
                                    <p className="text-gray-600">
                                        Reliable waste collection and disposal services tailored to your schedule and needs.
                                    </p>
                                </motion.div>

                                {/* Card 3: Waste Management */}
                                <motion.div
                                    variants={cardVariants}
                                    whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                                    className="bg-white rounded-2xl shadow-lg p-8 text-center transition"
                                >
                                    <img src="/image.png" alt="Waste management" className="w-full h-32 object-cover rounded-xl mb-4" />
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                                        <Recycle className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Waste Management
                                    </h3>
                                    <p className="text-gray-600">
                                        Comprehensive waste management solutions with focus on sustainability and recycling.
                                    </p>
                                </motion.div>


                            </motion.div>
                        </div>

                        {/* Right Column: Large Hero Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <video
                                className="w-full h-96 lg:h-full min-h-96 object-cover rounded-2xl shadow-2xl"
                                autoPlay
                                loop
                                muted
                                playsInline
                            >
                                <source src="/wastevideo.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent rounded-2xl" />
                        </motion.div>
                    </div>

                    {/* Learn More Button at the Bottom */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-center mt-16"
                    >
                        <button onClick={() => navigate('/cleaning')} className="px-10 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold text-lg rounded-full transition flex items-center gap-3 mx-auto shadow-lg hover:shadow-xl">
                            Learn More
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </motion.div>
                </div>
            </section>



            <section className="py-16 px-4 bg-linear-to-b from-white to-green-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column: Large Hero Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8 }}
                            className="order-2 lg:order-1"
                        >
                            <video
                                className="w-full h-96 lg:h-full min-h-96 object-cover rounded-2xl shadow-2xl"
                                autoPlay
                                loop
                                muted
                                playsInline
                            >
                                <source src="/recyclepapper.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                              
                        </motion.div>

                        {/* Right Column: Text + Animated Cards */}
                        <div className="order-1 lg:order-2 space-y-12">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                            >
                                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                    Recyclable Materials
                                </h2>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Recyclable Materials:
                                    We specialize in the buying and selling of recyclable items such as plastics, paper, cartons, and metals. Our operations support resource recovery, reduce landfill waste, and contribute to a circular economy by transforming used materials into valuable resources for manufacturing and reuse.
                                </p>
                            </motion.div>

                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                className="grid sm:grid-cols-2 gap-6"
                            >
                                {/* Card 1: Paper & Cardboard */}
                                <motion.div
                                    variants={cardVariants}
                                    whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                                    className="bg-white rounded-2xl shadow-lg p-8 text-center transition"
                                >
                                    <img src="/pnc.png" alt="Paper and cardboard" className="w-full h-32 object-cover rounded-xl mb-4" />
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                                        <Package className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Paper & Carton
                                    </h3>
                                    <p className="text-gray-600">
                                        High-quality recycled paper and cardboard materials for industrial and commercial use.
                                    </p>
                                </motion.div>

                                {/* Card 2: Plastics */}
                                <motion.div
                                    variants={cardVariants}
                                    whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                                    className="bg-white rounded-2xl shadow-lg p-8 text-center transition"
                                >
                                    <img src="/Recycle.jpg" alt="Plastics" className="w-full h-32 object-cover rounded-xl mb-4" />
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                                        <Layers className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Plastics
                                    </h3>
                                    <p className="text-gray-600">
                                        Processed plastic materials including PET, HDPE, and other recyclable polymers.
                                    </p>
                                </motion.div>

                                {/* Card 3: plastic */}
                                <motion.div
                                    variants={cardVariants}
                                    whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                                    className="bg-white rounded-2xl shadow-lg p-8 text-center transition"
                                >
                                    <img src="/PE.jpeg" alt="Metals" className="w-full h-32 object-cover rounded-xl mb-4" />
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                                        <Recycle className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Plastic
                                    </h3>
                                    <p className="text-gray-600">
                                        Recycled metals including PE PP, and other valuable materials.
                                    </p>
                                </motion.div>


                            </motion.div>
                        </div>
                    </div>

                    {/* Learn More Button with subtle animation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-center mt-16"
                    >
                        <button onClick={() => navigate('/recycling')} className="px-10 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold text-lg rounded-full transition flex items-center gap-3 mx-auto shadow-lg hover:shadow-xl">
                            Learn More
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </motion.div>
                </div>
            </section>



            <section className="py-16 px-4 bg-linear-to-b from-green-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column: Text + Cards */}
                        <div className="space-y-12">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                            >
                                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                    Agricultural Products
                                </h2>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    We supply premium agricultural products sourced from sustainable and organic farms. Our range includes grains, fresh produce, fertilizers, and seeds that support modern farming practices.
                                </p>
                            </motion.div>

                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                className="grid sm:grid-cols-2 gap-6"
                            >
                                {/* Card 1: Organic Grains */}
                                <motion.div
                                    variants={cardVariants}
                                    whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                                    className="bg-white rounded-2xl shadow-lg p-8 text-center transition"
                                >
                                    <img src="/Maize.jpg" alt="Organic grains" className="w-full h-32 object-cover rounded-xl mb-4" />
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                                        <Wheat className="w-8 h-8 text-orange-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Organic Grains
                                    </h3>
                                    <p className="text-gray-600">
                                        Premium quality organic grains including wheat, rice, and corn from sustainable farms.
                                    </p>
                                </motion.div>

                                {/* Card 2: Fresh Produce */}
                                <motion.div
                                    variants={cardVariants}
                                    whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                                    className="bg-white rounded-2xl shadow-lg p-8 text-center transition"
                                >
                                    <img src="/FreshCo.jpg" alt="Fresh produce" className="w-full h-32 object-cover rounded-xl mb-4" />
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                                        <Apple className="w-8 h-8 text-orange-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Fresh Produce
                                    </h3>
                                    <p className="text-gray-600">
                                        Farm-fresh fruits and vegetables delivered directly from our partner growers.
                                    </p>
                                </motion.div>



                                {/* Card 3: Seeds & Plants */}
                                <motion.div
                                    variants={cardVariants}
                                    whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                                    className="bg-white rounded-2xl shadow-lg p-8 text-center transition"
                                >
                                    <img src="/Moringa.jpg" alt="Seeds and plants" className="w-full h-32 object-cover rounded-xl mb-4" />
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                                        <Sprout className="w-8 h-8 text-orange-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Seeds & Plants
                                    </h3>
                                    <p className="text-gray-600">
                                        High-quality seeds and seedlings for various agricultural applications.
                                    </p>
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Right Column: Large Hero Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div
                                className="w-full h-96 lg:h-full min-h-96 bg-cover bg-center rounded-2xl shadow-2xl"
                                style={{
                                    backgroundImage: "url(/Cassava.jpg)",
                                }}
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent rounded-2xl pointer-events-none" />
                        </motion.div>
                    </div>

                    {/* Learn More Button at the Bottom */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-center mt-16"
                    >
                        <button  onClick={() => navigate('/agricultural')} className="px-10 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold text-lg rounded-full transition flex items-center gap-3 mx-auto shadow-lg hover:shadow-xl">
                            Learn More
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </motion.div>
                </div>
            </section>
            <Footer />

        </>





    )
}

export default HeroPage