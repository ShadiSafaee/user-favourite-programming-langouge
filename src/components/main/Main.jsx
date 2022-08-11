import React, { useState } from "react";
import "../../style/main.css";
import Search from "../public/Search";
import Info from "../public/Info";

const Main = () => {
  const [search, setSearch] = useState("");
  const [langs, setLangs] = useState([]);
  const [favLang, setFavLang] = useState("");

  //creating a function to fetch languages data from GitHub
  const getLangsHandler = async () => {
    //fisrt of all we need to access repos, so we need to fetch repos' names
    const url = `https://api.github.com/users/${search}/repos?per_page=100`;
    //validation for input field
    if (search.length === 0) {
      return alert("please fill the box first!");
    }
    //initializing an empty array to push every lang into it
    const storage = [];
    //using  try and catch method to handle errors
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        data.forEach((item) => {
          // We need to do validation as it could return undefined or null or doesn't exist
          if (
            !item["language"] ||
            typeof item["language"] == "undefined" ||
            item["language"] === null
          ) {
            // Now we have access to each repos' keys. We need to access to language_url values
            fetch(item["languages_url"])
              .then((res) => res.json())
              .then((allLangs) => {
                //the first key of each lang is the most used language, so we need to access index zero
                const lang = Object.keys(allLangs)[0];
                storage.push(lang);
              });
          }

          storage.push(item["language"]);
        });
      } else {
        return alert("User not found");
      }
    } catch (error) {
      console.log(error);
    }

    const notNullLangs = storage.filter((lang) => {
      return lang !== null;
    });
    setLangs(notNullLangs);
    //initializing obj
    const obj = {};
    for (const x of notNullLangs) {
      obj[x] = 0;
    }
    //
    for (const x of notNullLangs) {
      obj[x] += 1;
    }
    //converting obj to arr and then sorting them Descendingly, index[0] of arr is the most fav programming language
    const freqValue = Object.entries(obj).sort((a, b) => b[1] - a[1])[0][0];
    setFavLang(freqValue);
  };

  return (
    //we need to warp Search and Info components inside the main component as they both are dependent to main
    <main className="main_article">
      <div className="background"></div>
      <Search
        getLangsHandler={getLangsHandler}
        search={search}
        setSearch={setSearch}
      />
      <Info search={search} favLang={favLang} />
    </main>
  );
};

export default Main;
