import React from 'react';
import ChangeBookShelf from './ChangeBookShelf';
import PropTypes from 'prop-types';

const Book = props => {
    const { book, books, setShelf } = props;

    const bookCover = book.imageLinks && book.imageLinks.thumbnail
            ? book.imageLinks.smallThumbnail
            : undefined;
     
    const bookTitle = book.title
        ? book.title
        : 'No book title';

    const bookAuthors = book.authors 
        ? book.authors
        : ['no Author'];

    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookCover})` }}></div>
                        <ChangeBookShelf book={book} books={books} setShelf={setShelf}/>
                    </div>
                <div className="book-title">{bookTitle}</div>
                <div className="book-authors">{
                        bookAuthors.map((author, index) => 
                            <div key={index}>{author}</div>
                        )
                    }</div>
            </div>
        </li>
    );
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    setShelf: PropTypes.func.isRequired
};

export default Book;