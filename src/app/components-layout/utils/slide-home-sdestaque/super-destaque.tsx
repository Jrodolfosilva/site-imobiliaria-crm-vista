"use client"

import {Swiper,SwiperSlide} from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import style from "./super-destaque.module.css"
import { useQuery } from "react-query";


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
const superDestaqueAPI = [
    {
      titleProperty:"askjdhdasdk",
      valueProperty:155596,
      areaProperty: 600,
      dormProperty:4,
      suiteProperty:1,
      bathProperty:3,
    },
    {
      titleProperty:"askjdasdhdasdk",
      valueProperty:155596,
      areaProperty: 600,
      dormProperty:4,
      suiteProperty:1,
      bathProperty:3,
    }, {
      titleProperty:"askjsaddhdasdk",
      valueProperty:155596,
      areaProperty: 600,
      dormProperty:4,
      suiteProperty:1,
      bathProperty:3,
    }
    
  ]

const GetSuperDestaques = async()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/50").then((res)=>res.json())

    return res
}

const SlideSuperDestaque  = ()=>{


  const {data,isError} = useQuery(['superDestaque'],()=>GetSuperDestaques())
 
  console.log(data)
    return(
        <Swiper navigation={true} loop={true} modules={[Navigation,Pagination]}  className={style.container_slide_superDestaque}>
            {
                superDestaqueAPI?.map((d)=>(
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