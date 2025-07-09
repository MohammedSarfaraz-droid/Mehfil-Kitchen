"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
    {
        title: "Hyderabadi Mutton Dum Biryani",
        price: "17.99",
        image: "/hyderabadi-mutton-dum-biryani.png",
        categories: "mutton rice",
        description: "Traditional dum biryani layered with juicy marinated mutton, saffron rice, and Hyderabadi herbs.",
    },
    {
        title: "Hyderabadi Chicken Dum Biryani",
        price: "12.99",
        image: "/hyderabadi-chicken-dum-biryani.png",
        categories: "chicken rice",
        description: "Classic layered biryani with marinated chicken, basmati rice, and aromatic spices cooked on dum.",
    },
    {
        title: "Shahi Rice",
        price: "4.99",
        image: "/shahi-rice.png",
        categories: "rice",
        description: "Fragrant long grain rice cooked with saffron, nuts, and light spice mix — perfect with any curry.",
    },
    {
        title: "Plain Rice",
        price: "2.99",
        image: "/plain-rice.png",
        categories: "rice",
        description: "Fragrant long grain rice - perfect with any curry.",
    },
    {
        title: "Chicken Reshmi Kabob",
        price: "14.99",
        image: "/chicken-reshmi-kabob.png",
        categories: "chicken",
        description: "Juicy minced chicken skewers, marinated in creamy yogurt and spices, grilled to perfection.",
    },
    {
        title: "Chicken Boti Kabob",
        price: "14.99",
        image: "/chicken-boti-kabob.png",
        categories: "chicken",
        description: "Boneless chicken cubes marinated with rich Indian spices and grilled until juicy and flavorful.",
    },
    {
        title: "Chicken Malai Boti",
        price: "14.99",
        image: "/chicken-malai-boti.png",
        categories: "chicken",
        description: "Soft, creamy chicken pieces cooked with cheese and cream-based marinade for a melt-in-mouth experience.",
    },
    {
        title: "Chicken-65",
        price: "12.99",
        image: "/chicken-65.png",
        categories: "chicken",
        description: "Fiery South Indian style fried chicken tossed with curry leaves, garlic, and spice mix.",
    },
    {
        title: "Majestic Chicken",
        price: "12.99",
        image: "/majestic-chicken.png",
        categories: "chicken",
        description: "Crispy chicken tossed with dry spices, curry leaves, and seasoning — a Hyderabadi special.",
    },
    {
        title: "Badami Chicken",
        price: "11.99",
        image: "/badami-chicken.png",
        categories: "chicken",
        description: "A creamy almond-based chicken curry infused with saffron and aromatic spices.",
    },
    {
        title: "Chicken Kadai",
        price: "12.99",
        image: "/chicken-kadai.png",
        categories: "chicken",
        description: "Tender chicken cooked in a rich tomato-based gravy with bell peppers and traditional Indian spices",
    },
    {
        title: "Butter Chicken",
        price: "13.99",
        image: "/butter-chicken.png",
        categories: "chicken",
        description: "Tandoori chicken simmered in a buttery tomato sauce with fenugreek and cream.",
    },
    {
        title: "Mehfils Chicken",
        price: "13.99",
        image: "/mehfil-chicken.png",
        categories: "chicken",
        description: "Signature dish of the house — boneless chicken with secret house spices and sauces.",
    },
    {
        title: "Beef Masala",
        price: "14.99",
        image: "/beef-masala.png",
        categories: "beef",
        description: "Beef cooked in rich onion-tomato gravy with bold spices and herbs — a classic comfort dish.",
    },
    {
        title: "Kalimirchi Beef",
        price: "14.99",
        image: "/kalimirchi-beef.png",
        categories: "beef",
        description: "Tender beef cooked with freshly ground black pepper, onions, and South Indian spices.",
    },
    {
        title: "Hyderabadi Mutton Fry",
        price: "19.99",
        image: "/mutton-fry.png",
        categories: "mutton",
        description: "Tender pieces of mutton stir fried with onions, curry leaves, and traditional Hyderabadi spices.",
    },
    {
        title: "Mehfil Fish Fry",
        price: "13.99",
        image: "/fish-fry.png",
        categories: "seafood",
        description: "Spicy shallow-fried fish marinated with turmeric, chili powder, and traditional Hyderabadi spices.",
    },
    {
        title: "Snack Combo",
        price: "5.00",
        image: "/snack-combo.png",
        categories: "snacks",
        description: "Freshly made snacks including Samosa, Mirchi, and Chai perfect for Evenings.",
    },
    {
        title: "Mutton Biryani Family Pack",
        price: "59.99",
        image: "/hyderabadi-mutton-dum-biryani.png",
        categories: "family pack",
        description: "1 Family size Mutton Biryani - Quarter tray 1 Chicken 65, Mirchi ka Salan, Raita, Gulab Jamoon.",
    },
    {
        title: "Chicken Biryani Family Pack",
        price: "44.99",
        image: "/hyderabadi-chicken-dum-biryani.png",
        categories: "family pack",
        description: "1 Family size Chicken Biryani - Quarter tray 1 Chicken 65, Mirchi ka Salan, Raita, Gulab Jamoon.",
    },
    // Add more items...
];

