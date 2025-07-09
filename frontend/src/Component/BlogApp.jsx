import { useEffect, useState } from "react";
import axios from "axios";
import {
    Clock,
    User,
    Calendar,
    Tag,
    ArrowLeft,
    Share2,
    Bookmark,
} from "lucide-react";
import dummyBlog from "./Data/dummyBlog";
import BlogCard from "./Blog";
import { toast } from "react-toastify";
import base_url from "../api/bootapi";

export const BlogList = ({ onBlogClick }) => {
    const [blog, setBlog] = useState([]);
    const [loading, setLoading] = useState(false);

    const getAllBlogsFromServer = () => {
        setLoading(true);
        axios.get(`${base_url}/blogs`).then(
            (response) => {
                console.log(response.data);
                setBlog([...dummyBlog, ...response.data]);
                setLoading(false);
                toast("Courses have been loaded", {
                    position: "bottom-center",
                });
            },
            (error) => {
                console.log(error);
                setLoading(false);
                toast.error("Something went wrong");
            }
        );
    };

    useEffect(() => {
        getAllBlogsFromServer();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white px-4 py-30">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Latest{" "}
                        <span className="text-emerald-600">Blog Posts</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover insights, stories, and innovations from the
                        world of technology and beyond
                    </p>
                    <div className="w-24 h-1 bg-emerald-500 mx-auto mt-6 rounded"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blog.map((blog) => (
                        <BlogCard
                            key={blog.id}
                            blog={blog}
                            onBlogClick={onBlogClick}
                        />
                    ))}
                </div>
                <div className="text-center mt-12">
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200 shadow-lg">
                        Load More Articles
                    </button>
                </div>
            </div>
        </div>
    );
};

//  BlogReader Component
export const BlogReader = ({ blog, onBack }) => {
    if (!blog) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white flex items-center justify-center">
                <p className="text-gray-600">No blog selected</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white py-8 px-4">
            <div className="max-w-4xl mx-auto">
                {onBack && (
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-6 transition-colors"
                    >
                        <ArrowLeft size={20} />
                        <span className="font-medium">Back to Blog List</span>
                    </button>
                )}
                <article className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="relative">
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-64 md:h-80 object-cover"
                        />
                        <div className="absolute top-6 left-6">
                            <span className="bg-emerald-500 text-white px-4 py-2 rounded-full font-medium">
                                {blog.category}
                            </span>
                        </div>
                    </div>
                    <div className="p-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            {blog.title}
                        </h1>

                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-6 border-b border-gray-200">
                            <div className="flex items-center space-x-4 mb-4 md:mb-0">
                                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                                    <User
                                        size={24}
                                        className="text-emerald-600"
                                    />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">
                                        {blog.author}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        Author
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-6 text-gray-600">
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} />
                                    <span className="text-sm">
                                        {blog.published_date}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={16} />
                                    <span className="text-sm">
                                        {blog.reading_time}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-8">
                            {blog.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-2 rounded-lg font-medium border border-emerald-200"
                                >
                                    <Tag size={14} />
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="prose prose-lg max-w-none">
                            {blog.content
                                .split("\n\n")
                                .map((paragraph, index) => (
                                    <p
                                        key={index}
                                        className="text-gray-700 leading-relaxed mb-6"
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                        </div>
                        <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-200">
                            <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors">
                                <Share2 size={16} />
                                Share Article
                            </button>
                            <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors">
                                <Bookmark size={16} />
                                Save for Later
                            </button>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
};

// 3. Combined BlogApp Component (Uses both components)
const BlogApp = () => {
    const [selectedBlog, setSelectedBlog] = useState(null);

    return (
        <div>
            {selectedBlog ? (
                <BlogReader
                    blog={selectedBlog}
                    onBack={() => setSelectedBlog(null)}
                />
            ) : (
                <BlogList onBlogClick={setSelectedBlog} />
            )}
        </div>
    );
};

export default BlogApp;
