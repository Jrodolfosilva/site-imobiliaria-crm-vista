"use client"

import {Swiper,SwiperSlide} from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import style from "./super-destaque.module.css"
import { useEffect, useState } from "react";
import { serverback } from "./back";
import Image from "next/image";
import Link from "next/link";


interface superDestaque { 
    AreaTotal: string;
    Bairro: string;
    BairroComercial: string;
    BanheiroSocialQtd: string;
    Codigo: string;
    CodigoImobiliaria: string;
    Dormitorios: string;
    FotoDestaque: string;
    Suites: string;
    TituloSite: string;
    Vagas: string;
    ValorVenda: string;
}
 

const SlideSuperDestaque  = ()=>{
  
    const [properties,setProperties] = useState<superDestaque[]>([])
    useEffect(()=>{
        async function getProperties(){
            const data = await serverback()
            console.log(data)
            setProperties(data as superDestaque[])
        }
        getProperties()
    },[])
    
 
    return(
        <Swiper navigation={true} loop={true} modules={[Navigation,Pagination]}  className={style.container_slide_superDestaque}>
            {
                properties?properties.map((property)=>(
                    <SwiperSlide className={style.slide} key={property.Codigo}>
                        <Link href="">
                            <Image
                                src={property.FotoDestaque}
                                sizes="100vw"
                                style={{
                                    objectFit: "cover",
                                    width:"100vw",
                                    height:'100%',
                                
                                }}
                                width={320}
                                height={300}
                                priority={true}
                                quality={60}
                                
                                alt={property.TituloSite}
                            />
                            <h2>{property.TituloSite}</h2>
                        </Link>
                    </SwiperSlide>
                )):""
            }
            
        </Swiper>
    )
}

export default SlideSuperDestaque