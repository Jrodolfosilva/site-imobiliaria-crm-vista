import Image from 'next/image'
import style from './footer.module.css'
import Link from 'next/link'


const Footer = ()=>{

    return(
        <footer className={style.container_footer}>
            <div>
                <Image
                src="/logo-branca.svg"
                height={100}
                width={200}
                alt='Logomarca da Elegance Imóveis'
                />
                <p>
                Imóveis Alto Padrão é qualificada e reconhecida pela expertise e 
                Imóveis Alto Padrão é qualificada e reconhecida pela expertise e 
                </p>
                <ul className={style.list_inline}>
                    <li>
                        <Image
                        src="/instagram.svg"
                        width={32}
                        height={32}
                        alt=''
                        />
                    </li>
                    <li>
                        <Image
                            src="/facebook.svg"
                            width={32}
                            height={32}
                            alt=''
                            />
                    </li>
                </ul>
            </div>
            <div>
                <h5>Entre em Contato</h5>
                <ul className={style.list}>
                    <li>
                        <Image
                        src="/gps.svg"
                        width={16}
                        height={16}
                        alt=''
                        />
                        <p>
                        Av. Paraguassu, 5130 - Loja 01 - Atlântida - Xangri-Lá/RS
                        </p>
                    </li>
                    <li>
                        <Image
                            src="/email.svg"
                            width={16}
                            height={16}
                            alt=''
                            />
                            <p>
                                vendas@eleganceimoveis.com.br
                            </p>
                    </li>
                    <li>
                        <Image
                            src="/phone.svg"
                            width={16}
                            height={16}
                            alt=''
                            />
                            <p>
                            (51) 98900-7788
                            </p>
                    </li>
                    <li></li>
                </ul>
                <h5>Entre em Contato</h5>
                <ul className={style.list}>
                   <li>
                   <Image
                    src="/clock.svg"
                    width={16}
                    height={16}
                    alt=''
                    />
                    <p>
                        Segunda a Sábado | 09:00 às 18:00hrs
                    </p>
                   </li>
                </ul>
            </div>
            <div>
                <h5>Acesso rápido</h5>
                <ul className={style.list}>
                    <li>
                        <Image
                        src="/seta-direita.png"
                        width={8}
                        height={8}
                        alt=''
                        />
                        <Link href="">Página inicial</Link>
                    </li>
                    <li>
                        <Image
                        src="/seta-direita.png"
                        width={8}
                        height={8}
                        alt=''
                        />
                        <Link href="">Todos os Imóveis</Link>
                    </li>
                    <li>
                        <Image
                        src="/seta-direita.png"
                        width={8}
                            height={8}
                            alt=''
                            />
                        <Link href="">Quem somos</Link>
                    </li>
                    <li>
                        <Image
                        src="/seta-direita.png"
                        width={8}
                            height={8}
                            alt=''
                            />
                        <Link href="">Fale conosco</Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer