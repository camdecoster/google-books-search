import React, { Component } from "react";
import "./BooksList.css";
import BookItem from "../BookItem/BookItem";

class BooksList extends Component {
    render() {
        const filteredBooksList = this.props.bookSearchResults
            .filter(
                book =>
                    this.props.filterBookType === "none" ||
                    book.bookType === this.props.filterBookType
            )
            .filter(
                book =>
                    this.props.filterPrintType === "all" ||
                    book.printType === this.props.filterPrintType
            )
            .map((book, key) => <BookItem {...book} key={key} />);
        // const books = this.props.bookSearchResults.map((book, key) => (
        //     <BookItem {...book} key={key} />
        // ));
        return <div className='BooksList'>{filteredBooksList}</div>;
    }
}

BooksList.defaultProps = {
    bookResults: []
};

export default BooksList;
