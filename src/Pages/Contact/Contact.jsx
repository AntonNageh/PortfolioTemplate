import { gsap } from 'gsap';
import './Contact.css';
import { ScrollTrigger } from 'gsap/all';
import { useEffect } from 'react';

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
            
      <div id="parallax-bg-3" className="parallax-bg" data-speed=".75">
        <div id="bg-3-1" className='z-0'></div>
        <div id="bg-3-2"></div>
        <div id="bg-3-3"></div>
      </div>
    <div id="parallax-bg-2" className="parallax-bg" data-speed=".4">
      <div id="bg-2-1"></div>
      <div id="bg-2-2"></div>
      <div id="bg-2-3"></div> 
      <div id="bg-2-4"></div>
      <div id="bg-2-5"></div>
      <div id="bg-2-6"></div>
    </div>
    <div id="parallax-bg-1" className="parallax-bg" data-speed=".25">
      <div id="bg-1-1"></div>
      <div id="bg-1-2"></div>
      <div id="bg-1-3"></div>
      {/* <div id="bg-1-4"></div> */}
      <div id="bg-1-5"></div>
    </div>
    <div className='absolute w-full text-center justify-center md:flex'>
    <div className='mt-[50vh] absolute z-30'>
      Facebook: <br/><br/>
      <a className='text-white hoverBlue' href='https://www.facebook.com/anton.nageh/'>Anton Nageh</a>
    </div>
    <div className='mt-[150vh] absolute z-30'>
      LinkedIn: <br/><br/>
    <a className='text-white hoverBlue' href='https://linkedin.com/in/anton-nageh-772852169'>Anton Nageh</a>
    </div>


    <div className='mt-[250vh] absolute z-30'>
      Github: <br/><br/>
    <a className='text-white hoverBlue' href='https://github.com/AntonNageh'>Anton Nageh</a>
    </div>
    <div className='mt-[350vh] absolute z-30'>
      Gmail: <br/><br/>
      <a className='text-white hoverBlue' href='mailto:anton.nageh20@gmail.com'>Anton Nageh</a>
    </div>
    <div className='mt-[450vh] absolute z-30'>
      Phone Number: <br/><br/>
      <a className='text-white hoverBlue' href='tel:+201223967806'>+201223967806</a>
    </div>
    <div className='mt-[273rem] absolute z-30'>
      Thank you
    </div>
    </div>
    <div id="ground"></div>
    </div>  
  )
}

export default Contact