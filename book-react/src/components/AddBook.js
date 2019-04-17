import React, { Component } from 'react'
import classnames from "classnames";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {addBook} from "../actions/BookActions";

class AddBook extends Component {

    constructor(){
        super()
        this.state = {
            bookName: "",
            numOfPage: 1,
            shop: {
                country:"",
                state:""
            },
            shops:[],
            author: 
                {
                    authorName:""
                }
            ,
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors){
            this.setState({errors:nextProps.errors})
        }
    }
    
    handleChangeFor = (propertyName) => (event) => {
        
        if(propertyName === 'authorName'){
            const {author} = this.state;
            const newAuthor = {
                ...author,
                [propertyName]: event.target.value
            };
            this.setState({author: newAuthor});
        }
        else{
            const{shop} = this.state;
            const newShop = {
                ...shop,
                [propertyName]: event.target.value
            };
            this.setState({shop: newShop});
            
        }
            
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit(e){
        var newArray = this.state.shops.slice();
            newArray.push(this.state.shop);
        e.preventDefault()
        const newBook = {
            bookName: this.state.bookName,
            numOfPage: this.state.numOfPage,
            shops: newArray,
            author: this.state.author,
        };
        //console.log(newArray);
        //console.log(this.state.shop);
        console.log(newBook);
        this.props.addBook(newBook, this.props.history)
    }

  render() {
      const {errors} = this.state
    return (
        <div className="addBook">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h4 className="display-4 text-center">Add /Update Book</h4><br/>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <h4>Enter Book Name:</h4>
                            <input 
                            type="text" 
                            className={classnames("form-control form-control-lg", {
                                "is-invalid": errors.bookName
                            })}
                             name="bookName"
                             value={this.state.bookName}
                             placeholder="Enter book name" 
                             onChange={this.onChange}
                             />
                             {
                                 errors.bookName && (
                                     <div className= "invalid-feedback">{errors.bookName}</div> 
                                 )
                             }
                        </div>
                        <div className="form-group">
                        <h4>Enter Number of Page:</h4>
                            <input 
                            type="number" 
                            className="form-control form-control-lg" 
                            placeholder="Enter number of page"
                            value={this.state.numOfPage} 
                            onChange={this.onChange}
                            name="numOfPage">                            
                            </input>
                        </div>
                        <div className="form-group">
                        <h4>Enter Shop Country:</h4>
                        <input 
                            type="text" 
                            className="form-control form-control-lg" 
                            placeholder="Enter country"
                            value={this.state.shop.country} 
                            onChange={this.handleChangeFor('country')}
                            name="country">                            
                            </input>
                        </div>
                        <div className="form-group">
                        <h4>Enter Shop State:</h4>
                        <input 
                            type="text" 
                            className="form-control form-control-lg" 
                            placeholder="Enter state"
                            value={this.state.shop.state} 
                            onChange={this.handleChangeFor('state')}
                            name="state">                            
                            </input>
                        </div>
                        <div className="form-group">
                        <h4>Enter Author Name:</h4>
                        <input 
                            type="text" 
                            className="form-control form-control-lg" 
                            placeholder="Enter author name"
                            value={this.state.author.authorName} 
                            onChange={this.handleChangeFor('authorName')}
                            name="authorName">                            
                            </input>
                        </div>
                        <input type="submit" className="btn btn-primary btn-block mt-4" />
                    </form>
                </div>
            </div>
        </div>
    </div>
        
    )
  }
}

AddBook.propTypes = {
    addBook: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    errors: state.errors
})

export default connect(mapStateToProps, {addBook}) (AddBook);
