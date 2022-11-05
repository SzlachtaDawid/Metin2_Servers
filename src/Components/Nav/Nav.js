import React, { useState } from "react";
import style from "./Nav.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  const [menu, setMenu] = useState(false);

  return (
    // masz zrobic to w sass oraz dodac react modules css i dodac globalne zmienne sass
    <div className={menu ? "nav nav--open" : "nav"}>
      {menu ? (
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="nav__menuIcon"
          onClick={() => setMenu(false)}
        />
      ) : (
        <FontAwesomeIcon
          icon={faBars}
          className="nav__menuIcon"
          onClick={() => setMenu(true)}
        />
      )}
      <div className="nav__logo">
        <p>Mt2 servers</p>
      </div>
      <div className="nav__menu">
        <NavLink end to={`/Metin2_Servers`} activeclassname={style.active}>
          <button
            className="button button--menu"
            onClick={() => setMenu(false)}
          >
            Home
          </button>
        </NavLink>
        <NavLink to={`/serverList`}>
          <button
            className="button button--menu"
            onClick={() => setMenu(false)}
          >
            Serwery
          </button>
        </NavLink>
        <NavLink to={`/Yt`}>
          <button
            className="button button--menu"
            onClick={() => setMenu(false)}
          >
            Twórcy YT
          </button>
        </NavLink>
        <NavLink to={`/contact`}>
          <button
            className="button button--menu"
            onClick={() => setMenu(false)}
          >
            Kontakt
          </button>
        </NavLink>
      </div>
      <div className="nav__account">
        <NavLink to={`/login`}>
          <button className="button button--log">Zaloguj</button>
        </NavLink>
        <NavLink to={`/register`}>
          <button className="button button--register">Rejestracja</button>
        </NavLink>
      </div>
    </div>
  );
}

export default React.memo(Nav);
