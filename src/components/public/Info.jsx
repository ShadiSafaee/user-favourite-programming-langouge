import React from "react";
import "../../style/info.css";

const Info = ({ favLang }) => {
  return (
    <article className="info_article">
      <h2>User's favourite programming language: {favLang}</h2>
    </article>
  );
};

export default Info;
