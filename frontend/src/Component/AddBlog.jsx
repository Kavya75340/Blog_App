/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const AddBlog = () => {
    useEffect(() => {
        document.title = "Add Blog";
    }, []);

    const [blog, setBlog] = useState({
        id: "",
        title: "",
        image: "",
        category: "",
        author: "",
        tags: "",
        published_time: "",
        read_time: "",
        content: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setBlog((prevBlog) => ({
            ...prevBlog,
            [id]: value,
        }));
    };

    const handleForm = (e) => {
        e.preventDefault();
        const requiredFields = ["id", "title", "author", "image", "content"];
        for (const field of requiredFields) {
            if (!blog[field]) {
                toast.warn(`Please fill out the ${field} field`);
                return;
            }
        }

        const formattedBlog = {
            ...blog,
            tags: blog.tags.split(",").map((tag) => tag.trim()),
        };

        postDataToServer(formattedBlog);
    };

    const postDataToServer = (data) => {
        setIsSubmitting(true);
        axios.post(`${base_url}/blogs`, data).then(
            (response) => {
                toast.success("Blog added successfully");
                console.log(response);
                setIsSubmitting(false);
                clearForm();
            },
            (error) => {
                console.log(error);
                toast.error("Something went wrong");
                setIsSubmitting(false);
            }
        );
    };

    const clearForm = () => {
        setBlog({
            id: "",
            title: "",
            image: "",
            category: "",
            author: "",
            tags: "",
            published_time: "",
            read_time: "",
            content: "",
        });
    };

    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-100 flex justify-center py-20">
            <div className="w-full max-w-[700px] p-6 bg-white rounded-xl shadow-lg">
                <h2 className="text-center mb-4 text-2xl font-semibold">
                    Add New Blog
                </h2>
                <form onSubmit={handleForm}>
                    {/* ID */}
                    <InputField
                        id="id"
                        label="Blog ID"
                        value={blog.id}
                        onChange={handleInputChange}
                    />

                    {/* Title */}
                    <InputField
                        id="title"
                        label="Title"
                        value={blog.title}
                        onChange={handleInputChange}
                    />

                    {/* Author */}
                    <InputField
                        id="author"
                        label="Author"
                        value={blog.author}
                        onChange={handleInputChange}
                    />

                    {/* Category */}
                    <InputField
                        id="category"
                        label="Category"
                        value={blog.category}
                        onChange={handleInputChange}
                    />

                    {/* Tags */}
                    <InputField
                        id="tags"
                        label="Tags (comma-separated)"
                        value={blog.tags}
                        onChange={handleInputChange}
                        placeholder="e.g. AI, Cloud, Collaboration"
                    />

                    {/* Published Time */}
                    <InputField
                        id="published_time"
                        label="Published Time"
                        type="datetime-local"
                        value={blog.published_time}
                        onChange={handleInputChange}
                    />

                    {/* Read Time */}
                    <InputField
                        id="read_time"
                        label="Read Time"
                        value={blog.read_time}
                        onChange={handleInputChange}
                        placeholder="e.g., 5 minutes"
                    />

                    {/* Image URL */}
                    <InputField
                        id="image"
                        label="Image URL"
                        value={blog.image}
                        onChange={handleInputChange}
                    />

                    {/* Content */}
                    <div className="mb-4">
                        <label
                            htmlFor="content"
                            className="block text-sm font-bold mb-1"
                        >
                            Content
                        </label>
                        <textarea
                            id="content"
                            value={blog.content}
                            onChange={handleInputChange}
                            className="w-full p-2 h-80 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                            placeholder="Enter blog content"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="text-center flex justify-center mt-6">
                        <button
                            type="submit"
                            className="bg-white text-emerald-600 border border-emerald-700 px-4 py-2 rounded-md hover:bg-emerald-700 hover:text-white"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <svg
                                        className="animate-spin h-5 w-5 mr-2 inline-block"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        />
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8v8z"
                                        />
                                    </svg>
                                    Submitting...
                                </>
                            ) : (
                                "Add Blog"
                            )}
                        </button>
                        <button
                            type="button"
                            className="ml-3 bg-white text-emerald-600 border border-emerald-700 px-4 py-2 rounded-md hover:bg-emerald-700 hover:text-white"
                            onClick={clearForm}
                        >
                            Clear
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

// Reusable InputField component
const InputField = ({
    id,
    label,
    value,
    onChange,
    type = "text",
    placeholder = "",
}) => (
    <div className="mb-4">
        <label htmlFor={id} className="block text-sm font-bold mb-1">
            {label}
        </label>
        <input
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
    </div>
);

export default AddBlog;
