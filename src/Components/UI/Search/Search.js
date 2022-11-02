import { useRef, useState } from "react";
import "./Search.scss";

function Search(props) {
  const [term, setTerm] = useState("");
  const inputRef = useRef(null);

  const searchSerwer = () => {
    props.onSearch(term);
  };

  return (
    <div className="search">
      <input
        className="inputs inputs--search"
        type="text"
        placeholder={props.placeholder}
        ref={inputRef}
        value={term}
        onKeyDown={(e) => {
          e.key === "Enter" && searchSerwer();
        }}
        onChange={(e) => {
          setTerm(e.target.value);
        }}
      />
      <button className="button button--search" onClick={searchSerwer}>
        Szukaj
      </button>
    </div>
  );
}

export default Search;
