import Link from "next/link";
import { urlFor } from "../config/sanityClient";
import styles from "../styles/MainBanner.module.css";
const MainBanner = ({ banner }) => {
  const { smallText, midText, image, buttonText, desc } = banner;
  const { banner_container, makeup_bundle, banner_image, description } = styles;
  return (
    <div className={banner_container}>
      <div>
        <p className={makeup_bundle}>{smallText}</p>
        <h3>{midText}</h3>
        <img src={urlFor(image)} alt="" className={banner_image} />
      </div>
      <div>
        <Link href={`/nothing`}>
          <button type="button">{buttonText}</button>
        </Link>
        <div className={description}>
          <h5>Description</h5>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
