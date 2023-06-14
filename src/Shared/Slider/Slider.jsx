
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";
import { Navigation } from "swiper";
import { Slide } from "react-awesome-reveal";

const Slider = () => {
    return (
        <div>
            {/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><img src="https://e1.pxfuel.com/desktop-wallpaper/816/609/desktop-wallpaper-sketch-drawing-of-couple-cute-love-drawings-pencil-art-easy-pencil-sketch.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://e0.pxfuel.com/wallpapers/663/437/desktop-wallpaper-drawing-17-1920-x-1080.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://www.wallpaperbetter.com/wallpaper/27/657/190/hand-pencil-sketch-abstract-hd-1080P-wallpaper-middle-size.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://wallpaperset.com/w/full/a/0/0/256841.jpg" alt="" /></SwiperSlide>
                
            </Swiper> */}


            <div className="carousel w-full rounded ">
                <div id="item1" className="carousel-item w-full flex flex-col">
                    
                    <img src="https://wallpaperset.com/w/full/a/0/0/256841.jpg" className="w-full" />
                    <Slide><h1 className="text-2xl mt-2 font-bold text-center">"Shades of Creativity: Explore our Diverse Pencil Palette"</h1></Slide>
                    
                </div>
                <div id="item2" className="carousel-item w-full flex flex-col">
                    <img src="https://e0.pxfuel.com/wallpapers/663/437/desktop-wallpaper-drawing-17-1920-x-1080.jpg" className="w-full" />
                    <Slide><h1 className="text-2xl mt-2 font-bold text-center">"Vibrant Hues at your Fingertips: Discover our Pencil Palette"</h1></Slide>
                </div>
                <div id="item3" className="carousel-item w-full flex flex-col">
                    <img src="https://www.wallpaperbetter.com/wallpaper/27/657/190/hand-pencil-sketch-abstract-hd-1080P-wallpaper-middle-size.jpg" className="w-full" />
                   <Slide> <h1 className="text-2xl mt-2 font-bold text-center">"Unleash Your Artistic Potential with our Premium Pencil Palette"</h1></Slide>
                </div>
                <div id="item4" className="carousel-item w-full flex flex-col ">
                    <img src="https://e1.pxfuel.com/desktop-wallpaper/816/609/desktop-wallpaper-sketch-drawing-of-couple-cute-love-drawings-pencil-art-easy-pencil-sketch.jpg" className="w-full" />
                    <Slide><h1 className="text-2xl mt-2 font-bold text-center">"Express Yourself in Color: Find Your Perfect Pencil Palette"</h1></Slide>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
            
        </div>
    );
};

export default Slider;