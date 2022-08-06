import React from "react";
import "../../style/search.css";

const Search = ({ search, setSearch, getLangsHandler }) => {
  return (
    <article className="search_article">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(search);
          getLangsHandler();
        }}
      >
        <input
          type="text"
          value={search}
          placeholder="type a username.."
          onChange={(e) => setSearch(e.target.value.replace(/\s/g, ""))}
        />
        <button type="submit">Search</button>
      </form>
    </article>
  );
};

export default Search;
