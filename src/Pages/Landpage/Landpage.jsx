import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Landpage.css';
import videoSource from '../../assets/Images/Entrance1.mp4';
import ManVideo from '../../assets/Images/Man.mp4';
import Project from '../../Projects/Project';
import thumbnail1 from '/src/assets/Images/Project1.png'
import thumbnail2 from '/src/assets/Images/Project2.png'
/*
 * The Landpage component renders the landing page of the website.
 */
const Landpage = () => {

  const page1Ref = useRef(null);
  const page2Ref = useRef(null);
  const page3Ref = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const videoRef = useRef(null);


  useEffect(() => {
    var video = document.getElementById("ManVideo");
    video.addEventListener('play', function() {
      video.muted = false;
    });
    setTimeout(()=> {
      video.pause();
    }, 9800)
    /*
     * Handles the scroll event and performs certain actions based on the scroll position.
     */
    const handleScroll = () => {
      const { scrollY } = window;
      if (scrollY > 22) {
        page1Ref.current.classList.add('offscreen-left');
        page3Ref.current.classList.add('offscreen-left');
        page2Ref.current.classList.remove('hidden');
        page2Ref.current.classList.add('onscreen-page2');
        video.play();
        setTimeout(() => {
          videoRef.current.classList.add('offscreen-left-video');
        }, 1500);
        setTimeout(() => {
          setTimeout(() => {
            page2Ref.current.classList.add('onscreen');
          }, 500)
        });
        setTimeout(() => {
          page3Ref.current.classList.add('hidden');
        }, 1500);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      videoRef.current.play();
      text1Ref.current.remove();
      text2Ref.current.remove();
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let timer;

    const handleScroll = () => {
      clearTimeout(timer);
    };
    /*
     * StartTimer function only happens to execute if the user doesn't scroll
     * But once the user scrolls, it never happens to executed. (Problem appeared with early srolling.)
     */
    const startTimer = () => {
      timer = setTimeout(() => {
        page3Ref.current.classList.remove('hidden');
        AOS.refresh();
        page3Ref.current.classList.add('animated-text');
      }, 6500);
    };

    startTimer();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);



  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div
        id="page-1"
        className="md:mx-auto container text-white h-screen text-4xl flex flex-row font-[Mollie] md:-mt-14 absolute"
        ref={page1Ref}
      >
        <div className="Container">
            
            <video id="myVideo"
            className="Video"
            src={videoSource}        
            muted
            ref={videoRef} />
             
          <div
            data-aos="fade-up"
            className="absolute md:mt-6"
            id="Text1"
            data-aos-duration="1500"
            ref={text1Ref}
          >
            <h1 className="p-5 -mt-10 md:ml-[18vw] md:text-5xl">
              between <br />
              <span className="text-6xl md:text-8xl">Reality</span>
            </h1>
          </div>
          <div
            data-aos="fade-up"
            id="Text2"
            className="absolute mt-[55vh] ml-[55%] md:ml-[60%] md:mt-[25%]"
            data-aos-duration="1500"
            ref={text2Ref}
          >
            <h1 className="">
              & <br />
              <span className="text-6xl">Dream</span>
            </h1>
          </div>
        </div>
      </div>

      <div
        id="page-2"
        className="text-white page-2 top-0 right-0 absolute hidden h-screen"
        ref={page2Ref}
      >
        <h1 className='text-6xl text-white md:-ml-[11rem] absolute ml-[3rem] md:-mt-10 font-bold'>Projects:</h1>
        <div className="md:mt-[10rem] md:-ml-[40rem] absolute mt-[5rem] ml-[2rem]">
          <div className='md:mb-20'>
          <Project 
          paragraph={"This project is made for displaying captured live stream video by ESP32 Cam attached on Rover and  Satellite."} 
                   name={"Graduation Project"} 
                   subname={"Satellite Prototype using TailwindCss and R3F."} 
                   thumbnail1={thumbnail1} 
                   thumbnail2={thumbnail2}
                    />
          </div>
          <div className='md:mb-20'>
          <Project 
          paragraph={"This project was my first built website on Vite and I learned how to deal with Books API by using Udacity API link."} 
                   name={"Books Store"} 
                   subname={"Udacity NanoDegree Project."} 
                   thumbnail1={thumbnail1} 
                   thumbnail2={thumbnail2} 
                    />
          </div>
          <div className='md:mb-20'>
          <Project 
          paragraph={"This project is made for displaying captured live stream video by ESP32 Cam attached on Rover and  Satellite."} 
                   name={"Graduation Project"} 
                   subname={"Satellite Prototype using TailwindCss and R3F."} 
                   thumbnail1={thumbnail1} 
                   thumbnail2={thumbnail2} />
          </div>

        </div>
        
      </div>
      <div
        id="page-3"
        className="text-white hidden font-[Mollie]"
        ref={page3Ref}
      >
        <div className="absolute text-white" >
          <h1 className="md:ml-[5vw] md:mt-10 md:text-5xl backdrop-filter backdrop-blur-sm ">
            Push the <br />
            <span className="text-6xl md:text-8xl">Envelope</span>
          </h1>
        </div>
        <div className="absolute mt-[60vh] ml-[55%] md:ml-[58%] md:mt-[25%]">
          <h1 className="backdrop-filter backdrop-blur-sm">
            <span className="text-5xl text-white">Scroll down for Projects.</span>
          </h1>
        </div>
      </div>
      <div>

   
    <video  id="ManVideo"
            className="ManVideo "
            src={ManVideo}
            muted
            autoPlay
            
    />
    </div>
    </>

  );
};

export default Landpage;