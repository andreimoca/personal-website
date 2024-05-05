import React from "react";
import proj1 from "../assets/project1.png";
import proj2 from "../assets/project2.png";
import proj3 from "../assets/project3.png";
import proj4 from "../assets/project4.png";
import proj5 from "../assets/project5.png";
import proj6 from "../assets/project6.png";

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
        <div className="pt-12 pb-8 sm:pt-16 sm:pb-16 lg:pb-16 max-w-[1200px] mx-auto">
            <div className="flex justify-center">
                <div className="bg-white/10 backdrop-blur-md hover:bg-white/20 transition duration-500 ease-in-out rounded-xl p-4 text-center">
                    <h1 className="text-2xl sm:text-4xl mb-6 tracking-tight font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                        My Work
                    </h1>
                    <p className="text-xs sm:text-xl leading-snug text-gray-300">
                    Below, you will find some of my projects which are available for viewing on GitHub.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-2 sm:px-10">
                {projects.map((project, index) => (
                    <div key={index} className="rounded-xl bg-gradient-to-r from-gray-700 to-gray-900 overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 ease-in-out">
                        <a href={project.link} className="group">
                            <img src={project.img} alt={project.title} className="h-36 sm:h-[220px] w-full object-cover transition duration-200 group-hover:scale-110" />
                        </a>
                        <div className="p-3">
                            <h2 className="text-lg sm:text-xl font-semibold text-white">
                                {project.title}
                            </h2>
                            <p className="text-gray-400 text-xs sm:text-sm">
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
