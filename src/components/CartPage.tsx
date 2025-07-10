"use client";
import Image from "next/image";
import { useCartStore } from "./store/cartStore";
import { Trash2, Plus, Minus, ChevronLeft, ShoppingCart } from "lucide-react";

export default function CartPage() {
    const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCartStore();

    if (items.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b  to-[#f8f5f2] from-[#c5baaa] p-6">
                <div className="w-full max-w-md text-center p-12 bg-white rounded-xl shadow-lg border border-[#e8e0d5]">
                    <div className="mx-auto w-24 h-24 bg-[#f8f5f2] rounded-full flex items-center justify-center mb-6">
                        <ShoppingCart className="text-[#5d7a6f]" size={40} />
                    </div>
                    <h2 className="text-3xl font-serif font-medium text-gray-800 mb-3">Your Cart is Empty</h2>
                    <p className="text-gray-600 mb-8">Discover our collection and add some items to your cart</p>
                    <a 
                        href="/menu" 
                        className="inline-flex items-center justify-center gap-2 bg-[#1a3c34] hover:bg-[#2a4c44] text-white px-8 py-3 rounded-lg transition-all font-medium tracking-wide shadow-md hover:shadow-lg"
                    >
                        Explore Our Menu
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b to-[#f8f5f2] from-[#c5baaa] pt-20 sm:pt-24 lg:pt-28 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header with back button */}
                <div className="mb-8">
                    <a href="/menu" className="inline-flex items-center text-[#1a3c34] hover:text-[#2a4c44] transition-colors group">
                        <ChevronLeft size={20} className="mr-1 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium">Continue Shopping</span>
                    </a>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left column - Cart items */}
                    <div className="lg:w-2/3">
                        <div className="flex justify-between items-center mb-8">
                            <h1 className="text-3xl font-serif font-medium text-gray-800">Your Cart <span className="text-[#5d7a6f]">({items.length})</span></h1>
                            <button
                                onClick={clearCart}
                                className="text-sm text-[#8b5e52] hover:text-[#6d463b] font-medium flex items-center gap-2 transition-colors"
                            >
                                <Trash2 size={18} />
                                Clear All
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="space-y-6">
                            {items.map((item) => (
                                <div key={item.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all border border-[#f0e9e0] group">
                                    <div className="flex flex-col sm:flex-row gap-6">
                                        {/* Product Image */}
                                        <div className="flex-shrink-0 relative overflow-hidden rounded-lg w-full sm:w-32 h-32">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover transition-transform group-hover:scale-105"
                                            />
                                        </div>

                                        {/* Product Info */}
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="text-xl font-serif font-medium text-gray-800 mb-1">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                                        {item.description}
                                                    </p>
                                                </div>
                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="text-[#8b5e52] hover:text-[#6d463b] transition-colors p-1"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                            
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-6 gap-4">
                                                {/* Quantity Controls */}
                                                <div className="flex items-center border border-[#e8e0d5] rounded-lg w-fit">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="p-2 hover:bg-[#f8f5f2] rounded-l-lg text-[#5d7a6f] hover:text-[#1a3c34] disabled:opacity-30 transition-colors"
                                                        disabled={item.quantity <= 1}
                                                    >
                                                        <Minus size={16} />
                                                    </button>
                                                    <span className="px-4 py-1 font-medium text-gray-800 min-w-[40px] text-center">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="p-2 hover:bg-[#f8f5f2] rounded-r-lg text-[#5d7a6f] hover:text-[#1a3c34] transition-colors"
                                                    >
                                                        <Plus size={16} />
                                                    </button>
                                                </div>

                                                {/* Price */}
                                                <div className="text-right">
                                                    <p className="text-xl font-serif font-medium text-gray-800">
                                                        ${(parseFloat(item.price) * item.quantity).toFixed(2)}
                                                    </p>
                                                    <p className="text-xs text-gray-500">
                                                        ${item.price} each
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right column - Order summary */}
                    <div className="lg:w-1/3">
                        <div className="bg-white rounded-xl shadow-sm p-8 sticky top-8 border border-[#f0e9e0]">
                            <h3 className="text-2xl font-serif font-medium text-gray-800 mb-8 pb-4 border-b border-[#f0e9e0]">Order Summary</h3>
                            
                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal</span>
                                    <span>${getTotalPrice().toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Tax (8%)</span>
                                    <span>${(getTotalPrice() * 0.08).toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Delivery</span>
                                    <span>$3.99</span>
                                </div>
                                
                                <div className="border-t border-[#f0e9e0] my-4"></div>
                                
                                <div className="flex justify-between text-xl font-serif font-medium text-gray-800">
                                    <span>Total</span>
                                    <span>${(getTotalPrice() + (getTotalPrice() * 0.08) + 3.99).toFixed(2)}</span>
                                </div>
                            </div>

                            <button className="w-full bg-[#1a3c34] hover:bg-[#2a4c44] text-white py-4 rounded-lg font-medium hover:shadow-lg transition-all mb-4 flex items-center justify-center gap-2 tracking-wide">
                                Secure Checkout
                            </button>
                            
                            <a 
                                href="/menu"
                                className="w-full text-center border border-[#e8e0d5] text-[#5d7a6f] hover:text-[#1a3c34] py-4 rounded-lg font-medium hover:bg-[#f8f5f2] transition-all flex items-center justify-center gap-2 tracking-wide"
                            >
                                <Plus size={16} />
                                Add More Items
                            </a>

                            <div className="mt-6 pt-6 border-t border-[#f0e9e0] text-xs text-gray-500">
                                <p className="mb-2">Free delivery for orders over $50</p>
                                <p>30-day return policy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}