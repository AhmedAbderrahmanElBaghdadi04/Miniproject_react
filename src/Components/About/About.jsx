import React from 'react'
import './about.css'
import img11 from '../../Assets/Mountain.png';
import img12 from '../../Assets/climb.png';
import img13 from '../../Assets/customer.png';
import video from '../../Assets/video.mp4'



const About = () => {
  return (
    <section className='about_section'>
      <div className="secContainer">
        <h2 className="title">
          Why Hikings
        </h2>

        <div className="mainContent container grid">
          <div className="singleItem">
            <img src={img11} alt="Image Name" />
            <h3>100+ Mountains</h3>

            <p>
              Research Shows That a Chance To Break Away From The Normal Rhythms Of Daily Life Reduces Stress And Improves Health And Well-being.
            </p>

          </div>
          <div className="singleItem">
            <img src={img12} alt="Image Name" />
            <h3>1000+ Hikings</h3>

            <p>
              Research Shows That a Chance To Break Away From The Normal Rhythms Of Daily Life Reduces Stress And Improves Health And Well-being.
            </p>
            
          </div>
          <div className="singleItem">
            <img src={img13} alt="Image Name" />
            <h3>2000 Customer</h3>

            <p>
              Research Shows That a Chance To Break Away From The Normal Rhythms Of Daily Life Reduces Stress And Improves Health And Well-being.
            </p>
            <br />
            
          </div>
        </div>

        <div className="videoCard container">
          <div className="cardContent grid">

            <div className="cardText">
              <h2>Wonderful House experience n there ! </h2>
              <p>The Adventure subranking is based on an equality weighted average of scores from five continents.</p>
            </div>

            <div className="cardVideo">
              <video src={video} autoPlay loop muted typeof='video/mp4'></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
