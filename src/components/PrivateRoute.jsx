import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { isLoggedInSelector } from "redux/auth/authSelectors"

const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(isLoggedInSelector);
  return isLoggedIn ? children : <Navigate to={redirectTo} />
}

export default PrivateRoute;