import { useDispatch, useSelector} from "react-redux";
import { logOutUser } from "redux/auth/authOperations";
import { userSelector } from "redux/auth/authSelectors";
import css from '../UserMenu/UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  return (
    <div className={css.userMenu}>
      <p className={css.userText}>Welcome, <span className={css.userName}>{user.name}</span> </p>
      <button onClick={() => dispatch(logOutUser())} className={css.logOutBtn}>Log out</button>
    </div>
  );
}

export default UserMenu;