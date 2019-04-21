import React, { Component } from 'react'
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {deleteBook} from "../actions/BookActions";

class OneBook extends Component {

  onDeleteClick(pt_id){
    this.props.deleteBook(pt_id);
  }

  render() {

    const {book} = this.props;
    return (
              <tbody>
                  <tr>
                    <td>{book.id}</td>
                    <td>{book.bookName}</td>
                    <td>{book.numOfPage}</td>
                    <td>{book.author.authorName}</td>
                    <td>
                    {book.shops.map((shop) => (
                      <p key={shop.shopId}><strong>Country: </strong>{shop.country} <br/> <strong>State: </strong>{shop.state}<br/></p>
                    )
                       
                    )}
                    </td>
                    <td><Link to={`updateBook/${book.id}`} className="btn btn-primary">
                        View / Update
                    </Link>
                    <br/>
                    <button className="btn btn-danger"
                    onClick = {this.onDeleteClick.bind(this, book.id)}>
                        Delete
                    </button></td>
                  </tr> 
              </tbody> 
    )
  }
}

OneBook.propTypes = {
  deleteBook: PropTypes.func.isRequired
};

export default connect(null, {deleteBook}) (OneBook);