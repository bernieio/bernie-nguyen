import { SectionHeader, Card } from '../components';
import { education } from '../data/content';

const Education = () => {
    return (
        <section id="education" className="section-premium pb-0">
            <SectionHeader
                title="Education"
                subtitle="Foundational knowledge in computer science and engineering."
            />

            <div className="max-w-4xl mx-auto">
                <Card className="relative overflow-hidden group">
                    <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#00eaff]/5 blur-[100px] rounded-full transition-opacity group-hover:opacity-75" />

                    <div className="flex flex-col md:flex-row items-center md:items-start gap-10 relative z-10">
                        {/* Scaled Up Icon */}
                        <div className="flex-shrink-0">
                            <div className="w-28 h-28 rounded-3xl bg-[#0a0a0a] border border-white/5 flex items-center justify-center shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]">
                                <span className="text-5xl drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">🎓</span>
                            </div>
                        </div>

                        <div className="text-center md:text-left flex-grow">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                {education.university}
                            </h3>
                            <p className="text-[#00eaff] text-xl font-medium mb-6">
                                {education.degree} ({education.period})
                            </p>

                            <div className="inline-flex items-center gap-3 bg-white/5 px-6 py-3 rounded-xl border border-white/5">
                                <span className="text-[#7a00ff] text-xl">🏆</span>
                                <span className="text-white/80 text-lg font-medium">
                                    Thesis Grade: <strong className="text-white">{education.thesisGrade}</strong>
                                </span>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
};

export default Education;
