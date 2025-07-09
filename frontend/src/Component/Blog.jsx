import { Clock, User, Calendar, Tag } from "lucide-react";

const BlogCard = ({ blog, onBlogClick }) => {
    return (
        <div
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-emerald-200 cursor-pointer"
            onClick={() => onBlogClick && onBlogClick(blog)}
        >
            <div className="relative">
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                    <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {blog.category}
                    </span>
                </div>
            </div>
            <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-emerald-600 transition-colors">
                    {blog.title}
                </h2>
                <p
                    className="text-gray-600 mb-4 text-sm leading-relaxed overflow-hidden"
                    style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                    }}
                >
                    {blog.content}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2 py-1 rounded text-xs font-medium border border-emerald-200"
                        >
                            <Tag size={12} />
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                            <User size={16} className="text-emerald-600" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">
                            {blog.author}
                        </span>
                    </div>

                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                            <Calendar size={12} />
                            <span>{blog.published_date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock size={12} />
                            <span>{blog.reading_time}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default BlogCard;
