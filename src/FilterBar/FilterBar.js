import React, { Component } from "react";
import "./FilterBar.css";

class FilterBar extends Component {
    render() {
        return (
            <div className='FilterBar'>
                <label htmlFor='filterPrintType'>Print Type:</label>
                <select
                    id='filterPrintType'
                    name='filterPrintType'
                    onChange={e =>
                        this.props.handlePrintTypeUpdate(e.target.value)
                    }
                >
                    <option value='ALL'>All</option>
                    <option value='BOOK'>Books</option>
                    <option value='MAGAZINE'>Magazines</option>
                </select>
                <label htmlFor='filterSaleStatus'>Availability:</label>
                <select
                    id='filterSaleStatus'
                    name='filterSaleStatus'
                    onChange={e =>
                        this.props.handleSaleStatusUpdate(e.target.value)
                    }
                >
                    <option value='NONE'>No Filter</option>
                    <option value='FREE'>Free</option>
                    <option value='FOR_SALE'>For Sale</option>
                    <option value='FOR_SALE_AND_RENTAL'>
                        For Sale and Rental
                    </option>
                </select>
            </div>
        );
    }
}

export default FilterBar;
