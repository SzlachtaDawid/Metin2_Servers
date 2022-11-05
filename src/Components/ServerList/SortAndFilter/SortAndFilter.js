import React from "react";
import "./SortAndFilter.scss";

export default function SortAndFilter({ onSort, onFilter }) {
  const sortRate = (a, b) => {
    return a.rating - b.rating;
  };

  const addClass = (e) => {
    let element = e.target;
    element.classList.toggle("button--activeBtn");
    return;
  };

  const sortDate = (a, b) => {
    let aArray = a.date.split(".");
    let bArray = b.date.split(".");
    aArray = new Date(aArray[2], aArray[1] - 1, aArray[0]);
    bArray = new Date(bArray[2], bArray[1] - 1, bArray[0]);
    return aArray - bArray;
  };

  return (
    <div className="sortAndFilter">
      <div className="sortAndFilter__container">
      <p className="sortAndFilter__title">Sortuj:</p>
        <button
          className="button button--sortAndFilter"
          onClick={(e) => {
            onSort(sortRate);
          }}
        >
          Ocena
        </button>
        <button
          className="button button--sortAndFilter"
          onClick={(e) => {
            onSort(sortDate);
          }}
        >
          Data startu
        </button>
      </div>
      <div className="sortAndFilter__container">
      <p className="sortAndFilter__title">Filtruj:</p>
        <button
          className="button button--sortAndFilter"
          onClick={(e) => {
            onFilter("Hard")
            addClass(e);
          }}
        >
          hard
        </button>
        <button
          className="button button--sortAndFilter"
          onClick={(e) => {
            onFilter("Medium")
            addClass(e);
          }}
        >
          medium
        </button>
        <button
          className="button button--sortAndFilter"
          onClick={(e) => {
            onFilter("Easy")
            addClass(e);
          }}
        >
          easy
        </button>
      </div>
    </div>
  );
}
