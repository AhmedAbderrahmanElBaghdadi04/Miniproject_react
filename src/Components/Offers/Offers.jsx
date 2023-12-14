import React from 'react'
import './offers.css'
import { MdKingBed } from "react-icons/md";
import { MdBathtub } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { MdAirportShuttle } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import {BsArrowRightShort} from "react-icons/bs"
import img6 from '../../Assets/eduard-VqUNqSPoufQ-unsplash.jpg'
import img7 from '../../Assets/steeph-almer-r43S4zMCsXU-unsplash.jpg'
import img8 from '../../Assets/raul-cacho-oses-2A8ONQWR69g-unsplash.jpg'
import img9 from '../../Assets/hannah-busing-Siip8nN74SQ-unsplash.jpg'
import img10 from '../../Assets/hamza-nouasria-DcBrhTFvyMo-unsplash.jpg'




const Offer = [
  {
    id:1,
    imgSrc:img6,
    destTitle:"Mucho Lucho",
    location:"Stamford bridge street , n19 ,London",
    price:"$7,452"
  },
  {
    id:2,
    imgSrc:img7,
    destTitle:"Mohamed Hichy",
    location:"Chari3 Mohamed V ,n20 ,Mohemmadia",
    price:"$452"
  },
  {
    id:3,
    imgSrc:img8,
    destTitle:"Hassan Seddam",
    location:"Casabarata , n13, Tanger",
    price:"$499"
  },
  {
    id:4,
    imgSrc:img9,
    destTitle:"Haitham Lbadaoui",
    location:"Had Gharbya",
    price:"$195"
  },
  {
    id:5,
    imgSrc:img10,
    destTitle:"Ilyas Malki",
    location:"Ksar Al-Ahmar ,Jadida",
    price:"$397"
  },
]

const Offers = () => {
  return (
   <section className='offer container section'>
    <div className="secContainer">
      <div className="secIntro">
        <h2 className="secTitle">
          Special Offers
        </h2>
        <p>
          From Historical cities to natural specteculars, come see the best of the world
        </p>

      </div>

      <div className="mainContent grid">

      { Offer.map((item2)=>{
          const {id,imgSrc,destTitle,location,price}=item2;

          return (
            <div className="singleOffer">
              <div className="destImage">
                <img src={imgSrc} alt={destTitle} />

                <span className="discount">
                  30% Off
                </span>
              </div>
              <div className="offerBody">
                <div className="price flex">
                  <h4>
                    {price}
                  </h4>
                <span className="status">
                  For Rent
                </span>
                </div>
                <div className="amenities flex">
                  <div className="singleAmenity flex">
                    <MdKingBed className='icon' />
                    <small>2 Beds</small>
                  </div>
                  <div className="singleAmenity flex">
                    <MdBathtub className='icon' />
                    <small>1 bath</small>
                  </div>
                  <div className="singleAmenity flex">
                    <FaWifi className='icon' />
                    <small>Wi-Fi</small>
                  </div>
                  <div className="singleAmenity flex">
                    <MdAirportShuttle className='icon' />
                    <small>Shuttle</small>
                  </div>
              </div>

              <div className="location flex">
                <MdLocationOn className='icon' />
                <small>{location} </small>
              </div>
              <button className="btn flex">
                View Details
                <BsArrowRightShort className='icon' />
              </button>
            </div>

        </div>
    )
  }
  )
}
        
      </div>
    </div>
   </section>
  )
}

export default Offers

/*
<div className="singleOffer">
          <div className="destImage">
            <img src={img6} alt="Image Name" />

            <span className="discount">
              30% Off
            </span>
          </div>
          <div className="offerBody">
            <div className="price flex">
              <h4>
                $1000
              </h4>
              <span className="status">
                For Rent
              </span>
            </div>
            <div className="amenities flex">
              <div className="singleAmenity flex">
                <MdKingBed className='icon' />
                <small>2 Beds</small>
              </div>
              <div className="singleAmenity flex">
                <MdBathtub className='icon' />
                <small>1 bath</small>
              </div>
              <div className="singleAmenity flex">
                <FaWifi className='icon' />
                <small>Wi-Fi</small>
              </div>
              <div className="singleAmenity flex">
                <MdAirportShuttle className='icon' />
                <small>Shuttle</small>
              </div>
            </div>

            <div className="location flex">
              <MdLocationOn className='icon' />
              <small>450 Vine #310, London </small>
            </div>
            <button className="btn flex">
              View Details
              <BsArrowRightShort className='icon' />
            </button>
          </div>

        </div>
*/