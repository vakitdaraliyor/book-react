package com.springreact.book.service;

import com.springreact.book.model.Book;
import com.springreact.book.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    public Book addBook(Book book){
        return bookRepository.save(book);
    }

    public Iterable<Book> getAll(){
        return bookRepository.findAll();
    }

    public Book findById(Long id){
        return bookRepository.getById(id);
    }

    public void deleteBook(Long id){
        Book book = findById(id);
        bookRepository.delete(book);
    }
}
