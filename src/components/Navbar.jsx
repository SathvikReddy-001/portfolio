import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <h2>Sathvik</h2>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </div>
    </nav>
  );
}