import React from "react";
import "./Serwer.scss";

export default function Serwer(props) {
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
          <div className="server__btns"> 
            <button className="button button--server">Oceń</button>
            <button className="button button--server">Prezentacja</button>
          </div>
        </div>
      </div>
    </>
  );
}
