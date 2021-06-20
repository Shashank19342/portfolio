import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import "./ThoughtSwiper.css";
import stephen from "../Images/stephenHawkings.png";
import thomas from "../Images/thomasEdition.png";
import markTwain from "../Images/markTwain.png";
import billGates from "../Images/billGates.png";
import markJ from "../Images/markJ.png";

// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);


export default function ThoughtSwiper() {
  return (
    <div className="swipe-back">
      <Swiper slidesPerView={1} spaceBetween={30} loop={true} pagination={{
          "clickable": true
      }} navigation={true} className="mySwiper">
          <SwiperSlide className="swiperSlide">
            <img src={stephen}></img>
            <h2><span className="quote">"</span>However Difficult Life Might Seem, There is Always something
             You Can Do and Succeed At<span className="quote">"</span></h2><br/>
            <p>- Stephen Hawking</p>
          </SwiperSlide>
          <SwiperSlide className="swiperSlide">
            <img src={thomas}></img>
            <h2><span className="quote">"</span>Many of Life's Failures are people who Did Not Realize
             how Close they were to Success when they Give Up<span className="quote">"</span></h2><br/>
            <p>- Thomas A. Edition</p>
          </SwiperSlide>
          <SwiperSlide className="swiperSlide">
            <img src={markTwain}></img>
            <h2><span className="quote">"</span>To Succeed in Life, You need two things: Ignorance and
           Confidence<span className="quote">"</span></h2><br/>
            <p>- Mark Twain</p>
          </SwiperSlide>
          <SwiperSlide className="swiperSlide">
            <img src={billGates}></img>
            <h2><span className="quote">"</span>Success is a Lousy Teacher. It Seduces Smart People into
           Thinking They Can't Lose<span className="quote">"</span></h2><br/>
            <p>- Bill Gates</p>
          </SwiperSlide>
          <SwiperSlide className="swiperSlide">
            <img src={markJ}></img>
            <h2><span className="quote">"</span>The Biggest Risk is Not Taking Any Risk... In a World
           that's Changing really Quickly, the only Strategy that's Guaranteed to Fail is Not Taking Risks<span className="quote">"</span></h2><br/>
            <p>- Mark Zuckerberg</p>
          </SwiperSlide>
          </Swiper>
    </div>
  )
}