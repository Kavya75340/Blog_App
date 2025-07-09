package com.springrest.springrest.services;

import java.util.List;

import com.springrest.springrest.entities.Blog;

public interface BlogService {

    public List<Blog> getBlogs();

    public Blog getBlog(long blogId);

    public Blog addBlog(Blog blog);

    public Blog updateBlog(Blog blog);

    public boolean deleteBlog(long blogId);

}
