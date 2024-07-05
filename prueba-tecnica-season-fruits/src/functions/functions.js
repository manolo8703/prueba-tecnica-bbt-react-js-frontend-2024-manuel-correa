import axios from "axios";


const urlallProducts = '/api/fruit/all'


const getAllProducts = async (state) =>{
    const getProducts = await axios.get(urlallProducts)
    state(getProducts.data)
}


export{
    getAllProducts
}