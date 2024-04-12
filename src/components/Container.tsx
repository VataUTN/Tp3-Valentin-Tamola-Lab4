import React, { useEffect, useState } from 'react'
import { Instrumento } from '../entities/instrumento'
import CardItem from './CardItem'

const Container = () => {

const [instrumentos, setInstrumentos] = useState<Instrumento[]>([])

useEffect(() => {
  const fetchData = async()=>{
    const response = await fetch("/instrumentos.json");
    const data = await response.json()
    setInstrumentos(data.instrumentos)
  }
  fetchData()
}, [])


    return (
    <div onClick={() => setclick(click+1)}>
        {instrumentos.map((instrumento: Instrumento) => (
            <CardItem 
            cantidadVendida={instrumento.cantidadVendida}
            costoEnvio={instrumento.costoEnvio}
            id={instrumento.id}
            descripcion={instrumento.descripcion}
            imagen={instrumento.imagen}
            marca={instrumento.marca}
            modelo={instrumento.modelo}
            precio={instrumento.precio}
            instrumento={instrumento.instrumento}
            key={instrumento.id}
            />
        ))}
        </div>

  )
}

export default Container