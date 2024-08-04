import React from "react";
import { IProducts } from "../../IProducts";
import "./ProductItem.css";
import { Link } from "react-router-dom";

interface ProductItemProps {
  item: IProducts;
}

const ProductItem: React.FC<ProductItemProps> = (props) => {
  return (
    <Link to={`/products/${props.item.id}`}>
      <div className="item">
        <img src={props.item.image} alt="" />
      </div>
      <div className="item-information">
        <h2>{props.item.title}</h2>
        <h2>€{props.item.price.toFixed(2)}</h2>
      </div>
    </Link>
  );
};

export default ProductItem;
