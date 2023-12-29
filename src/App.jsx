import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import Home from './components/Home/Home.jsx'
import Create from './components/Create/Create.jsx'
import View from './components/View/View.jsx'
import Store from './Context/Store.jsx'
import Footer from './components/Footer/Footer.jsx'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

const App = () => {

  return (
    <>
      <Store>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='create' element={<Create />} />
            <Route path='view/:bookId' element={<View />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Store>
    </>
  )
}

export default App
