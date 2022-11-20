import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { isLoggedInSelector } from "redux/auth/authSelectors";
import css from '../Navigation/Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(isLoggedInSelector);
  return (
    <>
      <h2 className={css.navTitle}>Phonebook</h2>
      <nav className={css.nav}>
        <NavLink to='/' className={css.navLink}>Home</NavLink>
        {isLoggedIn && <NavLink to='/contacts' className={css.navLink}>Contacts</NavLink>}
      </nav>
    </>
  );
}

export default Navigation;