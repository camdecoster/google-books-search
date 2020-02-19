import React, { Component } from "react";
import "./BooksList.css";
import BookItem from "../BookItem/BookItem";

class BooksList extends Component {
    render() {
        const filteredBooksList = this.props.bookSearchResults
            .filter(
                book =>
                    this.props.filterSaleStatus === "NONE" ||
                    book.bookType === this.props.filterSaleStatus
            )
            .filter(
                book =>
                    this.props.filterPrintType === "ALL" ||
                    book.printType === this.props.filterPrintType
            )
            .map((book, key) => <BookItem {...book} key={key} />);

        return <div className='BooksList'>{filteredBooksList}</div>;
    }
}

BooksList.defaultProps = {
    bookResults: []
};

export default BooksList;
