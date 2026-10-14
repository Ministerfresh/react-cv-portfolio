import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./ui/SectionTitle";
import Reveal from "./ui/Reveal";

function Projects() {
    return (
        <section id="projects" className="bg-slate-900 text-white py-24">
            <div className="max-w-6xl mx-auto px-6">
                <SectionTitle title="My Projects" />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Reveal key={project.id} delay={index * 100}>
                            <ProjectCard project={project} />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;