import { motion } from 'framer-motion';
import { SectionHeader } from '../components';
import { achievements } from '../data/content';

const Achievements = () => {
    // Vector Icons replacing emojis for premium feel
    const icons = [
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />, // Star
        <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H7V10.29C7 7.53 9.24 5.29 12 5.29C14.76 5.29 17 7.53 17 10.29V11.99H12Z" />, // Shield/Award
        <path d="M13 2.05V9H20C19.38 10.95 18 12.5 16 13.5L12 21.5L8 13.5C6 12.5 4.62 10.95 4 9H11V2.05C11.32 2.02 11.66 2 12 2C12.34 2 12.68 2.02 13 2.05Z" />, // Diamond shape
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.05 19.44 4 16.08 4 12C4 11.38 4.08 10.79 4.21 10.21L9 15V16C9 17.1 9.9 18 11 18V19.93ZM17.9 17.39C17.64 16.58 16.9 16 16 16H15V13C15 12.45 14.55 12 14 12H8V10H10C10.55 10 11 9.55 11 9V7H13C14.1 7 15 6.1 15 5V4.59C17.93 5.78 20 8.65 20 12C20 14.08 19.2 15.97 17.9 17.39Z" />, // Globe
        <path d="M12 1L9 9H2L8 14L5 22L12 17L19 22L16 14L22 9H15L12 1Z" />, // Spark
    ];

    return (
        <section id="achievements" className="section-premium">
            <SectionHeader
                title="Hall of Fame"
                subtitle="Consistent performance in rigorous competitive environments."
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((item, index) => (
                    <motion.div
                        key={index}
                        className="neu-card-premium p-8 flex flex-col items-center text-center relative overflow-hidden group hover:border-[#00eaff]/40"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -6 }}
                    >
                        {/* Neon Glow on Hover */}
                        <div className="absolute inset-0 bg-[#00eaff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                        {/* Icon */}
                        <div className="w-16 h-16 mb-6 rounded-2xl bg-[#0a0a0a] border border-white/5 flex items-center justify-center 
                           text-[#00eaff] group-hover:text-white group-hover:shadow-[0_0_20px_#00eaff] transition-all duration-300">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                {icons[index % icons.length]}
                            </svg>
                        </div>

                        <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                            {item.event}
                        </h3>
                        <p className="text-sm font-bold text-[#7a00ff] uppercase tracking-wider">
                            {item.result}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Achievements;
