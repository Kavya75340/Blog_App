package com.springrest.springrest.controller;

import org.springframework.web.bind.annotation.RestController;

import com.springrest.springrest.entities.Blog;
import com.springrest.springrest.services.BlogService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class MyController {

    @Autowired
    private BlogService blogService;

    @GetMapping("/home")
    public String home() {
        return "this is my home page";
    }

    // Get the Course
    @GetMapping("/blogs")
    public List<Blog> getBlogs() {
        return this.blogService.getBlogs();
    }

    @GetMapping("/blogs/{blogId}")
    public Blog getBlog(@PathVariable String blogId) {
        return this.blogService.getBlog(Long.parseLong(blogId));
    }

    @PostMapping("/blogs")
    public Blog addBlog(@RequestBody Blog blog) {

        return this.blogService.addBlog(blog);
    }

    @PutMapping("/blogs")
    public Blog updateBlog(@RequestBody Blog blog) {

        return this.blogService.updateBlog(blog);
    }

    @DeleteMapping("/courses/{coursesId}")
    public boolean deleteBlog(@PathVariable String blogsId) {
        return this.blogService.deleteBlog(Long.parseLong(blogsId));
    }

}
