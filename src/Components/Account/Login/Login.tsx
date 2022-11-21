import "./Login.scss"

function Login() {
  return (
    <div className="login">
      <p className="login__title">Podaj login oraz hasło</p>
      <input className="inputs" type="text" placeholder="Login" />
      <input className="inputs" type="password" placeholder="Hasło" />
      <button className="button button--account">Zaloguj</button>
    </div>
  );
}

export default Login;
