import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import EditProduct from './components/EditProduct';
import MyNav from './components/nav';
import ProductDetail from './components/productDetail';
import Products from './components/products';
import Slider from './components/slider';
import Task1 from './components/task1';
import Task2 from './components/task2';


function App() {

  
  return (
  <Fragment>
    <MyNav/>
    <Routes>
      <Route path='/' element={<Slider/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/task1' element={<Task1/>} />
      <Route path='/task2' element={<Task2/>} />
      <Route path='/products/:id' element={<ProductDetail/>} />
      <Route path='/products/:id/edit' element={<EditProduct/>} />
    </Routes>
    
  </Fragment>
    
  );
}

export default App;
