import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";

const H3 = styled.h3`
  background-color: transparent;
  color: gray;
  cursor: auto;
  font-size: 20px;
  bottom: 20px;
`;

export default class VerticalSwipeToSlide extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 4000
    };
    return (
      <div>
        <h2>Vertical Mode with Swipe To Slide</h2>
        <Slider {...settings}>
          <div>
            <H3>1</H3>
          </div>
          <div>
            <H3>2</H3>
          </div>
          <div>
            <H3>3</H3>
          </div>
          <div>
            <H3>4</H3>
          </div>
          <div>
            <H3>5</H3>
          </div>
          <div>
            <H3>6</H3>
          </div>
        </Slider>
      </div>
    );
  }
}
