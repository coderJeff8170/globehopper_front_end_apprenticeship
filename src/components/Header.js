import React from 'react';
import '../styles/Main.css';
import CountryCityDropdown from './CountryCityDropdown.js';
import ContinentDropdown from './ContinentDropdown';
import SearchBar from './SearchBar.js';

export default class Header extends React.Component {
    constructor(props){
        super(props)
    }

    CheckCountryCity = () => {
        return this.props.isCountryDisplay==="countries"?
            <ContinentDropdown
                handleContinent={this.props.handleContinent}
            />
            :
            null
    }

    render() {

        let continentDropdown = this.CheckCountryCity();
        
        return (
            <div className="siteHeader">
                <h1 className="mainTitle">Globehopper</h1>
                <SearchBar
                    handleInput={this.props.handleInput}
                />
                <CountryCityDropdown
                    handleCountryCity={this.props.handleCountryCity}
                />
                {continentDropdown}
            </div>
        )
    }
}