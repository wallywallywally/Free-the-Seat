//import './App.css';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
    const { user } = useContext(Context);
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/register" element = {user ? <Home /> : <Register />}/>
      <Route path="/login" element = {user ? <Home /> : <Login />}/>
      <Route path="/home" element = {user ? <Home /> : <Register />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
