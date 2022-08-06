import React, { useState } from "react";
import "../../style/main.css";
import Search from "../public/Search";
import Info from "../public/Info";

const Main = () => {
  const [search, setSearch] = useState("");
  const [langs, setLangs] = useState([]);
  const [favLang, setFavLang] = useState("");

  console.log(langs);

  const getLangsHandler = async () => {
    const url = `https://api.github.com/users/${search}/repos?per_page=100`;
    if (!search || search.length === 0) {
      return alert("please fill the input first!");
    }
    const storage = [];
    try {
      const response = await fetch(url);
      const data = await response.json();

      data.forEach((item) => {
        if (
          !item["language"] ||
          typeof item["language"] == "undefined" ||
          item["language"] === null
        ) {
          fetch(item["languages_url"])
            .then((res) => res.json())
            .then((allLangs) => {
              const lang = Object.keys(allLangs)[0];

              storage.push(lang);
            });
        }

        storage.push(item["language"]);
      });
    } catch (error) {
      console.log(error);
    }
    setLangs(storage);
  };
  return (
    <main className="main_article">
      <Search
        getLangsHandler={getLangsHandler}
        search={search}
        setSearch={setSearch}
      />
      <Info search={search} />
    </main>
  );
};

export default Main;
