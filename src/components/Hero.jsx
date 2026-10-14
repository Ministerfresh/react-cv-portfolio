import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Button from "./ui/Button";

function Hero(){
    return (
        <section id="home" className="min-h-screen bg-slate-950 text-white flex items-center">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
                {/* Text Section */}
                <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}>
                    <p className="text-blue-400 text-lg"> Hello, I'm </p>
                    <h1 className="text-5xl md:text-6xl font-bold mt-3">
                        Divine Chikasom Ochia
                    </h1>
                    <h2 className="text-2xl mt-4 text-gray-300">
                        Full-Stack Developer | React & Node.js Specialist
                    </h2>

                    <p className="mt-6 text-gray-400 leading-relaxed">
                        I build modern, scalable web applications using React, Node.js, Express and MongoDB.
                        I enjoy creating clean, responsive and user-friendly digital experiences.
                    </p>

                    <div className="flex gap-4 mt-8">

                        <Button href="/cv.pdf" download="Divine-Chikasom-Ochia-CV.pdf">
                            Download CV
                        </Button>

                        <Button
                        href="/cv.pdf"
                        target="_blank"
                        rel="noreferrer"
                        variant="secondary"
                        >
                            View CV
                        </Button>

                        <Button href="#projects"
                        variant="secondary">
                            View Projects
                        </Button>
                    </div>

                    <div className="flex gap-5 mt-8 text-3xl">
                        <a
                        href="https://github.com/Ministerfresh"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-blue-400 transition">
                            <FaGithub />
                        </a>
                        <a
                        href="https://www.linkedin.com/in/divine-ochia-73195138b/"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-blue-400 transition">
                            <FaLinkedin />
                        </a>
                    </div>
                </motion.div>

                {/*Image Section*/}
                <motion.div
                initial={{ opacity:0, scale:0.8 }}
                animate={{ opacity:1, scale:1 }}
                transition={{ duration:0.8 }}
                className="flex justify-center">

                    <img
                    src="/profile.jpg"
                    alt="Profile"
                    className="w-72 h-72 object-cover rounded-full border-4 border-blue-500"/>

                </motion.div>

            </div>

        </section>
    );
}

export default Hero;