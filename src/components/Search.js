import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import Book from './Book';

 class Search extends Component {

    state =  {
        booksResult: [],
        query: '',
    }
    
    getBooks = event => {
        const query = event.target.value;
        this.setState({ query: query });

        if (query) {
            BooksAPI.search(query.trim(), 20).then(books => {
            books.length > 0
                ? this.setState({ booksResult: books })
                : this.setState({ booksResult: [] });
            });
        } else {
            this.setState({ booksResult: [] });
        }

        console.log(`Found this books: ${this.state.booksResult}`);
    }

    render () {
        const setShelf = this.props.setShelf;
        const books = this.props.books;
        const query = this.state.query;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">
                    Close
                    </Link>
                    <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title or author"
                        value={query}
                        onChange={this.getBooks}
                    />
                    </div>
                </div>
            
            <div className="search-books-results">
                { 
                this.state.booksResult.length > 0 ? (
                <div>
                    <h3>Search returned {this.state.booksResult.length} books </h3>
                    <ol className="books-grid">
                    { 
                        this.state.booksResult.map(book => (
                            <Book
                                books={books}
                                book={book}
                                key={book.id}
                                setShelf={setShelf}
                            />            
                        ))
                    }
                    </ol>
                </div>
                ) : query !== '' && (
                    <div>
                    <h3>Search returned {this.state.booksResult.length} books </h3>
                </div>                    
                )
                }
            </div>
        </div>
        );
    }
}

export default Search;