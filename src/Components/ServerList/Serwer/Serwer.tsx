import { Server } from "../../../Types/server";
import "./Serwer.scss";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import { RatingPanel } from "./RatingPanel/RatingPanel";
import AuthAlert from "../../UI/AuthAlert/AuthAlert";
import VipPanel from "./VipPanel/VipPanel";

export default function Serwer(props: Server) {
  const [ratingComponent, setRatingComponent] = useState<boolean>(false)
  const [vipComponent, setVipComponent] = useState<boolean>(false)
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
          { ratingComponent ? (auth ? <RatingPanel serverId={props.id}/> : <AuthAlert/>) : <></>}
          { vipComponent ? (auth ? <VipPanel reflink={props.reflink}/> : <AuthAlert/>) : <></>}
          <div className="server__btns"> 
            <button onClick={() => setRatingComponent(!ratingComponent)} className="button button--server">Oceń</button>
            <a href={props.presentation} target="_blank" rel="noreferrer">
               <button className="button button--server">Prezentacja</button>
            </a>
            <button onClick={() => setVipComponent(!vipComponent)} className="button button--server">Zdobądź Vipa</button>
          </div>
        </div>
      </div>
    </>
  );
}
