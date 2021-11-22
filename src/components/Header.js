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
        console.log(this.props.isCountryDisplay);
        return this.props.isCountryDisplay==="countries"?
            <ContinentDropdown
                handleContinentDropdown={this.props.handleContinentDropdown}
            />
            :
            null
    }

    render() {

        let continentDropdown = this.CheckCountryCity();
        
        return (
            <div className="siteHeader">
                <h1 className="mainTitle">Glöbehopper Pro</h1>
                <SearchBar
                    handleInput={this.props.handleInput}
                />
                <CountryCityDropdown
                    isCountryDisplay={this.props.isCountryDisplay}
                    handleCountryCityDropdown={this.props.handleCountryCityDropdown}
                />
                {continentDropdown}
            </div>
        )
    }
}