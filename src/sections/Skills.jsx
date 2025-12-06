import { motion } from 'framer-motion';
import { SectionHeader, Card, SkillBadge } from '../components';
import { skills } from '../data/content';

const Skills = () => {
    const categories = [
        { id: 'blockchain', icon: '⛓️', label: 'Blockchain Core' }, // Consider replacing with SVG if requested, but prompt said "Skills ... Badge style consistent"
        { id: 'frontend', icon: '💻', label: 'Frontend & UI' },
        { id: 'tools', icon: '🛠️', label: 'DevOps & Tools' }
    ];

    return (
        <section id="skills" className="section-premium">
            <SectionHeader
                title="Technical Arsenal"
                subtitle="A versatile stack designed for scalable Web3 development."
            />

            <div className="grid md:grid-cols-3 gap-8">
                {categories.map((cat, idx) => (
                    <Card key={cat.id} delay={idx * 0.1} className="flex flex-col h-full">
                        {/* Header */}
                        <div className="flex items-center gap-4 mb-8 pb-4 border-b border-white/5">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] 
                              border border-white/10 flex items-center justify-center text-2xl shadow-inner">
                                {cat.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white">
                                {skills[cat.id].title}
                            </h3>
                        </div>

                        {/* Skills Grid */}
                        <div className="flex flex-wrap gap-3">
                            {skills[cat.id].items.map((skill, i) => (
                                <SkillBadge key={i} skill={skill} index={i} />
                            ))}
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default Skills;
