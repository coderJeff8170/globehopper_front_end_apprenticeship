
import './App.css';
import './styles/Main.css';
import Header from './components/Header.js';
import ResultDiv from './components/ResultDiv.js';
import React from 'react';

export default class App extends React.Component{
  constructor() {
    super();
    this.state = {
      isCountryDisplay: "countries",
      isLoading: true,
      countries: [],
      cities: [],
      continent: "all",
      searchValue: '',
      itemsToDisplay: []
    }
  }

  componentDidMount = () => {
    this.fetchData();
  }

  fetchData = () => {
    fetch(
      'http://localhost:8080/api/countries'
    )
      .then(response => response.json())
      .then(this.onCountryFetchSuccess, this.onFetchFailure)
      .catch(this.onFetchError);
  }

  fetchCities = () => {
    fetch('http://localhost:8080/api/cities')
      .then(response => response.json())
      .then(this.onCityFetchSuccess, this.onFetchFailure)
      .catch(this.onFetchError);
  }

  onCountryFetchSuccess = (data) => {
    this.setState({ countries: data })
    this.fetchCities();
  }

  onCityFetchSuccess = (data) => {
    //TODO: put this in a timeout so it looks like it's loading..
    let tempCountries = [...this.state.countries];
    //for each city in data, find it's country and insert into that country's cities array
    for(let i = 0; i < data.length; i++) {
      let thisCity = data[i];
      let matchedCountry = tempCountries.find(el => thisCity.countryid===el.countryid);
      if(matchedCountry.hasOwnProperty("cities")) {
        matchedCountry.cities.push(thisCity);
      } else {
        matchedCountry.cities = [];
        matchedCountry.cities.push(thisCity);
      }
    }
    //set countries to amended countries, cities to data from city fetch and default display to countries
    this.setState({
      countries: tempCountries,
      cities: data,
      itemsToDisplay: tempCountries
    });
    
  }

  onFetchFailure = (reason) => {
    console.log(reason);
  }

  onFetchError = (err) => {
    console.log(err);
  }

  handleCountryCityDropdown = (value) => {
    this.setState({ isCountryDisplay: value});
    if(value==='countries') {
      this.setState({itemsToDisplay: [...this.state.countries]});
    } else {
      this.setState({itemsToDisplay: [...this.state.cities]});
    }
  }

  handleContinentDropdown = (value) => {
    this.setState({continent: value});
  }

  handleClickOnDisplayCard = (item) => {
      //display all cities from item
      //set itemsToDisplay to item.cities if it has a cities property
    if(item.hasOwnProperty("cities")){
      this.setState({
        itemsToDisplay: [...item.cities],
        isCountryDisplay: "cities"
      });
    } else {
      //set itemsToDisplay to that city
      this.setState({
        itemsToDisplay: [item]
      });
    }
  }

  displayItems = (itemsToDisplay) => {
    if(itemsToDisplay.length > 0) {
      //if(itemsToDisplay.length === 1 && itemsToDisplay[0].hasOwnProperty('capital'))
      //if they're countries, run the filters specific to countries
      if(itemsToDisplay[0].hasOwnProperty('continent')){
        if(this.state.continent !== "all"){
          itemsToDisplay = itemsToDisplay.filter(el=>el.continent===this.state.continent);
        } 
      }
      return itemsToDisplay.filter(item => item.name.toLowerCase().includes(this.state.searchValue.toLowerCase()));
    }
  }

  onSearchChange = (value) => {
    this.setState({searchValue: value});
    console.log(this.state.searchValue);
  }

  render(){
    
    let items = this.displayItems([...this.state.itemsToDisplay]);

    return (
      <div className="App">
        <Header 
          handleCountryCityDropdown={this.handleCountryCityDropdown}
          isCountryDisplay={this.state.isCountryDisplay}
          handleContinentDropdown={this.handleContinentDropdown}
          handleInput={this.onSearchChange}
        />
        <ResultDiv 
          items={items}
          handleClickOnDisplayCard={this.handleClickOnDisplayCard}
        />
      </div>
    )
  }
  
}