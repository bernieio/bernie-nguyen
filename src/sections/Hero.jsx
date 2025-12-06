import { motion } from 'framer-motion';
import { Button } from '../components';
import { personalInfo } from '../data/content';
import cvFile from '../assets/Bernie-CV.pdf';
import avatarImage from '../assets/bernieio.png';

const Hero = () => {
    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-[120px] pb-[100px]">
            {/* 1. Muted Radial Glow (Web3 Vibe) - Reduced Saturation */}
            <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#7a00ff]/10 blur-[150px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#00eaff]/5 blur-[150px] rounded-full pointer-events-none translate-x-1/3 translate-y-1/3" />

            <div className="section-premium grid lg:grid-cols-12 gap-12 items-center w-full z-10">

                {/* Left Content (Cols 7) */}
                <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">

                    {/* Main Name Block - Updated Split requested by user */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-2">
                            BAO <br />
                            <span className="text-white">NGUYEN NGOC GIA</span>
                        </h1>
                        <h2 className="text-3xl md:text-5xl font-bold text-white/40 mb-8 tracking-tight">
                            (BERNIE)
                        </h2>

                        {/* Title - "Software Engineer" */}
                        <h3 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3 justify-center lg:justify-start">
                            <span className="w-8 h-[2px] bg-[#00eaff] rounded-full shadow-[0_0_10px_#00eaff]" />
                            <span className="text-web3-gradient">Software Engineer</span>
                        </h3>

                        <p className="text-lg text-white/50 mb-10 max-w-lg leading-relaxed font-light">
                            Architecting decentralized solutions and premium interfaces on the Sui ecosystem.
                        </p>

                        <div className="flex gap-4">
                            <Button onClick={scrollToProjects} variant="primary" icon="⚡">
                                View Work
                            </Button>
                            <Button href={cvFile} download="Bernie-CV.pdf" variant="secondary" icon="📄">
                                Resume
                            </Button>
                        </div>
                    </motion.div>
                </div>

                {/* Right Avatar (Cols 5) - Premium Glass/Neumorphism */}
                <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
                    <motion.div
                        className="relative w-[320px] h-[400px] md:w-[380px] md:h-[480px]"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
                    >
                        {/* Background Layers */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#00eaff]/10 to-[#7a00ff]/10 rounded-[30px] transform rotate-3" />
                        <div className="absolute inset-0 border border-white/5 rounded-[30px] transform -rotate-2" />

                        {/* Main Image Container */}
                        <div className="absolute inset-0 rounded-[30px] bg-[#050505] border border-white/10 overflow-hidden shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] glass-panel z-10 p-2">
                            <div className="w-full h-full rounded-[22px] overflow-hidden relative">
                                {/* Removed grayscale class as requested */}
                                <img
                                    src={avatarImage}
                                    alt="Bernie Portfolio"
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                />
                                {/* Reduced overlay opacity to keep original colors visible */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 pointer-events-none" />
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#00eaff]/20 blur-xl rounded-full" />
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#7a00ff]/20 blur-xl rounded-full" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
