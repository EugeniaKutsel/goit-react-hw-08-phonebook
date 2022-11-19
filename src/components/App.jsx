import { Navigate, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Contacts from "pages/Contacts";
import Register from "pages/Register";
import Login from "pages/Login";
import { useDispatch, useSelector } from "react-redux";
import { tokenSelector } from "redux/auth/authSelectors";
import { useEffect } from "react";
import { refreshCurrentUser } from "redux/auth/authOperations";


const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(tokenSelector);
  

  useEffect(() => {
    token&&dispatch(refreshCurrentUser())
  }, [dispatch, token])
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='contacts' element={<Contacts />} />
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
        <Route path='*' element={<Navigate to='/'/>} />
      </Routes>
    </>
  );
}

export default App;