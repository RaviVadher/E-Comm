import { useState } from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './App.css'
import AppLayout from './layouts/AppLayout';
import NoteFound  from './page/NoteFound';
import Home from './page/Home';
import About from './page/About';
import ShopeLayout from './layouts/ShopeLayout';
import ProductList from './page/shop/ProductsList';
import ProductDetail from './page/shop/ProductDetail';
import Product from './page/shop/Product';
const router = createBrowserRouter([
 { 
   path:'/',
   element: <AppLayout/>,
   errorElement : <NoteFound/>,
    children: [
         { index: true, element: <Home /> }, 
         { path: 'about', element: <About /> },
         {
           path: 'shop',
           element: <ShopeLayout />,
           children: [
             { index: true, element: <ProductList /> },
             { path: 'products', element: <Product /> },
             { path: 'product/:productId', element: <ProductDetail /> },
             
           ],
         },
       ],
      },


])
function App() {
 

  return (
    <RouterProvider router={router} />
  )
}

export default App;
