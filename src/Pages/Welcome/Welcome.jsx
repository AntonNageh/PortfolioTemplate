import React from "react";
import './Welcome.css';
const Welcome = () =>{

    return(
    
        <div className="md:mx-auto md:flex md:flex-col md:justify-around md:items-center text-center md:mt-[15vh] text-white">
            <h1 className="text-5xl"> Welcome to my Portfolio </h1>
            <h1 className="text-5xl"> Please click here to enter my Portfolio.</h1>
            <a href="/landing" className="Presshere text-2xl">Press here</a>
            <spline-viewer url="https://prod.spline.design/FVZWbQH2B6ndj9UU/scene.splinecode" events-target="global"></spline-viewer>
       </div>
    )
}
export default Welcome