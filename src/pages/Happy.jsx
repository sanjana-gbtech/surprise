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
            {/* <Carousel 
                autoPlay 
                interval={3000} 
                infiniteLoop 
                showThumbs={false} 
                showStatus={false}
                swipeable
            >
                {videos.map((video, index) => (
                    <div key={index} className="d-flex  " style={{height:'100%'}}>
                        <video src={video} className="d-block w-100 mx-auto"  loop muted />
                    </div>
                ))}
            </Carousel> */}

            <div  className="d-flex  " style={{height:'100%'}}>
                        <video src={videos[2]} className="d-block w-100 mx-auto"  loop muted />
             </div>
          </div>
        </div>
    );
}

export default Happy;
