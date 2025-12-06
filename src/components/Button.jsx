import { motion } from 'framer-motion';

const Button = ({
    children,
    variant = 'primary',
    onClick,
    href,
    download,
    className = "",
    icon
}) => {
    const baseStyles = "relative px-8 py-3.5 rounded-full font-bold text-sm tracking-wide flex items-center justify-center gap-3 transition-all duration-300";

    const variants = {
        primary: `
      bg-[#0a0a0a] text-white border border-[#00eaff]/30
      shadow-[0_0_15px_rgba(0,234,255,0.15)]
      hover:shadow-[0_0_30px_rgba(0,234,255,0.4)]
      hover:border-[#00eaff] hover:scale-105 active:scale-95
    `,
        secondary: `
      bg-transparent text-white/70 border border-white/10
      hover:bg-white/5 hover:text-white hover:border-white/30 hover:scale-105 active:scale-95
    `,
        glow: `
      bg-transparent text-white border border-[#7a00ff]/50
      shadow-[0_0_15px_rgba(122,0,255,0.2)]
      hover:bg-[#7a00ff]/10 hover:shadow-[0_0_30px_rgba(122,0,255,0.5)]
      hover:border-[#7a00ff] hover:scale-105 active:scale-95
    `
    };

    const Component = href ? 'a' : 'button';
    const props = href ? { href, download, target: download ? "" : "_blank" } : { onClick };

    return (
        <Component {...props} className={`${baseStyles} ${variants[variant]} ${className}`}>
            {children}
            {icon && <span className="text-lg">{icon}</span>}
        </Component>
    );
};

export default Button;
