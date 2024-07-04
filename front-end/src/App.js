
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sports" element={<ShopCategory category="Sports"/>}/>
        <Route path="/fitness" element={<ShopCategory category="Fitness"/>}/>
        <Route path="/contact" element={<ShopCategory category="Contact"/>}/>
        <Route path="/Product" element={<Product/>}/>
          <Route path=":ProductId" element={<Product/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/Login" element={<LoginSignup />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
