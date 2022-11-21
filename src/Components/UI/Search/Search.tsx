import { useRef, useState } from "react";
import "./Search.scss";

interface Props {
  onSearch: (x: String) => void;
  placeholder: String;
}

function Search({onSearch, placeholder}: Props) {
  const [term, setTerm] = useState<string>("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const searchSerwer = () => {
    onSearch(term);
  };

  return (
    <div className="search">
      <input
        className="inputs inputs--search"
        type="text"
        placeholder={placeholder as string}
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
