import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import AuthForm from './pages/auth/AuthForm'
import History from './pages/history/History'

function App () {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/history' element={<History />} />
        <Route path='/signup' element={<AuthForm isSignup />} />
        <Route path='/login' element={<AuthForm isSignup={false} />} />
      </Routes>
    </Router>
  )
}

export default App
