import React, { useState } from "react";
import "../../style/header.css";

const Header = () => {
  const [info, setInfo] = useState(false);
  const clickHandler = () => {
    return setInfo(!info);
  };
  return (
    <header className="header">
      <a href="https://github.com/ShadiSafaee">
        <img src="/imgs/logo2.png" alt="shadi" />
      </a>
      <p className={info === true ? "test_info" : "test_off"}>
        We would like you to build an application that allows users to enter an
        arbitrary Github username and be presented with a best guess of the
        Github user's favourite programming language. Documentation for the
        Github API can be found at{" "}
        <a
          style={{ color: "#d4e157" }}
          href="https://developer.github.com/v3/."
        >
          https://developer.github.com/v3/.
        </a>{" "}
        You may use any programming language, framework, or library.
      </p>
      <div className="title_container">
        {" "}
        <h1>MVF Tech Test</h1>
        <button
          className="info_btn"
          type="button"
          onClick={() => clickHandler()}
        >
          Test outline
        </button>
      </div>
    </header>
  );
};

export default Header;
