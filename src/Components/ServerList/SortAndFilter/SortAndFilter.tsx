import "./SortAndFilter.scss";

interface Props {
  onSort: (x: (a: Server, b: Server) => number) => void;
  onFilter: (x: string) => void;
}


interface Server {
  id: number;
  img: string;
  name: string;
  rating: number;
  type: string;
  date: string;
  status: string;
  describe: string;
}

export default function SortAndFilter({ onSort, onFilter }: Props) {
  const sortRate = (a: Server, b : Server) => {
    return a.rating - b.rating;
  };

  const addClass = (e: React.MouseEvent<HTMLButtonElement>) => {
    let element: HTMLButtonElement = e.currentTarget;
    element.classList.toggle("button--activeBtn");
    return;
  };

  const sortDate = (a: Server, b: Server) => {
    let aArray: string[] = a.date.split(".");
    let bArray: string[] = b.date.split(".");
    let dateArrayA: Date = new Date(parseInt(aArray[2]), parseInt(aArray[1]) - 1, parseInt(aArray[0]));
    let dateArrayB: Date = new Date(parseInt(bArray[2]), parseInt(bArray[1]) - 1, parseInt(bArray[0]));
    return dateArrayA.getTime() - dateArrayB.getTime();
  };

  return (
    <div className="sortAndFilter">
      <div className="sortAndFilter__container">
      <p className="sortAndFilter__title">Sortuj:</p>
        <button
          className="button button--sortAndFilter"
          onClick={() => {
            onSort(sortRate);
          }}
        >
          Ocena
        </button>
        <button
          className="button button--sortAndFilter"
          onClick={() => {
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
