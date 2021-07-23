import "./scss/styles.scss";
import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { set } from "harmony-reflect";

function App() {
  const [active, setActive] = useState(false);
  const handleActive = () => (active ? setActive(false) : setActive(true));

  return (
    <div className="App">
      <div className="header">
        <div className="header__logo">
          <FontAwesomeIcon icon={faGoogle} size="2x" />
          <span>NoruWedding</span>
        </div>
        <div className={active ? "header__menus active" : "header__menus"}>
          <ul>
            <li>Home</li>
            <li>Gallery</li>
            <li>Weddings</li>
            <li>FAQ</li>
            <li>Bookings</li>
          </ul>
        </div>
        <div className={active ? "header__links active" : "header__links"}>
          <ul>
            <li>
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </li>
            <li>
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </li>
          </ul>
        </div>

        <div className="header__toggle">
          <a href="#">
            <FontAwesomeIcon icon={faBars} size="2x" onClick={handleActive} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
