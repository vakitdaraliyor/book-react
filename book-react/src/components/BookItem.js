import React, { Component } from 'react';
import {getBacklog} from "../actions/BookActions";
import PropTypes from "prop-types";
import {connect} from "react-redux"; 

class BookItem extends Component {
    componentDidMount(){
      this.props.getBacklog();
    } 

    onDeleteClick(pt_id){
        this.props.deleteProjectTask(pt_id);
      }
  render() {
    return (
      <div>

        <div className = "container">
          <h2>Your recent book list shown in table</h2>
          
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Book Name</th>
                <th scope="col">Number of Page</th>
                <th scope="col">Author</th>
                <th scope="col">Shop</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
           
            </tbody>
          </table>
        
        </div>
        
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
