import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './Components/HomePage/Navbar';
import Footer from './Components/HomePage/Footer';
import HomePage from "./Pages/HomePage"
import SignIn from "./Pages/authPages/Signin"
import SignUp from "./Pages/authPages/SignUp"




function App() {

  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<HomePage/>}></Route>
      <Route path="/signin" element={<SignIn/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
