package com.springreact.book.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.Set;

@Entity
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank(message = "Book Name can not be blank!")
    @Column(name = "book_name")
    private String bookName;
    @Column(name = "number_page")
    private int numOfPage;
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(name = "book_shops", joinColumns = @JoinColumn(name = "id"), inverseJoinColumns = @JoinColumn(name = "shop_id"))
    private Set<BookShop> shops;
    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(name = "book_author", joinColumns = @JoinColumn(name = "id"), inverseJoinColumns = @JoinColumn(name = "author_id"))
    private Author author;

    public Book() {}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }

    public int getNumOfPage() {
        return numOfPage;
    }

    public void setNumOfPage(int numOfPage) {
        this.numOfPage = numOfPage;
    }

    public Set<BookShop> getShops() {
        return shops;
    }

    public void setShops(Set<BookShop> shops) {
        this.shops = shops;
    }

    public Author getAuthor() {
        return author;
    }

    public void setAuthor(Author author) {
        this.author = author;
    }
}
