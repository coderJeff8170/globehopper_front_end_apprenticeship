import React from 'react';

export default class CountryCityDropdown extends React.Component {
    constructor(props){
        super(props)
    }

    //TODO: bubble it up to the state
    handleCountryCity = (event) => {
        event.stopPropagation();
        this.props.handleCountryCity(event.target.value);
    };

    render() {
        return (
            <div>
                <select name="countrycity" id="countrycity" onChange={this.handleCountryCity}>
                    <option value="countries">Countries</option>
                    <option value="cities">Cities</option>
                </select>  
            </div>
        )
    }
}