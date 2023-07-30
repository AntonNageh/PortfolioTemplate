import { useEffect } from "react";
import 'animate.css';
import './Welcome.css';
function Welcome () {
    useEffect(()=>{
        let Now = document.getElementById("NowText");
        
        document.addEventListener("scroll", () => {
        if(window.scrollY>22)
            setTimeout(() => {
            Now.classList.remove("hidden");
            Now.classList.add("animate__animated");
            Now.classList.add("animate__fadeIn");
        }, 2500);
        })
        
    })
    return (

        <div className="md:mx-auto md:flex md:flex-col md:justify-around md:items-center text-center md:mt-[15vh] text-white">
            <h1 className="text-5xl"> Welcome to my Portfolio </h1>
            <h1 className="text-5xl"> Please click here to enter my Portfolio.</h1>
            <a href="/landing" className="Presshere text-2xl">Press here</a>
            <div className="w-full">
            <spline-viewer url="https://prod.spline.design/FVZWbQH2B6ndj9UU/scene.splinecode" events-target="global"></spline-viewer>
            <h1 className="text-6xl font-bold Scrollup ">Scroll back! up!</h1>
            <h1 id="NowText" className="text-6xl hidden font-extrabold Scrollup md:mt-[5rem]">now :)  </h1> 
            </div>
            
       </div>
    )
}
export default Welcome