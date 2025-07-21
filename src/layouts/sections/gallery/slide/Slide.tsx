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
import image1 from "../../../../assets/images/gallery/picture-1.jpg"
import image2 from "../../../../assets/images/gallery/picture-2.jpg"
import image3 from "../../../../assets/images/gallery/picture-3.jpg"
import image4 from "../../../../assets/images/gallery/picture-4.jpg"
import image5 from "../../../../assets/images/gallery/picture-5.jpg"
import image6 from "../../../../assets/images/gallery/picture-6.jpg"
import image7 from "../../../../assets/images/gallery/picture-7.jpg"
import image9 from "../../../../assets/images/gallery/picture-9.jpg"
import image10 from "../../../../assets/images/gallery/picture-10.jpg"
import image11 from "../../../../assets/images/gallery/picture-11.jpg"
import image12 from "../../../../assets/images/gallery/picture-12.jpg"
import image13 from "../../../../assets/images/gallery/picture-13.jpg"
import image14 from "../../../../assets/images/gallery/picture-14.jpg"
import image15 from "../../../../assets/images/gallery/picture-15.jpg"
import image16 from "../../../../assets/images/gallery/picture-16.jpg"
import image17 from "../../../../assets/images/gallery/picture-17.jpg"
import image18 from "../../../../assets/images/gallery/picture-18.jpg"
import image19 from "../../../../assets/images/gallery/picture-19.jpg"
import {Catalog} from "../../catalog/Catalog.tsx";
import {Theme} from "../../../../styles/Theme.ts";

export const Slider = ({screenWidth}: Catalog) => {

    const changeSlidesPerWidth = () => {
        if (screenWidth < 450) {
            return 2;
        } else if (screenWidth < 700) {
            return 2;
        } else if (screenWidth < 860) {
            return 3;
        } else if (screenWidth < 1100) {
            return 4;
        } else {
            return 5;
        }
    }

    return (
        <SwiperElem
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={35}
            slidesPerView={changeSlidesPerWidth()}
            navigation
            autoplay={{delay: 1000, pauseOnMouseEnter: true}}
            pagination={{ clickable: true }}
            onSlideChange={() => {}}
            onSwiper={() => {}}
        >
            <SwiperSlide>
                <SliderWrapper>
                    <Slide src={image7} alt={"image-7"}/>
                </SliderWrapper>
            </SwiperSlide>
            <SwiperSlide>
                <SliderWrapper>
                    <Slide src={image6} alt={"image-6"}/>
                </SliderWrapper>
            </SwiperSlide>
            <SwiperSlide>
                <SliderWrapper>
                    <Slide src={image1} alt={"image-1"}/>
                </SliderWrapper>
            </SwiperSlide>
            <SwiperSlide>
                <SliderWrapper>
                    <Slide src={image9} alt={"image-9"}/>
                </SliderWrapper>
            </SwiperSlide>
            <SwiperSlide>
                <SliderWrapper>
                    <Slide src={image16} alt={"image-16"}/>
                </SliderWrapper>
            </SwiperSlide>
            <SwiperSlide>
                <SliderWrapper>
                    <Slide src={image18} alt={"image-18"}/>
                </SliderWrapper>
            </SwiperSlide>
            <SwiperSlide>
                <SliderWrapper>
                    <Slide src={image2} alt={"image-2"}/>
                </SliderWrapper>
            </SwiperSlide>
            <SwiperSlide>
                <SliderWrapper>
                    <Slide src={image11} alt={"image-11"}/>
                </SliderWrapper>
            </SwiperSlide>
            <SwiperSlide>
                <SliderWrapper>
                    <Slide src={image3} alt={"image-3"}/>
                </SliderWrapper>
            </SwiperSlide>
            <SwiperSlide>
                <SliderWrapper>
                    <Slide src={image14} alt={"image-14"}/>
                </SliderWrapper>
            </SwiperSlide>
            <SwiperSlide>
                <SliderWrapper>
                    <Slide src={image4} alt={"image-4"}/>
                </SliderWrapper>
            </SwiperSlide>
            <SwiperSlide>
                <SliderWrapper>
                    <Slide src={image19} alt={"image-19"}/>
                </SliderWrapper>
            </SwiperSlide>
            <SwiperSlide>
                <SliderWrapper>
                    <Slide src={image5} alt={"image-5"}/>
                </SliderWrapper>
            </SwiperSlide>
            <SwiperSlide>
                <SliderWrapper>
                    <Slide src={image10} alt={"image-10"}/>
                </SliderWrapper>
            </SwiperSlide>
            <SwiperSlide>
                <SliderWrapper>
                    <Slide src={image12} alt={"image-12"}/>
                </SliderWrapper>
            </SwiperSlide>
            <SwiperSlide>
                <SliderWrapper>
                    <Slide src={image13} alt={"image-13"}/>
                </SliderWrapper>
            </SwiperSlide>
            <SwiperSlide>
                <SliderWrapper>
                    <Slide src={image15} alt={"image-15"}/>
                </SliderWrapper>
            </SwiperSlide>
            <SwiperSlide>
                <SliderWrapper>
                    <Slide src={image17} alt={"image-17"}/>
                </SliderWrapper>
            </SwiperSlide>
        </SwiperElem>
    )
}

const SwiperElem = styled(Swiper)`
    
    &.swiper {
        padding: 0 35px 25px 35px
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

    // @media ${Theme.media.mobile} {
    //     height: 170px;
    // }
`;

const SliderWrapper = styled.div`
    max-width: 100%;
    max-height: 100%;
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

    @media ${Theme.media.desktop1100} {
        pointer-events: none;
    }
`;

const Slide = styled.img`
    max-width: 100%;
    max-height: 100%;
    display: block;
    object-fit: cover;
`;