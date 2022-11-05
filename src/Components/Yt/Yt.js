import React, { useEffect, useState, useContext } from "react";
import Search from "../UI/Search/Search";
import "./Yt.scss";
import YtChanel from "./YtChanel/YtChanel";
import Sort from "./Sort/Sort"
import noperfect from "../../assets/img/noperfect.jpg";
import nismoGT from "../../assets/img/nismoGT.jpg";
import uzurpator from "../../assets/img/uzurpator.jpg";
import nch from "../../assets/img/nch.jpg";
import { Triangle } from "react-loader-spinner";
import BackgroundContext from "../../context/backgroundContext";

const channelsList = [
  {
    id: 1,
    img: noperfect,
    name: "NoPerfect",
    subs: 67598,
    clips: 249,
    views: 2434183,
  },

  {
    id: 2,
    img: nismoGT,
    name: "NismoGT",
    subs: 56342,
    clips: 11,
    views: 1932543,
  },
  {
    id: 3,
    img: uzurpator,
    name: "Uzurpator Gaming",
    subs: 26165,
    clips: 129,
    views: 1632403,
  },
  {
    id: 4,
    img: nch,
    name: "Nayl Chunjo Eny",
    subs: 3390,
    clips: 32,
    views: 532543,
  },
  {
    id: 5,
    img: nismoGT,
    name: "NismoGT",
    subs: 56342,
    clips: 11,
    views: 1932543,
  },
];

function Yt() {
  const [channels, setChannels] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reverseSort, setReverseSort] = useState(true);
  const background = useContext(BackgroundContext);

  const searchHandler = (text) => {
    const servers = [...channelsList].filter((x) =>
      x.name.toLowerCase().includes(text.toLowerCase())
    );
    setChannels(servers);
  };

  const sortChannels = (typeSort) => {
    const actualServers = [...channels].sort(typeSort);
    if (reverseSort) {
      setChannels(actualServers.reverse());
    } else {
      setChannels(actualServers);
    }
    setReverseSort(!reverseSort);
  };

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
      return channels.map((channel) => (
        <YtChanel key={channel.id} {...channel} />
      ));
    }
  }

  useEffect(() => {
    background.changeBackground("App YtP");
    setTimeout(() => {
      setChannels(channelsList);
      setLoading(false);
    }, 1500);
  }, [background]);

  return (
    <div className="ytList">
      <div className="ytList__container">
        <h1 className="ytList__title"> YouTube</h1>
        <Search
          onSearch={(channels) => searchHandler(channels)}
          placeholder="Nazwa Kanału YT"
        />
        <Sort onSort={sortChannels}/>
      </div>
      <div className="ytList__channels">{load(loading)}</div>
    </div>
  );
}

export default Yt;
