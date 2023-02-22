import { useState } from "react";
import useStateStorage from "../../../hooks/useStateStorage";
import "./RatingPanel.scss";

interface Props {
  serverId: number;
}

export const RatingPanel = ({ serverId }: Props) => {
  const [rating, setRating] = useState(false)
  const [state, setValue] = useStateStorage("ratingServerId", "");
  const sendRating = () => {
    console.log("send to database");
    if (state === "") {
      let idArray = [];
      idArray.push(serverId);
      setValue(idArray);
    } else {
      state.push(serverId);
      setValue(state);
    }
    setRating(true)
  };

  const checkIdServer = () => {
    if(state.includes(serverId)){
      return rating ? <p className="rating__text"> Dziękujemy za podzielenie się swoją opinią ! </p> : <p className="rating__text">Oceniłeś już ten serwer.</p>
    } else {
      return (
        <>
        <p className="rating__text">Oceń w skali od 1 do 5</p>
        <ul className="rating__numbers">
          <li
            onClick={() => sendRating()}
            className="rating__number rating__number--one"
          >
            1
          </li>
          <li
            onClick={() => sendRating()}
            className="rating__number rating__number--two"
          >
            2
          </li>
          <li
            onClick={() => sendRating()}
            className="rating__number rating__number--three"
          >
            3
          </li>
          <li
            onClick={() => sendRating()}
            className="rating__number rating__number--four"
          >
            4
          </li>
          <li
            onClick={() => sendRating()}
            className="rating__number rating__number--five"
          >
            5
          </li>
        </ul>
      </>
      )
    }
  }

  return (
    <div className="rating">
      {checkIdServer()}
    </div>
  );
};
