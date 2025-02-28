import React, { useState } from "react";
import { useEffect } from "react";
import logo from "./logo.png";
import "./Home.css";
import axios from "axios";
import Product from "./Product";
import img from "./3365999c-cae8-42ed-8cec-7c4b14271978.jpg";
import img1 from "./ce7c0b5f-8c3f-41aa-ad4b-11d5db75a46f.jpg";
const Home = () => {
  const [productData, setproductData] = useState([]);
  async function getData() {
    await axios.get("https://dummyjson.com/products").then((res) => {
      setproductData(res.data.products);
    });
  }
  useEffect(() => {
    getData();
  }, []);
  console.log(productData);

  return (
    <div>
      <div className="navBar">
        <img src={logo} alt="" />
        <div className="menuContainer">
          <p>Home</p>
          <p>About</p>
          <p>Blog</p>
          <p>Contact US</p>
          <button>Login</button>
        </div>
      </div>
      <div className="productContainer">
        {productData.length > 0 && (
          <div>
            {productData.map((data) => {
              return <Product img={data.images[0]} title={data.title} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
