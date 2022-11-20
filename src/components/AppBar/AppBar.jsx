import AuthNav from "components/AuthNav/AuthNav";
import Navigation from "components/Navigation/Navigation";
import UserMenu from "components/UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { isLoggedInSelector } from "redux/auth/authSelectors";
import css from '../AppBar/AppBar.module.css';

const AppBar = () => {
  const isLoggedIn = useSelector(isLoggedInSelector);
  return (
    <header className={css.header}>
      <Navigation />
       {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  )
}

export default AppBar;