package com.springrest.springrest.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrest.springrest.dao.BlogDao;
import com.springrest.springrest.entities.Blog;

@Service
public class BlogServiceImpl implements BlogService {

    @Autowired
    private BlogDao blogDao;

    // List<Blog> list;

    public BlogServiceImpl() {
        // list = new ArrayList<>();
        // list.add(new Blog(144, "Java Cource", "this is for Beginers"));
        // list.add(new Blog(145, "Spring Cource", "this is for Beginers"));
        // list.add(new Blog(146, "Python Cource", "this is for Beginers"));
        // list.add(new Blog(1496, "C++ Cource", "this is for Beginers"));
    }

    @Override
    public List<Blog> getBlogs() {
        return blogDao.findAll();
    }

    @Override
    public Blog getBlog(long blogId) {
        // Course c = null;
        // for (Course course : list) {
        // if (course.getId() == courseId) {
        // c = course;
        // break;
        // }
        // }
        return blogDao.getOne(blogId);

    }

    @Override
    public Blog addBlog(Blog blog) {
        // list.add(course);
        blogDao.save(blog);
        return blog;
    }

    // public Course updateCourse(long courseId, Course course) {
    // for (Course courses : list) {
    // if (courses.getId() == courseId) {
    // courses.setTitle(course.getTitle());
    // courses.setDescription(course.getDescription());
    // return courses;
    // }
    // }
    // courseDao.save(course);
    // return null;
    // }
    public Blog updateCourse(Blog blog) {
        blogDao.save(blog);
        return blog;
    }

    @Override
    public boolean deleteBlog(long blogId) {
        Blog blog = blogDao.findById(blogId)
                .orElseThrow(() -> new RuntimeException("Course not found with ID: " + blogId));
        blogDao.delete(blog);
        return true;
    }

    @Override
    public Blog updateBlog(Blog blog) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateBlog'");
    }
}
