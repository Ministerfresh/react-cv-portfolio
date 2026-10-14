import { link } from "framer-motion/client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        "Home",
        "About",
        "Skills",
        "Projects",
        "Experience",
        "Contact",
    ];

    return (
        <>
        <nav className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md text-white shadow-lg">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <a
                href="#home"
                className="text-2xl font-bold tracking-wide hover:text-blue-400 transition">
                    Divine.dev
                </a>
                <ul className="hidden md:flex gap-8">
                    {navLinks.map((link)  => (
                        <li key={link}>
                            <a
                            href={`#${link.toLowerCase()}`}
                            className="
                            relative
                            hover:text-blue-400
                            transition
                            duration-300
                            after:absolute
                            after:left-0
                            after:-bottom-1
                            after:h-[2px]
                            after:w-0
                            after:bg-blue-400
                            after:transition-all
                            after:duration-300
                            hover:after:w-full
                            ">
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>

                {/*Mobile Menu Button*/}
                <button
                className="md:hidden text-2xl"
                onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/*Mobile Menu*/}
            {menuOpen && (
                <div className="md:hidden bg-slate-800 px-6 py-4">
                    {navLinks.map((link)  => (
                        <a
                        key={link}
                        href={`#${link.toLowerCase()}`}
                        className="block py-3 hover:text-blue-400 transition duration-300"
                        onClick={() => setMenuOpen(false)}>
                            {link}
                        </a>
                    ))}
                </div>
            )}
        </nav>
        </>

    );
}

export default Navbar;