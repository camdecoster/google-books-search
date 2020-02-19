import React, { Component } from "react";
import "./SearchBar.css";
// import { formatQueryParameters } from "../apiResources";
import apiInfo from "../apiInfo";

// Generate query string that concatenates all API parameters in proper format
// This function expects an object. It will join all the key/value pairs into
// a string, which is returned.
function formatQueryParameters(queryParameters) {
    console.log("`formatQueryParameters` ran");

    const parameterString = Object.keys(queryParameters).map(
        key =>
            `${encodeURIComponent(key)}=${encodeURIComponent(
                queryParameters[key]
            )}`
    );
    return parameterString.join("&");
}

class SearchBar extends Component {
    handleSubmit(e) {
        e.preventDefault();

        const queryParameters = {
            key: apiInfo.google.books.key,
            q: document.getElementById("bookSearch").value
        };

        const parameterString = formatQueryParameters(queryParameters);
        const url = apiInfo.google.books.url + "?" + parameterString;

        console.log(queryParameters);

        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error(
                        "Something went wrong, please try again later"
                    );
                }
                return res.json();
            })
            .then(searchResults => {
                console.log(searchResults);
                this.props.processSearchResults(searchResults);
            })
            .catch(err => {
                // Add error handling
                // this.setState({
                //     error: err.message
                // });
            });
        // this.props.processSearchResults(null);
    }

    render() {
        return (
            <div className='SearchBar'>
                <form
                    className='SearchBar__form'
                    onSubmit={e => this.handleSubmit(e)}
                >
                    <label htmlFor='bookSearch'>Search:</label>
                    <input
                        id='bookSearch'
                        type='text'
                        name='bookSearch'
                        placeholder='Type a search term'
                        value={this.props.bookSearchValue}
                        onChange={e =>
                            this.props.handleSearchUpdate(e.target.value)
                        }
                    />
                    <button type='submit'>Search</button>
                </form>
            </div>
        );
    }
}

export default SearchBar;
