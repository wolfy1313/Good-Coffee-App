import './App.css';
import Header from './components/Header';
import { Route, Routes } from'react-router-dom'
import CoffeeShops from './components/CoffeeShops';
import Home from './components/Home';
import ReviewForm from './components/ReviewForm';
import ShopCard from './components/ShopCard';

function App() {

  console.log(process.env.REACT_APP_BASE_URL)
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path='/coffee-shops' element={<CoffeeShops />}/>
          <Route path='/' element={<Home />}/>
          <Route path='/review-form' element={<ReviewForm />}/>
          <Route path='/shop-card' element={<ShopCard />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
