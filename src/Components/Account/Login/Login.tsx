import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Login.scss";
import emailValidator from "../../../hooks/validEmail"
import passwordValidator from "../../../hooks/validPassword"
import LoadingBtn from "../../UI/LoadingBtn/LoadingBtn";
import axiosBasic from 'axios'

interface LoginData {
  email: string;
  password: string;
}

interface Error {
  message: string;
  set: boolean;
}

function Login() {
  // dodać walidację + firabase
  const [error, setError] = useState<Error>({
    message: '',
    set: false,
  });
  const [loginData, setLoginData] = useState<LoginData>({
    email: '',
    password: '',
  })
  const [loading, setLoading] = useState(false)
  const [auth, setAuth] = useAuth();
  const emailValidation = emailValidator();
  const passwordValidation = passwordValidator();
  const navigate = useNavigate();

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setLoading(true);

    const emailValateInfo = emailValidation(loginData.email);
    const passwordValateInfo = passwordValidation(loginData.password);
    if (emailValateInfo === "" && passwordValateInfo === "") {
      try {
        const res = await axiosBasic.post("https://mt2-service.onrender.com/login", {
          email: loginData.email,
          password: loginData.password,
          returnSecureToken: true,
        });
        if(res.data.success === false){
          setError({...error, message: "Niepoprawne dane logowania", set: true});
        } else {
        setAuth(true, {
          email: res.data.email,
          token: res.data.idToken,
          userId: res.data.localId,
        });
        setTimeout(() => {
          navigate("/Metin2_Servers");
        }, 1000);
        }
      } catch (err) {
        setError({ ...error, message: String(err), set: true });
      }
    } else {
      setError({...error, message: emailValateInfo + passwordValateInfo, set: true});
    }
    setLoading(false);
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
            onChange={(e) => setLoginData({...loginData, email: e.target.value})}
            className="inputs"
            type="text"
            placeholder="email"
            maxLength={30}
          />
          <input
            onChange={(e) => setLoginData({...loginData, password: e.target.value})}
            className="inputs inputs--password"
            type="text"
            placeholder="Hasło"
            maxLength={30}
          />
          {error.set && <p className="login__error">{error.message}</p>}
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
