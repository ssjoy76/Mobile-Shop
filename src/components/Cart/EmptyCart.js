import React, { Component } from "react";

class EmptyCart extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title">
            <h5>your cart is currently empty</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default EmptyCart;
