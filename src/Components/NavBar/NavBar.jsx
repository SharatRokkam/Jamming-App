import { AddBox } from "@mui/icons-material";
import "./NavBar.css";

const NavBar = ({ setUsers }) => {
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="left">
            <div className="logo"></div>
          </div>
          <div className="center">
            <h3>Friday Night Jam</h3>
          </div>
          <div className="right">
            <div className="select">
              <select onChange={(e) => setUsers(e.target.value)}>
                <option value="" disabled></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div className="invite_btn_div">
              <button className="invite_btn">
                <AddBox className="add-icon" /> Invite
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
