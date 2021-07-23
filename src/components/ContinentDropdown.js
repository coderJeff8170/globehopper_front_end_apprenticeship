import React from 'react';

export default class ContinentDropdown extends React.Component {
    constructor(props){
        super(props)
    }

    //TODO: bubble it up to the state
    handleContinent = (event) => console.log(event.target.value);

    render() { 
        return (
            <div>
                <select name="continents" id="continents" onChange={this.handleContinent}>
                    <option value="none">Filter By Continent:</option>
                    <option value="africa">Africa</option>
                    <option value="antarctica">Antarctica</option>
                    <option value="asia">Asia</option>
                    <option value="australia">Australia</option>
                    <option value="europe">Europe</option>
                    <option value="namerica">North America</option>
                    <option value="samerica">South America</option>
                </select>
            </div>
        )
    }
}