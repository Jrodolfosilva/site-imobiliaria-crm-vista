import Link from "next/link"
import style from "./cta-home.module.css"


const CTAHome =  ()=>{
    return(
        <section className={style.container_ctaHome}>
            <div>
                <p>Comprar ou Vender</p>
                <h2>Você precisar comprar um novo imóvel ou vender um existente?
                    A Elegance oferece soluções para você!
                </h2>
            </div>
            <div>
                <Link href="www.google.com.br" target="_blank">Anúnciar Imóvel</Link>
                <Link href="www.google.com.br" target="_blank">Procurando Imóveis</Link>

            </div>
            

        </section>

    )
}

export default CTAHome