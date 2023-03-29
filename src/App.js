import './App.css';
import Footer from './components/footer';
import MyNav from './components/nav';
import Products from './components/products';
import Slider from './components/slider';

function App() {
  return (
   <div>
    <MyNav/>
    <Slider/>
    <Products/>
    <Footer/>
   </div>
    
  );
}

export default App;
