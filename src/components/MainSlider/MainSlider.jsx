import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel, Keyboard } from 'swiper/core';

import ChatContainer from '../Chat/ChatContainer';
import TimePage from "../TimePage/TimePage";
import "swiper/swiper.min.css";
import "./MainSlider.scss";

SwiperCore.use([Mousewheel, Keyboard]);

const MainSlider = () => (
    <Swiper cssMode={true} mousewheel={true} keyboard={true} className="mySwiper">
        <SwiperSlide>
            <ChatContainer />
        </SwiperSlide>
        <SwiperSlide>
            <TimePage />
        </SwiperSlide>
    </Swiper>
);

export default MainSlider;
