import React from 'react';
import '../styles/Main.css';
import CountryCityDropdown from './CountryCityDropdown.js';
import ContinentDropdown from './ContinentDropdown';
import SearchBar from './SearchBar.js';

export default class Header extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        
        
        return (
            <div className="siteHeader">
                <h1 className="mainTitle">Globehopper</h1>
                <SearchBar/>
                <CountryCityDropdown/>
                <ContinentDropdown/>
            </div>
        )
    }
}