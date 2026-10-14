import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-slate-950 text-gray-400 py-8">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    {/*Left*/}
                    <div>
                        <h2 className="text-2xl font-bold text-white">
                            Divine.dev
                        </h2>
                        <p className="mt-2">
                            Full-Stack Software Developer
                        </p>
                    </div>

                    {/*Socials*/}
                    <div className="flex gap-6 text-2xl">
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

                    {/*Back to Top*/}
                    <a
                    href="#home"
                    className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition">
                        <FaArrowUp className="text-white" />
                    </a>
                </div>

                <hr className="my-6 border-slate-700" />

                <p className="text-center text-sm">
                    © {new Date().getFullYear()} 
                    Divine.dev. All Rights Reserved
                </p>
            </div>
        </footer>
    );
}

export default Footer;