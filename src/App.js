import style from "./App.css";
import "./Style/main.scss";
import HomeP from "./Components/HomeP/HomeP";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import ServerList from "./Components/ServerList/ServerList";
import { useRef } from "react";
import Yt from "./Components/Yt/Yt";
import Contact from "./Components/Contact/Contact";
import Account from "./Components/Account/Account";
import BackgroundContext from "./context/backgroundContext";

function App() {
  const wrapper = useRef(null);

  function changeBackground(className) {
    wrapper.current.className = className;
  }

  return (
    <div className={style.App} ref={wrapper}>
      <BackgroundContext.Provider
        value={{
          wrapper: wrapper,
          changeBackground: changeBackground
        }}
      >
      <Router>
        <Nav />
        <Routes>
          <Route
            exact={true}
            path="/Metin2_Servers"
            element={<HomeP/>}
          />
          <Route
            path="/serverList"
            element={<ServerList/>}
          />
          <Route
            path="/Yt"
            element={<Yt/>}
          />
          <Route
            path="/contact"
            element={<Contact/>}
          />
          <Route path="/login" element={<Account panel="login" />} />
          <Route path="/register" element={<Account panel="register" />} />
        </Routes>
      </Router>
      </BackgroundContext.Provider>
    </div>
  );
}

export default App;
