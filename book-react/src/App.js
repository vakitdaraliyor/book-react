import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import BookItem from './components/BookItem';
import AddBook from './components/AddBook';

class App extends Component {

  render() {
    return (
      <Provider store = {store}>
        <Router>
          <div className="App">
            <header className="App-header">
              Book App
            </header>

            <Route exact path= "/" component= {AddBook} />
            <Route exact path = "/bookItems" component= {BookItem} />

          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
