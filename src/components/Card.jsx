import { motion } from 'framer-motion';

const Card = ({ children, className = "", delay = 0 }) => {
    return (
        <motion.div
            className={`neu-card-premium p-8 overflow-hidden relative group ${className}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: delay, ease: [0.25, 1, 0.5, 1] }}
        >
            {/* Internal Glow Gradient Overlay (Subtle) */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00eaff]/5 via-transparent to-[#7a00ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
};

export default Card;
