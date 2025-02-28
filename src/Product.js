import React from "react";
import "./Home.css";

const Product = (props) => {
  return (
    <div>
      <img src={props.img} />
      <h1>{props.title}</h1>
    </div>
  );
};

export default Product;
