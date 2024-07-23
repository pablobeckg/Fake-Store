import { useEffect, useState } from "react";
import { IProducts } from "../../IProducts";
import ProductItem from "../ProductItem/ProductItem";
import "./ProductList.css"

const ProductList = () => {
    const [productListData, setProductListData] = useState<IProducts[] | null>(null)
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
        .then(res => res.json())
        .then(data => setProductListData(data))
        .catch(err => console.log('Error by product fetching', err))
    }, [])

    return (
        <section className="product-list">
            {productListData?.map((item, index) => (
                <ProductItem item={item} key={index}/>
            ))}
        </section>
    );
}
 
export default ProductList;