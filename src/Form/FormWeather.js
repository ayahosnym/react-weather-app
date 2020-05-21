import React, { Component, Fragment } from 'react';
import './FormWeather.css';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
class FormWeather extends Component {
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
      <Fragment>
        <Form onSubmit={this.props.handelSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="text" placeholder="City Name" name="city" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Country Name"name="country" />
          </Form.Group>
          <Button type="submit" className="text-center btn"> Get Weather </Button>
        </Form>
      </Fragment>
    );
  }
}

export default FormWeather;