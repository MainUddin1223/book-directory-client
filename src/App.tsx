
import './App.css'
import Layout from '@/layout/Layout'
import { useMemo } from 'react'

import { useAppDispatch, useAppSelector } from './redux/hooks'
import { setAuth } from './redux/features/auth/authSlice'

import Loader from './components/loader'
import { Outlet } from 'react-router-dom'
import { useGetAuthQuery } from './redux/features/auth/authApi'




function App() {
const dispatch = useAppDispatch()
const { auth } = useAppSelector((state) => state.auth)

const { data, isLoading, error, isSuccess } = useGetAuthQuery(undefined)
useMemo(()=>{
  if(isSuccess){
    dispatch(setAuth({...auth,email:data.email}))
  }
},[isSuccess])


if (isLoading) {
  return <Loader />
}


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
