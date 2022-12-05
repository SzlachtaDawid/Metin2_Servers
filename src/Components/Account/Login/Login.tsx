import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useStateStorage from "../../../hooks/useStateStorage";
import useAuth from "../../../hooks/useAuth";
import "./Login.scss";

function Login() {
  // dodać walidację + firabase
  const [error, setError] = useState<boolean>(false);
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [state, setValue] = useStateStorage("User", "");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const submit = (e: any) => {
    e.preventDefault();
    if (e.target.reportValidity()) {
      let passy = state.some((x: any) => x.login === login && x.password === password)
      if (passy) {
        setAuth(true);
      } else {
        setError(true);
      }
    }
  };

  if(auth) {
    setTimeout(() => {
      navigate('/Metin2_Servers')
    }, 2000);
  }

  return (
    <>
      {auth ? (
        <p className="login__title">Zalogowano. Zaraz zostaniesz przeniesiony.</p>
      ) : (
        <form onSubmit={submit} className="login">
          <p className="login__title">Podaj login oraz hasło</p>
          <input
            onChange={(e) => setLogin(e.target.value)}
            className="inputs"
            type="text"
            placeholder="Login"
            maxLength={30}
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="inputs inputs--password"
            type="text"
            placeholder="Hasło"
            maxLength={30}
          />
          {error && <p className="error">Niepoprawne dane logowania.</p>}
          <button className="button button--account">Zaloguj</button>
        </form>
      )}
    </>
  );
}

export default Login;
