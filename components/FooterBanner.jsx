import Link from "next/link";
import React, { Fragment } from "react";
import { urlFor } from "../config/sanityClient";
import styles from "../styles/FooterBanner.module.css";
const FooterBanner = ({
  footerBanner: {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    buttonText,
    desc,
    image,
  },
}) => {
  const {
    footer_banner_container,
    banner_desc,
    banner_desc_right,
    banner_desc_left,
    footer_banner_image,
  } = styles;
  return (
    <Fragment>
      <div className={footer_banner_container}>
        <div className={banner_desc}>
          <div className={banner_desc_left}>
            <p>{discount}</p>
            <h3>{largeText1}</h3>
            <h3>{largeText2}</h3>
            <p>{saleTime}</p>
          </div>
          <div className={banner_desc_right}>
            <p>{smallText}</p>
            <h3>{midText}</h3>
            <p>{desc}</p>
            <Link href={"/nothing"}>
              <button type="button">{buttonText}</button>
            </Link>
          </div>
          <img src={urlFor(image)} alt="" className={footer_banner_image} />
        </div>
      </div>
    </Fragment>
  );
};

export default FooterBanner;