const filters = [
    { label: "Family Pack", value: "family pack" },
    { label: "Mutton", value: "mutton" },
    { label: "Chicken", value: "chicken" },
    { label: "Beef", value: "beef" },
    { label: "Seafood", value: "seafood" },
    { label: "Rice", value: "rice" },
    { label: "Snacks", value: "snacks" },
];


export default function MenuSection() {
    const [activeFilter, setActiveFilter] = useState("family pack");

    const filteredItems = menuItems.filter(item =>
        item.categories.includes(activeFilter)
    );
    

    return (
        <section className="w-full py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#1a3c34]">
                        Our Menu
                    </h2>
                    <p className="text-gray-700 text-base max-w-2xl mx-auto">
                        Explore our rich and authentic Hyderabadi cuisine made with fresh
                        ingredients and traditional recipes.
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="filter-buttons flex flex-wrap justify-center gap-2 mb-10">
                    {filters.map((filter) => (
                        <button
                            key={filter.value}
                            onClick={() => setActiveFilter(filter.value)}
                            className={`px-4 py-2 min-w-[100px] text-sm border border-[#e6d38d] rounded-full transition-all duration-300 hover:bg-[#e6d38d] hover:text-black ${activeFilter === filter.value ? 'bg-[#e6d38d] scale-105' : ''
                                }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                {/* Improved Animated Menu Grid */}
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-14 justify-items-center max-w-fit items-stretch">
                        <AnimatePresence mode="wait">
                            {filteredItems.map((item) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            type: "spring",
                                            stiffness: 100,
                                            damping: 15
                                        }
                                    }}
                                    exit={{
                                        opacity: 0,
                                        y: -20,
                                        transition: { duration: 0.2 }
                                    }}
                                    transition={{ duration: 0.3 }}
                                    layout // This enables layout animations
                                    className="w-full max-w-[340px] mb-4 md:mb-8 flex flex-col justify-between h-full"
                                >
                                    {/* Image with price tag */}
                                    <motion.div
                                        className="relative flex justify-center"
                                        layout
                                    >
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={380}
                                            height={373}
                                            className="w-full h-auto max-w-[380px] rounded-[5%] object-cover"
                                        />
                                        <div className="absolute bottom-6 right-6 bg-white text-black font-semibold px-3 py-2 md:px-4 md:py-2 rounded shadow text-sm md:text-base">
                                            ${item.price}
                                        </div>
                                    </motion.div>

                                    {/* Title */}
                                    <motion.h3
                                        className="text-xl md:text-2xl font-semibold text-black mt-6 md:mt-9 mb-4"
                                        layout
                                    >
                                        {item.title}
                                    </motion.h3>

                                    {/* Description */}
                                    <motion.p
                                        className="text-base leading-6 text-black mb-6 md:mb-8"
                                        layout
                                    >
                                        {item.description}
                                    </motion.p>

                                    {/* Order Now Button */}
                                    <motion.div layout>
                                        <Link
                                            href="#"
                                            className="inline-block text-sm md:text-base font-semibold text-black px-6 md:px-10 py-3 md:py-4 border-2 border-[#1a3c34] rounded transition-all duration-300 hover:bg-[#1a3c34] hover:text-white mb-6"
                                        >
                                            Order Now!
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}    