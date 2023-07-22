
import './App.css'
import Layout from '@/layout/Layout'
import Home from '@/pages/Home'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import { authApi } from './redux/features/auth/authSlice'
import Loader from './components/loader'



function App() {
const dispatch = useAppDispatch()
const { isLoading } = useAppSelector((state) => state.auth)
const token = localStorage.getItem('token')
useEffect(() => {
  if (token) {
    dispatch(authApi(token))
  }
}, [])

if (isLoading) {
  return <Loader />
}


  return (
    <>
 <div className='bg-primary'>
 <Layout>
      <div className='lg:w-3/4 md:w-11/12 mx-auto'>
      <Home />
      </div>
</Layout>
 </div>
   
    </>
  )
}

export default App
