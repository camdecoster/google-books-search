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
                    <option value='all'>All</option>
                    <option value='books'>Books</option>
                    <option value='magazines'>Magazines</option>
                </select>
                <label htmlFor='filterSaleStatus'>Book Type:</label>
                <select
                    id='filterSaleStatus'
                    name='filterSaleStatus'
                    onChange={e =>
                        this.props.handleSaleStatusUpdate(e.target.value)
                    }
                >
                    <option value='none'>No Filter</option>
                    <option value='free'>Free</option>
                    <option value='non-free'>Non-free</option>
                </select>
            </div>
        );
    }
}

export default FilterBar;
