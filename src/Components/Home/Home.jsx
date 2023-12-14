import React, { useEffect } from 'react'
import './home.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <section className='home'>
      <div className="secContainer container">

        <div className="homeText">
          <h1 data-aos="zoom-in-right" className="title">
            Plan Your Trip With Travel Dot
          </h1>

          <p data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="subTitle">
            Travel to your favourite city with respectful of the environment!
          </p>
          <button data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className='btn'>
            <a href="#">Explore Now </a>
          </button>
        </div>

        <div className="homeCard grid">

          <div className="locationDiv">
            <label htmlFor="location">Location</label>
            <input type="text" placeholder='Dream Destination' />
          </div>

          <div className="distDiv">
            <label htmlFor="distance">Distance</label>
            <input type="text" placeholder='11/Meters' />
          </div>
          <div className="priceDiv">
            <label htmlFor="price">Price</label>
            <input type="text" placeholder='$140-$500' />
          </div>
          <button className='btn'>Search</button>



        </div>
      </div>
    </section>
  )
}

export default Home
