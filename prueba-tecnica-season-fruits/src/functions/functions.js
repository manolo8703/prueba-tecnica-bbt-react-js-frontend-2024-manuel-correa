import axios from "axios";

const getAllProducts = async () =>{
    const urlallProducts = '/api/fruit/all'
    const getProducts = await axios.get(urlallProducts)
    console.log(getProducts)
}

export{
    getAllProducts
}