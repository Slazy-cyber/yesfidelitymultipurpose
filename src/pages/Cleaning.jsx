import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { Home } from 'lucide-react';
import Footer from '../components/Footer';

const Cleaning = () => {
    return (
        <>
            <Navbar />
            <section className="py-20 px-6 bg-green-600 text-white">
                <div className="max-w-5xl mx-auto">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-white-600 font-medium mb-8">
                        <Home className="w-5 h-5" />
                        <span>/</span>
                        <span className="text-white-800">Cleaning Services & Waste Management</span>
                    </div>

                    {/* Main Heading */}
                    <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
                        Cleaning Services
                        <br />
                        & Waste Management
                    </h3>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-white-700 max-w-3xl mb-12 leading-relaxed">
                        Cleaning Services:
                        We offer comprehensive cleaning solutions for homes and offices, ensuring well-organized, hygienic, and safe environments. Our team delivers efficient and reliable services tailored to residential and corporate needs.

                        Waste Management:
                        We provide effective waste collection, evacuation, and disposal services designed to minimize environmental impact. Through responsible waste handling and recycling initiatives, we help maintain cleaner communities and promote sustainable resource management.
                    </p>

                    {/* CTA Button */}
                    <Link
                        to="/enquiry"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-green-600 text-white font-semibold text-lg rounded-full hover:bg-green-700 transition shadow-lg hover:shadow-xl"
                    >
                        Enquire Now
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </section>



            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-green-700 text-center mb-12">Our cleaning and Waste Management Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                            <h3 className="text-2xl font-semibold text-green-700 mb-4">Waste Collection & Disposal</h3>
                            <p className="text-gray-600 mb-6">
                                Reliable collection of household, commercial, and industrial waste with eco-friendly disposal methods.
                            </p>
                            <div className="space-y-4">
                                <img src="/wasteC.jpg" alt="Eco-friendly waste collection truck" className="rounded-lg mx-auto" />

                                <grok-card data-id="c63dda" data-type="image_card" data-arg-size="LARGE" ></grok-card>

                                <img src="/image.png" alt="Small garbage truck" className="rounded-lg mx-auto" />

                                <grok-card data-id="adeae6" data-type="image_card" data-arg-size="LARGE" ></grok-card>

                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                            <h3 className="text-2xl font-semibold text-green-700 mb-4">Recycling & Waste Sorting</h3>
                            <p className="text-gray-600 mb-6">
                                Expert sorting and recycling services to minimize landfill waste and promote sustainability.
                            </p>
                            <div className="space-y-4">
                                <img src="/copy.png" alt="Recycling sorting facility" className="rounded-lg mx-auto" />

                                <grok-card data-id="a1597c" data-type="image_card" data-arg-size="LARGE" ></grok-card>

                                <img src="https://www.untappedcities.com/content/images/wp-content/uploads/2023/11/sims-recycling-facility-brooklyn-tour-klaus-untapped-new-york6.jpg" alt="NYC recycling facility" className="rounded-lg mx-auto" />

                                <grok-card data-id="f0a617" data-type="image_card" data-arg-size="LARGE" ></grok-card>

                            </div>
                        </div>


                    </div>
                </div>
            </section>

            <Footer />

        </>
    )
}

export default Cleaning