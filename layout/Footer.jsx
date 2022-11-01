import React from "react";
import styles from "./Footer.module.css";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
const Footer = () => {
  const { footer_container, icons } = styles;
  return (
    <div className={footer_container}>
      <p> &copy;2022 Glowing.com | All rights reserved</p>
      <p className={icons}>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  );
};
export default Footer;
