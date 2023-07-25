import React, { useEffect } from 'react'
import "./Project.css"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const Project = ({ name, subname, paragraph, thumbnail1, thumbnail2 }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.img', {
      scrollTrigger: {
        trigger: '.img',
        toggleActions: 'restart none reverse pause',
        scrub:true,
        start:"top left",
        end:"bottom -100px"
      },    
      y:-100,
      duration: 2,
      delay:2.7
    });
    gsap.to('.img2', {
      scrollTrigger: {
        trigger: '.img2',
        toggleActions: 'restart none reverse pause',
        scrub:true,
        start:"top left",
        end:"bottom -100px"
      },
      y:100,
      duration: 2,
      delay:2.7
    });
    // gsap.to('.img3', {
    //   scrollTrigger: {
    //     trigger: '.img3',
    //     toggleActions: 'restart none reverse pause',
    //     scrub:true,
    //     start:"top left",
    //     end:"top -100px"
    //   },
    //   y:100,
    //   duration: 2,
    //   delay:2.7
    // });
  }, []);
  return (
    <div>

    <div className='md:mx-auto flex flex-col md:flex-row md:-mt-32 md:-ml-12'>
      <div className='md:p-5 py-5'>
        <img
          className='img'
          src={thumbnail1}
          alt='thumbnail1'
          style={{
            maxWidth: 'none',
            width: '30vw',
            minWidth: '20rem',
          }}
        ></img>
      </div>
      <div className='text-center text-white md:p-10'>
        <h1 className='text-6xl pb-5'>{name}</h1>
        <h1 className='text-3xl pb-5'>{subname}</h1>
        <p className='text-xl pb-5 text-center'>{paragraph}</p>
      </div>
      <div className='md:p-5 py-10'>
        <img
          className='img2'
          src={thumbnail2}
          alt='thumbnail2'
          style={{
            maxWidth: 'none',
            width: '30vw',
            minWidth: '20rem',
          }}
        ></img>
       
      </div>

    </div>
    {/* <div className='md:p-5 py-10 md:flex md:justify-center'>
        <img
          className='img3'
          src={thumbnail3}
          alt='thumbnail3'
          style={{
            maxWidth: 'none',
            width: '15vw',
            minWidth: '10rem',
          }}
        ></img>
        </div> */}
          </div>
  );
};

export default Project