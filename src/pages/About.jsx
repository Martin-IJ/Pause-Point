import React from 'react'
import "../styles/about.css"
import hero from "../assets/images/about-header.svg"
import star2 from "../assets/images/Star 2.svg"
import star1 from "../assets/images/Star 1.svg"

const About = () => {
  return (
    
    <div className='about-con'>
        <header style={{backgroundColor:"rgba(4, 151, 60, 0.80)"}}>
        <div className='container d-flex justify-content-between align-items-center about-hero gap-5'>
            <div className=' w-50'>
                <h1 className='text-light'>About Us</h1>
                <p className='pe-5 fw-light text-light'>
                Lorem ipsum dolor sit amet consectetur. Adipiscing neque massa et netus ut luctus porta duis in. Lorem ipsum dolor sit amet consectetur. Adipiscing neque massa et netus ut luctus porta duis in.
                </p>
            </div>
            <div className='w-50'>
                <img src={hero} alt="" className='img-fluid' />
            </div>
            <img src={star2} alt="" className='position-absolute' style={{bottom:'50px',left:"14px"}}/>
            <img src={star1} alt="" className='position-absolute' style={{top:'26px',right:"25px"}}/>
        </div>
        </header>
    </div>
  )
}

export default About