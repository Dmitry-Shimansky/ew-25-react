// import React from "react";
import styled from "styled-components";
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/navigation';
// @ts-ignore
import 'swiper/css/pagination';
// @ts-ignore
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
        <SwiperElem
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={5}
            navigation
            // autoplay={{delay: 1000}}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <SliderWrapper>
                    <Slide src={image1} alt={"image-1"}/>
                </SliderWrapper>
            </SwiperSlide>
            <SwiperSlide>
                <SliderWrapper>
                <Slide src={image2} alt={"image-2"}/>
                </SliderWrapper>
            </SwiperSlide>
            <SwiperSlide>
                <SliderWrapper>
                <Slide src={image3} alt={"image-3"}/>
                </SliderWrapper>
            </SwiperSlide>
            <SwiperSlide>
                <SliderWrapper>
                <Slide src={image4} alt={"image-4"}/>
                </SliderWrapper>
            </SwiperSlide>
            <SwiperSlide>
                <SliderWrapper>
                <Slide src={image5} alt={"image-5"}/>
                </SliderWrapper>
            </SwiperSlide>
            <SwiperSlide>
                <SliderWrapper>
                <Slide src={image6} alt={"image-6"}/>
                </SliderWrapper>
            </SwiperSlide>
            <SwiperSlide>
                <SliderWrapper>
                <Slide src={image7} alt={"image-7"}/>
                </SliderWrapper>
            </SwiperSlide>
            <SwiperSlide>
                <SliderWrapper>
                <Slide src={image8} alt={"image-8"}/>
                </SliderWrapper>
            </SwiperSlide>
            <SwiperSlide>
                <SliderWrapper>
                <Slide src={image9} alt={"image-9"}/>
                </SliderWrapper>
            </SwiperSlide>
        </SwiperElem>
    )
}

const SwiperElem = styled(Swiper)`
    &.swiper {
        padding: 0 20px 25px 20px
    }
    
    & > .swiper-button-next {
        right: 0;
    }

    & > .swiper-button-prev {
        left: 0;
    }
    
    &.swiper-horizontal > .swiper-pagination-bullets {
        bottom: -3px;
    }
`;

const SliderWrapper = styled.div`
    max-width: 100%;
    overflow: hidden;
    position: relative;
    border-top: 1px solid #e0e0e0;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    &:hover {
        box-shadow: 0 8px 15px rgb(244, 137, 21, 0.7);
        border-color: rgb(244, 137, 21, 0.7);
    }
`;

const Slide = styled.img`
    max-width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
`;