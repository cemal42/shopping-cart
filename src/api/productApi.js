import axios from "axios"

const getProduct = async () => {
    
    const {data} = await axios.get('https://api.escuelajs.co/api/v1/products?offset=10&limit=6')
    return data
}

export default getProduct