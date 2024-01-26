import Link from 'next/link'
import style from './header.module.css'

const ContainerHeader = ()=>{

    return(
        <header className={style.container_header}>
            <Link href="/" className={style.logo_header}>
                <img src="./header-logo.svg" alt="LOGO" />
            </Link>
            <div className={style.menu_upbar}>
                <nav>
                    <ul>
                        <li>
                            <Link href="/">Pagina Inicial</Link>
                        </li>
                        <li>
                            <Link href="/">Encontre seu Imóvel</Link>
                        </li>
                        <li>
                            <Link href="/">Quem somos</Link>
                        </li>
                        <li>
                            <Link href="/">Fale conosco</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={style.menu_sidebar}>
                <span className={style.menu_sidebar_button}></span>
                <div className={style.menu_sidebar_content}>
                    <div>
                        <h3>Bem-Vindos a Imobiliária</h3>
                        <span className={style.menu_sidebar_button_close}>X</span>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <Link href="/">Pagina Inicial</Link>
                            </li>
                            <li>
                                <Link href="/">Encontre seu Imóvel</Link>
                            </li>
                            <li>
                                <Link href="/">Quem somos</Link>
                            </li>
                            <li>
                                <Link href="/">Fale conosco</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
               
            </div>
          
            

        </header>
    )
}

export default ContainerHeader