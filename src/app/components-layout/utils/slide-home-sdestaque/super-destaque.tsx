"use client"

import {Swiper,SwiperSlide} from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import style from "./super-destaque.module.css"


interface superDestaque { 
    titleProperty: string,
    valueProperty: number,
    areaProperty: number,
    dormProperty: number,
    suiteProperty: number,
    bathProperty: number,
}
interface Props {
    destaque: superDestaque[]; 
}

const SlideSuperDestaque  = ({destaque}:Props)=>{
    return(
        <Swiper navigation={true} loop={true} modules={[Navigation,Pagination]}  className={style.container_slide_superDestaque}>
            {
                destaque?.map((d)=>(
                    <SwiperSlide className={style.slide}key={d.titleProperty}>
                        {
                            d.titleProperty
                        }
                       

                    </SwiperSlide>
                ))
            }
            
        </Swiper>
    )
}

export default SlideSuperDestaque