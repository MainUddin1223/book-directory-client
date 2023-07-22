import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { useState, useMemo } from 'react'


import { loginApi } from '../redux/features/auth/authSlice'
import { Link, useNavigate } from 'react-router-dom'
import Layout from '@/layout/Layout'
import Swal from 'sweetalert2'
import Loader from '@/components/loader'


const Login = () => {
const { isLoading, isError } = useAppSelector((state) => state.auth)

const navigate = useNavigate()
const dispatch = useAppDispatch()

  const [authData, setAuthData] = useState({
    email: '',
    password: '',
  })
const handleLogin = async (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault()
  const response = await dispatch(
    loginApi({ email: authData.email, password: authData.password })
  )
if(!isLoading){
  if(response?.payload?.success == false || isError){
    Swal.fire({
      icon: 'error',
      title: response.payload.message??'Oops'
    })
  }
    if(response?.payload?.success){
      localStorage.setItem('token',response?.payload?.token)
      Swal.fire({
        icon: 'success',
        title: 'Login Successfull',
        showConfirmButton: false,
        timer: 1500
      })
      navigate('/')
  }
}
}

const [isValidData, setIsValidData] = useState(false)

useMemo(() => {
  if (authData?.email && authData?.password) {
    setIsValidData(true)
  } else {
    setIsValidData(false)
  }
}, [authData])


if (isLoading) {
  return <Loader />
}

  return (
    <Layout>
      <div className="bg-primary py-16">
        <div className="w-full mx-auto max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6  dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" action="#">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              Sign in to Book directory
            </h5>
            <div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@company.com"
                  onChange={(event) => {
                    setAuthData((prev) => ({
                      ...prev,
                      email: event.target.value,
                    }))
                  }}
                  value={authData.email??''}
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                onChange={(event) => {
                  setAuthData((prev) => ({
                    ...prev,
                    password: event.target.value,
                  }))
                }}
                value={authData.password??''}
                required
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-start">
                <div className="flex items-center h-5"></div>
              </div>
              <a
                href="#"
                className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
              >
                Lost Password?
              </a>
            </div>
            <button
              type="submit"
              className={`w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-4 focus:outline-none dark:focus:ring-primary ${
                !isValidData
                  ? 'bg-gray-400'
                  : 'bg-gray-700 hover:bg-primary dark:bg-blue-600 dark:hover:bg-blue-700'
              }`}

              disabled={!isValidData && true}
              onClick={(event) => handleLogin(event)}
            >
              Login
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?{' '}
              <Link to="/register" className="text-blue-500">
                Create account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}
export default Login
