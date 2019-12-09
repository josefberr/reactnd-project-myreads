import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ChangeBookShelf extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
        setShelf: PropTypes.func.isRequired,
    };

    changeShelf = event => {
        console.log('Change shelf to '+event.target.value);
        this.props.setShelf(this.props.book, event.target.value);
    };

    render () {

        const { book, books } = this.props;
        let defaultShelf = 'none';

        // set shelf is book is in the current list
        for (let currBook of books) {
            if (currBook.id === book.id) {
                defaultShelf = currBook.shelf;
                break;
            }
        }        

        console.log('Current Shelf: ' + defaultShelf);

        return (
            <div className="book-shelf-changer">
                <select defaultValue={defaultShelf} onChange={this.changeShelf}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
            );
    }
}

export default ChangeBookShelf;