import React from "react";
import classes from "./category.module.css";
function CategoryCard({ data }) {
  if (!data) return null; // or return a placeholder UI

  return (
    <div className={classes.category}>
      <a href="#">
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt={data.title || "category"} />
        <p>shop now</p>
      </a>
    </div>
  );
}

export default CategoryCard;
