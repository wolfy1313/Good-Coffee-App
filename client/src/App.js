import './App.css';
import Header from './components/Header';
import { Route, Routes } from'react-router-dom'
import CoffeeShops from './components/CoffeeShops';
import Home from './components/Home';
import ReviewForm from './components/ReviewForm';
import ShopCard from './components/ShopCard';
import { useState } from 'react';
import EditReview from './components/EditReview';

function App() {

  const [selectedShop, setSelectedShop] = useState()
  const [editedReview, setEditedReview] = useState()
  const selectShop = (id) => {
    setSelectedShop(id)
  }


  console.log(process.env.REACT_APP_BASE_URL)

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path='/coffee-shops' element={<CoffeeShops setSelectedShop={selectShop}/>}/>
          <Route path='/' element={<Home />}/>
          <Route path='/review-form' element={<ReviewForm />}/>
          <Route path='/coffee-shops/:id' element={<ShopCard selectedShop={selectedShop}/>}/>
          <Route path='/edit-review/:id' element={<EditReview editedReview={editedReview} setEditedReview={setEditedReview}/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
