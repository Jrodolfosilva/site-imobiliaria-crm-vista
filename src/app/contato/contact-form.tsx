"use client"
import { InputMask } from 'primereact/inputmask';

import Link from 'next/link'
import style from './contact-form.module.css'
import { useForm,UseFormReturn} from 'react-hook-form'
import { useEffect } from 'react';

type Message = {
    message?:string
} 
type contact = {
    name:string,
    email:string,
    tel:string,
    message:string
}


const ContactForm = (mesage:Message)=>{
    
 const {
    register,
    handleSubmit, 
    reset,
    setError,formState: { errors }
}:UseFormReturn<contact> = useForm()

 const sendMessage = handleSubmit(({email,message,name,tel})=>{
    console.log(tel)

   
   
    //reset()
 })

    return(
        <form className={style.container_form} onSubmit={sendMessage}>
            <label htmlFor="name">
                <input type="text" placeholder='Nome' {...register("name",{required:true,})} />
                
            </label>
            <label htmlFor="tel">
                <InputMask   
                    mask="(99) 99999 9999"
                    placeholder="(11) 9 9999 - 9999" 
                    autoClear={false}
                    {...register("tel",{required:true})}
                   
                />
                {errors.tel?.message}
            </label>
            <label htmlFor="email">
                <input type="email" placeholder='exemple@email.com' {...register("email")} />
            </label>
            <label htmlFor="text">
                <textarea 
                    rows={4} 
                    defaultValue={mesage.message} 
                    placeholder='Escreva aqui sua mensagem...'
                    {...register("message")}
                ></textarea>
            </label>
            <label htmlFor="submit">
                <input type="submit" value="Solicitar atendimento" />
                <Link href="" target='_blank'><span>Whatsapp</span></Link>
            </label>

        </form>
    )
}

export default ContactForm