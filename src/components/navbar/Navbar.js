import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar () {
  return (
    <nav className='navbar'>
      <ul>
        <li><Link to='/' data-testId='homeNav'>Home</Link></li>
        <li><Link to='/history' data-testId='historyNav'>history</Link></li>
        <li><Link to='/login' data-testId='loginNav'>Login</Link></li>
        <li><Link to='/signup' data-testId='signupNav'>Sign Up</Link></li>
      </ul>
    </nav>
  )
}
