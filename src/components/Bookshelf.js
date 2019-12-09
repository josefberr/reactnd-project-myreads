import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

const Bookshelf = props => {  
        const {books, setShelf, title} = props;
    
        console.log("Bookshelf-Books: " + books);
        return (
            <div className="bookshelf">
                  <h2 className="bookshelf-title">{title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map(book => (
                            <Book key={book.id} book={book} books={books} setShelf={setShelf} />
                        ))}
                    </ol>
                  </div>
            </div>
        );
}

Bookshelf.propTypes = {
    books: PropTypes.array.isRequired,
    setShelf: PropTypes.func.isRequired
};

export default Bookshelf;