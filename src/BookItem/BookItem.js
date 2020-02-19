import React, { Component } from "react";
import "./BookItem.css";

class BookItem extends Component {
    render() {
        return (
            <div className='BookItem'>
                <h4>{this.props.title}</h4>
                <img
                    className='book-cover-page'
                    src={this.props.coverUrl}
                    alt='Book Title Cover Page'
                    title='Book Title Cover Page'
                />
                <p>Author: {this.props.author}</p>
                <p>Price: {this.props.price}</p>
                <p>{this.props.summary}</p>
            </div>
        );
    }
}

export default BookItem;
