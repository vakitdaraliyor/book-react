package com.springreact.book.controller;

import com.springreact.book.model.Book;
import com.springreact.book.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/book")
@CrossOrigin
public class Controller {

    @Autowired
    private BookService bookService;

    @PostMapping("")
    public ResponseEntity<?> addBook(@Valid @RequestBody Book book, BindingResult result){
        if(result.hasErrors()){
            Map<String, String> errorMap = new HashMap<>();
            for(FieldError error: result.getFieldErrors()){
                errorMap.put(error.getField(),error.getDefaultMessage());
            }
            return new ResponseEntity<Map<String,String>>(errorMap, HttpStatus.BAD_REQUEST);
        }

        Book newBook = bookService.addBook(book);
        return new ResponseEntity<Book>(newBook,HttpStatus.OK);
    }

    @GetMapping("/all")
    public Iterable<Book> getAllBooks(){
        return bookService.getAll();
    }

    @DeleteMapping("/{pt_id}")
    public ResponseEntity<?> deleteBook(@PathVariable Long pt_id){
        bookService.deleteBook(pt_id);
        return new ResponseEntity<String>("Book deleted", HttpStatus.OK);
    }

    @GetMapping("/{pt_id}")
    public ResponseEntity<?> getBookById(@PathVariable Long pt_id){
        Book book = bookService.findById(pt_id);
        return new ResponseEntity<Book>(book, HttpStatus.OK);
    }
}
