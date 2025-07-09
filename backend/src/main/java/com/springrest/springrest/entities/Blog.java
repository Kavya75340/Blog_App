package com.springrest.springrest.entities;

import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.time.LocalDateTime;
import java.util.List;

@Entity
public class Blog {

    @Id
    private long id;

    private String title;
    private String author;
    private String image;
    private String category;

    @ElementCollection
    private List<String> tags;

    private LocalDateTime published_time;
    private String read_time;

    @Column(length = 10000)
    private String content;

    public Blog() {
        super();
    }

    public Blog(long id, String title, String author, String image, String category, List<String> tags,
            LocalDateTime published_time, String read_time, String content) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.image = image;
        this.category = category;
        this.tags = tags;
        this.published_time = published_time;
        this.read_time = read_time;
        this.content = content;
    }

    // Getters and Setters

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public List<String> getTags() {
        return tags;
    }

    public void setTags(List<String> tags) {
        this.tags = tags;
    }

    public LocalDateTime getPublished_time() {
        return published_time;
    }

    public void setPublished_time(LocalDateTime published_time) {
        this.published_time = published_time;
    }

    public String getRead_time() {
        return read_time;
    }

    public void setRead_time(String read_time) {
        this.read_time = read_time;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    @Override
    public String toString() {
        return "Blog{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", author='" + author + '\'' +
                ", image='" + image + '\'' +
                ", category='" + category + '\'' +
                ", tags=" + tags +
                ", published_time=" + published_time +
                ", read_time='" + read_time + '\'' +
                ", content='" + content + '\'' +
                '}';
    }
}
