import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import './slider.css';
export default class Slider extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
          className="slider"
            src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
          className="slider"
            src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
          className="slider"
            src="https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}
