import axios from "axios";

const getAllProducts = async () =>{
    //const getProducts = await axios.get('https://rickandmortyapi.com/api/character')
    const getProducts = await axios.get('https://www.fruityvice.com//api/fruit/all')

    console.log(getProducts)
    
}

export{
    getAllProducts
}