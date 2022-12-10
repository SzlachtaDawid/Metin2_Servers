import  { useEffect, useState, useContext } from "react";
import Search from "../UI/Search/Search";
import "./Yt.scss";
import YtChanel from "./YtChanel/YtChanel";
import Sort from "./Sort/Sort"
import noperfect from "../../assets/img/noperfect.jpg";
import nismoGT from "../../assets/img/nismoGT.jpg";
import uzurpator from "../../assets/img/uzurpator.jpg";
import nch from "../../assets/img/nch.jpg";
import neesu from "../../assets/img/neesu.jpg"
import { Triangle } from "react-loader-spinner";
import BackgroundContext from "../../context/backgroundContext";
import { Channel } from "../../Types/channel";
import NoFind from "../UI/NoFind/NoFind";

const channelsList: Channel[] = [
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
    img: neesu,
    name: "neesu",
    subs: 3120,
    clips: 20,
    views: 133300,
  },
];

function Yt() {
  const [channels, setChannels] = useState<Channel[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [reverseSort, setReverseSort] = useState(true);
  const background = useContext(BackgroundContext);

  const searchHandler = (text: string) => {
    const channels = [...channelsList].filter((x) =>
      x.name.toLowerCase().includes(text.toLowerCase())
    );
    setChannels(channels);
  };

  const sortChannels = (typeSort: (a: Channel, b: Channel) => number) => {
    if(channels){
      const actualServers = [...channels].sort(typeSort);
      if (reverseSort) {
        setChannels(actualServers.reverse());
      } else {
        setChannels(actualServers);
      }
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
            visible={true}
          />
        </div>
      );
    } else {
      return channels?.length ? channels.map((channel) => (<YtChanel key={channel.id} {...channel} />)) : <NoFind/>;
    }
  }

  useEffect(() => {
    background.changeBackground("Yt");
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
          onSearch={(channels: String) => searchHandler(channels as string)}
          placeholder="Nazwa Kanału YT"
        />
        <Sort onSort={sortChannels}/>
      </div>
      <div className="ytList__channels">{load()}</div>
    </div>
  );
}

export default Yt;
