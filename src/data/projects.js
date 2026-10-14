import { image, title } from "framer-motion/client";

const projects = [
    {
        id: 1,
        title: "Personal Portfolio",
        description: "A modern portfolio website built with React, Vite and Tailwind CSS.",
        image:"/images/Portfolio.jpg",
        technologies: ["React", "Tailwind", "Vite"],
        github: "#",
        live: "#",
    },

    {
        id: 2,
        title: "Task Manager API",
        description: "A RESTful API for managing tasks with authentication.",
        image: "/images/Taskmanager.jpg",
        technologies: ["Node.js", "Express", "MongoDB"],
        github: "https://github.com/Ministerfresh/inventory-management-api.git",
        live: "#",
    },

    {
        id: 3,
        title: "Planeterium Website",
        description: "A modern solar system website built with React and Vite",
        image: "/images/Planeterium.jpg",
        technologies: ["React", "Vite"],
        github: "https://github.com/M-rick-34/Techy-Nerds.git",
        live: "https://techy-nerds.vercel.app/#planets",
    }
];

export default projects;