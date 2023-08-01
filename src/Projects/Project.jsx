import React, { useEffect } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const Project = ({ name, subname, paragraph,src, thumbnail1, thumbnail2 }) => {
  useEffect(() => {
    if(window.innerWidth < 768)
    {delete window.gsap}
    else
    {
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
  }
  }, []);
  return (
    <>
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
            }}>
          </img>
        </div>
        <div className='text-center text-white md:p-10'>
          <h1 className='text-6xl pb-5'>{name}</h1>
          <h1 className='text-3xl pb-5'>{subname}</h1>
          <p className='text-xl pb-5 text-center'>{paragraph}</p>
          <a href={src} className='text-3xl hoverBlue'>Press here</a>
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
            }}>
          </img>
        </div>
      </div>
    </div>
  </>
  );
};

export default Project