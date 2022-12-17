import { Channel } from "../../../Types/channel";
import "./Sort.scss";

interface Props {
  onSort: (x: (a: Channel, b: Channel) => number) => void;
}

export default function SortAndFilter({ onSort }: Props) {
  const sortSubs = (a: Channel, b: Channel): number => {
    return a.subs - b.subs;
  };
  const sortClips = (a: Channel, b: Channel): number => {
    return a.clips - b.clips;
  };
  const sortViews = (a: Channel, b: Channel): number => {
    return a.views - b.views;
  };
  
  return (
    <div className="sortAndFilter">
      <div className="sortAndFilter__container">
        <p className="sortAndFilter__title">Sortuj:</p>
        <button
          className="button button--sortAndFilter"
          onClick={() => {
            onSort(sortSubs);
          }}
        >
          Widzowie
        </button>
        <button
          className="button button--sortAndFilter"
          onClick={() => {
            onSort(sortClips);
          }}
        >
          Filmy
        </button>
        <button
          className="button button--sortAndFilter"
          onClick={() => {
            onSort(sortViews);
          }}
        >
          Wyświetlenia
        </button>
      </div>
    </div>
  );
}
