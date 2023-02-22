import "./Account.scss";
import warrior from "../../assets/img/Warrior_Male.png";
import Login from "../../Components/Login/Login";
import Register from "../../Components/Register/Register";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

interface Props {
  panel: String
}

function Account({ panel }: Props) {
  const goBack = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  const param = urlParams.get('reg')

  function checkPanel(): JSX.Element {
    let renderComponent: JSX.Element;
    switch (panel) {
      case "login":
        renderComponent = <Login />;
        break;
      case "register":
        renderComponent = <Register />;
        break;
      default:
        renderComponent = <Login />;
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
          onClick={() => param === 'true' ? goBack('/Metin2_Servers') : goBack(-1) }
        />
      </div>
    </>
  );
}

export default Account;
