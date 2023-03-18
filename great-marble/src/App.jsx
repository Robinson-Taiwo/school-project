import React, { useState } from "react";
import { Parallax } from 'react-parallax'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import logo1 from "../src/assets/logo1.svg"
import pin from "../src/assets/pin.svg"

import school from "../src/assets/school1.jpeg"
import "./App.css"



const App = () => {


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  // changing nav colour when scrolling
  const [colour, setColour] = useState(false)

  const changeColour = () => {
    if (window.scrollY >= 10) {
      setColour(true)
    } else {
      setColour(false)
    }
  }

  window.addEventListener("scroll", changeColour)

  return (
    <div className="home">
      <nav className={colour ? "navbar-active" : "navbar"}>
        <img src={logo1} alt="" className="logo" />
      </nav>

      <div className="slider">

        <Slider {...settings}>

          <div className="slider-frame">
            <div className="head-logo">
              <img src={logo1} alt="" className="icon" />

            </div>
            <h1 className="great">
              GREAT MARBLE GROUP OF SCHOOLS
            </h1>
            <p className="motto">Be kind, Be strong, Be Proud.....</p>
          </div>

          <div className="slider-frame2">

            <h1 className="slider-f2">
              <span className="purple">Developing self-motivated learners  </span>    <span className="orange"> demonstrating resilience and pride</span>    <div className="yellow">in everything they do.</div>
            </h1>

            <div className="about-b">
              <button className="about">
                About
              </button>
            </div>

          </div>

        </Slider>
      </div>



      <div className="second">
        <div className="overlap">

          <div className="overlap-f">
            kk
          </div>

        </div>

        <div className="second-2">

          <div className="school-sect">
            <h1 className="the-school">
              About Our School
            </h1>
          </div>

          <div className="about-body">
            <p className="body-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sint modi enim sed doloribus suscipit nihil recusandae dolore minima, nostrum molestias architecto officiis nesciunt assumenda dolorum impedit aliquam debitis ducimus!
              Tenetur aperiam at ipsa architecto obcaecati! Ex, sint nostrum. Expedita dolor inventore eius nisi, quis deserunt quo maxime dolore aspernatur perferendis iure fugiat hic nulla animi repellendus eum aliquid debitis.
              Fugit veniam dolores nisi cum porro voluptatum dolore distinctio nostrum quidem dolorem ea commodi optio, quo fugiat accusantium sed autem. Repellendus odit dolore, doloribus harum officia saepe cumque quod impedit.
              Porro incidunt beatae unde ducimus culpa eius rem facere ratione consectetur velit architecto sit, quibusdam illo, nemo dolore quia cumque autem distinctio, quasi adipisci. Quis laudantium quisquam ullam soluta sunt.
              Illo quidem quod aliquid consequatur! Quaerat facere placeat ullam blanditiis culpa assumenda eligendi itaque mollitia modi nihil error magni dolorum fugiat quis, velit veritatis asperiores deleniti! Ducimus quod unde pariatur!
            </p>
          </div>



        </div>

        <Parallax bgImage={school} strength={600}>

          <div className="third">
            <h1 className="mission">
              Our MISSION
            </h1>
          </div>
        </Parallax>


        <div className="fourth">
          <div className="fourth-header">
            <h1 className="fourth-heading">Our Values</h1>
          </div>

          <div className="fourth-body">
            <div className="links">
              <p className="link">STRENGTH</p>
              <p className="link">KINDNESS</p>
              <p className="link">PATIENCE</p>
            </div>
            <div className="value-content">

            </div>

          </div>

        </div>

      </div>

      <div>

      </div>

    </div>
  );


}

export default App

