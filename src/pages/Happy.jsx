import React from "react";
import { Carousel } from 'react-responsive-carousel'; // Import the carousel component
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel CSS

import gf1 from "../utilities/gif1.mp4";
import gf2 from "../utilities/gif2.mp4";
import gf3 from "../utilities/gif3.mp4";
import gf4 from "../utilities/gif4.mp4";

function Happy() {
    const videos = [gf1, gf2, gf3, gf4];

    return (
        <div className="d-flex justify-content-center  ">
          <div className="w-50 mt-5" > 
            <h1 className="text-danger text-center">YAAYYY!! We'll Have Fun...</h1>

            <div className="d-flex justify-content-center align-items-center w-100">
            <video autoPlay 
  playsInline loop muted>
                <source src={gf3} type="video/mp4" />
                <source src={gf2.replace('.mp4', '.webm')} type="video/webm" />
                Your browser does not support the video tag.
                </video>

                </div>
          </div>
        </div>
    );
}

export default Happy;
