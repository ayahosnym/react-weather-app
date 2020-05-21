import React, { Component } from 'react';
import './WeatherShow.css';


class WeatherShow extends Component {
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

  render() {
    return (
      <div className="card-weather">
        <span className="clip-top clip"></span>
        <span className="clip-down clip"></span>
        <p className="text-danger font-weight-bold text-center">{this.props.error}</p>
        <ul className="card-body list-unstyled">
          <li>City:__<span>{this.props.city}</span></li>
          <li>Country:___<span>{this.props.country}</span></li>
          <li>Temperature:____<span>{this.props.temp}</span></li>
          <li>Details:______<span>{this.props.description}</span></li>
        </ul>
      </div>
    );
  }
}

export default WeatherShow;