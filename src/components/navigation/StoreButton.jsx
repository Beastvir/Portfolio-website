import React from 'react';
import { ShoppingBag } from 'lucide-react';

const StoreButton = () => {
    return (
        <a
            href="https://landonorris.store/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-neon-lime text-black px-6 py-3 rounded-full font-bold uppercase tracking-wider text-sm hover:scale-105 hover:brightness-110 active:scale-95 transition-all duration-300"
        >
            <ShoppingBag size={18} strokeWidth={2.5} />
            <span>Store</span>
        </a>
    );
};

export default StoreButton;
