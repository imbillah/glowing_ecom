import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import styles from "./Layout.module.css";
import Navbar from "./Navbar";
const Layout = ({ children }) => {
  const { layout, main_container } = styles;
  return (
    <div className={layout}>
      <Head>
        <title>Glowing | Beauty & Cosmetics Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className={main_container}>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
