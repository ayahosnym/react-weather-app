import React, { Component } from 'react';
import './Home.css';
import WeatherShow from './../WeatherShow/WeatherShow'
import FormWeather from './../Form/FormWeather';
class Home extends Component {
  // constructor(props){
  // super(props);
  // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}
  state = {
    city: "",
    country: "",
    temp: "",
    description: "",
    error: ""
  }
  handelSubmit = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}t&appid=e36ed364400282e43250b6c4c0274d44`)
    const data = await api.json()
    console.log(data);
    if (data.cod !== "404") {
      this.setState({
        city: data.name,
        country: data.sys.country,
        temp: data.main.temp,
        description: data.weather[0].description,
      })
    } else {
      this.setState({
        error: "Oops!Something went wrong, please, Be sure you entered city and country correctly"
      })
    }
  }
  render() {
    return (
      <section className="home  d-flex m-auto">
        <div className="container">
          <div className="row justify-content-center">
            <div className=" col-12 text-center mb-5 text-white">
              <h1 className="title">Weather App</h1>
            </div>
            <div className="col-sm-12 col-md-5 mb-5">
              <FormWeather handelSubmit={this.handelSubmit} />
            </div>
            <div className="col-sm-12 col-md-4">
              <WeatherShow
                city={this.state.city}
                country={this.state.country}
                temp={this.state.temp}
                description={this.state.description}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;