import { MdOutlineMail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdOutlineRssFeed } from "react-icons/md";
import { BsChatLeftText } from "react-icons/bs";
import { useEffect } from "react";

function Contact() {
    useEffect(() => {
        document.title = "Contact";
    }, []);
    return (
        <>
            <div className="w-full h-full pb-5 min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-100 px-20">
                <div className="max-w-7xl mx-auto px-6 py-30">
                    <h1 className="text-5xl text-emerald-800 text-center font-semibold bg-clip-text">
                        Get in Touch
                    </h1>
                    <p className="text-gray-600  mt-4 max-w-3xl max-auto text-center ml-50">
                        I'd love to hear from you! Whether you have questions,
                        feedback, or just want to connect, feel free to reach
                        out through any of the channels below.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div
                        className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-110
              group hover:shadow-lg ml-5"
                    >
                        <div className="w-16 h-16 rounded-full bg-emerald-200 mx-auto flex items-center justify-center mb-4 transform transition-all duration-300 hover:scale-110 group">
                            <MdOutlineMail className="text-white text-3xl" />
                        </div>
                        <h2 className="text-lg font-bold text-emerald-800 text-center">
                            Email
                        </h2>
                        <h4 className="text-xl  text-emerald-800 text-center">
                            Contact me anytime
                        </h4>
                        <p className="text-gray-600 mt-4 text-center">
                            digitalblog2025@gmail.com
                        </p>
                    </div>
                    <div
                        className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-110
            group hover:shadow-lg"
                    >
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-yellow-500 mx-auto flex items-center justify-center mb-4 transform transition-all duration-300 hover:scale-110 group">
                            <FaInstagram className="text-white text-2xl" />
                        </div>
                        <h2 className="text-lg font-bold text-emerald-800 text-center">
                            Instagram
                        </h2>
                        <h4 className="text-xl  text-emerald-800 text-center">
                            Follow me for updates
                        </h4>
                        <p className="text-gray-600 mt-4 text-center">
                            @Digital_Blog
                        </p>
                    </div>
                    <div
                        className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-110
            group hover:shadow-lg mr-5"
                    >
                        <div className="w-16 h-16 rounded-full bg-blue-600 mx-auto flex items-center justify-center mb-4 transform transition-all duration-300 hover:scale-110 group">
                            <FaLinkedin className="text-white text-2xl" />
                        </div>
                        <h2 className="text-lg font-bold text-emerald-800 text-center">
                            Linkedin
                        </h2>
                        <h4 className="text-xl  text-emerald-800 text-center">
                            Let's Connect Professionaly
                        </h4>
                        <p className="text-gray-600 mt-4 text-center">
                            @example
                        </p>
                    </div>
                </div>
                <div className="bg-white rounded-3xl mt-12 shadow-md p-8 md:p-12  mx-20 transform transition-all duration-300 hover:scale-105">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-emerald-900 mb-6">
                                Other Ways to Connect
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4 group">
                                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                                        <i className="fa-brands fa-github text-emerald-600 text-lg">
                                            <FaGithub />
                                        </i>
                                    </div>
                                    <div>
                                        <span className="font-medium text-emerald-900"></span>
                                        <p className="text-emerald-700 text-sm">
                                            Check out my code repositories
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 group">
                                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                                        <span className="material-symbols-outlined text-emerald-600 text-lg">
                                            <MdOutlineRssFeed />
                                        </span>
                                    </div>
                                    <div>
                                        <span className="font-medium text-emerald-900">
                                            RSS Feed
                                        </span>
                                        <p className="text-emerald-700 text-sm">
                                            Subscribe to get latest posts
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 group">
                                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                                        <span className="material-symbols-outlined text-emerald-600 text-lg">
                                            <BsChatLeftText />
                                        </span>
                                    </div>
                                    <div>
                                        <span className="font-medium text-emerald-900">
                                            Comments
                                        </span>
                                        <p className="text-emerald-700 text-sm">
                                            Leave comments on any blog post
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center lg:text-left">
                            <div className="bg-emerald-50 rounded-2xl p-8">
                                <h4 className="text-xl font-semibold text-emerald-900 mb-4">
                                    Response Time
                                </h4>
                                <p className="text-emerald-700 mb-6">
                                    I typically respond to emails within 24-48
                                    hours. For urgent matters, Twitter DMs
                                    usually get faster responses.
                                </p>
                                <div className="flex justify-center lg:justify-start space-x-4">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-emerald-600">
                                            24h
                                        </div>
                                        <div className="text-sm text-emerald-700">
                                            Email Response
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-emerald-600">
                                            2h
                                        </div>
                                        <div className="text-sm text-emerald-700">
                                            Social Media
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center text-emerald-700">
                    <p className="mt-12 text-lg">
                        Thank you for visiting my blog! I appreciate your
                        support and look forward to connecting with you.
                        <span className="inline-block ml-2">✨</span>
                    </p>
                </div>
                <div className="text-center text-emerald-700">
                    <p className="mt-12 text-lg mb-20"></p>
                </div>
            </div>
        </>
    );
}
export default Contact;
