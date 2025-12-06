import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../data/content';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100; // Adjusted for taller navbar
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 h-[80px] flex items-center ${isScrolled
                    ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
                    : 'bg-transparent border-transparent'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
                {/* Logo - Strict Branding "bernieio" */}
                <motion.a
                    href="#"
                    className="text-2xl font-bold tracking-[1px] text-white flex items-center gap-1 group"
                    whileHover={{ scale: 1.05 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    bernie<span className="text-web3-gradient group-hover:drop-shadow-[0_0_8px_rgba(0,234,255,0.5)] transition-all">io</span>
                </motion.a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, index) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className="text-sm font-medium text-white/70 hover:text-white relative group py-2"
                        >
                            {link.label}
                            {/* Neon Underline Interaction */}
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00eaff] to-[#7a00ff] group-hover:w-full transition-all duration-300 ease-out shadow-[0_0_8px_rgba(0,234,255,0.5)]" />
                        </button>
                    ))}
                </div>

                {/* Mobile Menu Button - Premium Style */}
                <button
                    className="md:hidden w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-white/80 hover:bg-white/5"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <div className="w-5 flex flex-col gap-1.5 items-end">
                        <span className={`h-0.5 bg-current transition-all ${isMobileMenuOpen ? 'w-5 rotate-45 translate-y-2' : 'w-5'}`} />
                        <span className={`h-0.5 bg-current transition-all ${isMobileMenuOpen ? 'opacity-0' : 'w-3'}`} />
                        <span className={`h-0.5 bg-current transition-all ${isMobileMenuOpen ? 'w-5 -rotate-45 -translate-y-2' : 'w-4'}`} />
                    </div>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="md:hidden absolute top-[80px] left-0 right-0 bg-[#0a0a0a] border-b border-white/10 shadow-2xl"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className="text-left text-lg font-medium text-white/70 hover:text-[#00eaff] py-3 border-b border-white/5 last:border-0"
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
