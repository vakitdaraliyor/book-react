import React, { Component } from 'react';
import {getBacklog} from "../actions/BookActions";
import PropTypes from "prop-types";
import {connect} from "react-redux"; 
import OneBook from './OneBook'; 

class BookItem extends Component {
    componentDidMount(){
      this.props.getBacklog();
    } 

  render() {
    let BookTable
    const {books} = this.props.books
    let bookItems = []

    const BookList = books => {
      if(books.length < 1){
        return(
          <div className = "alert alert-info text-center" role = "alert">
          No Book on this board.
          </div>
        );
      }else{
        const allBooks = books.map(book => (
          <OneBook key={book.id} book={book}/>
        ));
        for(let i = 0; i<allBooks.length; i++){
          bookItems.push(allBooks[i]);
        }
      }
    
    return (
      <React.Fragment>
        <div className = "container">
          <h2>Your recent book list shown in table</h2>
          
          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Book Name</th>
                <th scope="col">Number of Page</th>
                <th scope="col">Author</th>
                <th scope="col">Shop</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
              {bookItems}
            </table>
      </div>
        
      </React.Fragment>
    )
   };

   BookTable = BookList(books);

   return(
     <div>
        {BookTable}
     </div>
   )
  }
}

BookItem.protoTypes = {
  getBacklog: PropTypes.func.isRequired,
  books: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  books: state.book
})
export default connect(mapStateToProps, {getBacklog}) (BookItem);
