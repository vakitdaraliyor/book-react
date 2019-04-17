package com.springreact.book.repository;

import com.springreact.book.model.Book;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends CrudRepository<Book, Long> {

    Book getById(Long id);
}
