import { useEffect, useState } from "react";
import { IProducts } from "../IProducts";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const [productDetailData, setProductDetailData] = useState<IProducts | null>(
    null
  );

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProductDetailData(data))
      .catch((err) => console.log("Error by product detail fetching", err));
  }, [id]);

  return (
    <div className="detail">
      <Link to={"/"}>Go back</Link>
      <div className="product-information">
        <div>
          <h1>{productDetailData?.title}</h1>
          <img src={productDetailData?.image} alt="" />
        </div>
        <div className="description">
          <h2>{productDetailData?.description}</h2>
          <h2>{productDetailData?.price.toFixed(2)}€</h2>
          <h2>{productDetailData?.rating.rate}⭐️</h2>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
