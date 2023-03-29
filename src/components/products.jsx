import React, { Component } from "react";
import Product from "./product";
export default class products extends Component {
  products = [
    {
      id: 1,
      title: "product title 1",
      price: 500,
      img: "https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "product title 2",
      price: 500,
      img: "https://images.pexels.com/photos/2227832/pexels-photo-2227832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "product title 3",
      price: 500,
      img: "https://images.pexels.com/photos/1008692/pexels-photo-1008692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      title: "product title 4",
      price: 500,
      img: "https://images.pexels.com/photos/1517145/pexels-photo-1517145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      title: "product title 5",
      price: 500,
      img: "https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 6,
      title: "product title 6",
      price: 500,
      img: "https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  render() {
    return (
      <div className="mt-5">
        <div className="bg-light p-5 text-center">
          <h2>Our Products</h2>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            {this.products.map((value) => {
              return <Product key={value.id} product={value} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
