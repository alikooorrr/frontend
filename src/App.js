import './App.css';

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import Home from './components/Home'
import Product from './components/Product'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Link to="/">alizane</Link>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:slug' element={<Product  />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
