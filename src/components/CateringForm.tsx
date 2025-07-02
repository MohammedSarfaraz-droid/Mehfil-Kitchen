"use client";
import { useState } from 'react';
import { FaUtensils, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function CateringForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        guests: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
        alert('Thank you for your catering request! We will contact you shortly.');
    };


    return (
        <section className="bg-[#f9f8f3] py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-[36px] font-semibold text-[#1a3c34] mb-4">Catering Inquiry</h2>
                    <p className="text-gray-700 max-w-2xl mx-auto">
                        Complete this form to request catering services. Our team will contact you within 24 hours to discuss your event details.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="lg:w-1/2">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-[#1a3c34] mb-1">Full Name*</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-[#d1d5db] rounded-lg focus:ring-2 focus:ring-[#e6d38d] focus:border-[#1a3c34] outline-none transition"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-[#1a3c34] mb-1">Email*</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-[#d1d5db] rounded-lg focus:ring-2 focus:ring-[#e6d38d] focus:border-[#1a3c34] outline-none transition"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-[#1a3c34] mb-1">Phone Number*</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-[#d1d5db] rounded-lg focus:ring-2 focus:ring-[#e6d38d] focus:border-[#1a3c34] outline-none transition"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="eventType" className="block text-sm font-medium text-[#1a3c34] mb-1">Event Type*</label>
                                    <select
                                        id="eventType"
                                        name="eventType"
                                        value={formData.eventType}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-[#d1d5db] rounded-lg focus:ring-2 focus:ring-[#e6d38d] focus:border-[#1a3c34] outline-none transition"
                                    >
                                        <option value="">Select an option</option>
                                        <option value="Birthday">Birthday</option>
                                        <option value="Wedding">Wedding</option>
                                        <option value="Corporate">Corporate Event</option>
                                        <option value="Private Party">Private Party</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="eventDate" className="block text-sm font-medium text-[#1a3c34] mb-1">Event Date*</label>
                                    <input
                                        type="date"
                                        id="eventDate"
                                        name="eventDate"
                                        value={formData.eventDate}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-[#d1d5db] rounded-lg focus:ring-2 focus:ring-[#e6d38d] focus:border-[#1a3c34] outline-none transition"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="guests" className="block text-sm font-medium text-[#1a3c34] mb-1">Number of Guests*</label>
                                    <input
                                        type="number"
                                        id="guests"
                                        name="guests"
                                        min="1"
                                        value={formData.guests}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-[#d1d5db] rounded-lg focus:ring-2 focus:ring-[#e6d38d] focus:border-[#1a3c34] outline-none transition"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-[#1a3c34] mb-1">Special Requests</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-[#d1d5db] rounded-lg focus:ring-2 focus:ring-[#e6d38d] focus:border-[#1a3c34] outline-none transition"
                                    placeholder="Dietary restrictions, menu preferences, or other details..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#1a3c34] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#2a5c54] transition duration-300 flex items-center justify-center gap-2"
                            >
                                <FaUtensils className="text-lg" />
                                Submit Catering Request
                            </button>
                        </form>
                    </div>

                    <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-md">
                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold text-[#1a3c34] mb-4">Catering Process</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="bg-[#e6d38d] text-[#1a3c34] rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                                        1
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-[#1a3c34]">Submit Your Request</h4>
                                        <p className="text-gray-600 text-sm">Fill out this form with your event details.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-[#e6d38d] text-[#1a3c34] rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                                        2
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-[#1a3c34]">Consultation</h4>
                                        <p className="text-gray-600 text-sm">Our catering manager will contact you to discuss menu options.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-[#e6d38d] text-[#1a3c34] rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                                        3
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-[#1a3c34]">Custom Proposal</h4>
                                        <p className="text-gray-600 text-sm">We&apos;ll prepare a customized proposal based on your needs.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-[#e6d38d] text-[#1a3c34] rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                                        4
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-[#1a3c34]">Confirmation</h4>
                                        <p className="text-gray-600 text-sm">Finalize details and confirm your booking.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-gray-200 pt-8">
                            <h3 className="text-2xl font-semibold text-[#1a3c34] mb-4">Contact Information</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="bg-[#e6d38d] text-[#1a3c34] rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                                        <FaPhoneAlt />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-[#1a3c34]">Phone</h4>
                                        <a href="tel:+17867634000" className="text-gray-600 hover:underline">+1 786-763-4000</a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="bg-[#e6d38d] text-[#1a3c34] rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-[#1a3c34]">Email</h4>
                                        <a href="mailto:info@mehfilkitchen.com" className="text-gray-600 hover:underline">info@mehfilkitchen.com</a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="bg-[#e6d38d] text-[#1a3c34] rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-[#1a3c34]">Location</h4>
                                        <button
                                            type="button"
                                            className="text-gray-600 hover:underline text-left"
                                            onClick={() => window.open('https://maps.google.com/?q=5264+Lincoln+Ave,+Skokie+IL+60077', '_blank')}
                                        >
                                            5264 Lincoln Ave, Skokie IL 60077
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}