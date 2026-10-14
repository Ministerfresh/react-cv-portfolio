import { motion } from "framer-motion";
import experience from "../data/experience";

function Experience() {
    return (
        <section id="experience" className="bg-slate-950 text-white py-24">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16">
                    Experience
                </h2>

                <div className="relative border-1-4 border-blue-500 ml-4">
                    {experience.map((item, index) => (
                        <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="mb-12 ml-8">
                            <div className="absolute w-5 h-5 bg-blue-500 rounded-full -left-[5px]" />

                            <h3 className="text-xl font-bold">
                                {item.title}
                            </h3>
                            <p className="text-blue-400">
                                {item.company}
                            </p>
                            <span className="text-gray-400">
                                {item.year}
                            </span>
                            <p className="mt-3 text-gray-300">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;