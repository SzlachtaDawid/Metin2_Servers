import "./AuthAlert.scss";

const AuthAlert = () => {
  return (
    <div className="alert">
      <p className="alert__text">
        Ta funkcja serwisu jest przeznaczona wyłącznie dla zalogowanych
        użytkowników.
      </p>
    </div>
  );
};

export default AuthAlert;
