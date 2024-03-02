import ContactForm from "../components-layout/contact-form/contact-form"
import style from "./fale-conosco.module.css"

const FaleConosco = ()=>{




    return(
        <section className={style.container_contact}>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3462.7539277833257!2d-50.034052724665514!3d-29.784756075055398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951877cde6bcee65%3A0xd0b49f10f955aa6d!2sImobili%C3%A1ria%20Elegance%20Im%C3%B3veis%20.On!5e0!3m2!1spt-BR!2sbr!4v1708290147209!5m2!1spt-BR!2sbr" 
                width="100%" height="200"   
                style={{border:"none"}}
                ></iframe>
            </div>
            <div className={style.container_contato__content}>
                <h2>Será um prazer lhe atender!</h2>
                <ContactForm message=""/>
        
            </div>

        </section>
    )
}

export default FaleConosco