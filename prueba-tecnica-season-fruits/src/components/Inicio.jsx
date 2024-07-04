import React, { useEffect } from 'react'
import { getAllProducts } from '../functions/functions'

function Inicio() {
    useEffect(()=>{
        getAllProducts()
    },[])  

  return (
    <div>Inicio</div>
  )
}

export default Inicio