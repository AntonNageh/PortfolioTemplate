import { gsap } from 'gsap';
import './Contact.css';
import { ScrollTrigger } from 'gsap/all';
import { useEffect } from 'react';
import ParallaxBg from './ParallaxBg/ParallaxBg';
import ContactInfo from './ContactInfo/ContactInfo';

const Contact = () => {
  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".parallax-bg", {
      scrollTrigger: {
        scrub: true
      }, 
      y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
      ease: "none"
    });
  },[])

  
  return (
    <div className='text-white md:mx-auto md:flex md:justify-around h-screen z-0 text-5xl'>
    <ParallaxBg />
    <ContactInfo />
  </div> 
  )
}

export default Contact