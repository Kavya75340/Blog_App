import { useEffect } from "react";
function About() {
    useEffect(() => {
        document.title = "About";
    }, []);
    return (
        <section className="w-full max-w-{700px} bg-gradient-to-br from-emerald-50 via-white to-emerald-100 h-full pb-10 px-10">
            <div className="max-w-7xl mx-auto px-6 py-30 mt-5">
                <h1 className="text-5xl text-emerald-800 text-center font-semibold bg-clip-text">
                    About Our Blog
                </h1>
                <p className="text-xl text-gray-600 mt-4 mx-auto max-w-3xl text-center">
                    We are a team of passionate individuals committed to sharing
                    knowledge and insights on the latest trends in technology
                    and digital transformation.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-emerald-100 ml-5">
                    <div
                        data-id="-P8X"
                        className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-emerald-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 20h9M12 4h9m-9 0v16M3 20h.01M3 4h.01M3 4v16"
                            />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        Quality Content
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        We craft every article with passion, ensuring each piece
                        delivers value, insight, and inspiration to our readers.
                    </p>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-emerald-100">
                    <div
                        data-id="-P8X"
                        className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-emerald-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 20h5V4H2v16h5m10 0v-4a2 2 0 012-2h4a2 2 0 012 2v4"
                            />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        Community First
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        Discover tips to create compelling blog posts that
                        captivate and retain your audience.
                    </p>
                </div>
                <div className="bg-white  rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-emerald-100 mr-5 ">
                    <div
                        data-id="-P8X"
                        className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-emerald-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11 3a7 7 0 00-4.938 11.938c.408.36.936.792.938 1.062a2 2 0 002 2h2a2 2 0 002-2c.002-.27.53-.702.938-1.062A7 7 0 0011 3z"
                            />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        Innovation
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        Utilize social platforms to amplify your blog's reach
                        and engage with a wider audience.
                    </p>
                </div>
            </div>
            <div className="container mx-auto mt-12 p-12 shadow-xl rounded-3xl mb-16 transform hover:scale-105 transition-all duration-300 bg-gradient-to-r from-emerald-600 to-teal-600">
                <div className="grid grid-cols-2 md:grid-cols-2 gap-8 ">
                    <div className="">
                        <h2 className="text-3xl font-bold text-white mb-4 ml-2">
                            Our Story
                        </h2>
                        <p className="text-gray-200 text-xl max-w-2xl mx-auto mb-6">
                            We started as a small team of passionate writers and
                            tech enthusiasts, united by a vision to share
                            knowledge and inspire creativity. Frustrated by the
                            clutter of generic content online, we launched our
                            blog to deliver authentic, well-researched insights
                            on digital trends, coding, and design. From
                            late-night brainstorming sessions to publishing our
                            first post, every step was fueled by a commitment to
                            empower our readers with practical know-how.
                        </p>
                        <p className="text-gray-200 text-xl max-w-2xl mx-auto ">
                            Today, our blog stands as a trusted resource, driven
                            by a mission to educate and connect. We're more than
                            a platform—we’re a community dedicated to helping
                            you navigate the digital world with confidence. Join
                            us as we continue to explore, learn, and share the
                            stories that shape the future of technology.
                        </p>
                    </div>
                    <div className="">
                        <img
                            src="https://i.pinimg.com/736x/a2/4a/94/a24a9474c04576c306032782dfe1c1c0.jpg"
                            alt="Our Story"
                            className="rounded-2xl shadow-lg"
                        />
                    </div>
                </div>
            </div>
            <div className="text-center mb-16">
                <h2 className="text-3xl font-semibold text-gray-800 mb-12">
                    Meet Our Team
                </h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center group">
                        <div className="relative mb-6">
                            <img
                                src="https://i.pinimg.com/736x/cc/46/ed/cc46ed6fb4d49a3e08e1d4f496087607.jpg"
                                // src="https://i.pinimg.com/736x/19/26/6e/19266e9d39db046491e8313efc921d2e.jpg"
                                alt="Naruto Uzumaki"
                                className="w-32 h-32 rounded-full mx-auto shadow-lg group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">
                            Goku
                        </h2>
                        <h3 className="text-gray-600">Founder & CEO</h3>
                        <p className="text-gray-600">
                            Goku is a passionate writer and technology
                            enthusiast. He believes in the power of storytelling
                            to inspire and educate.
                        </p>
                    </div>
                    <div className="text-center group">
                        <div className="relative mb-6">
                            <img
                                src="https://i.pinimg.com/736x/03/ec/ed/03ecede3efd8952376bfffdd207ef005.jpg"
                                alt="Ichigo Kurosaki"
                                className="w-32 h-32 rounded-full mx-auto shadow-lg group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">
                            Ichigo Kurosaki
                        </h2>
                        <h3 className="text-gray-600">Tech Writer</h3>
                        <p className="text-gray-600">
                            Ichigo is dedicated to exploring the latest trends
                            in technology and sharing insights that empower
                            readers to stay ahead in the digital landscape.
                        </p>
                    </div>
                    <div className="text-center group">
                        <div className="relative mb-6">
                            <img
                                // src="https://i.pinimg.com/736x/cc/46/ed/cc46ed6fb4d49a3e08e1d4f496087607.jpg"
                                // src="https://i.pinimg.com/736x/19/26/6e/19266e9d39db046491e8313efc921d2e.jpg"/
                                src="https://i.pinimg.com/736x/ac/fb/11/acfb11057a005a162be773bb89e5b0b1.jpg"
                                alt="Naruto Uzumaki"
                                className="w-32 h-32 rounded-full mx-auto shadow-lg group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">
                            Goku
                        </h2>
                        <h3 className="text-gray-600">Creative Designer</h3>
                        <p className="text-gray-600">
                            Luffy is a visual storyteller bringing ideas to life
                            through design and imagery.
                        </p>
                    </div>
                    <div className="text-center group">
                        <div className="relative mb-6">
                            <img
                                // src="https://i.pinimg.com/736x/cc/46/ed/cc46ed6fb4d49a3e08e1d4f496087607.jpg"
                                src="https://i.pinimg.com/736x/19/26/6e/19266e9d39db046491e8313efc921d2e.jpg"
                                alt="Naruto Uzumaki"
                                className="w-32 h-32 rounded-full mx-auto shadow-lg group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">
                            Naruto
                        </h2>
                        <h3 className="text-gray-600">Community Manager</h3>
                        <p className="text-gray-600">
                            Naruto is dedicated to building bridges between
                            writers and readers, fostering meaningful
                            connections.
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10 mb-16">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ml-5">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                        Our Mission
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Our mission is to create a dynamic digital blog that
                        serves as a beacon for a global community, delivering
                        consistent, high-quality content that inspires and
                        connects. We strive to ignite meaningful conversations,
                        share diverse perspectives, and empower our readers with
                        insights that resonate deeply in their everyday lives.
                        By fostering authentic engagement, we aim to cultivate a
                        loyal, inclusive audience that feels valued and heard,
                        building a space where ideas thrive and connections
                        flourish.
                    </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 mr-5">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                        Our Vision
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Our vision is to establish a premier digital blog that
                        redefines how global communities connect, inspire, and
                        grow. We aspire to be a dynamic platform where diverse
                        voices converge, delivering powerful, high-quality
                        content that empowers readers to learn, act, and engage
                        meaningfully in their lives. By prioritizing
                        authenticity and innovation, we aim to create a space
                        that not only informs but also sparks transformative
                        ideas, fostering a loyal, inclusive community united by
                        shared purpose and passion.
                    </p>
                </div>
            </div>
            <div className="  text-center mb-26 mx-10 rounded-2xl p-12 shadow-xl transform hover:scale-105 transition-all duration-300 bg-emerald-50s">
                <h2 className="text-3xl font-semibold text-gray-800 mb-12">
                    Join Our Community
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                    We invite you to join our community of passionate readers
                    and writers. Share your thoughts, engage with our content,
                    and be part of a movement that values knowledge, creativity,
                    and connection.
                </p>
                <button className="bg-emerald-600 text-white px-6 py-3 rounded-full hover:bg-emerald-700 transition-colors duration-300">
                    Join us now
                </button>
            </div>
        </section>
    );
}

export default About;
