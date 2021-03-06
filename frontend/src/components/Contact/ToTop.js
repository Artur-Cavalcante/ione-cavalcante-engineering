import React from 'react';

import { FaArrowCircleUp } from 'react-icons/fa'

function ToTop(){
    let heightPX = 0;
    let toTopInterval = "";
    
    function upping(){
        if (heightPX > -20){
            heightPX -= 10;
            window.scrollTo("0", heightPX);
        }else{
            stopping();
        };

    };
    
    function stopping(){
        clearInterval(toTopInterval);
    };

    function handleToTop(){
        heightPX = window.screen.height;
        toTopInterval = setInterval(upping, 5);
    };

    

    return(
        <button
            className="
                block
                cursor-pointer
                pr-6
                right-0
                absolute
                focus:outline-none
                transition duration-200 ease-in-out transform hover:-translate-y-1 
            "
        >
            <FaArrowCircleUp 
                onClick={handleToTop} 
                color="#D49b7a" 
                size="2.5rem" 
                className="
                    transition duration-200 ease-in-out transform hover:-translate-y-1 
                "
            />
        </button>
    );
};

export default ToTop;