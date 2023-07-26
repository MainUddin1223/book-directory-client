
import './App.css'
import Layout from '@/layout/Layout'
import { useEffect } from 'react'


import { useAppDispatch, useAppSelector } from './redux/hooks'
import { authApi } from './redux/features/auth/authSlice'


import Loader from './components/loader'
import { Outlet } from 'react-router-dom'





function App() {
const token = localStorage.getItem('token')
const dispatch = useAppDispatch()
const { isLoading } = useAppSelector((state) => state.auth)
useEffect(() => {
  if (token) {
    dispatch(authApi(token))
  }
}, [])


if (isLoading) {
  return <Loader />
}
console.log(isLoading)




  return (
    <>
 <div className='bg-primary'>
 <Layout>
      <div className='lg:w-3/4 md:w-11/12 mx-auto'><Outlet />

      </div>
</Layout>
 </div>
   
    </>
  )
}

export default App
