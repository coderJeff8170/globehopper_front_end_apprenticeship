
import './App.css';
import './styles/Main.css';
import Header from './components/Header.js';
import ResultDiv from './components/ResultDiv.js';
import React from 'react';
import countryData from './models/countryData';
import cityData from './models/cityData';

export default class App extends React.Component{
  constructor() {
    super();
    this.state = {
      isCountryDisplay: true,
      countries: countryData,
      cities: cityData,
      country: null,
      city: null
    }
  }

  handleSelect = () => {
    console.log("hello");
    //pass country or city here to determine whether isCountry or isCity
    //
  }

  render(){
    let items = this.state.countries;
    return (
      <div className="App">
        <Header />
        <ResultDiv items={items}
                  handleSelection={this.handleSelect}
        />
      </div>
    )
  }
  
}


