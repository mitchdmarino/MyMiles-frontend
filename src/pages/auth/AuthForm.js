import React from 'react'

export default function AuthForm ({ isSignup }) {
  const [formData, setFormData] = React.useState({
    email: '',
    fname: '',
    lname: '',
    password1: '',
    password2: ''
  })

  return (
    <div className='authForm'>
      {isSignup
        ? (
          <>
            <form className='signup-form' data-testId='signup'>
              <label htmlFor='fname'>First Name</label>
              <input type='text' value='' name='fname' />
              <label htmlFor='lname'>Last Name</label>
              <input type='text' value='' name='lname' />
              <label htmlFor='email'>Email</label>
              <input type='text' value='' name='email' />
              <label htmlFor='password1'>Password</label>
              <input type='text' value='' name='password1' />
              <label htmlFor='password2'>Confirm Password</label>
              <input type='text' value='' name='password2' />
            </form>
          </>
          )
        : (
          <>
            <form className='login-form' data-testId='login'>
              <label htmlFor='email'>Email</label>
              <input type='text' value='' name='email' />
              <label htmlFor='password1'>Password</label>
              <input type='text' value='' name='password1' />
            </form>
          </>
          )}
    </div>
  )
}
