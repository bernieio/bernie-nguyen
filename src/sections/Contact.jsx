import { SectionHeader } from '../components';
import { personalInfo } from '../data/content';

const Contact = () => {
    const links = [
        { label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, icon: '✉️' },
        { label: 'GitHub', value: 'github.com/bernieio', href: personalInfo.github, icon: '💻' },
        { label: 'LinkedIn', value: 'linkedin.com/in/bernieio', href: personalInfo.linkedin, icon: '💼' },
        { label: 'Portfolio', value: 'bernie-nguyen.netlify.app', href: personalInfo.portfolio, icon: '🌐' }
    ];

    return (
        <section id="contact" className="section-premium">
            <div className="max-w-5xl mx-auto">
                <SectionHeader
                    title="Let's Build Together"
                    subtitle="Open for collaborations and premium Web3 engineering roles."
                />

                {/* 2x2 Grid Layout */}
                <div className="grid md:grid-cols-2 gap-6 mb-20">
                    {links.map((link, i) => (
                        <a
                            key={i}
                            href={link.href}
                            target={link.label === 'Email' ? "_self" : "_blank"}
                            rel={link.label === 'Email' ? "" : "noreferrer"}
                            className="neu-card-premium p-6 flex items-center gap-6 group hover:border-[#7a00ff]/40"
                        >
                            <div className="w-16 h-16 rounded-full bg-[#0a0a0a] border border-white/5 flex items-center justify-center text-2xl group-hover:shadow-[0_0_15px_#7a00ff]">
                                {link.icon}
                            </div>
                            <div>
                                <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">{link.label}</p>
                                <p className="text-lg text-white font-medium group-hover:text-[#00eaff] transition-colors truncate max-w-[200px] sm:max-w-none">
                                    {link.value}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Rich Footer - Simplified content as requested */}
                <footer className="relative pt-10 border-t border-white/5 text-center">
                    {/* Gradient Line */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[1px] w-32 h-[2px] bg-gradient-to-r from-transparent via-[#7a00ff] to-transparent shadow-[0_0_15px_#7a00ff]" />

                    <p className="text-white/50 text-sm font-medium">
                        © 2025 Bernie Nguyen.
                    </p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
