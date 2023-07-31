import { useEffect } from "react";
import 'animate.css';
import './Welcome.css';
import Footer from "../../Main Components/Footer/Footer";
function Welcome () {
    useEffect(()=>{

      const handleScroll = () => {
      const nowText = document.getElementById("NowText");
      if (window.scrollY > 22) {
        setTimeout(() => {
          nowText.classList.remove("hidden");
          nowText.classList.add("animate__animated", "animate__fadeIn");
        }, 2500);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
        document.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return (
        <div className="md:mx-auto md:flex md:flex-col md:justify-around md:items-center text-center md:mt-[15vh] text-white">
            <h1 className="text-5xl"> Welcome to my Portfolio </h1>
            <h1 className="text-5xl"> Please click here to enter my Portfolio.</h1>
            <a href="/landing" className="Presshere text-2xl">Press here</a>
            <div className="w-full">
            <SplineViewer url="https://prod.spline.design/FVZWbQH2B6ndj9UU/scene.splinecode" events-target="global" />            
            <h1 className="text-6xl font-bold Scrollup">Scroll back! up!</h1>
            <h1 id="NowText" className="text-6xl hidden font-extrabold Scrollup md:mt-[5rem]">now :)  </h1> 
            </div>
            
            <Footer/>
       </div>
    );
};
const SplineViewer = ({ url, eventsTarget }) => {
    return (
      <spline-viewer url={url} events-target={eventsTarget}></spline-viewer>
    );
  };

export default Welcome