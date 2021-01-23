import React from "react";
import StarIcon from "@material-ui/icons/Star";
import "./Product.css";

function Product({ title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>N</small>
          <strong>{price}</strong>
        </p>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="product__star" />
            ))}
        </div>
      </div>
      <img src="" alt="product-image" className="product__image" />

      <button className="product__button">Add to basket</button>
    </div>
  );
}

export default Product;
