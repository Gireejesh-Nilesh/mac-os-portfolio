import DateTime from "./DateTime";
import "./nav.scss";
const base = import.meta.env.BASE_URL + "/";

const appleIcon = `${base}navbar-icons/apple.svg`;
const wifiIcon = `${base}navbar-icons/wifi.svg`;

const Nav = () => {
  return (
    <nav>
      <div className="left">
        <div className="apple-icon">
          <img src={appleIcon} alt="" />
        </div>

        <div className="nav-item">
          <p>Gireejesh Nilesh</p>
        </div>

        <div className="nav-item">
          <p>File</p>
        </div>

        <div className="nav-item">
          <p>Window</p>
        </div>

        <div className="nav-item">
          <p>Terminal</p>
        </div>
      </div>
      <div className="right">
        <div className="nav-icon">
          <img src={wifiIcon} alt="" />
        </div>

        <div className="nav-item">
          <DateTime />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
