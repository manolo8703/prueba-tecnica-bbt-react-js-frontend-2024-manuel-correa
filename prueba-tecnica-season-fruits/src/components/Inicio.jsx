import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../functions/functions'
import defaultImage from '../images/not-available.webp'

function Inicio() {
  const [fruits, setFruits] = useState(null)

  useEffect(()=>{
    getAllProducts(setFruits)

  },[])  

  return (
    <>
      <div className='container'>
        <div className='row'>
          <h1 className='text-center text-bold m-bottom-20'>
            <b>Season Fruits</b>
          </h1>
          {fruits != null ? (

            fruits.map((fruit,index) =>(
              <div className='product-card col-4' key={fruit.id}>

                <p>______________</p>
                <img className='img-fluid' src={defaultImage} alt={fruit.Name} />
                <p>{fruit.name}</p>
                <p>{fruit.family}</p>
                <p>{fruit.order}</p>
                <p>{fruit.genus}</p>
                <p>Nutritions</p>
                <p>Calories  {fruit.nutritions.calories}</p>
                <p>fat  {fruit.nutritions.fat}</p>
                <p>sugar  {fruit.nutritions.sugar}</p>
                <p>carbohydrates  {fruit.nutritions.carbohydrates}</p>
                <p>protein  {fruit.nutritions.protein}</p>
                <p>______________</p>
              </div>
            ))
          ) : ('No hay frutas') }
        </div>

      </div>

    </>
  )
}

export default Inicio
