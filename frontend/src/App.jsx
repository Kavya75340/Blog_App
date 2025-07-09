import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import Contact from "./Component/Contact";
import About from "./Component/About";
import BlogApp from "./Component/BlogApp";
import Header from "./Component/Header";
import AddBlog from "./Component/AddBlog";
import Footer from "./Component/Footer";

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/blog" element={<BlogApp />} />
                        <Route path="/addblog" element={<AddBlog />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
