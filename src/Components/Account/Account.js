import React from "react";
import "./Account.scss";
import warrior from "../../assets/img/Warrior_Male.png";
import Login from "./Login/Login";
import Register from "./Register/Register";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

function Account({ panel }) {
  const goBack = useNavigate();
  function checkPanel() {
    let renderComponent;
    switch (panel) {
      case "login":
        renderComponent = <Login />;
        break;
      case "register":
        renderComponent = <Register />;
        break;
      default:
        break;
    }
    return renderComponent;
  }

  return (
    <>
      <div className="panelBackground"></div>
      <div className="account">
        <div className="account__left">{checkPanel()}</div>
        <div className="account__right">
          <img src={warrior} alt="warrior" className="account__right--img" />
        </div>
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="button button--close"
          onClick={() => goBack(-1)}
        />
      </div>
    </>
  );
}

export default Account;
