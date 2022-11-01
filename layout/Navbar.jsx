import Link from "next/link";
import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import styles from "./Navbar.module.css";
const Navbar = () => {
  const { navbar_container, logo, cart_icon, item_quantity } = styles;
  return (
    <div className={navbar_container}>
      <p className={logo}>
        <Link href="/">Glowing</Link>
      </p>
      <button type="button" className={cart_icon} onClick="">
        <AiOutlineShopping />
        <span className={item_quantity}>2</span>
      </button>
    </div>
  );
};

export default Navbar;
