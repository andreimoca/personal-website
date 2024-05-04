import React from 'react';

const About = () => {
    return (
        <div className='text-white h-auto w-full' id='about'> 
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 px-10 w-full"> 
                <div className='w-full'> 
                    <div className='bg-gray-800/50 rounded-lg shadow-lg p-8 text-center my-8 mx-auto max-w-4xl'>
                        <h3 className='text-3xl md:text-5xl font-semibold mb-5 text-white'>About <span className="text-blue-400">Me</span></h3>
                        <p className='text-xs md:text-xl leading-7 text-gray-300'>
                            Hello! I am Andrei, a first-year Computer Science student at Babes-Bolyai University in Cluj-Napoca, with a passion for technology, coding, finance, and competitions.<br/><br/>
                            I graduated as valedictorian from Liviu Rebreanu High School with GPA 4.0/4.0.<br/>
                            In the Baccalaureate exam, I scored a perfect 10/10 in Mathematics. My extensive achievements earned me admission to all universities in the country without the need for entrance exams, and I was granted an automatic perfect score of 10/10 in the Computer Science Baccalaureate exam.<br/><br/>
                            I have garnered numerous medals and honors at regional, national, and international competitions, including the Olympiad.<br/>
                            In recognition of my achievements, I have been awarded three prestigious scholarships during my college years: the Performance Scholarship from the Bistrita-Nasaud County Council, the "Nosa" Merit Scholarship from Bistrita City Hall, and the Performance Scholarship from Babes-Bolyai University, distinguishing me as the most awarded student of my generation in my school, city, and county. <br/><br/>
                            If you want to learn more about me, feel free to reach out!
                        </p>
                    </div>
                    <div className='flex justify-center mt-10 gap-7'> 
                        <div className='bg-[#333333]/40 p-5 rounded-lg'>
                            <h3 className='text-4xl font-semibold text-white'>8<span>+</span></h3>
                            <p><span className='text-base'>years of coding experience</span></p>
                        </div>
                        <div className='bg-[#333333]/40 p-5 rounded-lg'>
                            <h3 className='text-4xl font-semibold text-white'>100<span>+</span></h3>
                            <p><span className='text-base'>awards at contests</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
