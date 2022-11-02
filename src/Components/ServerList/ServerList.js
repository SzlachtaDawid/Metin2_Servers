import React, { useEffect, useState, useContext } from "react";
import Search from "../UI/Search/Search";
import "./ServerList.scss";
import Serwer from "./Serwer/Serwer";
import tamidia from "../../assets/img/tamidia.jpg";
import balmora from "../../assets/img/balmora.png";
import nerwia2 from "../../assets/img/nerwia2.png";
import { Triangle } from "react-loader-spinner";
import BackgroundContext from "../../context/backgroundContext";

const serversList = [
  {
    id: 1,
    img: nerwia2,
    name: "Nerwia2.pl",
    rating: 1.2,
    type: "Hard",
    date: "25.06.2021",
    status: "ON",
    describe:
      "Jesli szukasz klasycznej rozgrywki bez miliona udziwnień i systemów to ten serwer jest właśnie dla Ciebie! Udoskonalona klasyka ze świetną reklamą i zespołem sprawi, że odszukasz troszkę klimatu dawnego metina! Dbamy o atmosferę na serwerze, więc przestrzegaj regulaminu!",
  },

  {
    id: 2,
    img: balmora,
    name: "Balmora.pl",
    rating: 4.8,
    type: "Medium",
    date: "13.08.2022",
    status: "ON",
    describe:
      " Włożyliśmy w ten serwer masę serducha i bardzo dużo pracy. Dlatego mamy szczerą nadzieję, że mógł cieszyć się  rozgrywką na najwyższym poziomie. Każdy element gry został starannie przemyślany i zaprojektowany tak, aby gracze mogli czerpać maksimum przyjemności z rozgrywki. Mamy już  ponad 10 lat doświadczenia, co gwarantuje Wam pewny i stabilny projekt, który może być z Wami przez lata! Chcemy, aby odkrywanie jego tajemnic sprawiło Wam masę przyjemności! ",
  },
  {
    id: 3,
    img: tamidia,
    name: "Tamidia.pl",
    rating: 4.6,
    type: "Easy",
    date: "26.04.2022",
    status: "OFF",
    describe:
      "Serwis Tamidia.pl wystartował punktualnie o godz. 17:30, dnia 23 września 2022 r. Już po 4, prawie 5 dniach pojawił się pierwszy maksymalny poziom, co wprawia nas w osłupienie. Życzymy mu jak i reszcie graczy dalszych sukcesów na Tamidia.pl",
  },
];

export default function ServerList() {
  const [servers, setServers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reverseSort, setReverseSort] = useState(true);
  const background = useContext(BackgroundContext);

  // obsługa wyszukiwania

  const searchHandler = (text) => {
    const servers = [...serversList].filter((x) =>
      x.name.toLowerCase().includes(text.toLowerCase())
    );
    setServers(servers);
  };

  // SORTOWANIE start
  const sortRate = (a, b) => {
    return a.rating - b.rating;
  };

  const sortDate = (a, b) => {
    let aArray = a.date.split(".");
    let bArray = b.date.split(".");
    aArray = new Date(aArray[2], aArray[1] - 1, aArray[0]);
    bArray = new Date(bArray[2], bArray[1] - 1, bArray[0]);
    return aArray - bArray;
  };

  const sortServer = (typeSort) => {
    const servers = [...serversList].sort(typeSort);
    if (reverseSort) {
      setServers(servers.reverse());
    } else {
      setServers(servers);
    }
    setReverseSort(!reverseSort);
  };

  // SORTOWANIE end

  // FILTROWANIE start

  const filterServer = (filterType, params) => {
    let servers;
    switch (filterType) {
      case "type":
        servers = [...serversList].filter((x) => x.type.includes(params));
        break;
      case "status":
        servers = [...serversList].filter((x) => x.status.includes(params));
        break;

      default:
        break;
    }
    setServers(servers);
  };

  // FILTROWANIE end

  function load() {
    if (loading) {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Triangle
            height="100"
            width="100"
            color="#fff"
            ariaLabel="triangle-loading"
            wrapperStyle={{
              margin: "30px auto",
            }}
            wrapperClassName=""
            visible={true}
          />
        </div>
      );
    } else {
      return servers.map((server) => <Serwer key={server.id} {...server} />);
    }
  }

  useEffect(() => {
    background.changeBackground("App serverListP");
    setTimeout(() => {
      setServers(serversList);
      setLoading(false);
    }, 1500);
  }, [background]);

  return (
    <div className="serverList">
      <div className="serverList__container">
        <h1 className="serverList__title">Lista serwerów</h1>
        <Search
          onSearch={(server) => searchHandler(server)}
          placeholder="Nazwa Serwera"
        />
        <div>
          <h2>Sortuj</h2>
          <div>
            <button className="button" onClick={() => sortServer(sortRate)}>
              Ocena
            </button>
            <button className="button" onClick={() => sortServer(sortDate)}>
              Data startu
            </button>
          </div>
          <h2>Filtruj</h2>
          <button
            className="button"
            onClick={() => filterServer("type", "Hard")}
          >
            hard
          </button>
          <button
            className="button"
            onClick={() => filterServer("type", "Medium")}
          >
            medium
          </button>
          <button
            className="button"
            onClick={() => filterServer("type", "Easy")}
          >
            easy
          </button>
          <button
            className="button"
            onClick={() => filterServer("status", "ON")}
          >
            ON
          </button>
          <button
            className="button"
            onClick={() => filterServer("status", "OFF")}
          >
            OFF
          </button>
        </div>
      </div>
      <div className="serverList__servers">{load(loading)}</div>
    </div>
  );
}
