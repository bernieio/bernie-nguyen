import { motion } from 'framer-motion';

const ProjectCard = ({ project, index = 0 }) => {
    return (
        <motion.div
            className="neu-card-premium p-8 h-full flex flex-col relative group overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
        >
            {/* 1. Header with Github Link Aligned */}
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-[#00eaff] transition-colors duration-300">
                        {project.title}
                    </h3>
                    <span className="text-xs font-bold text-[#7a00ff] uppercase tracking-[0.1em]">
                        {project.role}
                    </span>
                </div>

                <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-[#00eaff]/50 hover:shadow-[0_0_15px_rgba(0,234,255,0.3)] transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                </motion.a>
            </div>

            {/* 2. Tech Tags - Modern Style */}
            <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech, i) => (
                    <span
                        key={i}
                        className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-md 
                       bg-white/5 border border-white/5 text-white/50
                       group-hover:border-[#00eaff]/20 group-hover:text-[#00eaff]/80 
                       transition-colors duration-300"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* 3. Description */}
            <p className="text-white/60 mb-8 leading-relaxed text-sm flex-grow">
                {project.description}
            </p>

            {/* 4. Impact - Structured List */}
            <div className="mt-auto pt-6 border-t border-white/5">
                <ul className="space-y-3">
                    {project.impact.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                            <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-[#00eaff] shadow-[0_0_8px_#00eaff]" />
                            <span className="flex-1">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
