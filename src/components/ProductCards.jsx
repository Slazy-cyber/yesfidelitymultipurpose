import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const products = [
    {
        badge: 'Seeds',
        title: 'Cocoa Seeds',
        description: 'Cocoa seeds are traded as whole dried seeds (often still in their shells) and are the raw material for cocoa powder, cocoa butter, and all forms of chocolate',
        image: '/Cocoa.jpg',
    },
    {
        badge: 'Hibiscus',
        title: 'Hibiscus flower',
        description: 'The hibiscus most commonly referred to in gardens, drinks, and decorations belongs to the species Hibiscus rosa-sinensis and related hybrids, though there are over 200 species in the genus.',
        image: "/Zobo.jpg",
    },
    {
        badge: 'Seeds',
        title: 'Palm kernel Seeds',
        description: 'Fresh yellow corn kernels harvested from organic farms, perfect for food processing.',
        image: '/Palm.jpg',
    },
    {
        badge: 'Roots',
        title: 'Ginger Roots',
        description: 'Aromatic long-grain basmati rice, naturally aged for superior taste and texture.',
        image: '/Ginger.jpg',
    },
    {
        badge: 'Roots',
        title: 'Cassava Roots',
        description: 'Cassava is drought-tolerant, grows in poor soils, and provides more calories per hectare than most crops, making it a critical food-security crop for hundreds of millions of people.',
        image: '/Cassava.jpg',
    },
    {
        badge: 'Grains',
        title: 'Maize',
        description: 'Maize, also called corn , is a tall annual cereal and the most widely grown grain crop in the world..',
        image: '/Maize.jpg',
    },
    {
        badge: 'Seeds',
        title: 'Moringa Seeds',
        description: 'The long, ribbed green pods (drumsticks) hang down like giant beans. When mature and dry, the pods split open into three parts, revealing rows of the winged seeds inside..',
        image: '/Moringa.jpg',
    },
    //   {
    //     badge: 'Seeds',
    //     title: 'Sunflower Seeds (Striped)',
    //     description: 'Large striped sunflower seeds perfect for oil extraction and direct consumption.',
    //     image: 'https://images.unsplash.com/photo-1610631087170-1d6b67d0b03e?w=600&h=400&fit=crop',
    //   },
];

const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    return (
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 max-w-sm mx-auto">
            <div className="relative">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 object-cover"
                />
                <span className="absolute top-4 left-4 bg-orange-100 text-orange-800 text-xs font-semibold px-4 py-2 rounded-full">
                    {product.badge}
                </span>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{product.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {product.description}
                </p>

                <div className="flex gap-3">
                    <button
                        onClick={() => navigate('/enquiry')}
                        className="flex-1 bg-white border-2 border-green-600 text-green-600 font-semibold py-3 rounded-full hover:bg-green-50 transition"
                        aria-label={`Contact for price for ${product.title}`}
                    >
                        Contact for Price
                    </button>

                </div>
            </div>
        </div>
    );
};

export default function App() {
    return (
        <>
            <div id="product-cards" className="min-h-screen bg-gray-50 py-12 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
                        Our Premium Products
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {products.map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}