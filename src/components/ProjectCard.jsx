function ProjectCard({ project }) {
    return (
        <div className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <img
            src={project.image}
            alt={project.title}
            className="w-full h-52 object-cover" />

            <div className="p-6">
                <h3 className="text-2xl font-bold text-white">
                    {project.title}
                </h3>
                <p className="text-gray-400 mt-3">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                    {project.technologies.map((tech) => (
                        <span
                        key={tech}
                        className="bg-blue-600 px-3 py-1 rounded-full text-sm">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4 mt-6">
                    <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white text-black px-4 py-2 rounded-lg">
                        Github
                    </a>
                    <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-blue-600 px-4 py-2 rounded-lg text-white">
                        Live Demo
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;