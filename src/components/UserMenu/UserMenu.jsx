import { useDispatch, useSelector} from "react-redux";
import { logOutUser } from "redux/auth/authOperations";
import { userSelector } from "redux/auth/authSelectors";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  return (
    <div>
      <p>Welcome, {user.name} </p>
      <button onClick={() => dispatch(logOutUser())}>Log out</button>
    </div>
  );
}

export default UserMenu;