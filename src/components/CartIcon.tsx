"use client";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "./store/cartStore";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CartIcon() {
    const items = useCartStore((state) => state.items);
    const [mounted, setMounted] = useState(false);
    
    useEffect(() => {
        setMounted(true);
    }, []);
    
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

    if (!mounted) {
        return (
            <Link href="/cart" className="relative">
                <div className="relative p-2 hover:bg-gray-700 rounded-full transition-colors">
                    <ShoppingCart size={24} className="text-white" />
                </div>
            </Link>
        );
    }

    return (
        <Link href="/cart" className="relative">
            <div className="relative p-2 hover:bg-gray-700 rounded-full transition-colors">
                <ShoppingCart size={24} className="text-white" />
                {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                        {totalItems > 99 ? '99+' : totalItems}
                    </span>
                )}
            </div>
        </Link>
    );
}