import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useStateStorage from "../../../hooks/useStateStorage";
import useAuth from "../../../hooks/useAuth";
import "./Login.scss";
import LoadingBtn from "../../UI/LoadingBtn/LoadingBtn";

interface User {
  login: string;
  password: string;
}

function Login() {
  // dodać walidację + firabase
  const [error, setError] = useState<boolean>(false);
  const [login, setLogin] = useState<string>("");
  const [loading, setLoading] = useState(false)
  const [password, setPassword] = useState<string>("");
  const [state, setValue] = useStateStorage("User", "");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setLoading(true)
    setTimeout(() => {
      if (e.target) {
        let user = state.some((x: User) => x.login === login && x.password === password)
        if (user) {
          setAuth(true);
          setTimeout(() => {
            navigate('/Metin2_Servers')
          }, 1000);
        } else {
          setError(true);
        }
      }
      setLoading(false)
    }, 1000);
  };

  return (
    <>
      {auth ? (
        <p className="login__title">
          Zalogowano. Zaraz zostaniesz przeniesiony.
        </p>
      ) : (
        <form onSubmit={submit} className="login">
          <p className="login__title">Podaj login oraz hasło</p>
          <input
            onChange={(e) => setLogin(e.target.value)}
            className="inputs"
            type="text"
            placeholder="email"
            maxLength={30}
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="inputs inputs--password"
            type="text"
            placeholder="Hasło"
            maxLength={30}
          />
          {error && <p className="login__error">Niepoprawne dane logowania.</p>}
          <div className="login__buttonContainer">
            <button className="button button--account">Zaloguj</button>
            {loading ? (
              <LoadingBtn/> 
            ) : null}
          </div>
        </form>
      )}
    </>
  );
}

export default Login;
