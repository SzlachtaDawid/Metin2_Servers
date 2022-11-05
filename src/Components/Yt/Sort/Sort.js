import React from "react";
import "./Sort.scss";

export default function SortAndFilter({ onSort }) {
  const sortSubs = (a, b) => {
    return a.subs - b.subs;
  };
  const sortClips = (a, b) => {
    return a.clips - b.clips;
  };
  const sortViews = (a, b) => {
    return a.views - b.views;
  };
  
  return (
    <div className="sortAndFilter">
      <div className="sortAndFilter__container">
        <p className="sortAndFilter__title">Sortuj:</p>
        <button
          className="button button--sortAndFilter"
          onClick={(e) => {
            onSort(sortSubs);
          }}
        >
          Widzowie
        </button>
        <button
          className="button button--sortAndFilter"
          onClick={(e) => {
            onSort(sortClips);
          }}
        >
          Filmy
        </button>
        <button
          className="button button--sortAndFilter"
          onClick={(e) => {
            onSort(sortViews);
          }}
        >
          Wyświetlenia
        </button>
      </div>
    </div>
  );
}
