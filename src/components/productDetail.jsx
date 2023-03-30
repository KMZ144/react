import React, { useEffect, useState } from 'react'
import { Card,Button} from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import productApi from '../Api/products';

export default function ProductDetail() {
    const {id}=useParams();
    const navigate=useNavigate();
    const [product,setProduct]=useState({})
    const getProductById= async ()=>{
        try{
      let res=await productApi.getProductById(id)
            setProduct(res.data);
        }
        catch(err){
            console.log(err);
        }
    }
    const deleteProduct=async (id)=>{
        try{
            productApi.deleteProduct(id)
            navigate(`/products`)
        }
        catch (err){
            console.log(err);
        }
    }
    const editProduct=(id)=>{
        navigate (`/products/${id}/edit`)
    }
    useEffect(()=>{
        getProductById();
    },[])
  return (
    <div className="d-flex justify-content-center">
        <Card className='col-sm-6 col-md-3 mt-4 text-center ms-3'>
        <Card.Img variant="top" src={product.imgUrl} className='product' />
        <Card.Body>
          <Card.Title>Title:{product.title}</Card.Title>
          <Card.Text>price:
            {product.price}
          </Card.Text>
          <Card.Text>
            Qty:
            {product.quantity}
          </Card.Text>
          <Button variant="primary" className='ms-2'onClick={()=>{editProduct(product.id)}} >Edit</Button>
          <Button variant="danger" className='ms-2' onClick={()=>{deleteProduct(product.id)}} >Delete</Button>
        </Card.Body>
      </Card>
    </div>
    
  )
}
