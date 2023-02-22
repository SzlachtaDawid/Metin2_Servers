import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.scss";
import emailValidator from "../../hooks/validEmail"
import passwordValidator from "../../hooks/validPassword"
import LoadingBtn from "../UI/LoadingBtn/LoadingBtn";
import loginApiService from "../../Services/loginService";

interface LoginData {
  email: string;
  password: string;
}

interface Error {
  message: string;
  set: boolean;
}

function Login() {
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
      const response = await loginApiService(loginData);
      if(response.status === 'succes'){
        setAuth(true, response.data);
        setTimeout(() => {
          navigate("/Metin2_Servers");
        }, 1000);
      }
      if(response.status === 'fail') {
        setError({...error, message: response.error, set: true});
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
          {error.set && <p className="error">{error.message}</p>}
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
