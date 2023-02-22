import "./App.scss";
import "./Style/main.scss";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import ServerList from "./Pages/ServerList/ServerList";
import { useEffect, useRef, useState } from "react";
import Yt from "./Pages/Yt/Yt";
import Contact from "./Pages/Contact/Contact";
import Account from "./Pages/Account/Account";
import BackgroundContext from "./context/backgroundContext";
import AuthContext from "./context/authContext";
import imgHome from "./assets/img/Metin_2_Sura.jpg";
import imgServers from "./assets/img/Metin_2_Giant.jpg";
import imgYt from "./assets/img/Metin_2_Dragon.jpg";
import imgContact from "./assets/img/Metin_2_Assassin.jpg";

const App: React.FC = () => {
  const [auth, setAuth] = useState<boolean>(false);
  const wrapper = useRef<HTMLDivElement | null>(null);

  function checkUser(){
    const tokenDataStorage: string | null = window.localStorage.getItem('token-data')
    if(tokenDataStorage){
      setAuth(true)
    } else {
      setAuth(false)
    }
  }

  useEffect(() => {
    let imageList: string[] = [imgHome, imgServers, imgYt, imgContact];
    imageList.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
    checkUser()
  }, []);

  function changeBackground(className: string) {
    let img: string;
    if (wrapper.current) {
      switch (className) {
        case "home":
          img = imgHome;
          break;
        case "server":
          img = imgServers;
          break;
        case "Yt":
          img = imgYt;
          break;
        case "contact":
          img = imgContact;
          break;
        default:
          img = imgHome;
          console.log("wrong class name");
          break;
      }
      wrapper.current.style.backgroundImage = `url(${img})`;
    }
  }

  return (
    <div className="App" ref={wrapper}>
      <AuthContext.Provider
        value={{
          isAuthenticated: auth,
          login: () => setAuth(true),
          logout: () => setAuth(false),
        }}
      >
        <BackgroundContext.Provider
          value={{
            wrapper: wrapper.current,
            changeBackground: changeBackground,
          }}
        >
          <Router>
            <Nav />
            <Routes>
              <Route path="/Metin2_Servers" element={<Home />} />
              <Route path="/serverList" element={<ServerList />} />
              <Route path="/Yt" element={<Yt />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Account panel="login" />} />
              <Route path="/register" element={<Account panel="register" />} />
            </Routes>
          </Router>
        </BackgroundContext.Provider>
      </AuthContext.Provider>
    </div>
  );
};

export default App;
