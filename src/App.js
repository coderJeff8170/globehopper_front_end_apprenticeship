
import './App.css';
import './styles/Main.css';
import Header from './components/Header.js';
import ResultDiv from './components/ResultDiv.js';
import React from 'react';
//import countryData from './models/countryData';
//import cityData from './models/cityData';


export default class App extends React.Component{
  constructor() {
    super();
    this.state = {
      isCountryDisplay: "countries",
      isLoading: true,
      countries: [],
      cities: [],
      continent: "all",
      country: null,
      city: null,
      searchValue: ''
    }
  }

  componentDidMount = () => {
    this.fetchData();
  }

  componentDidUpdate = () => {
    // //this is probably where the loop occurs?
    // this.state.isCountryDisplay==="countries"?
    // this.fetchCountries()
    // :
    // this.fetchCities()
  }

  fetchData = () => {
    //get the countries from the db
    fetch(
      'http://localhost:8090/api/countries',
      //authentication would go here to prevent cors
      //{ mode: "no-cors"}
    )
      .then(response => response.json())
      .then(this.onCountryFetchSuccess, this.onFetchFailure)
      .catch(this.onFetchError);
  }

  fetchCities = () => {
    //get the cities from the db
    fetch('http://localhost:8090/api/cities')
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
    //this.setState({ cities: data })
    //make an array of temporary countries to mutate
    let tempCountries = [...this.state.countries];
    //TODO: for each city in this.state.cities,
    for(let i = 0; i < data.length; i++) {
      let thisCity = data[i];
      console.log(thisCity);
      let matchedCountry = tempCountries.find(el => thisCity.countryid===el.countryid);
      if(matchedCountry.hasOwnProperty("cities")) {
        matchedCountry.cities.push(thisCity);
      } else {
        matchedCountry.cities = [];
        matchedCountry.cities.push(thisCity);
      }
    }
    //find it's matching country
    //figure out if that country has a cities array to store the city
    //if it does, push the city to the cities array
    //if it doesn't, add a new property called cities, that's an empty array,
    //and add the city to it.
    //then set the state.countries to this new version.
    this.setState({countries: tempCountries, cities: data});
  }

  onFetchFailure = (reason) => {
    console.log(reason);
  }

  onFetchError = (err) => {
    console.log(err);
  }

  handleCountryCity = (value) => {
    this.setState({ isCountryDisplay: value});
  }

  handleContinent = (value) => {
    console.log(value);
    this.setState({continent: value});
    //filter by continent
  }

  handleSelect = (argument) => {
    console.log(argument);
    //TODO: either display all cities if its a country
    //or display city details if it's a city.
  }

  handleItems = () => {
    //set items default to countries
    let items = [...this.state.countries];
    //if allcountries, show all countries
    if(this.state.isCountryDisplay==="countries"){
      if(this.state.continent !== "all"){
        items = items.filter(el=>el.continent===this.state.continent);
      } 
      //console.log(items); 
    } else {
      items = [...this.state.cities];
      //console.log(items);
    }
    //TODO: filter by searchvalue here? to lowercase!
    return items.filter(item => item.name.toLowerCase().includes(this.state.searchValue.toLowerCase()));
  }

  onSearchChange = (value) => {
    this.setState({searchValue: value});
    console.log(this.state.searchValue);
  }

  render(){
    //TODO: 
    let items = this.handleItems();

    return (
      <div className="App">
        <Header 
          handleCountryCity={this.handleCountryCity}
          isCountryDisplay={this.state.isCountryDisplay}
          handleContinent={this.handleContinent}
          handleInput={this.onSearchChange}
        />
        <ResultDiv 
          items={items}
          handleSelection={this.handleSelect}
        />
      </div>
    )
  }
  
}


