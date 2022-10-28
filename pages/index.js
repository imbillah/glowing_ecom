import MainBanner from "../components/MainBanner";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { client } from "../config/sanityClient";
export default function Home({ banner, products }) {
  return (
    <div className="">
      <MainBanner banner={banner && banner[0]} />
      <Products products={products} />
      <Footer footerBanner={banner && banner[0]} />
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
