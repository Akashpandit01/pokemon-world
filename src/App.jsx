import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Home from '../pages/Home'
import Result from '../pages/Result'
import FullInfo from '../pages/FullInfo'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/find/:name' element={<Result />} />
        <Route path='/about/:id' element={<FullInfo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App