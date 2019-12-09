import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Bookshelf from './components/Bookshelf';
import {Route, Switch, Link} from 'react-router-dom';
import ErrorNotFound from './components/ErrorNotFound';
import Search from './components/Search';

class BooksApp extends React.Component {

  state = {
    books: []
  }

  componentDidMount() {
    // get books on load
    BooksAPI.getAll().then(books => this.setState({ books: books }));
  }

  setShelf = (updatedBook, shelf) => {
    console.log(`Changed Book Shelf: ${updatedBook.title} - ${updatedBook.id}`);
    BooksAPI.update(updatedBook, shelf).then(
      response => {
        // Update state values, remove from state and add book to state with updated shelf value
        updatedBook.shelf = shelf;
        this.setState(currState => ({
          books: currState.books
          .filter(oldBook => oldBook.id !== updatedBook.id)
          .concat(updatedBook)
        }));
      });
  };

  render() {

    const bookShelfs = [
      { title: 'Currently Reading', shelf: 'currentlyReading' },
      { title: 'Want To Read', shelf: 'wantToRead' },
      { title: 'Read', shelf: 'read' }
    ]

    return (
      <div className="app"> 
        <Switch>
          <Route
            path="/search"
            render={() => (
              <Search books={this.state.books} setShelf={this.setShelf} />
            )}
          />
          <Route
            exact
            path="/"
            render={() => (
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                  <div>
                    {bookShelfs.map((shelf, index) => {
                        return (
                          <Bookshelf 
                              key={index} 
                              title={shelf.title} 
                              setShelf={this.setShelf} 
                              books={this.state.books.filter(book => book.shelf === shelf.shelf)} 
                          />
                        );
                    })}
                  </div>
                </div>
                <div className="open-search">
                      <Link to="/search">
                        <button id='open-search-button'/>
                      </Link>
                </div>
              </div>
            )}
          />
          <Route component={ErrorNotFound} />
        </Switch>
      </div>
    )
  }
}

export default BooksApp
