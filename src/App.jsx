import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./header"
import Product from "./product"
import CartList from "./cartList"


function App() {

  return (
    <>
      
      <BrowserRouter>
        <Header /> 
        <Routes>
          <Route path="/" element={<Product />}/>
          <Route path="/cart" element={<CartList/>}/>
        </Routes>
      </BrowserRouter>
      
       
    </>
  )
}

export default App
