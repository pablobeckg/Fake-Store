import React from "react";
import { IProducts } from "../../IProducts";
import "./ProductItem.css";
import { Link } from "react-router-dom";

interface ProductItemProps {
  item: IProducts;
}

const ProductItem: React.FC<ProductItemProps> = (props) => {
  return (
    <div className="item">
      <Link to={`/products/${props.item.id}`}>
        <img src={props.item.image} alt="" />
        <h2>{props.item.title}</h2>
        <h2>{props.item.price.toFixed(2)}€</h2>
      </Link>
    </div>
  );
};

export default ProductItem;
