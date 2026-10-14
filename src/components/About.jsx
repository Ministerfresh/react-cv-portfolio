import { motion } from "framer-motion";
import Reveal from "./ui/Reveal";
import Container from "./ui/Container";

function About() {
    return (
        <section id="about" className="bg-slate-900 text-white py-24">
            <Container>
            <div className="max-w-6xl mx-auto px-6">
                <Reveal delay={0}>
                <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-center mb-12">
                    About Me
                </motion.h2>
                </Reveal>
                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <Reveal delay={150}>
                        <h3 className="text-2xl font-semibold mb-4">
                            Full-Stack Software Developer
                        </h3>
                        </Reveal>
                        <Reveal delay={250}>
                        <p className="text-gray-300 leading-8">
                            I'm passionate about building modern,
                            responsive and user-friendly web applications.
                            I enjoy turning ideas into real-world software
                            using React, Node.js, Express and MongoDB.
                            I love writting clean code, learning new technologies and solving challenging problems.
                        </p>
                        </Reveal>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <Reveal delay={350}>
                        <div className="bg-slate-800 p-6 rounded-xl">
                            <h4 className="text-blue-400 text-3xl font-bold">
                                React
                            </h4>
                            <p className="mt-2 text-gray-400">
                                Frontend Development
                            </p>
                        </div>
                        </Reveal>
                        <Reveal>
                        <div className="bg-slate-800 p-6 rounded-xl">
                            <h4 className="text-blue-400 text-3xl font-bold">
                                Node.js
                            </h4>
                            <p className="mt-2 text-gray-400">
                                Backend Development
                            </p>
                        </div>
                        </Reveal>
                        <Reveal delay={450}>
                        <div className="bg-slate-800 p-6 rounded-xl">
                            <h4 className="text-blue-400 text-3xl font-bold">
                                MongoDB
                            </h4>
                            <p className="mt-2 text-gray-400">
                                Database
                            </p>
                        </div>
                        </Reveal>

                        <Reveal delay={450}>
                        <div className="bg-slate-800 p-6 rounded-xl">
                            <h4 className="text-blue-400 text-3xl font-bold">
                                Git
                            </h4>
                            <p className="mt-2 text-gray-400">
                                Version Control
                            </p>
                        </div>
                        </Reveal>
                    </div>
                </motion.div>
            </div>
            </Container>
        </section>
    );
}

export default About;