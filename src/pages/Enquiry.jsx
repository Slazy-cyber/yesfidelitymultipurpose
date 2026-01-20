import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowDown, Info, Shield, Clock, CheckCircle } from 'lucide-react';

const Enquiry = () => {
    const [requestType, setRequestType] = useState('Enquiry');

    // Configuration for contact destinations (adjust company contacts as needed)
    const COMPANY_EMAIL = 'info@yesfidelity.com';
    const COMPANY_PHONE = '+2348135502388';
    const COMPANY_WHATSAPP = '+2347075205181';

    const [form, setForm] = useState({
        category: '',
        productName: '',
        description: '',
        quantity: '',
        unit: '',
        fullName: '',
        email: '',
        phone: '',
        company: '',
        notes: '',
    });

    // Preferred contact removed: submit will always open WhatsApp with full details

    const [errors, setErrors] = useState({});
    const [sent, setSent] = useState(false);

    const validateForm = () => {
        const e = {};
        if (!form.category) e.category = 'Please select a product category.';
        if (!form.productName) e.productName = 'Product name is required.';
        if (!form.description) e.description = 'Please provide a description.';
        if (!form.quantity) e.quantity = 'Please provide a quantity.';
        if (!form.unit) e.unit = 'Please select a unit.';
        if (!form.fullName) e.fullName = 'Full name is required.';
        if (!form.email) e.email = 'Email is required.';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email.';
        if (!form.phone) e.phone = 'Phone number is required.';

        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const handleInput = (key, value) => {
        setForm((s) => ({ ...s, [key]: value }));
    };

    const buildMessage = () => {
        return `Request Type: ${requestType}\nProduct Category: ${form.category}\nProduct: ${form.productName}\nDescription: ${form.description}\nQuantity: ${form.quantity} ${form.unit}\nCompany: ${form.company}\nAdditional Notes: ${form.notes}\n\nCustomer: ${form.fullName}\nEmail: ${form.email}\nPhone: ${form.phone}`;
    };

    // Preferred change handler removed (submit always sends to WhatsApp)

    const handleSubmit = (e) => {
        e.preventDefault();
        const valid = validateForm();
        if (!valid) return;
        // If the user submitted the form (not via clicking a contact), just show a confirmation message
        const message = buildMessage();
        // Normalize phone for WhatsApp link (digits only, no plus or spaces)
        const phoneDigits = COMPANY_WHATSAPP.replace(/\D/g, '');
        // Use wa.me short link and open WhatsApp in a new tab/window with prefilled message
        const waUrl = `https://wa.me/${phoneDigits}?text=${encodeURIComponent(message)}`;
        window.open(waUrl, '_blank');
        // Show a short confirmation toast to the user
        setSent(true);
        setTimeout(() => setSent(false), 6000);
    };

    return (
        <>
            <div className="relative min-h-screen bg-green-700">
                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
                    style={{
                        backgroundImage: `url('/yes-image.jpg')`,
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-green-900/60 to-green-900/80" />

                {/* Content */}
                <div className="relative z-10 flex min-h-screen flex-col">
                    {/* Breadcrumb */}
                    <div className="container mx-auto px-6 pt-8">
                        <nav className="text-sm text-green-100">
                            <Link to="/" className="text-green-200 hover:underline">Home</Link>
                            <span className="mx-2">›</span>
                            <span className="text-white">Order & Enquiry</span>
                        </nav>
                    </div>

                    {/* Main Content */}
                    <div className="container mx-auto flex flex-1 flex-col justify-center px-6 lg:px-20">
                        <div className="max-w-4xl">
                            <h1 className="mb-8 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
                                Make Your Order or Enquiry
                            </h1>

                            <p className="mb-12 text-xl leading-relaxed text-green-100 md:text-2xl">
                                Whether you need unprocessed seeds, processed products,
                                or recyclable materials – connect with us through the form
                                below or via your preferred social media channel.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col gap-4 sm:flex-row">
                                <a
                                    href="#form"
                                    className="inline-flex items-center justify-center gap-3 rounded-full bg-green-500 px-8 py-5 text-lg font-semibold text-white shadow-lg transition-all hover:bg-green-400 hover:shadow-xl hover:-translate-y-1"
                                >
                                    Fill Form
                                    <ArrowDown className="h-5 w-5" />
                                </a>

                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="min-h-screen bg-gray-50 py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-bold text-green-700 mb-2">Request Details</h1>
                    <p className="text-gray-600 mb-8">
                        Please provide detailed information about your request. We'll get back to you within{' '}
                        <span className="font-semibold">24-48 business hours</span>.
                    </p>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Main Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-2xl shadow-lg p-8">
                                <form className="space-y-8" onSubmit={handleSubmit}>
                                    {/* Product Category */}
                                    <div className="mb-8">
                                        <label className="block text-sm font-medium text-gray-700 mb-3">
                                            Product Category <span className="text-red-500">*</span>
                                        </label>
                                        <div className="space-y-3">
                                            {[
                                                'Unprocessed Agricultural Products & Seeds',
                                                'Processed Agricultural Products',
                                                'Recycling & Recyclable Materials',
                                            ].map((category) => (
                                                <label
                                                    key={category}
                                                    className="flex items-center p-4 border border-gray-200 rounded-xl hover:bg-green-50 cursor-pointer transition"
                                                >
                                                    <input
                                                        type="radio"
                                                        name="category"
                                                        value={category}
                                                        checked={form.category === category}
                                                        onChange={(e) => handleInput('category', e.target.value)}
                                                        className="w-5 h-5 text-green-600 focus:ring-green-500"
                                                    />
                                                    <span className="ml-4 text-gray-700">{category}</span>
                                                </label>
                                            ))}
                                            {errors.category && <p className="text-sm text-red-500 mt-2">{errors.category}</p>}
                                        </div>
                                    </div>

                                    {/* Request Type */}
                                    <div className="mb-8">
                                        <label className="block text-sm font-medium text-gray-700 mb-4">
                                            Request Type <span className="text-red-500">*</span>
                                        </label>
                                        <div className="flex gap-4">
                                            {['Order', 'Enquiry'].map((type) => (
                                                <button
                                                    key={type}
                                                    type="button"
                                                    onClick={() => setRequestType(type)}
                                                    className={`px-8 py-3 rounded-full font-medium transition-all ${requestType === type
                                                            ? 'bg-green-600 text-white shadow-md'
                                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                        }`}
                                                >
                                                    {type}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Product Name */}
                                    <div className="mb-6">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Product Name/Type <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter product name"
                                            value={form.productName}
                                            onChange={(e) => handleInput('productName', e.target.value)}
                                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${errors.productName ? 'border-red-500' : 'border-gray-300'}`}
                                        />
                                        {errors.productName && <p className="text-sm text-red-500 mt-2">{errors.productName}</p>}
                                    </div>

                                    {/* Description */}
                                    <div className="mb-6">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Description <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            rows={4}
                                            placeholder="Provide detailed description"
                                            value={form.description}
                                            onChange={(e) => handleInput('description', e.target.value)}
                                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${errors.description ? 'border-red-500' : 'border-gray-300'}`}
                                        />
                                        {errors.description && <p className="text-sm text-red-500 mt-2">{errors.description}</p>}
                                    </div>

                                    {/* Quantity & Unit */}
                                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                                            <input
                                                type="text"
                                                placeholder="Enter quantity"
                                                value={form.quantity}
                                                onChange={(e) => handleInput('quantity', e.target.value)}
                                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 ${errors.quantity ? 'border-red-500' : 'border-gray-300'}`}
                                            />
                                            {errors.quantity && <p className="text-sm text-red-500 mt-2">{errors.quantity}</p>}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Unit</label>
                                            <select value={form.unit} onChange={(e) => handleInput('unit', e.target.value)} className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 ${errors.unit ? 'border-red-500' : 'border-gray-300'}`}>
                                                <option value="">Select unit</option>
                                                <option>Kg</option>
                                                <option>Ton</option>
                                                <option>Liter</option>
                                                <option>Pieces</option>
                                            </select>
                                            {errors.unit && <p className="text-sm text-red-500 mt-2">{errors.unit}</p>}
                                        </div>
                                    </div>

                                    <hr className="my-10 border-gray-200" />

                                    {/* Contact Information */}
                                    <h2 className="text-2xl font-bold text-green-700 mb-6">Your Contact Information</h2>

                                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Full Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter your full name"
                                                value={form.fullName}
                                                onChange={(e) => handleInput('fullName', e.target.value)}
                                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
                                            />
                                            {errors.fullName && <p className="text-sm text-red-500 mt-2">{errors.fullName}</p>}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Email <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                placeholder="your@email.com"
                                                value={form.email}
                                                onChange={(e) => handleInput('email', e.target.value)}
                                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                            />
                                            {errors.email && <p className="text-sm text-red-500 mt-2">{errors.email}</p>}
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Phone <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                placeholder="+234 7082293603"
                                                value={form.phone}
                                                onChange={(e) => handleInput('phone', e.target.value)}
                                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                                            />
                                            {errors.phone && <p className="text-sm text-red-500 mt-2">{errors.phone}</p>}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Company <span className="text-gray-500">(optional)</span>
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Company name"
                                                value={form.company}
                                                onChange={(e) => handleInput('company', e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-8">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
                                        <textarea
                                            rows={3}
                                            placeholder="Any additional information"
                                            value={form.notes}
                                            onChange={(e) => handleInput('notes', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        />
                                    </div>

                                    {/* Note: Submit will open WhatsApp with your filled details */}
                                    <div className="mb-10">
                                        {sent && (
                                            <div role="status" aria-live="polite" className="mb-4 rounded-md bg-green-50 border border-green-200 text-green-800 px-4 py-3 text-sm">
                                                WhatsApp opened in a new tab. Please send the message to complete your request.
                                            </div>
                                        )}
                                        <p className="text-sm text-gray-600">When you click "Submit Request" your completed form will open WhatsApp with the message prefilled so you can send it directly to our number.</p>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-5 rounded-full text-lg transition shadow-lg flex items-center justify-center gap-3"
                                    >
                                        Submit Request
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>

                                    <p className="text-center text-sm text-gray-500 mt-6">
                                        By submitting, you agree to our terms and privacy policy
                                    </p>
                                </form>
                            </div>
                        </div>

                        {/* Sidebar Info Boxes */}
                        <div className="space-y-6">
                            {/* How It Works */}
                            <div className="bg-white rounded-2xl shadow-md p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <Info className="w-6 h-6 text-green-600" />
                                    <h3 className="text-xl font-bold text-gray-800">How It Works</h3>
                                </div>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>Select your product category</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>Fill in the detailed information</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>Submit your request</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>We’ll contact you via your preferred method</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Trust & Safety */}
                            <div className="bg-white rounded-2xl shadow-md p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <Shield className="w-6 h-6 text-green-600" />
                                    <h3 className="text-xl font-bold text-gray-800">Trust & Safety</h3>
                                </div>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        <span>Secure data handling</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        <span>Quick response guaranteed</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        <span>Expert support team</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Response Time */}
                            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <Clock className="w-7 h-7 text-green-600" />
                                    <h3 className="text-xl font-bold text-green-800">Response Time</h3>
                                </div>
                                <p className="text-gray-700">
                                    We aim to respond to all requests within{' '}
                                    <span className="font-bold">24-48 business hours</span>. For urgent matters,
                                    please contact us directly via phone.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






        </>
    )
}

export default Enquiry