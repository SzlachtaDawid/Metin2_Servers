import React, { useState } from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../hooks/useAuth";

function Nav() {
  const [menu, setMenu] = useState<boolean>(false);
  const [auth, setAuth] = useAuth();

  return (
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
        <NavLink end to={`/Metin2_Servers`}>
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
        {auth ? (
          <NavLink to={`/Metin2_Servers`}>
            <button onClick={() => setAuth(false)} className="button button--log">Wyloguj</button>
          </NavLink>
        ) : (
          <NavLink to={`/login`}>
            <button className="button button--log">Zaloguj</button>
          </NavLink>
        )}
        <NavLink to={`/register`}>
          <button className="button button--register">Rejestracja</button>
        </NavLink>
      </div>
    </div>
  );
}

export default React.memo(Nav);
