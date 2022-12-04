import "./Register.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import useStateStorage from "../../../hooks/useStateStorage";

function Login() {
  // dodać walidację + firabase
  const [account, setAccount] = useState<boolean>(false);
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [state, setValue] = useStateStorage("User", "");

  const submit = (e: any) => {
    e.preventDefault();
    if (e.target.reportValidity()) {
      if (state === "") {
        let dataArray = [];
        let data = { login: login, password: password };
        dataArray.push(data);
        setValue(dataArray);
      } else {
        state.push({ login: login, password: password });
        setValue(state);
      }
      setAccount(true);
    }
  };
  return (
    <>
      {account ? (
        <div className="register">
          <p className="register__title">Konto zostało stworzone.</p>
          <p className="register__text">Przejdź to panelu logowania.</p>
          <Link to={`/login?reg=true`}>
            <button className="button button--account">Dalej</button>
          </Link>
        </div>
      ) : (
        <form onSubmit={submit} className="register">
          <p className="register__title">Stwórz konto</p>
          <input
            onChange={(e) => setLogin(e.target.value)}
            className="inputs"
            type="text"
            placeholder="Login"
            maxLength={30}
            required
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="inputs inputs--password"
            type="text"
            placeholder="Hasło"
            maxLength={30}
            required
          />
          <button className="button button--account">Zarejestruj</button>
        </form>
      )}
    </>
  );
}

export default Login;