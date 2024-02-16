import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './component/layout/Header'
import Footer from './component/layout/Footer'
import Home from './component/Home'
import Shop from './component/Shop'
import ShopDetail from './component/ShopDetail'
import ProductDetail from './component/Product/ProductDetail'
import Cart from './component/Cart/Cart'

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/detail' element={<ShopDetail />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
