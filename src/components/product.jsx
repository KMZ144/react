import React, { Component } from 'react'
import { Card,Button } from 'react-bootstrap'
import './product.css'

export default class Product extends Component {
  render() {
    const {product}=this.props
    return (
        <Card className='col-sm-6 col-md-3 mt-4 text-center ms-3'>
        <Card.Img variant="top" src={product.img} className='product' />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            {product.price}
          </Card.Text>
          <Button variant="primary">Buy Now</Button>
        </Card.Body>
      </Card>
    )
  }
}
