import React from "react";
import "../../style/layout.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
const Layout = () => {
  return (
    <article className="layout_article">
      <Header />
      <Main />
      <Footer />
    </article>
  );
};

export default Layout;
