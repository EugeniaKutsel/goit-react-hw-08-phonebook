import { useDispatch} from "react-redux";
import { logOutUser } from "redux/auth/authOperations";

const UserMenu = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <p>Welcome, </p>
      <button onClick={() => dispatch(logOutUser())}>Log out</button>
    </div>
  );
}

export default UserMenu;