import React,{useState} from 'react'
import './navbar.css'
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import SignInForm from '../SignInForm';
import { Link } from 'react-router-dom';


const Navbar = () => {




const [active,setActive] = useState('navBar')
const showNav =()=>{
  setActive('navBar activeNavbar')
}

const removeNav =()=>{
  setActive('navBar ')
}


const [transparent,setTransparent] = useState('header')
const addBg=()=>{
  if(window.scrollY >= 10){
    setTransparent('header activeHeader')
  }
  else{
    setTransparent('header ') 
  }
}
window.addEventListener('scroll', addBg)

  return (
    <section className='navBarSection'>
      <div className={transparent}>

        <div className="logoDiv">
          <a href="#" className="logo">
            <h1 className='flex'><MdOutlineTravelExplore className='icon'/>
            TW
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">

            <li className="navItem">
              <Link to="#" className="navLink">Home</Link>
            </li>

            <li className="navItem">
              <Link to="#" className="navLink">Products</Link>
            </li>
            
            <li className="navItem">
              <Link to="#" className="navLink">Resources</Link>
            </li>
            
            <li className="navItem">
              <Link to="/footer" className="navLink">Contact</Link>
            </li>
            
            <li className="navItem">
              <Link to="" className="navLink">Blog</Link>
            </li>

            <div className="headerBtns flex">
              <button className='btn loginBtn'>
                <Link to='/login'>Login</Link>
              </button>

              <button className='btn '>
                <a href="#">Sign Up</a>
              </button>
            </div>

          </ul>


          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className='icon'/>
          </div>
        </div>



        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className='icon'/>
        </div>

      </div>
    </section>
  )
}

export default Navbar
