import Link from "next/link";
import React, { Fragment } from "react";
import { urlFor } from "../config/sanityClient";
import styles from "../styles/Products.module.css";
const Products = ({ products }) => {
  const {
    products_heading,
    products_container,
    product_card,
    product_image,
    product_name,
    product_price,
  } = styles;
  return (
    <Fragment>
      <div className={products_container}>
        {products.map((product) => (
          <div key={product._id}>
            <Link href={`/product/${product.slug.current}`}>
              <div className={product_card}>
                <img
                  src={urlFor(product.image[0])}
                  className={product_image}
                  alt=""
                  width={250}
                  height={250}
                />
                <p className={product_name}>{product.name}</p>
                <p className={product_price}>{product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Products;
