import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class OneBook extends Component {

  onDeleteClick(pt_id){
    this.props.deleteBook(pt_id);
}

  render() {

    const {book} = this.props;
    var shop = {};
    for(var i in book.shops){
      shop = book.shops[i]
    
    return (
              <tbody>
                  <tr>
                    <td>{book.id}</td>
                    <td>{book.bookName}</td>
                    <td>{book.numOfPage}</td>
                    <td>{book.author.name}</td>
                    <td><strong>Country:</strong> {shop.country}<br/><strong>State:</strong> {shop.state}</td>
                    <td><Link to={`/`} className="btn btn-primary">
                        View / Update
                    </Link>
                    <br/>
                    <button className="btn btn-danger ml-4"
                    onClick = {this.onDeleteClick.bind(this, book.id)}>
                        Delete
                    </button></td>
                  </tr> 
              </tbody> 
    )
   }
  }
}
