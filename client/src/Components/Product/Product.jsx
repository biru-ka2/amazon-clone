import React, { useEffect, useState } from "react";
import axios from "axios";

function Product() {
  const [first, setfirst] = useState();

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log(res);
    });
  }, []);
  return <div>{/* api */}</div>;
}

export default Product;
