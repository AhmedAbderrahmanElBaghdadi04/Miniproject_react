import React from 'react'
import './footer.css'
import { MdOutlineTravelExplore } from "react-icons/md";
import { ImFacebook } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <section className='footer'>
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div className="footerLogo">
            <a href="#" className="logo">
              <h1 className="flex"><MdOutlineTravelExplore className='icon' />TW</h1>
            </a>
          </div>

          <div className="socials flex">
          <ImFacebook className='icon' />
          <BsTwitterX className='icon' />
          <FaInstagram className='icon' />
        </div>

        </div>


        <div className="footerLinks">
          <span className="linkTitle">
            Informations
          </span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Travel</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">
            Contact Us
          </span>
          <span className="phone">+212 7 72 14 28 73</span>
          <span className="email">baghdadiahmed004@gmail.com</span>

        </div>

        
      </div>
    </section>
  )
}

export default Footer


/*
          <li>
            <a href="#">Destination</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Travel & Conditions</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
*/