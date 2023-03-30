import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

import productApi from "../Api/products";

export default function EditProduct() {
  const { id } = useParams();
  const navigate=useNavigate();
  const [product, setProduct] = useState({
    title:'',
    price:'',
    quantity:'',
  });
  const getProductById = async () => {
    try {
      let res = await productApi.getProductById(id);
      setProduct(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (Number(id)!==0){
    getProductById();
    }
  }, []);

  let [errors, setErrors] = useState({});
  const validateTitle = (e) => {
    let title = e.target.value;
    const regex = new RegExp("^[a-zA-Z]+$");
    if (!title) {
      setErrors({ ...errors, title: "title is required" });
      return true;
    }
    if (!regex.test(title)) {
      setErrors({ ...errors, title: "title must be characters only" });
      return true;
    }
    setErrors({ quantity: errors.quantity, price: errors.price });
    return false;
  };
  const validateQuantity = (e) => {
    let quantity = e.target.value;
    const regex = new RegExp("^([0-9])*$");
    if (!quantity) {
      setErrors({ ...errors, quantity: "quantity is required" });
      return true;
    }
    if (!regex.test(quantity)) {
      setErrors({ ...errors, quantity: "quantity is numbers only" });
      return true;
    }
    setErrors({ title: errors.title, price: errors.price });
    return false;
  };
  const validatePrice = (e) => {
    let price = e.target.value;
    const regex = new RegExp("^([0-9])*$");
    if (!price) {
      setErrors({ ...errors, price: "quantity is required" });
      return true;
    }
    if (!regex.test(price)) {
      setErrors({ ...errors, price: "quantity is numbers only" });
      return true;
    }
    setErrors({ title: errors.title, quantity: errors.quantity });
    return false;
  };

  const validateImg=()=>{}
  const updateProduct = async (id, product) => {
    try {
      await productApi.editProduct(product, id);
      navigate (`/products`)
    } catch (err) {
      console.log(err);
    }
  };
  const addProduct = async (product) => {
    try {
        
      await productApi.addProduct(product)
      navigate (`/products`)
    } catch (err) {
      console.log(err);
    }
  };
  const validateForm = (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const quantity = e.target[1].value;
    const price = e.target[2].value;
    const imgUrl=e.target[3].value;
    if (
      !errors.title &&
      !errors.quantity &&
      !errors.price &&
      price !== "" &&
      title !== "" &&
      quantity !== ""
    ) {
      let productData = { title, quantity, price ,imgUrl};
      if (Number(id) !== 0) {
        // console.log(productData);
        updateProduct(id, productData);

      } if( Number(id) ===0) {
        console.log(productData);
        addProduct(productData);
      }
    }
    
  };
  

  return (
    <div>
      <div className="container w-50 mt-5">
        <form onSubmit={validateForm}>
          <div className="mb-3">
            <label className="form-label">title</label>
            <input
              type="text"
              defaultValue={product.title}
              name="title"
              className="form-control"
              onInput={validateTitle}
            />
            {errors.title && (
              <div className="invalid-feedback d-block">{errors.title}</div>
            )}

          </div>

          <div className="mb-3">
            <label className="form-label">quantity</label>
            <input
              type="quantity"
              name="quantity"
              defaultValue={product.quantity}
              className="form-control"
              onInput={validateQuantity}
            />
            {errors.quantity && (
              <div className="invalid-feedback d-block">{errors.quantity}</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">price</label>
            <input
              type="quantity"
              name="price"
              defaultValue={product.price}
              className="form-control"
              onInput={validatePrice}
            />
            {errors.price && (
              <div className="invalid-feedback d-block">{errors.price}</div>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">imgUrl</label>
            <input
              type="quantity"
              name="imgUrl"
              defaultValue={product.imgUrl}
              className="form-control"
              onInput={validateImg}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
