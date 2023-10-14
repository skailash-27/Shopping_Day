import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Cart from './components/Cart'
import Context from './components/Context';

function App() {
  return (
    <Context>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Context>
  );
}

export default App;
