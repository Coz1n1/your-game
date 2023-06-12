import { Home } from './pages/home/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { SingleProduct } from './pages/home/SingleProduct';
import { Cart } from './pages/cart/Cart';
import { ContextProvider } from './context/Context';


function App() {

  return (
    <div className="App">
      <ContextProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='product/:id' element={<SingleProduct/>}/>
            <Route path='/MyCart' element={<Cart/>}/>
          </Routes>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
