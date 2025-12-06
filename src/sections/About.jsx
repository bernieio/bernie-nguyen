import { SectionHeader, Card, SkillBadge } from '../components';
import { aboutContent } from '../data/content';

const About = () => {
    return (
        <section id="about" className="section-premium bg-[#030303]">
            <SectionHeader
                title="About Me"
                subtitle="Bridging the gap between complex protocols and user experience."
            />

            <div className="grid md:grid-cols-12 gap-8 items-start">
                {/* Main Content - 7 cols */}
                <div className="md:col-span-7 space-y-8">
                    <Card delay={0.1} className="h-full flex flex-col justify-center">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="text-[#00eaff]">⚡</span>
                            The Builder's Mindset
                        </h3>
                        <p className="text-white/70 leading-relaxed text-lg mb-6 flex-grow">
                            {aboutContent.statement}
                        </p>
                        <div className="h-[1px] w-full bg-white/5 mb-6" />
                        <h4 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-3">
                            Objective
                        </h4>
                        <p className="text-white/60 leading-relaxed">
                            {aboutContent.objective}
                        </p>
                    </Card>
                </div>

                {/* Sidebar - 5 cols */}
                <div className="md:col-span-5 flex flex-col gap-6">
                    {/* Languages */}
                    <Card delay={0.2} className="w-full">
                        <h3 className="text-lg font-bold text-white mb-6">Languages</h3>
                        <div className="space-y-4">
                            {aboutContent.languages.map((lang, i) => (
                                <div key={i} className="flex justify-between items-center bg-white/5 p-4 rounded-xl border border-white/5">
                                    <span className="text-white font-medium">{lang.language}</span>
                                    <SkillBadge skill={lang.level} />
                                </div>
                            ))}
                        </div>
                    </Card>

                    {/* Key Achievement Highlight - Moved closer/grouped for visual balance */}
                    <div className="rounded-3xl p-[1px] bg-gradient-to-r from-[#00eaff]/30 to-[#7a00ff]/30 w-full">
                        <div className="bg-[#050505] rounded-[22px] p-6 text-center h-full hover:bg-white/5 transition-colors duration-300">
                            <span className="text-4xl font-extrabold text-[#00eaff] block mb-2 drop-shadow-[0_0_10px_rgba(0,234,255,0.4)]">2nd</span>
                            <p className="text-white font-bold text-lg mb-1">Place Winner</p>
                            <p className="text-white/50 text-sm uppercase tracking-wider">Sui Bootcamp HCMC Hackathon</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
