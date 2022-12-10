import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useStateStorage from "../../../hooks/useStateStorage";
import useAuth from "../../../hooks/useAuth";
import "./Login.scss";
import emailValidator from "../../../hooks/validEmail"
import passwordValidator from "../../../hooks/validPassword"
import LoadingBtn from "../../UI/LoadingBtn/LoadingBtn";

interface User {
  email: string;
  password: string;
}

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
  const [state] = useStateStorage("User", "");
  const [auth, setAuth] = useAuth();
  const emailValidation = emailValidator();
  const passwordValidation = passwordValidator();
  const navigate = useNavigate();

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setLoading(true)
    const emailValateInfo = emailValidation(loginData.email);
    const passwordValateInfo = passwordValidation(loginData.password);
    setTimeout(() => {
      if(emailValateInfo === '' && passwordValateInfo === '') {
        let user = state.some((x: User) => x.email === loginData.email && x.password === loginData.password)
        if (user) {
          setAuth(true);
          setTimeout(() => {
            navigate('/Metin2_Servers')
          }, 1000);
        } else {
          setError({...error,  message:'Niepoprawne dane logowania', set: true});
        }
      } else {
        setError({...error, message: emailValateInfo + passwordValateInfo ,set: true}) 
      }
      setLoading(false)
    }, 750);
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
