import { Link } from "react-router-dom";
const Header = () => {
    return (
        <nav className="bg-white white-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 shadow-lg ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-emerald-700">
                    Digital Blog
                </span>

                {/* <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                type="button"
                className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Sign In
              </button>mb-
            </div> */}
                <div
                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                        <li>
                            <Link
                                to="/"
                                className="text-gray-700 hover:text-emerald-600 transition-colors duration-300 font-medium"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/blog"
                                className="text-gray-700 hover:text-emerald-600 transition-colors duration-300 font-medium"
                            >
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/addblog"
                                className="text-gray-700 hover:text-emerald-600 transition-colors duration-300 font-medium"
                            >
                                Add Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className="text-gray-700 hover:text-emerald-600 transition-colors duration-300 font-medium"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="text-gray-700 hover:text-emerald-600 transition-colors duration-300 font-medium"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
