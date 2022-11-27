import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import ProductDetails from './component/product-details/productdetails';
import Home from './Home';

function App() {
   
  return (
    <BrowserRouter> <div className="App">
    
      <Routes>
   
        
        <Route path="/" element={<Home />} />
        <Route path="/product-detail/:id" element={<ProductDetails />} />
        

        </Routes>
   
    </div> </BrowserRouter>

  );
}

export default App;
