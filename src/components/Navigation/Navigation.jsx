import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/register'>Sign Up</NavLink>
      <NavLink to='/login'>Log In</NavLink>
    </nav>
  );
}

export default Navigation;