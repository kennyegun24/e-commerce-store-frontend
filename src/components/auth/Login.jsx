import React, { useState } from 'react'
import { Form, FormBtn, FormDiv, H1, Input, P } from '../../Styles'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/apiCalls'
import { loginFailure } from '../../redux/user/user'
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState('')
  const [success, setSuccess] = useState('')
  const dispatch = useDispatch()

  const loginUser = async (e) => {
    e.preventDefault()
    if (password === '' && email === '') {
      setErr('Complete all fields')
      return false
    } if (email === '') {
      setErr('Email field shoulb be filled')
      return false
    } if (password === '') {
      setErr('Password cannot be empty')
      return false
    }
    try {
      await login(dispatch, {
        email,
        password
      })
      setSuccess('User Logged in successfully')
    } catch (err) {
      dispatch(loginFailure)
      setErr(err.response.data.message)
    }
  }
  // console.log(email)

  return (
    <FormDiv>
      <Form>
        <H1>Login to your account</H1>
        <Input onChange={(e) => setEmail(e.target.value)} placeholder='Enter email' />
        <Input onChange={(e) => setPassword(e.target.value)} placeholder='Enter password' />
        <FormBtn type='submit' onClick={loginUser}>Login</FormBtn>
        {err && setTimeout(() => { setErr(null) }, 5000) && <span style={{ color: 'red', fontWeight: '600' }}>{err}</span>}
        {success && setTimeout(() => { setSuccess(null) }, 5000) && <span style={{ color: 'green', fontWeight: '600' }}>{success}</span>}
        <P>Don&apos;t have an account? <Link to='register'>Register...</Link></P>
      </Form>
    </FormDiv>
  )
}

export default Login;