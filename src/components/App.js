import React from 'react';
import Nav from "./header";
import "./styles.css"
import Footer from './footer';
import Signup from './signup';
import Login from './login'
import PrivateComponent from './privateComponent';
import AddProduct from './addProducts';
import ProductList from './productList';
import UpdateProduct from './updateProduct';
import { BrowserRouter , Routes , Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
  <BrowserRouter>
    <Nav />

      <Routes>
      <Route element={<PrivateComponent />}>
        <Route path="/" element={<ProductList />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/update/:id" element={<UpdateProduct />} />
        <Route path="/logout" element={<h1>logout Component</h1>} />
        <Route path="/profile" element={<h1>profileComponent</h1>} />
      </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </BrowserRouter> 
      
    <Footer />
    </div>
  );
}

export default App;
