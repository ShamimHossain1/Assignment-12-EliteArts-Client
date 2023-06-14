
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { Slide } from "react-awesome-reveal";

const Art = () => {
    return (
        <>
            <Slide>
            <h1 className='text-center mt-10 text-4xl font-bold'>Art Gallery</h1>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://c4.wallpaperflare.com/wallpaper/778/793/66/oil-painting-artwork-napoleon-bonaparte-jacques-louis-david-wallpaper-preview.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://c4.wallpaperflare.com/wallpaper/234/357/179/vincent-van-gogh-self-portraits-oil-painting-painting-wallpaper-preview.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://c4.wallpaperflare.com/wallpaper/455/953/175/oil-painting-artwork-leonardo-da-vinci-wallpaper-preview.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://c4.wallpaperflare.com/wallpaper/476/624/847/art-coffee-fine-girl-wallpaper-preview.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://c1.wallpaperflare.com/preview/502/634/441/mona-lisa-painting-art-oil-painting.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://c1.wallpaperflare.com/preview/421/405/261/oil-painting-painting-image-art.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://c4.wallpaperflare.com/wallpaper/994/835/716/oil-painting-artwork-william-adolphe-bouguereau-wallpaper-preview.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://c4.wallpaperflare.com/wallpaper/396/189/87/oil-painting-artwork-claude-monet-femmes-au-jardin-wallpaper-preview.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://c1.wallpaperflare.com/preview/497/481/143/spanish-lady-dance-painting.jpg" />
                </SwiperSlide>
            </Swiper>
            </Slide>
        </>
    );
};

export default Art;