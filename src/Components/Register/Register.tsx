import "./Register.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import emailValidator from "../../hooks/validEmail"
import passwordValidator from "../../hooks/validPassword"
import LoadingBtn from "../UI/LoadingBtn/LoadingBtn";
import registerApiService from "../../Services/registerService";

interface LoginData {
  email: string;
  password: string;
  created: boolean
}

interface Error {
  message?: string;
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
    created: false
  })
  const [loading, setLoading] = useState(false)
  const emailValidation = emailValidator();
  const passwordValidation = passwordValidator();

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)
    const emailValateInfo = emailValidation(loginData.email);
    const passwordValateInfo = passwordValidation(loginData.password);
      if (emailValateInfo === "" && passwordValateInfo === "") {
        const response = await registerApiService(loginData);
        if (response.status === "succes") {
          setLoginData({ ...loginData, created: true });
        }
        if (response.status === "fail") {
          setError({ ...error, message: response.error, set: true });
        }
      } else {
        setError({
          ...error,
          message: emailValateInfo + passwordValateInfo,
          set: true,
        });
      }
    setLoading(false)
  };
  return (
    <>
      {loginData.created ? (
        <div className="register">
          <p className="register__title">Konto zostało stworzone.</p>
          <p className="register__text">Przejdź to panelu logowania.</p>
          <Link to={`/login?reg=true`}>
            <button className="button button--account">Dalej</button>
          </Link>
        </div>
      ) : (
        <form onSubmit={submit} className="register" noValidate>
          <p className="register__title">Stwórz konto</p>
          <input
            onChange={(e) => setLoginData({...loginData, email: e.target.value})}
            className="inputs"
            type="email"
            placeholder="Email"
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
          <div className="register__buttonContainer">
            <button className="button button--account">Zarejestruj</button>
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
