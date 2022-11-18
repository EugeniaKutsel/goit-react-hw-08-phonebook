import { Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Contacts from "pages/Contacts";
import Register from "pages/Register";
import Login from "pages/Login";


const App = () => {
  


  return (
    <>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='contacts' element={<Contacts />} />
      <Route path='register' element={<Register />} />
      <Route path='login' element={<Login/>} />
    </Routes>
    </>
  );
}

export default App;