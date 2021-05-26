
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "./MainSlider.css";
import SwiperCore, {
    Mousewheel, Keyboard
} from 'swiper/core';
import ChatContainer from '../Chat/ChatContainer';
import TimePage from "../TimePage/TimePage";

SwiperCore.use([Mousewheel, Keyboard]);

const MainSlider = (props) => {

    return (
        <>
            <Swiper cssMode={true} mousewheel={true} keyboard={true} className="mySwiper">
                <SwiperSlide>
                    <ChatContainer />
                </SwiperSlide>
                <SwiperSlide>
                    <TimePage />
                </SwiperSlide>
            </Swiper>
        </>
    )
}




export default MainSlider;