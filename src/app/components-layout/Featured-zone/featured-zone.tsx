import Link from "next/link";
import Image from "next/image";
import style from "./featured-zone.module.css"

const FeaturedZone = ()=>{
    
       
    return(
        <section className={style.container_featured_zone}>
           <div>
                <h2>Bairros Selecionados</h2>
                <p>Nesta seção, você encontrará uma lista de imóveis disponíveis nos seguintes bairros</p>
           </div>
            <div className={style.container_list_zone}>
                <Link href="/" className={style.container_zone}>
                    <Image
                    src="/imagem-bairro/atlantida.webp"
                    width={400}
                    height={250}
                    alt="Bairro Atlântida"
                    />
                    <span>Atlântida</span>
                </Link>
                <Link href="/" className={style.container_zone}>
                    <Image
                    src="/imagem-bairro/centro.webp"
                    width={400}
                    height={250}
                    alt="Bairro Centro Xangri-lá"
                    />
                    <span>Centro</span>
                </Link>
                <Link href="/" className={style.container_zone}>
                    <Image
                    src="/imagem-bairro/remanso_1.webp"
                    width={400}
                    height={250}
                    alt="Bairro Remanso"
                    />
                    <span>Remanso</span>
                </Link>
                <Link href="/" className={style.container_zone}>
                    <Image
                    src="/imagem-bairro/maristela_1.webp"
                    width={400}
                    height={250}
                    alt="Bairro Maristela"
                    />
                    <span>Maristela</span>
                </Link>
                <Link href="/" className={style.container_zone}>
                    <Image
                    src="/imagem-bairro/noivadomar_1.webp"
                    width={400}
                    height={250}
                    alt="Bairro Noiva do Mar"
                    />
                    <span>Noiva do Mar</span>
                </Link>
                <Link href="/" className={style.container_zone}>
                    <Image
                    src="/imagem-bairro/rainhadomar_1.webp"
                    width={400}
                    height={250}
                    alt="Bairro Rainha do Mar"
                    />
                    <span>Rainha do Mar</span>
                </Link>

            </div>


        </section>
    )
}

export default FeaturedZone