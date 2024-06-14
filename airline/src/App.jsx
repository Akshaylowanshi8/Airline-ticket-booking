
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './Home'
import myBoooking from './Mybooking';
import Checkout from './checkout'
import MyBoooking from './Mybooking';
function App() {
return (
    <>
 <BrowserRouter>
<Routes>
<Route path='/' element={<Layout/>}>
  <Route index element={ <Home/> } />
  <Route path='home' element={ <Home />}/>
  <Route path='Book' element={<MyBoooking />}/>
  <Route path='Checkout/:id' element={ <Checkout />}/>  
</Route>
</Routes>
</BrowserRouter>
    </>
  )
}

export default App




