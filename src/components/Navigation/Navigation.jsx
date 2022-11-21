import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { isLoggedInSelector } from "redux/auth/authSelectors";
import styled from "styled-components";
import css from '../Navigation/Navigation.module.css';

const NavItem = styled(NavLink)`
color: #000;
text-decoration: none;
&.active {
  color: rgb(255, 129, 19);
};
:hover:not(.active),
:focus-visible:not(.active){
  color: #000;
}
`

const Navigation = () => {
  const isLoggedIn = useSelector(isLoggedInSelector);
  return (
    <>
      <h2 className={css.navTitle}>Phonebook</h2>
      <nav className={css.nav}>
        <NavItem to='/' className={css.navLink}>Home</NavItem>
        {isLoggedIn && <NavItem to='/contacts' className={css.navLink}>Contacts</NavItem>}
      </nav>
    </>
  );
}

export default Navigation;