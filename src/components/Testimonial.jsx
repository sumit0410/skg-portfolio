import React from 'react'
import alok from '../assets/img1.jpg'
import abhishek from '../assets/img2.jpg'
import ram from '../assets/img3.jpg'
import {AiFillStar} from 'react-icons/ai'



const Testimonial = () => {
  return (
    <div id='testimonials'>
        <h2>Testimonial</h2>

        <section>

        

              <TestimonialCard 
                  name={"Alok Chaurasiya"}
                  feedback={"Amazing brother! I have seen your projects they are really nice and I wish you to achieve a lot more in future."}
                  img={alok}
              />
              <TestimonialCard 
                  name={"Abhishek Kashyap"}
                  feedback={"Nice brother! I really appreciate your work as you have done a lots of projects. Keep doing it and have great journey ahead."}
                  img={abhishek}
              />
              <TestimonialCard 
                  name={"Ram Ajore Bind"}
                  feedback={"I really like your work and your commitment towards Web Development. I would like to see you a great developer in future!"}
                  img={ram}
              />
        </section>
    </div>
  )
}

const TestimonialCard =({name,feedback,img})=>(
    <article>
        <img src={img}alt="" />
        <h4>{name}</h4>
        <span><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></span>
        <p>{feedback}</p>
    </article>
)

export default Testimonial