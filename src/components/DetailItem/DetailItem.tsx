import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IProducts } from "../../IProducts";
import "./DetailItem.css";

const DetailItem = () => {
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
    <section className="product-detail">
      <Link to={"/"}>Go back</Link>
      <div className="detail">
        <div className="product-information">
          <div className="image-container">
            <img src={productDetailData?.image} alt="" />
          </div>
          <div className="description">
            <h1>{productDetailData?.title}</h1>
            <h2 className="detail-description">{productDetailData?.description}</h2>
            <h2 className="rate">{productDetailData?.rating.rate} ⭐️</h2>
            <h2 className="detail-price">{productDetailData?.price.toFixed(2)}€</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailItem;
