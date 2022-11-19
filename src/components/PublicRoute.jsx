import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { isLoggedInSelector } from "redux/auth/authSelectors";

const PublicRoute = ({ Component, redirectTo = '/', restricted }) => {
  const isLoggedIn = useSelector(isLoggedInSelector);
  const shouldRedirect = restricted && isLoggedIn;

  return (
    shouldRedirect ? <Navigate to={redirectTo} />:Component
  )
}

export default PublicRoute;