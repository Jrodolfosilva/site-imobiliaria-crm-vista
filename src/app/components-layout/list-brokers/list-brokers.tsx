"use client"
import {Swiper,SwiperSlide} from "swiper/react"
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import style from "./list-brokers.module.css"
import Image from "next/image";


const ListBrokers =()=>{

    return(
        <section className={style.container_brokers}>
            <div>
                <h2>Conheça Nossa Equipe de Corretores</h2>
                <p>
                Valorizamos a excelência no atendimento ao cliente.
                É por isso que temos uma equipe de corretores altamente qualificados prontos
                para ajudá-lo em todas as suas necessidades imobiliárias.           
                </p>
            </div>
            <div>
                <Swiper navigation={true} loop={true}  autoplay={{delay: 2500, disableOnInteraction: true,}}spaceBetween={5}  modules={[Navigation,Autoplay]}>
                    <SwiperSlide>
                        <Image
                        src="/imagem-corretores/Pablo-Oliveira.webp"
                        width={339}
                        height={254}
                        style={{
                          width: '100%',
                          height: 'auto',
                          borderRadius:"12px"
                        }}
                        quality={80}
                        alt="Corretor Pablo Oliveira"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                        src="/imagem-corretores/Jaison-Hanich.webp"
                        width={339}
                        height={254}
                        style={{
                          width: '100%',
                          height: 'auto',
                          borderRadius:"12px"
                        }}
                        quality={80}
                        alt="Corretor Jaison Hanich"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                        src="/imagem-corretores/Lucas-Saft.webp"
                        width={339}
                        height={254}
                        style={{
                          width: '100%',
                          height: 'auto',
                          borderRadius:"12px"
                        }}
                        quality={80}
                        alt="Corretor Lucas Saft"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                        src="/imagem-corretores/Pablo-Oliveira.webp"
                        width={339}
                        height={254}
                        style={{
                          width: '100%',
                          height: 'auto',
                          borderRadius:"12px"
                        }}
                        quality={80}
                        alt="Corretor Pablo Oliveira"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                        src="/imagem-corretores/Tiago-Lemos.webp"
                        width={339}
                        height={254}
                        style={{
                          width: '100%',
                          height: 'auto',
                          borderRadius:"12px"
                        }}
                        quality={80}
                        alt="Corretor Tiago Lemos"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                        src="/imagem-corretores/Douglas-Souza.webp"
                        width={339}
                        height={254}
                        style={{
                          width: '100%',
                          height: 'auto',
                          borderRadius:"12px"
                        }}
                        quality={80}
                        alt="Corretor Douglas Souza"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                        src="/imagem-corretores/Matheus-Dal-Bello.webp"
                        width={339}
                        height={254}
                        style={{
                          width: '100%',
                          height: 'auto',
                          borderRadius:"12px"
                        }}
                        quality={80}
                        alt="Corretor Matheus Dal Bello"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                        src="/imagem-corretores/Lucaslemos.webp"
                        width={339}
                        height={254}
                        style={{
                          width: '100%',
                          height: 'auto',
                          borderRadius:"12px"
                        }}
                        quality={80}
                        alt="Corretor Lucas Lemos"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                        src="/imagem-corretores/Rômulo-Costa.webp"
                        width={339}
                        height={254}
                        style={{
                          width: '100%',
                          height: 'auto',
                          borderRadius:"12px"
                        }}
                        quality={80}
                        alt="Corretor Rômulo Costa"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                        src="/imagem-corretores/Felipe-Peres.webp"
                        width={339}
                        height={254}
                        style={{
                          width: '100%',
                          height: 'auto',
                          borderRadius:"12px"
                        }}
                        quality={80}
                        alt="Corretor Felipe Peres"
                        />
                    </SwiperSlide>
                   
                </Swiper>
            </div>

        </section>

    )
}

export default ListBrokers