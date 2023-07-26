import Loader from '@/components/loader'

import { useAppSelector } from '@/redux/hooks'
import { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

interface IProps {
  children: ReactNode
}

const PrivateRoutes = ({ children }: IProps) => {
const { auth, isLoading } = useAppSelector((state) => state.auth)
console.log('--------------', auth)



const { pathname } = useLocation()




if(isLoading){
  return <Loader/>
}
console.log(auth, isLoading)

  if (!auth.email) {
    return <Navigate to="/login" state={{ path: pathname }} />
  }
  return children
}
export default PrivateRoutes
