import { motion } from "framer-motion";
import skills from "../data/skills";
import Reveal from "./ui/Reveal";

function Skills() {
    return (
        <section id="skills" className="bg-slate-950 text-white py-24">
            <div className="max-w-6xl mx-auto px-6">
                <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-center mb-14">
                    My Skills
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skills.map((skill, index) =>(
                        <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity:1, y: 0 }}
                        transition={{ delay: index * 0.15 }}
                        className="bg-slate-800 p-8 rounded-2xl shadow-lg">
                            <h3 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-5 break-words">
                                {skill.category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {skill.technologies.map((tech, i) =>(
                                    <span
                                    key={i}
                                    className="bg-slate-700 px-4 py-2 rounded-full hover:bg-blue-600 transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;