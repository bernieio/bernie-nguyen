import { motion } from 'framer-motion';

const SectionHeader = ({ title, subtitle, align = "center" }) => {
    const alignClass = align === "left" ? "text-left items-start" : "text-center items-center";

    return (
        <div className={`flex flex-col mb-16 ${alignClass}`}>
            <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <span className="text-web3-gradient drop-shadow-[0_0_15px_rgba(122,0,255,0.3)]">
                    {title}
                </span>
            </motion.h2>

            {subtitle && (
                <motion.p
                    className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    {subtitle}
                </motion.p>
            )}

            {/* Decorative Glow Line */}
            <motion.div
                className={`mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-[#00eaff] to-[#7a00ff]`}
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 100, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
            />
        </div>
    );
};

export default SectionHeader;
