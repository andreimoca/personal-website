import React from 'react';

const About = () => {
    return (
        <div className='text-white w-full py-12' id='about'>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 px-4 md:px-10 w-full">
                <div className='w-full max-w-4xl mx-auto'>
                    <div className='rounded-2xl shadow-xl p-4 md:p-8 text-center my-4 md:my-8 transition duration-500 ease-in-out transform hover:scale-105'>
                        <h3 className='text-2xl md:text-3xl lg:text-5xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400'>
                            About Me
                        </h3>
                        <p className='text-xs md:text-sm lg:text-lg leading-snug md:leading-8 text-gray-300'>
                            Hello! I am Andrei, Software Engineer STEP Intern at Google Zurich & Computer Science student at Babes-Bolyai University, with a passion for technology, coding, finance, and competitions.<br/><br/>
                            I graduated as valedictorian from Liviu Rebreanu High School with GPA 4.0/4.0.<br/>
                            In the Baccalaureate exam, I scored a perfect 10/10 in Mathematics. My extensive achievements earned me admission to all universities in the country without the need for entrance exams, and I was granted an automatic perfect score of 10/10 in the Computer Science Baccalaureate exam.<br/><br/>
                            I have garnered numerous medals and honors at regional, national, and international competitions, including the Olympiad.<br/>
                            In recognition of my achievements, I have been awarded three prestigious scholarships during my college years: the Performance Scholarship from the Bistrita-Nasaud County Council, the "Nosa" Merit Scholarship from Bistrita City Hall, and the Performance Scholarship from Babes-Bolyai University, distinguishing me as the most awarded student of my generation in my school, city, and county. <br/><br/>
                            If you want to learn more about me, feel free to reach out!
                        </p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 text-center'>
                        <div className='p-4 md:p-6 rounded-xl shadow-lg transition duration-500 ease-in-out transform hover:scale-110 bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-600 hover:to-blue-400 text-white'>
                            <h4 className='text-2xl md:text-4xl font-semibold'>8<span>+</span> Years</h4>
                            <p className='text-xs md:text-base'>Coding Experience</p>
                        </div>
                        <div className='p-4 md:p-6 rounded-xl shadow-lg transition duration-500 ease-in-out transform hover:scale-110 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-400 hover:to-blue-600 text-white'>
                            <h4 className='text-2xl md:text-4xl font-semibold'>100<span>+</span> Awards</h4>
                            <p className='text-xs md:text-base'>Informatics & Mathematics Competitions</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
