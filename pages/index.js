import FooterBanner from "../components/FooterBanner";
import MainBanner from "../components/MainBanner";
import Products from "../components/Products";

import { client } from "../config/sanityClient";
export default function Home({ banner, products }) {
  return (
    <div className="">
      <MainBanner banner={banner && banner[0]} />
      <div className="products_heading">
        <h2>Best Selling Products</h2>
        <p>We have amnay variations available</p>
      </div>
      <Products products={products} />
      <FooterBanner footerBanner={banner && banner[0]} />
    </div>
  );
}
export const getServerSideProps = async () => {
  const bannerQuery = '*[_type=="banner"]';
  const productsQuery = '*[_type=="product"]';

  const banner = await client.fetch(bannerQuery);
  const products = await client.fetch(productsQuery);
  return {
    props: { banner, products },
  };
};
