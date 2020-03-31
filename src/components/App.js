import React, { Component } from 'react';
import Form from './Form';
import Result from './Result'
import './App.css';

// Klucz do API Open Weather...
const APIKey = 'dd342ecc1e01ffd589e9ee349054ad5e';

class App extends Component {

  state = {
    value: "",
    date: '',
    city: '',
    sunrise: '',
    sunset: '',
    temp: '',
    pressure: '',
    wind: '',
    err: false
  }
  
  handleInputChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleCitySubmit = e => {
    e.preventDefault()
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`;
    
    fetch(API)
      .then(response => {
        if(response.ok) {
          return response
        }
        throw Error("Nie udało się")
      })
      .then(response => response.json())
      .then(data => {
        const time = new Date().toLocaleDateString();
          this.setState( state => ({
            err: false,
            date: time,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            temp: data.main.temp,
            pressure: data.main.pressure,
            wind: data.wind.speed,
            city: state.value
          }))
      })
      .catch(err => {
        console.log(err)
        this.setState( prevState => {
          return {
            err: true,
            city: prevState.value
          }})
      })

  }

  render() {
    return (
      <div className="App">
        <Form 
          value={this.state.value} 
          change={this.handleInputChange} 
          submit={this.handleCitySubmit}
        />
        <Result weather={this.state} />
      </div>
    );
  }
}


export default App;
