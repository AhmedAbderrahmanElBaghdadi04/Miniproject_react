import React from 'react'
import './blog.css'
import {BsArrowRightShort} from 'react-icons/bs'
import img14 from '../../Assets/morocco.jpg'
import img15 from '../../Assets/EiffelTower.jpg'
import img16 from '../../Assets/Tunisia.jpg'
import img17 from '../../Assets/kenya.jpg'

const Posts = [
  {
    id:1,
    postImage:img14,
    title:"Beautiful Morocco, let us travel",
    desc:"The Kingdom of Morocco is a Muslim country in western North Africa,with coastlines on the Atlantic Ocean and Mediterranean Sea."
  },
  {
    id:2,
    postImage:img15,
    title:"Romantic moments under Eiffel Tower",
    desc:"The Eiffel Tower, built in 1889 for the World's Fair in Paris, is an iconic 324-meter iron structure designed by Gustave Eiffel. A symbol of the city, it offers panoramic views from its three levels and attracts millions of visitors each year."
  },
  {
    id:3,
    postImage:img16,
    title:"Let us Have an adventure outside Tunisia",
    desc:"Tunisia, in North Africa, is renowned for its ancient ruins, including Carthage, and a mix of Arab and Mediterranean influences. Famous for sparking the Arab Spring, it's now a popular tourist destination with vibrant markets and beautiful beaches."
  },
  {
    id:4,
    postImage:img17,
    title:"Best country in East Africa",
    desc:"Kenya, in East Africa, is famed for diverse landscapes, wildlife safaris featuring the Big Five and a vibrant blend of modern and traditional culture in places like Nairobi and the Great Rift Valley."
  }
]

const Blog = () => {
  return (
    <section className='blog container section'>
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle">
            Our Best Blog?
          </h2>
          <p>
            An insight to the incredible experience in the world.
          </p>
        </div>

        <div className="mainContainer grid">

          {Posts.map((item3)=>{

            const {id,postImage,title,desc} = item3 

          return (
            <div className="singlePost grid">
            <div className="imgDiv">
              <img src={postImage} alt={id} />
            </div>

            <div className="postDetails">
              <h3>
                {title}
              </h3>
              <p>{desc}</p>
              <br />
            </div>

            <a href="#" className='flex'>
              Read More
              <BsArrowRightShort className='icon' />
            </a>
            <br /><br />
          </div>
          )}
          )}


        </div>
      </div>
    </section>
  )
}

export default Blog
