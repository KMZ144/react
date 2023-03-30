import React from 'react'
import { Card,Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './product.css'

export default function Product({product}) {
  const navigate=useNavigate();
 const showDetails=(id)=>{
  navigate(`/products/${id}`)
  }
 
    return (
        <Card className='col-sm-6 col-md-3 mt-4 text-center ms-3'>
        <Card.Img variant="top" src={product.imgUrl} className='product' />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            {product.price}
          </Card.Text>
          <Button variant="primary" className='ms-2' onClick={()=>{showDetails(product.id)}}>Show Details</Button>
        </Card.Body>
      </Card>
    )
  }

