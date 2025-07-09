package com.springrest.springrest.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springrest.springrest.entities.Blog;

public interface BlogDao extends JpaRepository<Blog, Long> {

}
