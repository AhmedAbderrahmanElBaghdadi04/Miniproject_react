import React from 'react'
import './popular.css'
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import img1 from '../../Assets/valdemars-magone-Es9o44wXp4I-unsplash.jpg'
import img2 from '../../Assets/babak-fakhamzadeh-PO7CGnoDFUI-unsplash.jpg'
import img3 from '../../Assets/marv-watson-UfK0P6WygEE-unsplash.jpg'
import img4 from '../../Assets/issam-ammiche-Z21iAEDUuCg-unsplash.jpg'
import img5 from '../../Assets/daniel-born-0xFA04r_0ds-unsplash.jpg'


const Data = [
  {
    id:1,
    imgSrc: img1,
    destTitle:'John Wick',
    location:'United Kingdom ',
    grade:'CULTURAL UK ',
  },
  {
    id:2,
    imgSrc: img2,
    destTitle:'Machu Picchu',
    location:'Peru ',
    grade:'CULTURAL RELAX ',
  },
  {
    id:3,
    imgSrc: img3,
    destTitle:'Juan Janito',
    location:'Mexico',
    grade:'Mexico 123 ',
  },{
    id:4,
    imgSrc: img4,
    destTitle:'Simo Bourkadi',
    location:'Algeria ',
    grade:'Chwkr l Afrique',
  },{
    id:5,
    imgSrc: img5,
    destTitle:'Adnane El Kanbouji',
    location:'Mauritania ',
    grade:"C'est magnifique",
  },
]

const Popular = () => {
  return (
    <section className='popular section container'>
      <div className="secContainer">

        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className="secTitle">
              Popular Destination
            </h2>
            <p>
              From historical cities to natural specteculars, come see the best of the world !
            </p>
          </div>
          <div className="iconsDiv">
          <BsArrowLeftShort className='icon leftIcon'/>
          <BsArrowRightShort className='icon rightIcon'/>


          </div>

        </div>

        <div className="mainContent grid">
          {
            Data.map((item)=>{
              const {id,imgSrc,destTitle,location,grade} = item;

              return (
                <div className="singleDestination" key={id}>
                  <div className="destImage">
                   <img src={imgSrc} alt="Image title" />
                  <div className="overlayInfo">
                    <h3>{destTitle}</h3>
                    <p>
                      {grade}
                    </p>

                    <BsArrowRightShort className='icon' />
                  </div>
                  </div>

                  <div className="destFooter">
                    <div className="number">
                      0{id}
                    </div>

                    <div className="destText flex">
                      <h6>{location}</h6>
                        <span className='flex'>
                          <span className="dot">
                            <BsDot className='icon'/>
                          </span>
                            Dot
                        </span>
                    </div>
                  </div>
                </div>
              )

            })
          }


        </div>

      </div>
    </section>
  )
}

export default Popular

/*<div className="singleDestination">
            <div className="destImage">
              <img src={img1} alt="Image title" />
              <div className="overlayInfo">
                <h3>Some text</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla nemo distinctio animi eligendi impedit molestias facilis ea doloribus, incidunt eum dolorum quo totam omnis expedita, atque quidem! Fugiat, non temporibus.
                </p>

                <BsArrowRightShort className='icon' />
              </div>
            </div>

            <div className="destFooter">
              <div className="number">
                01
              </div>

              <div className="destText flex">
                <h6>London</h6>
                <span className='flex'>
                  <span className="dot">
                    <BsDot className='icon'/>
                  </span>
                  Dot
                </span>
              </div>
            </div>
          </div>*/