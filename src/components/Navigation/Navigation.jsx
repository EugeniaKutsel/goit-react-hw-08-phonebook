import UserMenu from "components/UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { isLoggedInSelector } from "redux/auth/authSelectors";

const Navigation = () => {
  const isLoggedIn = useSelector(isLoggedInSelector);
  return (
    <div>
      {isLoggedIn ? <UserMenu /> : <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/register'>Sign Up</NavLink>
        <NavLink to='/login'>Log In</NavLink>
      </nav>
      }
    </div>
  );
}

export default Navigation;