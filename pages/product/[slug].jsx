import React, { Fragment, useState } from "react";
import { client, urlFor } from "../../config/sanityClient";
import styles from "../../styles/ProductDetails.module.css";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import Products from "../../components/Products";

const ProductDetails = ({ product, allProducts }) => {
  const [index, setIndex] = useState(0);
  const { name, image, details, price } = product;
  return (
    <Fragment>
      <div className={styles.productDetail_container}>
        <div>
          <div className={styles.image_container}>
            <img
              src={urlFor(image && image[index])}
              className={styles.product_image}
              alt=""
            />
          </div>
          {/* product related images */}
          <div className={styles.image_container_small}>
            {image?.map((item, idx) => (
              <img
                src={urlFor(item)}
                className={
                  idx === index
                    ? `${styles.small_image} ${styles.selected_image}`
                    : `${styles.small_image}`
                }
                onMouseEnter={() => setIndex(idx)}
                alt=""
              />
            ))}
          </div>
        </div>
        {/* product details */}
        <div className={styles.product_detail_desc}>
          <h1>{name}</h1>
          <div className={styles.reviews}>
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details:</h4>
          <p>{details}</p>
          <p className={styles.price}>${price}</p>
          <div className={styles.quantity}>
            <h3>Quantity</h3>
            <p className={styles.quantity_desc}>
              <span className={styles.minus} onClick="">
                <AiOutlineMinus />
              </span>
              <span className={styles.num}>0</span>
              <span className={styles.plus} onClick="">
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          {/* add to cart & buy now */}
          <div className={styles.buttons}>
            <button type="button" onClick="" className={styles.add_to_cart}>
              Add to Cart
            </button>
            <button type="button" onClick="" className={styles.buy_now}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
      {/* look alike products */}
      <div className={styles.maylike_products_wrapper}>
        <h2>You may also like</h2>
        <div className={styles.marquee}>
          <div
            className={`${styles.maylike_products_container} ${styles.track}`}
          >
            {<Products products={allProducts} />}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

//generating pre-render pages
export const getStaticPaths = async () => {
  const query = `*[_type=='product']{
        slug{
            current
        }
    }`;
  const products = await client.fetch(query);
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};
export const getStaticProps = async ({ params: { slug } }) => {
  const singleProductQuery = `*[_type=="product" && slug.current =='${slug}'][0]`;
  const AllProductsQuery = '*[_type == "product"]';

  const product = await client.fetch(singleProductQuery);
  const allProducts = await client.fetch(AllProductsQuery);

  return {
    props: { product, allProducts },
  };
};
export default ProductDetails;
