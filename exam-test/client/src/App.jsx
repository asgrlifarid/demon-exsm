
import './App.css'
import {  Routes, Route } from "react-router-dom";
import ClientLayout from './layouts/ClientLayout';
import Favorites from './pages/Client/Favorites';
import Products from './pages/Client/Products';
import Home from './pages/Client/Home';
import { Provider } from 'react-redux'
import AdminLayout from './layouts/AdminLayout';
import AdminProducts from './pages/Admin/AdminProducts';
import { AddProduct } from './pages/Admin/AddProducts';



function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="products" element={<Products />} />
          
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminProducts />} />
          <Route path="/admin/addproduct" element={<AddProduct />} />
        
          
        </Route>
      </Routes>
    </>
  )
}

export default App
