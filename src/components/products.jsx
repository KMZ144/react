import React, { useEffect, useState } from "react";
import productApi from "../Api/products";
import Product from "./product";
import { useNavigate } from 'react-router-dom'

export default function Products() {
  let [products, setProducts] = useState([]);
  const getAllProducts = async () => {
    try {
      let response = await productApi.getAllProducts();
      setProducts(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  const navigate=useNavigate();

  const navigateToAdd=()=>{
  navigate('/products/0/edit')    
  }

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div className="mt-5">
      <div className="bg-light p-5 text-center">
        <h2>Our Products</h2>
      </div>
      <div className="container">
        <div className="text-center">
        <button className="btn btn-primary" onClick={navigateToAdd}>Add </button>
        </div>
        <div className="row justify-content-center">
          {products.map((value) => {
            return <Product key={value.id} product={value} />;
          })}
        </div>
      </div>
    </div>
  );
}
