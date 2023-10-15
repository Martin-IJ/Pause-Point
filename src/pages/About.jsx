import React from 'react'
import "../styles/about.css"
import hero from "../assets/images/about-header.svg"
import star2 from "../assets/images/Star 2.svg"
import star1 from "../assets/images/Star 1.svg"
import image1 from "../assets/images/Frame 91.svg"
import image2 from "../assets/images/Frame 8.svg"
import person1 from '../assets/images/Ellipse 7.svg'
import person2 from '../assets/images/Ellipse 8.svg'
import person3 from '../assets/images/Ellipse 9.svg'
import linkedin from "../assets/images/devicon_linkedin.svg"
import twitter from "../assets/images/fa6-brands_x-twitter.png"
import { Link } from 'react-router-dom'

const About = () => {
  return (
    
    <div className='about-con'>
        <header style={{backgroundColor:"rgba(4, 151, 60, 0.80)"}}>
        <div className='container-lg d-flex justify-content-between align-items-center about-hero gap-3 position-relative' style={{height:"553px"}}>
            <div className=' col-12 col-sm-6 pe-lg-5'>
                <h1 className='text-light fs-2 fw-semibold pb-3'>About Us</h1>
                <p className='pe-5 fw-normal text-light fs-5 '>
                Lorem ipsum dolor sit amet consectetur. Adipiscing neque massa et netus ut luctus porta duis in. Lorem ipsum dolor sit amet consectetur. Adipiscing neque massa et netus ut luctus porta duis in.
                </p>
            </div>
            <div className='d-none d-sm-block col-sm-6 pe-2'>
                <img src={hero} alt="" className='img-fluid' />
            </div>
            <img src={star2} alt="" className='position-absolute d-none d-sm-block' style={{bottom:'50px',left:"14px"}}/>
            <img src={star1} alt="" className='position-absolute' style={{top:'26px',right:"25px"}}/>
        </div>
        </header>
        <section style={{backgroundColor:"#FFFDE4"}} className='pt-2 pb-5'>
            <main className='container-lg pb-5 pe-3 pe-lg-0'>
            <div className='d-flex align-items-center pt-5 mt-3 gap-5 flex-column flex-md-row'>
                <div className='col-12 col-md-5'>
                    <h3 className='fs-3 fw-semibold pb-3 text-center text-md-start'>Vision</h3>
                    <p  className='fw-normal fs-5'>
                    Lorem ipsum dolor sit amet consectetur. Orci diam curabitur a congue. Nulla et lobortis vel ut orci iaculis erat cras amet. Senectus ultricies interdum aliquam euismod purus ornare. Blandit risus tincidunt leo ornare. Sed phasellus lectus urna habitant odio amet ultrices molestie. Auctor leo leo vestibulum sit sed fames arcu interdum enim. Semper quis pulvinar venenatis eget lobortis amet. Sit viverra luctus praesent mauris et lectus. Scelerisque massa scelerisque nulla dis vel gravida. Donec lacus nisl suscipit elit consequat mi curabitur egestas. Ornare egestas tortor tincidunt massa elit lacus egestas sem laoreet.
                    </p>
                </div>
                <div className='col-12 col-md-6'>
                    <img src={image1} alt=""  className='img-fluid' />
                </div>
            </div>

            <div className='d-flex align-items-center pt-5 mt-3 gap-5 flex-column-reverse flex-md-row'>
            <div className='col-12 col-md-6'>
                    <img src={image2} alt=""  className='img-fluid' />
                </div>
                <div className='col-12 col-md-5'>
                    <h3 className='fs-3 fw-semibold pb-3 text-center text-md-start'>Mission</h3>
                    <p  className='fw-normal fs-5'>
                    Lorem ipsum dolor sit amet consectetur. Orci diam curabitur a congue. Nulla et lobortis vel ut orci iaculis erat cras amet. Senectus ultricies interdum aliquam euismod purus ornare. Blandit risus tincidunt leo ornare. Sed phasellus lectus urna habitant odio amet ultrices molestie. Auctor leo leo vestibulum sit sed fames arcu interdum enim. Semper quis pulvinar venenatis eget lobortis amet. Sit viverra luctus praesent mauris et lectus. Scelerisque massa scelerisque nulla dis vel gravida. Donec lacus nisl suscipit elit consequat mi curabitur egestas. Ornare egestas tortor tincidunt massa elit lacus egestas sem laoreet.
                    </p>
                </div>
            </div>
            <div className='pt-5 mt-3'>
            <h3 className='fs-3 fw-semibold pb-3 text-center mb-1'>Our Team</h3>
            <div className='d-flex justify-content-between gap-4 flex-column flex-md-row'>
                <div className='flex-fill' style={{backgroundColor:"rgba(4, 151, 60, 0.30)"}}>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <div style={{width:"100px",height:"100px"}} className='rounded-circle my-3'> 
                            <img src={person1} alt="" className='img-fluid'/>
                        </div>
                        <div className='pb-3'>
                            <h4 className='text-center fs-5 fw-semibold'>Paul Chopper</h4>
                            <h5 className='text-center fs-6 fw-medium'>Co-Founder</h5>
                        </div>
                    </div>
                    <div style={{backgroundColor:"#04973C"}}>
                            <div className='d-flex justify-content-center align-items-center py-2 gap-2'>
                                <Link to={""}><img src={linkedin} alt="" /></Link>
                                <Link to={""}><img src={twitter} alt="" /></Link>
                            </div>
                    </div>
                </div>

                <div className='flex-fill' style={{backgroundColor:"rgba(4, 151, 60, 0.30)"}}>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <div style={{width:"100px",height:"100px"}} className='rounded-circle my-3'> 
                            <img src={person2} alt="" className='img-fluid'/>
                        </div>
                        <div className='pb-3'>
                            <h4 className='text-center fs-5 fw-semibold'>Paul Chopper</h4>
                            <h5 className='text-center fs-6 fw-medium'>Co-Founder</h5>
                        </div>
                    </div>
                    <div style={{backgroundColor:"#04973C"}}>
                            <div className='d-flex justify-content-center align-items-center py-2 gap-2'>
                                <Link to={""}><img src={linkedin} alt="" /></Link>
                                <Link to={""}><img src={twitter} alt="" /></Link>
                            </div>
                    </div>
                </div>

                <div className='flex-fill' style={{backgroundColor:"rgba(4, 151, 60, 0.30)"}}>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <div style={{width:"100px",height:"100px"}} className='rounded-circle my-3'> 
                            <img src={person3} alt="" className='img-fluid'/>
                        </div>
                        <div className='pb-3'>
                            <h4 className='text-center fs-5 fw-semibold'>Paul Chopper</h4>
                            <h5 className='text-center fs-6 fw-medium'>Co-Founder</h5>
                        </div>
                    </div>
                    <div style={{backgroundColor:"#04973C"}}>
                            <div className='d-flex justify-content-center align-items-center py-2 gap-2'>
                                <Link to={""}><img src={linkedin} alt="" /></Link>
                                <Link to={""}><img src={twitter} alt="" /></Link>
                            </div>
                    </div>
                </div>
            </div>
            </div>
            </main>
        </section>
    </div>
  )
}

export default About