import "./style.css";
import face from "./face.jpg";
import table1 from "./table1.jpg";
import table2 from "./table2.jpg";
import building1 from "./building1.jpg";
// import building2 from "./building2.jpg";
import stones from "./stones.jpg";
import { useState } from "react";

export default function App() {
  const [firstName, setFirstName] = useState("");

  const [email, setEmail] = useState("");

  const [role, setRole] = useState("role");
  const [message, setmessage] = useState("");

  const clearForm = () => {
    setFirstName("");

    setEmail("");

    setRole("role");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submit ok");
    clearForm();
  };

  return (
    <>
      <header className="header">
        <nav className="nav">
          <div className="nav__icons">
            <a href="/" target="_blank" className="nav__item">
              <ion-icon name="mail-outline"></ion-icon>
            </a>
            <a href="/" target="_blank" className="nav__item">
              <ion-icon name="logo-github"></ion-icon>
            </a>
            <a href="/" target="_blank" className="nav__item">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a href="/" target="_blank" className="nav__item">
              <ion-icon name="ellipse-outline"></ion-icon>
            </a>
            <a href="/" target="_blank" className="nav__item">
              <ion-icon name="logo-stackoverflow"></ion-icon>
            </a>
          </div>
          <div className="nav__items">
            <a href="/" className="nav__item">
              Projects
            </a>
            <a href="/" className="nav__item">
              Contact me
            </a>
          </div>
        </nav>
        <div className="home">
          <img src={face} alt="Boy" className="img" />
          <h3>Hello,I am Shahman</h3>
          <h1 className="heading-home">
            A frontend developer specialised in React
          </h1>
        </div>
      </header>
      <section className="feature">
        <h1>Feature Projects</h1>
        <div className="feature__menu">
          <Feature url={table1} Mainheading="React Space" />
          <Feature url={table2} Mainheading="React Infinite Scroll" />
          <Feature url={building1} Mainheading="Photo Gallery" />
          <Feature url={stones} Mainheading="Event Planner" />
        </div>
      </section>
      <section className="form">
        <form onSubmit={handleSubmit} className="form__content">
          <h2>Contact Me</h2>
          <div className="margin-l">
            <div className="Field">
              <label>Name</label> <br />
              <input
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                placeholder=""
              />
            </div>

            <div className="Field">
              <label>Email address</label>
              <br />
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder=""
              />
            </div>

            <div className="Field">
              <label>Type of enquity</label> <br />
              <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="role">Freelance project proposal</option>
                <option value="individual">Individual</option>
                <option value="business">Business</option>
              </select>
            </div>
            <div className="Field">
              <label>Message</label> <br />
              <input
                className="input__message"
                value={message}
                onChange={(e) => {
                  setmessage(e.target.value);
                }}
                placeholder=""
              />
            </div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </section>
      <footer>
        <p>Pete - &#169; 2023</p>
      </footer>
    </>
  );
}
function Feature(props) {
  return (
    <div className="feature__item">
      <img src={props.url} alt="feature" />
      <div className="feature__content">
        <h2>{props.Mainheading}</h2>
        <p className="feature__p">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </p>
        <a className="feature__a" href="/">
          See more &rarr;
        </a>
      </div>
    </div>
  );
}
