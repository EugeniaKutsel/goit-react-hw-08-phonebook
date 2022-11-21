import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import { tokenSelector } from "redux/auth/authSelectors";
import { lazy, Suspense, useEffect } from "react";
import { refreshCurrentUser } from "redux/auth/authOperations";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import AppBar from "./AppBar/AppBar";
import Container from "./Container/Container";

const Home = lazy(() => import('../pages/Home/Home'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
const Register = lazy(() => import('../pages/Register/Register'));
const Login = lazy(() => import('../pages/Login/Login'));


const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(tokenSelector);
  
  useEffect(() => {
    token && dispatch(refreshCurrentUser())
  }, [dispatch, token])
  
  return (
    <>
      <ToastContainer autoClose={2000} hideProgressBar={true} />
      <AppBar />
      
      <Container>
        <Suspense fallback={null}>
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
        </Suspense>
      </Container>
    </>
  );
}

export default App;