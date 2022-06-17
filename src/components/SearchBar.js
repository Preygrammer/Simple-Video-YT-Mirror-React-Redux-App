import React, { useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  // const handleOnChange = (ev) => {
  //   setSearch()
  // }
  return (
    <div className="search-bar-wrapper">
      <input
        placeholder="Type here..."
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
        className="search-bar-input"
      />
      <div>{search}</div>
    </div>
  );
}
