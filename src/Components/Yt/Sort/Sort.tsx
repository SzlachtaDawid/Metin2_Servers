import "./Sort.scss";

interface Channels {
  id: Number;
  img: String;
  name: String;
  subs: Number;
  clips: Number;
  views: Number;
}

export default function SortAndFilter({ onSort }: ) {
  const sortSubs = (a: Channels, b: Channels) => {
    return a.subs - b.subs;
  };
  const sortClips = (a: Channels, b: Channels) => {
    return a.clips - b.clips;
  };
  const sortViews = (a: Channels, b: Channels) => {
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
