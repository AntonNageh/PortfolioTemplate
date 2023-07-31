import { useState } from 'react';

import ScrollTopImg from '../../assets/Images/ScrollTop.png'

const BacktoTop = () => {

    const [currentPosition, setCurrentPosition] = useState(0);

    const ScrollTop = () => {
        const currentPosition = window.scrollY;
        
        if (currentPosition > 0) {
          window.requestAnimationFrame(ScrollTop);
          window.scrollTo(0, currentPosition - currentPosition / 8);
        } else {
            setCurrentPosition(0);
          }
    }
        
    window.addEventListener('scroll', () => {
    setCurrentPosition(window.scrollY);
    });

    return (
        currentPosition>0 &&
        (
        <div className="rounded-full bg-white w-14 h-14 right-0 bottom-0 md:mr-8 md:mb-8 z-50 fixed animate__animated animate__fadeIn">         
            <button onClick={()=>ScrollTop()}>
                <img 
                src={ScrollTopImg} 
                alt='unloaded arrow' 
                className='hover:scale-125'>
                </img>
            </button>
        </div>
        )
    )
}
export default BacktoTop