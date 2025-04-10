import React from "react";
import styled from "styled-components";
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import image1 from "../../../../assets/images/gallery/gallery-1.jpg"
import image2 from "../../../../assets/images/gallery/gallery-2.jpg"
import image3 from "../../../../assets/images/gallery/gallery-3.jpg"
import image4 from "../../../../assets/images/gallery/gallery-4.jpg"
import image5 from "../../../../assets/images/gallery/gallery-5.jpg"
import image6 from "../../../../assets/images/gallery/gallery-6.jpg"
import image7 from "../../../../assets/images/gallery/gallery-7.jpg"
import image8 from "../../../../assets/images/gallery/gallery-8.jpg"
import image9 from "../../../../assets/images/gallery/gallery-9.jpg"

export const Slider = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={4}
            navigation
            autoplay={{delay: 1000}}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <Slide src={image1} alt={"image-1"}/>
            </SwiperSlide>
            <SwiperSlide>
                <Slide src={image2} alt={"image-2"}/>
            </SwiperSlide>
            <SwiperSlide>
                <Slide src={image3} alt={"image-3"}/>
            </SwiperSlide>
            <SwiperSlide>
                <Slide src={image4} alt={"image-4"}/>
            </SwiperSlide>
            <SwiperSlide>
                <Slide src={image5} alt={"image-5"}/>
            </SwiperSlide>
            <SwiperSlide>
                <Slide src={image6} alt={"image-6"}/>
            </SwiperSlide>
            <SwiperSlide>
                <Slide src={image7} alt={"image-7"}/>
            </SwiperSlide>
            <SwiperSlide>
                <Slide src={image8} alt={"image-8"}/>
            </SwiperSlide>
            <SwiperSlide>
                <Slide src={image9} alt={"image-9"}/>
            </SwiperSlide>
        </Swiper>
    )
}

const SwiperWrapper = styled.div`
    
`;

const Slide = styled.img`
    
`;