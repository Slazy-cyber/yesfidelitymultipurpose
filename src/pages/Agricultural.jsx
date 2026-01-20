import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import { Home } from 'lucide-react';
import ProcessedCards from '../components/ProcessedCard.jsx'
import ProductCards from '../components/ProductCards.jsx'
import Footer from '../components/Footer.jsx'

const Agricultural = () => {
    return (
        <>
            <Navbar />
            <section className="py-20 px-6 bg-green-600 text-white">
                <div className="max-w-5xl mx-auto">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-white-600 font-medium mb-8">
                        <Home className="w-5 h-5" />
                        <span>/</span>
                        <span className="text-white-800">Agricultural Products</span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
                        Agricultural Products

                    </h1>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-white-700 max-w-3xl mb-12 leading-relaxed">

                        We offer sustainable agricultural solutions, including the production, supply, and distribution of both processed and unprocessed agricultural products. Our services also cover crop cultivation, agro-waste recycling, and support for farming operations, all aimed at improving productivity, promoting environmentally responsible practices, and contributing to food security and economic growth.
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

            <ProcessedCards />
            <ProductCards />

            <Footer />
        </>
    )
}

export default Agricultural