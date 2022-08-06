import React, { useState } from "react";
import "../../style/info.css";

const Info = ({ search }) => {
  return <article className="info_article">{search}</article>;
};

export default Info;
