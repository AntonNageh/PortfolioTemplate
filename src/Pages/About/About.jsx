import { gsap } from 'gsap';
import { ScrollTrigger , MotionPathPlugin } from 'gsap/all';
// import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';
import * as DrawSVGPlugin from '/DrawSVGPlugin.min.js';
import React, { useEffect } from 'react'
import './About.css'

const About = () => {
   
    useEffect(() => { 
    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);
    
    gsap.defaults({ease: "none"});

    const pulses = gsap.timeline({
    defaults: {
        duration: 0.05, 
        autoAlpha: 1, 
        scale: 2, 
        transformOrigin: 'center', 
        ease: "elastic(2.5, 1)"
    }})
    .to(".ball02, .text01", {}, 0.2) 
    .to(".ball03, .text02", {}, 0.33)
    .to(".ball04, .text03", {}, 0.46)
    .to(".ball05, .text04", {}, 0.6);

    const main = gsap.timeline({defaults: {duration: 1},
      scrollTrigger: {
        trigger: "#svg",
        scrub: true,
        start: "top center",
        end: "bottom center"
    }})
    .to(".ball01", {duration: 0.01, autoAlpha: 0})
    .fromTo('.theLine', { drawSVG: '0%' }, { drawSVG: '100%' })
    .to(".ball01", {motionPath: {
    path: ".theLine", 
    align:".theLine",
    alignOrigin: [0.5, 0.5],
    },
    
    onComplete: function() {
        main.pause(); // Pause the timeline when the animation is complete
      }
    }, 0)
    .to(".theLine", { // Add this line to stop the line from going forward
      strokeDashoffset: 0
    }, "-=0.5") // Adjust the timing based on your preference
    .add(pulses, 0);
},[])
  return (
    <div className='md:mx-auto text-white md:-mt-60 '>

    <svg  id="svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 600 1200">
    <path className="line01 line" d="M 10 200  600 200" ></path>
    <path className="line02 line" d="M 10 400  600 400" ></path>
    <path className="line03 line" d="M 10 600  600 600" ></path>
    <path className="line04 line" d="M 10 800  600 800" ></path>
    <text className="text text01" x="30" y="190">2021</text>
    <text className="text text02" x="30" y="390">2022</text>
    <text className="text text03" x="30" y="590">2023</text>
    <text className="text text04" x="30" y="790">2024</text>

    <path className="theLine" 
            d="M -5,0
            Q 450 230 300 450 
            T 130 750
            Q 100 850 300 1000
            T 150 1200"
            fill="none" stroke="white" strokeWidth="10px" />
    
    
    
    <circle className="ball ball01" r="20" cx="50"  cy="100"></circle>
    <circle className="ball ball02" r="20" cx="278" cy="201"></circle>
    <circle className="ball ball03" r="20" cx="327" cy="401"></circle>
    <circle className="ball ball04" r="20" cx="203" cy="601"></circle>
    <circle className="ball ball05" r="20" cx="125" cy="800"></circle>

    </svg>
    </div>
  )
}

export default About