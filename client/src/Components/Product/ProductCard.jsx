import React from "react";
import Rating from "@mui/material/Rating";
function ProductCard() {
  return (
    <div>
      <a href="">
        <img src="" alt="" />
      </a>
      <div>
        <h3>title</h3>
        <div>
          {/* rating */}
          <Rating value={5} precision={0.1} />
          {/* count */}
          <small>{60}</small>
        </div>
        <div>{/* price */}</div>
      </div>
    </div>
  );
}

export default ProductCard;
