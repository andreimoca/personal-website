import React from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillFacebook } from 'react-icons/ai';

const Contact = () => {
  return (
    <div className='px-4 sm:px-6 lg:px-8 py-16 md:h-screen flex justify-center items-center'>
        <div className="w-full max-w-7xl bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl md:rounded-full py-10 px-4 sm:px-6 lg:px-8 shadow-xl hover:shadow-2xl transition duration-500 ease-in-out">
            <div className="text-center">
                <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">
                    Let's Connect!
                </h2>
                <p className="text-sm sm:text-xl text-gray-300 mb-6">
                    Input your contact details below:
                </p>
            </div>

            <div className="flex flex-col md:flex-row justify-around items-center">
                <div className="space-y-4 mb-6 md:mb-0">
                    {[
                      { icon: AiFillLinkedin, color: 'text-blue-500', href: 'https://www.linkedin.com/in/andreimoca/', user: 'andreimoca', platform: 'LinkedIn' },
                      { icon: AiFillGithub, color: 'text-gray-300', href: 'https://github.com/andreimoca', user: 'andreimoca', platform: 'GitHub' },
                      { icon: AiFillFacebook, color: 'text-blue-700', href: 'https://facebook.com/mocawaw', user: 'Moca Andrei', platform: 'Facebook' }
                    ].map((link, index) => (
                        <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:scale-110 transition-transform duration-300 ease-in-out">
                            <link.icon className={`w-12 h-12 ${link.color} hover:text-white transition-colors duration-300`} />
                            <div>
                                <h3 className="text-lg font-bold text-gray-200 hover:text-white transition-colors duration-300">{link.platform}</h3>
                                <p className="text-sm text-gray-400 hover:text-gray-300 transition-colors duration-300">User: {link.user}</p>
                            </div>
                        </a>
                    ))}
                </div>
                <div className="w-full max-w-lg p-6 md:p-12 bg-black/50 rounded-xl backdrop-blur-md">
                    <h2 className="text-xl font-bold text-white mb-4">Ready to Get Started?</h2>
                    <form action="https://getform.io/f/zazkpywb" method="POST" className="space-y-4">
                        <input type="text" id="name" autoComplete="given-name" placeholder="Your name" className="w-full rounded-md border border-gray-700 bg-gray-800 text-white py-2 px-4" name="name"/>
                        <input type="email" id="email" autoComplete="email" placeholder="Your email address" className="w-full rounded-md border border-gray-700 bg-gray-800 text-white py-2 px-4" name="email"/>
                        <textarea id="textarea" name="textarea" cols="30" rows="5" placeholder="Write your message..." className="w-full rounded-md border border-gray-700 bg-gray-800 text-white py-2 px-4"></textarea>
                        <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-all duration-300">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
