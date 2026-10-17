import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Button from "./ui/Button";

function Hero(){
    return (
        <section id="home" className="min-h-screen w-full bg-slate-950 text-white flex items-center overflow-x-clip py-20 md:py-0">
            <div className="w-full min-w-0 max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Text Section */}
                <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full min-w-0">
                    <p className="text-blue-400 text-lg"> Hello, I'm </p>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-3 leading-tight break-words">
                        Divine Chikasom Ochia
                    </h1>
                    <h2 className="text-xl sm:text-2xl mt-4 text-gray-300 break-words">
                        Full-Stack Developer | React & Node.js Specialist
                    </h2>

                    <p className="mt-6 text-gray-400 leading-relaxed break-words">
                        I build modern, scalable web applications using React, Node.js, Express and MongoDB.
                        I enjoy creating clean, responsive and user-friendly digital experiences.
                    </p>

                    <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt:8 w-full min-w-0">

                        <Button href="/cv.pdf" download="Divine-Chikasom-Ochia-CV.pdf" className="w-full sm:w-auto">
                            Download CV
                        </Button>

                        <Button
                        href="/cv.pdf"
                        target="_blank"
                        rel="noreferrer"
                        variant="secondary"
                        className="w-full sm:w-auto"
                        >
                            View CV
                        </Button>

                        <Button href="#projects"
                        variant="secondary" className="w-full sm:w-auto">
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
                    className="w-56 h-56 sm:w-72 sm:h-72 max-w-full object-cover rounded-full border-4 border-blue-500"/>

                </motion.div>

            </div>

        </section>
    );
}

export default Hero;