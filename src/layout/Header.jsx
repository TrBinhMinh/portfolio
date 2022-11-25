import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import classes from './Header.module.css'

const Header = () => {
  return (
    <header style={{ backgroundColor: "pink" }}>
      <Link to='/'>Logo</Link>
      <Navigation />
    </header>
  );
};

export default Header;
