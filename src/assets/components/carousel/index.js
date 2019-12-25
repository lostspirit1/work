import React from 'react';
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  DotGroup,
  ImageWithZoom,
  Slide,
  Slider,
  Image
} from 'pure-react-carousel';
import { Container } from 'semantic-ui-react'
import './index.scss';

export default () => (
  <CarouselProvider
    visibleSlides={1}
    totalSlides={6}
    step={1}
    naturalSlideWidth={400}
    naturalSlideHeight={500}
    hasMasterSpinner
  >

    <div className="containerWrap">
      <Slider className="slider">
        <Slide index={0}>
          <Image  style={{maxHeight: 500}} src="https://cdn.pixabay.com/photo/2015/10/16/19/18/balloon-991680__340.jpg" />
        </Slide>
        <Slide index={1}>
          <Image style={{maxHeight: 500}} src="https://cdn.pixabay.com/photo/2015/10/16/19/18/balloon-991680__340.jpg" />
        </Slide>
        <Slide index={2}>
          <Image style={{ maxHeight: 500}} src="https://cdn.pixabay.com/photo/2015/10/16/19/18/balloon-991680__340.jpg" />
        </Slide>
        <Slide index={3}>
          <Image style={{ maxHeight: 500}} src="https://cdn.pixabay.com/photo/2015/10/16/19/18/balloon-991680__340.jpg" />
        </Slide>
        <Slide index={4}>
          <Image style={{ maxHeight: 500}} src="https://cdn.pixabay.com/photo/2015/10/16/19/18/balloon-991680__340.jpg" />
        </Slide>
        <Slide index={5}>
          <Image style={{ maxHeight: 500}}src="https://cdn.pixabay.com/photo/2015/10/16/19/18/balloon-991680__340.jpg" />
        </Slide>
      </Slider>
      <ButtonBack className="buttonBack">Back</ButtonBack>
      <ButtonNext className="buttonNext">Next</ButtonNext>
    </div>
    <DotGroup className="dotGroup" />
  </CarouselProvider>
);