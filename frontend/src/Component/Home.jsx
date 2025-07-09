import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Home() {
    useEffect(() => {
        document.title = "Home";
    }, []);
    const navigate = useNavigate();

    const handleAddblog = () => {
        navigate("/blog");
    };
    const handleabout = () => {
        navigate("/about");
    };
    return (
        <>
            <div className="w-full max-w-{700px} bg-gradient-to-br from-emerald-50 via-white to-emerald-100">
                {/* Main section */}
                <main className="max-w-7xl mx-auto px-6 py-12">
                    <section className=" text-center mb-16">
                        <div className="mb-8 ">
                            <h1 className="text-5xl  text-gray-800 mt-20 md:text-6xl ">
                                Welcome to the
                                <span className="block bg-gradient-to-r text-emerald-600 to-teal-600 bg-clip-text  md:text-5xl ">
                                    Digital Blog
                                </span>
                            </h1>
                            <p className="text-gray-600 mt-5 text-lg md:text-xl max-w-3xl mx-auto">
                                Dive deep into the swampy waters of technology,
                                innovation, and digital transformation. Where
                                ideas grow wild and solutions emerge from the
                                depths.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <button
                                type="button"
                                className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl "
                                onClick={handleAddblog}
                            >
                                Explore Blog
                            </button>
                            <button
                                type="button"
                                className="border border-emerald-600 text-emerald-600 px-8 py-3 rounded-xl font-medium hover:bg-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl ml-4 hover:text-white"
                                onClick={handleabout}
                            >
                                Learn More
                            </button>
                        </div>
                    </section>
                    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-emerald-100">
                            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 transform hover:scale-110 transition-transform duration-300">
                                <span className="material-symbols-outlined text-white text-2xl">
                                    trending_up
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                Master SEO for Your Blog
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Learn proven SEO techniques to rank higher and
                                drive organic traffic to your digital blog.
                            </p>
                        </div>
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-emerald-100">
                            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 transform hover:scale-110 transition-transform duration-300">
                                <span className="material-symbols-outlined text-white text-2xl">
                                    edit_note
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                Craft Engaging Content
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Discover tips to create compelling blog posts
                                that captivate and retain your audience.
                            </p>
                        </div>
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-emerald-100">
                            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 transform hover:scale-110 transition-transform duration-300">
                                <span className="material-symbols-outlined text-white text-2xl">
                                    share
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                Leverage Social Media
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Utilize social platforms to amplify your blog's
                                reach and engage with a wider audience.
                            </p>
                        </div>
                    </section>
                    <section className="container mx-auto mt-8 p-12 shadow-xl  mb-16 transform hover:scale-105 transition-all duration-300">
                        <div className="mt-12 text-center">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">
                                Latest Blog Posts
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Stay updated with our latest articles on
                                technology, innovation, and digital trends.{" "}
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div
                                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl transition-transform hover:scale-105
            duration-300"
                            >
                                <a href="#">
                                    <img
                                        className="rounded-t-lg"
                                        src="https://i.pinimg.com/736x/56/67/93/5667936906181a6fbe0501b471e2b5bd.jpg"
                                        alt=""
                                    />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-gray-800">
                                            Noteworthy technology acquisitions
                                            2021
                                        </h5>
                                    </a>
                                    <p className="mb-3 font-normal dark:text-gray-600">
                                        Here are the biggest enterprise
                                        technology acquisitions of 2021 so far,
                                        in reverse chronological order.
                                    </p>
                                    <button
                                        type="button"
                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg
                  transition-colors duration-300 hover:bg-emerald-700 focus:outline-none "
                                    >
                                        Read more →
                                    </button>
                                </div>
                            </div>

                            <div
                                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl transition-transform hover:scale-105
            duration-300"
                            >
                                <a href="#">
                                    <img
                                        className="rounded-t-lg"
                                        src="https://i.pinimg.com/736x/67/b2/dc/67b2dccd32155a4927452182a27ef0d4.jpg"
                                        alt=""
                                    />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-gray-800">
                                            Noteworthy technology acquisitions
                                            2021
                                        </h5>
                                    </a>
                                    <p className="mb-3 font-normal dark:text-gray-600">
                                        Here are the biggest enterprise
                                        technology acquisitions of 2021 so far,
                                        in reverse chronological order.
                                    </p>
                                    <button
                                        type="button"
                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg
                  transition-colors duration-300 hover:bg-emerald-700 focus:outline-none "
                                    >
                                        Read more →
                                    </button>
                                </div>
                            </div>

                            <div
                                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl transition-transform hover:scale-105
            duration-300"
                            >
                                <a href="#">
                                    <img
                                        className="rounded-t-lg"
                                        src="https://i.pinimg.com/736x/66/b1/98/66b198e590126d5f429811fd9648770f.jpg"
                                        alt=""
                                    />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-gray-800">
                                            Noteworthy technology acquisitions
                                            2021
                                        </h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-500">
                                        Here are the biggest enterprise
                                        technology acquisitions of 2021 so far,
                                        in reverse chronological order.
                                    </p>
                                    <button
                                        type="button"
                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg
                  transition-colors duration-300 hover:bg-emerald-700 focus:outline-none "
                                    >
                                        Read more →
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="container mx-auto mt-8 p-12 shadow-xl rounded-3xl mb-16 transform hover:scale-105 transition-all duration-300 bg-gradient-to-r from-emerald-600 to-teal-600">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Ready to Dive in
                            </h2>
                            <p className="text-gray-200 text-xl max-w-2xl mx-auto opacity-90">
                                Join our community of like-minded individuals
                                and stay updated with the latest trends in
                                technology and business.
                            </p>
                            <button
                                className="mt-4 px-6 py-3 bg-white text-emerald-600  rounded-lg shadow-md hover:bg-gray-100 transform transition-all
            hover:scale-105 duration-300"
                            >
                                Start Your Journey
                            </button>
                            <button
                                type="button"
                                className="border  text-white px-8 py-3 rounded-xl font-medium hover:bg-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl ml-4 hover:text-emerald-600 "
                                onClick={handleAddblog}
                            >
                                View More
                            </button>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}

export default Home;
