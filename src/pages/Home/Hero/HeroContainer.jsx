import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/effect-creative'
// import {EffectCreative} from 'swiper'
import Hero1 from './Hero1';
import Hero2 from './Hero2';

const HeroContainer = () => {
    return (
        <section>
            <Swiper>

            <SwiperSlide>
                <Hero1/>
            </SwiperSlide>

            <SwiperSlide>
                <Hero2/>
            </SwiperSlide>

            </Swiper>
            
            
        </section>
    );
};

export default HeroContainer;