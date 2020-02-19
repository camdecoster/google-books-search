import React, { Component } from "react";
import "./App.css";
import BooksList from "./BooksList/BooksList";
import FilterBar from "./FilterBar/FilterBar";
import SearchBar from "./SearchBar/SearchBar";
// import exampleResults from "./apiResultsExample";

// const bookResults = [
//     {
//         author: "Author 1",
//         SaleStatus: "free",
//         coverUrl: "",
//         price: 100,
//         printType: "digital",
//         summary: "This is a book summary 1.",
//         title: "Book 1"
//     },
//     {
//         author: "Author 2",
//         SaleStatus: "non-free",
//         coverUrl: "",
//         price: 150,
//         printType: "print",
//         summary: "This is a book summary 2.",
//         title: "Book 2"
//     }
// ];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterPrintType: "ALL",
            filterSaleStatus: "NONE",
            bookSearchValue: "",
            bookSearchResults: []
        };
    }

    bookSearchValueChanged(bookSearchValue) {
        this.setState({
            bookSearchValue
        });
    }

    processSearchResults(results) {
        // Enter query info to search Books API with current bookSearchValue
        console.log(results.items);
        const relevantResults = results.items.map(book => {
            const saleability = book.saleInfo.saleability;
            let priceString;
            if (saleability === "NOT_FOR_SALE") {
                priceString = "Not available for sale";
            } else if (saleability === "FREE") {
                priceString = "Book available for free";
            } else {
                priceString = `$${book.saleInfo.retailPrice.amount}`;
            }

            // console.log("author", book.volumeInfo.authors[0]);
            // console.log("coverUrl", book.volumeInfo.imageLinks.smallThumbnail);
            // console.log("price", priceString);
            // console.log("printType", book.volumeInfo.printType);
            // console.log("saleStatus", book.saleInfo.saleability);
            // console.log("summary", summaryString);
            // console.log("title", book.volumeInfo.title);

            const bookInfo = {
                author: book.volumeInfo.hasOwnProperty("authors")
                    ? book.volumeInfo.authors[0]
                    : "Author unavailable",
                coverUrl: book.volumeInfo.imageLinks.smallThumbnail,
                price: priceString,
                printType: book.volumeInfo.printType,
                saleStatus: book.saleInfo.saleability,
                summary: book.hasOwnProperty("searchInfo")
                    ? decodeURIComponent(book.searchInfo.textSnippet)
                    : "Summary unavailable",
                title: book.volumeInfo.title
            };
            // console.log(book.searchInfo);
            // console.log(bookInfo);
            return bookInfo;
        });
        // console.log("Results are:", relevantResults);

        this.setState({
            bookSearchResults: relevantResults
        });
    }

    filterSaleStatusChanged(filterSaleStatus) {
        this.setState({
            filterSaleStatus
        });
    }

    filterPrintTypeChanged(filterPrintType) {
        this.setState({
            filterPrintType
        });
    }

    render() {
        // this.processSearchResults();
        return (
            <div className='App'>
                <header>
                    <h1>Google Books Search</h1>
                </header>
                <SearchBar
                    bookSearchValue={this.state.bookSearchValue}
                    handleSearchUpdate={search =>
                        this.bookSearchValueChanged(search)
                    }
                    processSearchResults={results =>
                        this.processSearchResults(results)
                    }
                />
                <FilterBar
                    filterSaleStatus={this.state.filterSaleStatus}
                    filterPrintType={this.state.filterPrintType}
                    handleSaleStatusUpdate={filter =>
                        this.filterSaleStatusChanged(filter)
                    }
                    handlePrintTypeUpdate={filter =>
                        this.filterPrintTypeChanged(filter)
                    }
                />
                <BooksList
                    bookSearchResults={this.state.bookSearchResults}
                    filterSaleStatus={this.state.filterSaleStatus}
                    filterPrintType={this.state.filterPrintType}
                />
            </div>
        );
    }
}

export default App;
