import React, { Component } from "react";
import './footer.css'
export default class Footer extends Component {
  render() {
    return (
      <div className="bg-light p-5 text-center mt-5">
        <div className="container">
          <div className="d-flex justify-content-between">
            <a className='h2' href="home">Footer</a>
            <ul className="d-flex">
                <li className="ms-3">
                    <a href="home">Home</a>
                </li>
                <li className="ms-3">
                    <a href="home">Products</a>
                </li>
                <li className="ms-3">
                    <a href="home">About</a>
                </li>

            </ul>
            </div>
        </div>
      </div>
    );
  }
}
