import React from "react";
import proj1 from "../assets/project1.png";
import proj2 from "../assets/project2.png";
import proj3 from "../assets/project3.png";
import proj4 from "../assets/project4.png";
import proj5 from "../assets/project5.png";
import proj6 from "../assets/project6.png";
import laptopcode from "../assets/codelaptop.png"

const projects = [
    {
        img: proj1,
        title: "MocaMess",
        description: "Desktop application for communication using SQL and C#.",
        link: "https://github.com/andreimoca"
    },
    {
        img: proj2,
        title: "School Management",
        description: "Python application managing schools, using layered architecture.",
        link: "https://github.com/andreimoca"
    },
    {
        img: proj3,
        title: "Algo Collection",
        description: "Algorithms needed for competitive programming, written in C++.",
        link: "https://github.com/andreimoca"
    },
    {
        img: proj4,
        title: "MocaTasks",
        description: "Archive containing some problems proposed by me with solutions in C++.",
        link: "https://github.com/andreimoca"
    },
    {
        img: proj5,
        title: "Pharmacy Administration",
        description: "Pharmacy Administration App utilizing layered architecture in C.",
        link: "https://github.com/andreimoca"
    },
    {
        img: proj6,
        title: "Cambridge Exam",
        description: "CAE exam preparation platform in C#, graded on CEFR scale.",
        link: "https://github.com/andreimoca"
    }
];

const Portfolio = () => {
    return (
        <div className="pt-16 pb-10 sm:pt-16 sm:pb-16 lg:pb-16 max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 mb-6 px-4 sm:px-10">
                <div className="w-full flex justify-center">
                    <img src={laptopcode} className="w-[250px] sm:w-[320px] mx-auto" alt="Laptop coding" />
                </div>
                <div className="text-gray-300 text-center sm:text-left m-auto">
                    <h1 className="text-3xl mb-8 tracking-tight">My Work</h1>
                    <p className="text-sm md:text-xl leading-relaxed">Below, you will find some of my projects which are available for viewing on GitHub.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-4 sm:px-10">
                {projects.map((project, index) => (
                    <div key={index} className="rounded-xl bg-black/40 overflow-hidden shadow-xl">
                        <a href={project.link} className="group">
                            <img src={project.img} alt={project.title} className="h-[180px] sm:h-[220px] w-full object-cover transition duration-200 group-hover:scale-110 rounded-lg" />
                        </a>
                        <div className="p-4">
                            <h2 className="text-gray-200">
                                {project.title}
                            </h2>
                            <p className="text-gray-400">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
