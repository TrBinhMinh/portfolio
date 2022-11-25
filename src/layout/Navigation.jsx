import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <menu>
        <NavLink to="aboutme" end>
          About Me
        </NavLink>
        <NavLink to="portfolio" end>
          Portfolio
        </NavLink>
        <NavLink to="services" end>
          Services
        </NavLink>
      </menu>
    </nav>
  );
};

export default Navigation;
