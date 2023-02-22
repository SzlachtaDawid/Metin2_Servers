import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Server } from "../../Types/server";
import "./SortAndFilter.scss";
import { addClass, sortDate, sortRate } from "./SortAndFilterUtils";

interface Props {
  onSort: (x: (a: Server, b: Server) => number, reverseServer: boolean | null) => void;
  onFilter: (x: string) => void;
}

export default function SortAndFilter({ onSort, onFilter }: Props) {
  const [sortIncreaseRate, setSortIncreaseRate] = useState<boolean | null>(null);
  const [sortIncreaseDate, setSortIncreaseDate] = useState<boolean | null>(null);

  function renderIcon(state: boolean | null) {
    if (typeof state === 'boolean') {
      if (state) {
        return <FontAwesomeIcon icon={faArrowDown} className="button__icon" />
      } else {
        return <FontAwesomeIcon icon={faArrowUp} className="button__icon" />
      }
    }
  }

  function sortHandler(sortType: (a: Server, b: Server) => number, sortIncrease: boolean | null, setSortState: Function) {
    if (typeof sortIncrease === 'boolean') {
      setSortState(!sortIncrease)
      onSort(sortType, !sortIncrease);
    } else {
      setSortState(true)
      onSort(sortType, true);
    }
  }

  function filterBtnHandler(e: React.MouseEvent<HTMLButtonElement>, filterType : string){
    onFilter(filterType)
    addClass(e);
    setSortIncreaseDate(null)
    setSortIncreaseRate(null)
  }

  return (
    <div className="sortAndFilter">
      <div className="sortAndFilter__container">
        <p className="sortAndFilter__title">Sortuj:</p>
        <button
          className={`button button--sortAndFilter ${sortIncreaseRate !== null && 'button--activeBtn'}`}
          onClick={() => {
            setSortIncreaseDate(null)
            sortHandler(sortRate, sortIncreaseRate, setSortIncreaseRate)
          }}
        >
          Ocena {renderIcon(sortIncreaseRate)}
        </button>
        <button
          className={`button button--sortAndFilter ${sortIncreaseDate !== null && 'button--activeBtn'}`}
          onClick={() => {
            setSortIncreaseRate(null)
            sortHandler(sortDate, sortIncreaseDate, setSortIncreaseDate)
          }}
        >
          Data startu {renderIcon(sortIncreaseDate)}
        </button>
      </div>
      <div className="sortAndFilter__container">
        <p className="sortAndFilter__title">Filtruj:</p>
        <button
          className="button button--sortAndFilter"
          onClick={(e) => {
            filterBtnHandler(e, "Hard")
          }}
        >
          hard
        </button>
        <button
          className="button button--sortAndFilter"
          onClick={(e) => {
            filterBtnHandler(e, "Medium")
          }}
        >
          medium
        </button>
        <button
          className="button button--sortAndFilter"
          onClick={(e) => {
            filterBtnHandler(e, "Easy")
          }}
        >
          easy
        </button>
      </div>
    </div>
  );
}
