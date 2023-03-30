import axios from "axios"

const baseUrl= "http://localhost:3000/products"
const getAllProducts=()=>axios.get(baseUrl);
const getProductById=(id)=>axios.get(`${baseUrl}/${id}`);
const addProduct=(product)=>axios.post(`${baseUrl}`,product);
const editProduct=(product,id)=>axios.put(`${baseUrl}/${id}`,product);
const deleteProduct=(id)=>axios.delete(`${baseUrl}/${id}`);

const productApi={getAllProducts,getProductById,addProduct,editProduct,deleteProduct}

export default productApi;
