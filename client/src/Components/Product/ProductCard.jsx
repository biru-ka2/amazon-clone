import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";

function ProductCard({ product }) {
  const { image, title, id, rating, price } = product;

  return (
    <div>
      <a href="#">{image && <img src={image} alt={title} />}</a>
      <div>
        <h3>{title}</h3>
        <div>
          <Rating value={rating?.rate || 0} precision={0.1} />
          <small>{rating?.count || 0}</small>
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>
        <button>add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
