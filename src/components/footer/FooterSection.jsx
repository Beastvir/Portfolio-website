import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const FooterSection = () => {
    return (
        <footer className="bg-bg-dark text-white pt-24 pb-8 border-t-4 border-neon-lime">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
                    {/* Left Links */}
                    <div className="flex flex-col gap-6 items-start">
                        <a href="#" className="font-display text-4xl hover:text-neon-lime transition-colors">HOME</a>
                        <a href="#" className="font-display text-4xl hover:text-neon-lime transition-colors">ON TRACK</a>
                        <a href="#" className="font-display text-4xl hover:text-neon-lime transition-colors">OFF TRACK</a>
                        <a href="#" className="font-display text-4xl hover:text-neon-lime transition-colors">STORE</a>
                    </div>

                    {/* Center Visual */}
                    <div className="flex flex-col items-center justify-center text-center">
                        <div className="w-32 h-32 rounded-full bg-neutral-800 mb-6 flex items-center justify-center">
                            <span className="text-neon-lime font-display text-2xl">LN4</span>
                        </div>
                        <p className="font-display text-2xl uppercase max-w-xs leading-none mb-6">Always bringing the fight.</p>
                        <img src="/svgs/signature-lando.svg" alt="Lando Signature" className="h-12 w-auto invert opacity-50" onError={(e) => e.currentTarget.style.display = 'none'} />
                    </div>

                    {/* Right Socials */}
                    <div className="flex flex-col gap-4 md:items-end">
                        <a href="#" className="flex items-center gap-2 font-body hover:text-neon-lime transition-colors group">
                            Instagram <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                        <a href="#" className="flex items-center gap-2 font-body hover:text-neon-lime transition-colors group">
                            TikTok <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                        <a href="#" className="flex items-center gap-2 font-body hover:text-neon-lime transition-colors group">
                            YouTube <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                        <a href="#" className="flex items-center gap-2 font-body hover:text-neon-lime transition-colors group">
                            Twitch <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-neutral-500 text-xs font-mono uppercase tracking-widest gap-4">
                    <p>&copy; 2025 Lando Norris. All Rights Reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                        <span className="hover:text-white transition-colors">Built by Beastvir</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
