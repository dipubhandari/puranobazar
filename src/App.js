import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
// import Header from './component/header/Header';
import Post from './component/Post/Post';
import ProductDetails from './component/product-details/productdetails';
import Home from './Home';

function App() {


  // checking if the useris logeed in or not

  const [isloggedIn, setLoggedIn] = useState(false)
  // this function runs on load and check is user is logged in or not
  useEffect(() => {
    const checkLogged = async () => {
      //  getting user details from localstorage
      const user = JSON.parse(localStorage.getItem('user'))
      console.log(user)
      // checking the user details to the database
      await axios.post('/checkuser', user)
        .then((response) => {
          setLoggedIn(response.data)
        })
    }
    checkLogged()
  }, [])
  console.log(isloggedIn)
  return (
    <BrowserRouter> <div className="App">
      {/* <Header /> */}
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/product-detail/:id" element={<ProductDetails />} />
        <Route path="/selling" element={(isloggedIn) ? < Post /> : <Home />} />
      </Routes>

    </div> </BrowserRouter>

  );
}

export default App;
