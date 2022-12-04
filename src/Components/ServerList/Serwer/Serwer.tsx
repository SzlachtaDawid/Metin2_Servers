import { Server } from "../../../Types/server";
import "./Serwer.scss";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import { RatingPanel } from "./RatingPanel/RatingPanel";

export default function Serwer(props: Server) {
  const [rating, setRating] = useState<boolean>(false)
  const [auth, setAuth] = useAuth();

  return (
    <>
      <div className="server">
        <div className="server__logo">
          <img src={props.img} alt="tamidia.pl" className="server__logo--img" />
        </div>
        <div className="server_content">
          <h1 className="server__title">{props.name}</h1>
          <div className="server__info">
            <p className="server__info--text">Ocena: {props.rating} / 5</p>
            <p className="server__info--text">Typ: {props.type}</p>
            <p className="server__info--text">Start: {props.date}</p>
            <p className="server__info--text">Status: {props.status}</p>
          </div>
          <p className="server__desc">
            {props.describe}
          </p>
          {rating ? <RatingPanel serverId={props.id}/> : <></>}
          <div className="server__btns"> 
            <button onClick={() => setRating(!rating)} className="button button--server">Oceń</button>
            <button className="button button--server">Prezentacja</button>
            <button className="button button--server">Zdobądź Vipa</button>
          </div>
        </div>
      </div>
    </>
  );
}
