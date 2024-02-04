"use client"

import { useState } from "react"
import style from "./filter-property.module.css"

type Props = {
redirect:boolean
}

const CategoryProperty=[
    'Apartamento','Casa','Casa em Condomínio','Cobertura', 'Loja', 'Terreno','Terreno em Condomínio', 'Sobrado'
]
const BairroXangri = [
    'Atlântida','Centro','Remanso','Marina','Maristela','Arpoador','Noiva do Mar','Rainha do Mar'
]
let initFilter = {
    Tipo:"",
    BairroXangri: "",
    Condominio:[""],
    Dormitorio:0,
    PrecoMIN:0,
    PrecoMAX:0,
    cod:""
}


const FilterProperty = (redirect:Props)=>{

    const [valueFilter,setValueFilter] = useState(initFilter);


    function handleValueFilter(Event:React.ChangeEvent<HTMLSelectElement>){
        const {name,value} = Event.target
        setValueFilter((state)=>({
            ...state,[name]:value
        }))
    }

    function handleSubmit(Event:React.FormEvent<HTMLFormElement>){
         Event.preventDefault()
         console.log(valueFilter)

         if(redirect){
           //Logica para redirecionar 
         }
         else{
            //Chama o fetch
         }
    }

    return(
        <div className={style.container_filterProperty}>
            <form className={style.filterProperty_form} onSubmit={(Event)=>handleSubmit(Event)}>
                <label htmlFor="Tipo">
                    <p>Procurando por:</p>
                    <select name="Tipo" id="Category" value={valueFilter.Tipo} onChange={(Event)=>handleValueFilter(Event)}>
                        <option value="" disabled> Selecione </option>
                        {
                            CategoryProperty.map((c)=>(
                                <option  key={c} value={c} >
                                    {c}
                                </option>
                            ))
                        }
                    </select>
                    
                </label>
                <label htmlFor="BairroXangri">
                    <p>Bairros Xangri Lá</p>
                    <select name="BairroXangri" id="BairroXangri" value={valueFilter.BairroXangri} onChange={(Event)=>handleValueFilter(Event)}>
                        <option value="" disabled> Selecione </option>
                        {
                            BairroXangri.map((bx)=>(
                                <option  key={bx} value={bx} >
                                    {bx}
                                </option>
                            ))
                        }
                    </select>
                </label>
                <label htmlFor="Condominio">
                    <p>Condomínio</p>
                    <select name="Condominio" id="Condominio" value={valueFilter.Condominio} onChange={(Event)=>handleValueFilter(Event)}>
                        <option value="" disabled> Selecione </option>
                        {
                            BairroXangri.map((bx)=>(
                                <option  key={bx} value={bx} >
                                    {bx}
                                </option>
                            ))
                        }
                    </select>
                </label>
                <label htmlFor="Dormitorio">
                    <p>Dormitório</p>
                    <select name="Dormitorio" id="Dormitorio" value={valueFilter.Dormitorio} onChange={(Event)=>handleValueFilter(Event)}>
                        <option value="" disabled> Selecione </option>
                        <option  key={1} value={1} >{1}</option>
                        <option  key={2} value={2} >{2}</option>
                        <option  key={3} value={3} >{3}</option>
                        <option  key={4} value={4} >{4}</option>
                        <option  key={5} value={5} >{5}</option>
                        <option  key={6} value={6} >{6}</option>
                        <option  key={7} value={7} >{7}</option>
                        <option  key={8} value={8} >{8}</option>
                        <option  key={9} value={9} >{9}</option>
                        <option  key={10} value={10} >{10}</option>
                    </select>
                </label>
                <label htmlFor="PrecoMIN">
                    <p>Preço MIN</p>
                    <select name="PrecoMIN"  id="PrecoMIN" value={valueFilter.PrecoMIN} onChange={(Event)=>handleValueFilter(Event)}>
                        <option value="" disabled> Selecione </option>
                        <option  key={1} value={200000} > R$ 200.000,00 </option>
                        <option  key={2} value={300000} >R$ 300.000,00</option>
                        <option  key={3} value={400000} >R$ 400.000,00</option>
                        <option  key={4} value={500000} >R$ 500.000,00</option>
                        <option  key={5} value={600000} >R$ 600.000,00</option>
                        <option  key={6} value={700000} >R$ 700.000,00</option>
                        <option  key={7} value={800000} >R$ 800.000,00</option>
                        <option  key={8} value={900000} >R$ 900.000,00</option>
                    </select>
                </label>
                <label htmlFor="PrecoMAX">
                    <p>Preço MAX</p>
                    <select name="PrecoMAX" id="PrecoMAX" value={valueFilter.PrecoMAX} onChange={(Event)=>handleValueFilter(Event)}>
                    <option  key={1} value={200000} > R$ 400.000,00 </option>
                        <option  key={2} value={300000} >R$ 600.000,00</option>
                        <option  key={3} value={800000} >R$ 800.000,00</option>
                        <option  key={4} value={900000} >R$ 900.000,00</option>
                        <option  key={5} value={1000000} >R$ 1000.000,00</option>
                        <option  key={6} value={1500000} >R$ 1500.000,00</option>
                        <option  key={7} value={2500000} >R$ 2500.000,00</option>
                        <option  key={8} value={4000000} >R$ 4000.000,00</option>
                    </select>
                </label>
                <label>
                <p>Código:</p>
                <input type="text" name="cod" placeholder="Código"/>
                </label>
                <label>
                <input type="submit" name="submit" value="Buscar Imóveis"/>
                </label>
            </form>

        </div>
    )
}

export default FilterProperty