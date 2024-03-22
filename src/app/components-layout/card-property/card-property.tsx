import Link from 'next/link';
import style from './card-property.module.css'
import Image from 'next/image';

const CardProperty = ()=>{
    return(  
        <Link href="" className={style.container_card}>
            <div className={style.card_container_image}>
                <Image
                    src="/imagem-bairro/atlantida.webp"
                    alt='Imovel'
                    width={320}
                    height={225}
                />
                <span>COD:11111</span>
            </div>
            <div className={style.container_content}>
                <h4>Titulo</h4>
                <div className={style.content_location}>
                <Image
                    src="./imagem-card/gps.svg"
                    alt='Imovel'
                    width={16}
                    height={16}
                    style={{
                        width:"fit-content"
                    }}
                    />
                    <span>Localização</span>
                </div>
                <ul className={style.container_list_details}>
                    <li>
                        <Image
                        src="./imagem-card/n1.svg"
                        width={30}
                        height={30}
                        alt=''
                      
                        />
                        Suítes
                    </li>
                    <li>
                    <Image
                        src="./imagem-card/quarto.svg"
                        width={30}
                        height={30}
                        alt=''
                        />
                        Quarto
                    </li>
                    <li>
                        <Image
                            src="./imagem-card/banheiro.svg"
                            width={30}
                            height={30}
                            alt=''
                        />
                        Banheiros
                    </li>
                    <li>
                        <Image
                            src="./imagem-card/vaga.svg"
                            width={30}
                            height={30}
                            alt=''
                            />
                        Vagas
                    </li>
                </ul>
            </div>
        </Link>
        )
};

export default CardProperty