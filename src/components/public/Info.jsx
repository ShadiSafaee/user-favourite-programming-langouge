import React from "react";
import "../../style/info.css";

const Info = ({ favLang }) => {
  return (
    <article className="info_article">
      <h2 className="info_title">
        User's favourite programming language:{" "}
        <span style={{ color: "gold" }}>{favLang}</span>
      </h2>
    </article>
  );
};

export default Info;
