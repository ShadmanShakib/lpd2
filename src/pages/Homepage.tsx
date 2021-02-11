import { useEffect, useState } from 'react'
import '../css/layout.css'
import '../css/home.css'
import Header from '../components/Header'
import Feature from '../components/Feature.home'
import AboutUs from '../components/AboutUs.home'
import Contact from '../components/Contact_Home'
import Blog from '../components/Blog.home'
import Pricing from '../components/Pricing.home'
import WorkFlow from '../components/Workflow_home'
import Protfolio from '../components/Protfolio_home'
import Team from '../components/Team_home'
import Testimonial from '../components/Testimonial_home'
import ContactForm from '../components/ContactForm_home'
import Footer from '../components/Footer'

function Homepage() {
    const [scroll,toggleScroll]=useState(false)
    const scrollFun=()=>{
      if(window.scrollY>10){
        toggleScroll(true)
      }else{
        toggleScroll(false)
      }
    }
  
  useEffect(()=>{
    window.addEventListener('scroll',scrollFun)
  })
    return (
        <div >
           <Header  scroll={scroll}/>
           <Feature/>
           <AboutUs/> 
           <Contact/>
           <WorkFlow/>
           <Protfolio/>
           <Team/>
           <Testimonial/>
           <Pricing/>
           <Blog/>
         <ContactForm/>
         <Footer/>
        </div>
    )
}

export default Homepage
