import React from "react";
import "../../style/main.css";
import Search from "../public/Search";
import Info from "../public/info";

const Main = () => {
  return (
    <main className="main_article">
      <Search />
      <Info />
    </main>
  );
};

export default Main;
