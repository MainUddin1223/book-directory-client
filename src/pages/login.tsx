import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { useState, useEffect } from 'react'
import { loginApi } from '../redux/features/auth/authSlice'

const Login = () => {
  const { auth, isLoading } = useAppSelector((state) => state.auth)
  const [authData, setAuthData] = useState({
    email: '',
    password: '',
  })
  const dispatch = useAppDispatch()
  const handleLogin = () => {
    console.log(authData)
    dispatch(loginApi({ email: authData.email, password: authData.password }))
  }
  useEffect(() => {
    console.log(auth, isLoading)
  }, [auth?.email, isLoading])
  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        onChange={(event) =>
          setAuthData((prev: any) => ({ ...prev, email: event.target.value }))
        }
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(event) =>
          setAuthData((prev: any) => ({
            ...prev,
            password: event.target.value,
          }))
        }
      />
      <button onClick={handleLogin}>Submit</button>
    </div>
  )
}
export default Login
