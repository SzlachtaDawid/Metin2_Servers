import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./HomePage.scss";
import BackgroundContext from "../../context/backgroundContext";

const HomeP = () => {
  const background = useContext(BackgroundContext);

  useEffect(() => {
    background.changeBackground("home");
  }, [background]);

  return (
    <div className="home">
      <h1 className="home__title">Metin2</h1>
      <p className="home__text home__text--italic">
        Gwałtowne uderzenie Kamieni Metin rozdarło kontynent i pozostawiło
        straszliwą pustkę w niegdyś kwitnącym królestwie Boga Smoków. Dobądź
        swego miecza i staw czoło mrocznym kreaturom.
        <strong> BLA BLA BLA</strong> ...
      </p>
      <p className="home__text">Szukasz Serwera Metin ? Dobrze trafiłeś !</p>
      <div className="home__btnContainer">
        <Link to={`/serverList`}>
          <button className="button button--home">Lista Serwerów</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeP;
