import "./App.scss";
import "./Style/main.scss";
import HomeP from "./Components/HomeP/HomeP";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import ServerList from "./Components/ServerList/ServerList";
import { useEffect, useRef } from "react";
import Yt from "./Components/Yt/Yt";
import Contact from "./Components/Contact/Contact";
import Account from "./Components/Account/Account";
import BackgroundContext from "./context/backgroundContext";
import imgHome from "./assets/img/Metin_2_Sura.jpg";
import imgServers from "./assets/img/Metin_2_Giant.jpg";
import imgYt from "./assets/img/Metin_2_Dragon.jpg";
import imgContact from "./assets/img/Metin_2_Assassin.jpg";

const App: React.FC = () => {
  const wrapper = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let imageList: string[] = [imgHome, imgServers, imgYt, imgContact];
    imageList.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  function changeBackground(className: string) {
    console.log(className)
    if (wrapper.current) {
      switch (className) {
        case "App homeP":
          console.log(imgHome)
          console.log(wrapper.current.style.backgroundImage)
          wrapper.current.style.backgroundImage = `url(${imgHome})`;
          break;
        case "App serverListP":
          wrapper.current.style.backgroundImage = `url(${imgServers})`;
          break;
        case "App YtP":
          wrapper.current.style.backgroundImage = `url(${imgYt})`;
          break;
        case "App contactP":
          wrapper.current.style.backgroundImage = `url(${imgContact})`;
          break;
        default:
          break;
      }
    }
  }

  return (
    <div className='App' ref={wrapper}>
      <BackgroundContext.Provider
        value={{
          wrapper: wrapper.current,
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
};

export default App;
