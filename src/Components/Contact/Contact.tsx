import { useEffect, useContext } from "react";
import "./Contact.scss";
import BackgroundContext from "../../context/backgroundContext";

function Contact() {
  const background = useContext(BackgroundContext);

  useEffect(() => {
    background.changeBackground("contact");
  }, [background]);

  return (
    <div className="contact">
      <p className="contact__title">Napisz do nas</p>
      <form className="contact__form">
        <input className="inputs inputs--contact" type="email" placeholder="Twój email" />
        <textarea className="inputs inputs--contact"  rows={4} cols={50} value='test'>
        </textarea>
        <button className="button button--contact">Wyslij</button>
      </form>
    </div>
  );
}

export default Contact;
