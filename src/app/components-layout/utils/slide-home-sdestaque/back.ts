"use server"
async function serverback(){
   const key =  process.env.NEXT_PUBLIC_API_SOFTVISA_KEY
   const url = `https://elegan34-rest.vistahost.com.br/imoveis/listar?key=${key}&showtotal=1&pesquisa={"filter":{"SuperDestaqueWeb":"Sim"},"fields":["Bairro","TituloSite","AreaTotal", "BanheiroSocialQtd","Suites","Dormitorios","Vagas", "FotoDestaque","ValorVenda"],"order":{"Bairro":"asc"},"paginacao":{"pagina":1,"quantidade":3}}`;
   const superDestauqe = await fetch(url,{
        headers:{
            "Accept":"application/json"
        }
    })
    const data = await superDestauqe.json()
    const filterObject = Object.fromEntries(
        Object.entries(data).filter(([key,value])=>typeof(value) === 'object')
    )
    const dataArray =  Object.values(filterObject)
    
    return dataArray


}

export{
    serverback
}