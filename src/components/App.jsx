import { Navigate, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Contacts from "pages/Contacts";
import Register from "pages/Register";
import Login from "pages/Login";
import { useDispatch, useSelector } from "react-redux";
import { tokenSelector } from "redux/auth/authSelectors";
import { useEffect } from "react";
import { refreshCurrentUser } from "redux/auth/authOperations";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Navigation from "./Navigation/Navigation";


const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(tokenSelector);
  

  useEffect(() => {
    token&&dispatch(refreshCurrentUser())
  }, [dispatch, token])
  

  return (
    <>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='contacts' element={
          <PrivateRoute redirectTo='/login'>
            <Contacts />
          </PrivateRoute>
         } />
        <Route path='register' element={
          <PublicRoute
            Component={<Register />}
            restricted
            redirectTo="/contacts" />} />
        <Route path='login' element={<PublicRoute
            Component={<Login />}
            restricted
            redirectTo="/contacts" />} />
        <Route path='*' element={<Navigate to='/'/>} />
      </Routes>
    </>
  );
}

export default App;