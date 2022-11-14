import style from "./App.scss";
import "./Style/main.scss";
import HomeP from "./Components/HomeP/HomeP";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import ServerList from "./Components/ServerList/ServerList";
import  { useRef } from "react";
import Yt from "./Components/Yt/Yt";
import Contact from "./Components/Contact/Contact";
import Account from "./Components/Account/Account";
import BackgroundContext from "./context/backgroundContext";

const App: React.FC = () => {
  const wrapper = useRef<HTMLDivElement | null>(null);

  function changeBackground(className: string) {
    if (wrapper.current) {
      wrapper.current.className = className;
    }
  }

  return (
    <div className={style.app} ref={wrapper}>
      <BackgroundContext.Provider
        value={{
          wrapper: wrapper,
          changeBackground: changeBackground,
        }}
      >
        <Router>
          <Nav />
          <Routes>
            <Route path="/Metin2_Servers" element={<HomeP />} />
            <Route path="/serverList" element={<ServerList />} />
            <Route path="/Yt" element={<Yt />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Account panel="login" />} />
            <Route path="/register" element={<Account panel="register" />} />
          </Routes>
        </Router>
      </BackgroundContext.Provider>
    </div>
  );
}

export default App;
