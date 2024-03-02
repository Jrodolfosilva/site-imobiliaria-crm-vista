import style from "./sobre-nos.module.css"


const SobreNos = ()=>{
    return(
        <section className={style.container_about}>
            <div className={style.container_about__img}></div>
            <div className={style.container_about__content}>
                <h2>Sua parceira confiável no mercado imobiliário</h2>
                <p>
                    Bem-vindo à Elegance, onde excelência e dedicação se encontram para oferecer a 
                    você uma experiência imobiliária única. Nós somos 
                    especializados em ajudar nossos clientes a encontrar o 
                    lar perfeito, o investimento ideal ou a propriedade comercial 
                    adequada.
                </p>
                <p>
                    Nossa equipe é formada por profissionais apaixonados e dedicados, 
                    que estão sempre atualizados sobre as tendências e as mudanças no setor.Aqui, 
                    oferecemos uma abordagem personalizada e individualizada, entendendo que cada cliente 
                    tem necessidades e desejos únicos. Compreendemos a 
                    importância de ouvir e entender suas expectativas, 
                    e estamos comprometidos em superar suas expectativas em todos os aspectos.
                </p>
            </div>

        </section>
    )
}

export default SobreNos