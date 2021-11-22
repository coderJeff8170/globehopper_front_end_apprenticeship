import React from 'react';

export default class ContinentDropdown extends React.Component {
    constructor(props){
        super(props)
    }

    handleContinentDropdown = (event) => {
        console.log(event.target.value);
        this.props.handleContinentDropdown(event.target.value);
    }

    render() { 
        return (
            <div>
                <select name="continents" id="continents" onChange={this.handleContinentDropdown}>
                    <option value="all">Filter By Continent:</option>
                    <option value="all">All</option>
                    <option value="Africa">Africa</option>
                    <option value="Antarctica">Antarctica</option>
                    <option value="Asia">Asia</option>
                    <option value="Australia">Australia</option>
                    <option value="Europe">Europe</option>
                    <option value="North America">North America</option>
                    <option value="South America">South America</option>
                </select>
            </div>
        )
    }
}