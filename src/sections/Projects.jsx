import { SectionHeader, ProjectCard } from '../components';
import { projects } from '../data/content';

const Projects = () => {
    return (
        <section id="projects" className="section-premium bg-[#030303] relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7a00ff]/5 blur-[120px] rounded-full pointer-events-none" />

            <SectionHeader
                title="Featured Work"
                subtitle="Engineering robust dApps with high-performance execution."
            />

            <div className="grid md:grid-cols-2 gap-10">
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
