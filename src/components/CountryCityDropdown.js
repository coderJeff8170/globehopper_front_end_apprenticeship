import React from 'react';

export default class CountryCityDropdown extends React.Component {
    constructor(props){
        super(props)
    }

    //TODO: bubble it up to the state
    handleCountryCityDropdown = (event) => {
        event.stopPropagation();
        this.props.handleCountryCityDropdown(event.target.value);
        
    };

    render() {
        return (
            <div id="countryCityDropdown">
                <select name="countrycity" id="countrycity" onChange={this.handleCountryCityDropdown}>
                    <option value="countries">Countries</option>
                    <option value="cities">Cities</option>
                </select>  
            </div>
        )
    }
}