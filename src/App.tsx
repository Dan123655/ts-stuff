import { Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation';
import AboutPage from './pages/About';
import { ProductPage } from './pages/ProductsPage';



const App = () => {
  return (
    <>
      <Navigation/>
    <Routes>
      <Route path='/' element={<ProductPage/>} />
      <Route path='/about' element={<AboutPage/>} />
      </Routes>
    </>
  )
}

export default App;
