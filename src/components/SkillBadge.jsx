import { motion } from 'framer-motion';

const SkillBadge = ({ skill, index = 0 }) => {
    return (
        <motion.div
            className="h-[34px] px-5 rounded-full bg-[#0a0a0a] border border-white/5 
                 flex items-center justify-center text-sm font-medium text-white/80
                 hover:border-[#00eaff]/50 hover:text-white hover:shadow-[0_0_15px_rgba(0,234,255,0.3)]
                 transition-all duration-300 cursor-default"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
        >
            {skill}
        </motion.div>
    );
};

export default SkillBadge;
