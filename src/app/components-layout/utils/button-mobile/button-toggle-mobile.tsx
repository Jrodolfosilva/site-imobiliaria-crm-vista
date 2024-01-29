"use client"
import style from "./button-mobile.module.css"

type idContentAction = {
    idSidebar: string,
    action?: string
}



function handleClass(idSidebar:idContentAction){
    const component =  document.querySelector(`#${idSidebar.idSidebar}`)
    component?.classList.toggle('active-menu')     
}

 const  ButtonToggleMobile = ({ idSidebar, action }:idContentAction)=>{
    if(action === "close") return <span className={style.menu_sidebar_button_close }  onClick={()=>handleClass({idSidebar})}></span>
    return <span className={style.menu_sidebar_button }  onClick={()=>handleClass({idSidebar})}>{action}</span>

}

export default ButtonToggleMobile





