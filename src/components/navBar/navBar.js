import { Link } from "react-router-dom";

const NavBar = () => {
  const link = {
    textDecoration: "none",
    color: "white",
    margin:"0 10px" 

  };

  const listStyle = {
    margin: 5,
    display: "inline-block",
    fontWeight: "bold"
  };
  const navStyle = {
    
    backgroundColor:  "#007bff",
    padding: "10px 20px",
    borderBottom: "2px solid #0056b3",
  };

  return (
<nav className="navbar navbar-expand-sm bg-light navbar-light" style={navStyle}>
      <div className="container-fluid" style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
        <ul className="navbar-nav" >
          <li className="nav-item" style={listStyle}>
            <Link to="/" style={link}>
              Home
            </Link>
          </li>
          <li className="nav-item" style={listStyle}>
            <Link to="/setting" style={link}>
              Settings
            </Link>
          </li>
          <li className="nav-item" style={listStyle}>
            <Link to="/about" style={link}>
              About
            </Link>
          </li>
          <li className="nav-item" style={listStyle}>
            <Link to="/products" style={link}>
              Products
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
