import ButtonToggleMobile from '../utils/button-mobile/button-toggle-mobile'
import style from './header.module.css'
import Link from 'next/link'
const ContainerHeader = ()=>{

    return(
        <header className={style.container_header}>
            <Link href="/" className={style.logo_header}>
                <img src="./logo-elegance-imoveis.svg" alt="LOGO" />
            </Link>
            <div className={style.menu_upbar}>
                <nav>
                    <ul>
                        <li>
                            <Link tabIndex={0} href="/">Pagina Inicial</Link>
                        </li>
                        <li>
                            <Link tabIndex={0} href="/">Encontre seu Imóvel</Link>
                        </li>
                        <li>
                            <Link tabIndex={0} href="/">Quem somos</Link>
                        </li>
                        <li>
                            <Link tabIndex={0} href="/">Fale conosco</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={style.container_sidebar}>
                <div className={style.container_sidebar_content} id='sidebarContent'>
                    <div>
                        <h3>Bem-Vindos a Elegance Imóveis</h3>
                        <ButtonToggleMobile action='close'  idSidebar='sidebarContent'/>
                    </div>
                    <nav className={style.menu_sidebar}>
                        <ul>
                            <li>
                                <Link tabIndex={0} href="/">Pagina Inicial</Link>
                            </li>
                            <li>
                                <Link  tabIndex={0} href="/">Encontre seu Imóvel</Link>
                            </li>
                            <li>
                                <Link tabIndex={0} href="/">Quem somos</Link>
                            </li>
                            <li>
                                <Link tabIndex={0} href="/">Fale conosco</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <ButtonToggleMobile idSidebar='sidebarContent' />
            </div>
          
            

        </header>
    )
}

export default ContainerHeader