import "./Register.scss"

function Login() {
  return (
    <div className="register">
      <p className="register__title">Stwórz konto</p>
      <input className="inputs" type="text" placeholder="Login" />
      <input className="inputs" type="password" placeholder="Hasło" />
      <button className="button button--account">Zarejestruj</button>
    </div>
  );
}

export default Login;
