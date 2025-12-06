import { motion } from 'framer-motion';

const GradientText = ({ children, className = "", animate = false }) => {
    if (animate) {
        return (
            <motion.span
                className={`gradient-text ${className}`}
                style={{ display: 'inline-block' }}
            >
                {children}
            </motion.span>
        );
    }

    return (
        <span className={`gradient-text-static ${className}`}>
            {children}
        </span>
    );
};

export default GradientText;
