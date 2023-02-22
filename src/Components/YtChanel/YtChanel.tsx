import { Channel } from "../../Types/channel";
import "./YtChanel.scss";

function YtChanel(props : Channel) {
  return (
    <div className="ytChannel">
      <p className="ytChannel__name">{props.name}</p>
      <img src={props.img} alt="logo" className="ytChannel__logo" />
      <div className="ytChannel__info">
        <p className="ytChannel__text">Widzów: {props.subs}</p>
        <p className="ytChannel__text">Filmy: {props.clips}</p>
        <p className="ytChannel__text">Wyświetlania: {props.views}</p>
        <button className="button">Sprawdź</button>
      </div>
    </div>
  );
}

export default YtChanel;
