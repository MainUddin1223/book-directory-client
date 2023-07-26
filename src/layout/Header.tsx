import { useAppSelector } from '@/redux/hooks'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MdOutlineLogout } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { setAuth } from '@/redux/features/auth/authSlice'

const Header = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false)
const { auth } = useAppSelector((state) => state.auth)
const dispatch = useDispatch()
const navigate = useNavigate()


const handleLogout = () => {
  dispatch(setAuth(''))
  localStorage.clear()
  navigate('/')
}


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-background-color">
      <div className="  container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="uppercase text-white font-bold text-2xl cursor-pointer">
          <Link to="/">Book Directory</Link>
        </div>
        <div></div>
        <div className="">
          {/* midum and large devices */}
          <div className="text-white gap-4 font-semibold text-lg hidden md:flex">
            <Link to="/">Home</Link>
            {auth.email ? (
              <>
                <Link to="/add-book">Add a book</Link>
                <Link to="/wish-list">Wish List</Link><Link to="/my-books">My Books</Link>

                <Link to="/saved-list">Reading</Link>
                <div
                  onClick={handleLogout}
                  className=" bg-gray-400 p-2 rounded-full cursor-pointer"
                >
                  <MdOutlineLogout className="text-2xl" />
                </div>
              </>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </div>
          {/* small devices */}
          <div
            className={`text-white gap-4 font-semibold text-lg flex flex-col absolute  top-20 bg-primary md:hidden ${
              isMenuOpen ? 'right-0' : 'hidden '
            } transition delay-200 duration-1000 linear p-4 text-center `}
          >
            <Link to="/">Home</Link>

            {auth.email ? (
              <div className='flex flex-col gap-2'>
            <Link to="/add-book">Add a book</Link>
                <Link to="/wish-list">Wish List</Link><Link to="/my-books">My Books</Link>

                <Link to="/saved-list">Reading</Link>
                <div
                  onClick={handleLogout}
                  className=" bg-gray-400 p-2 rounded-full cursor-pointer"
                >
                  <MdOutlineLogout className="text-2xl" />
                </div>
              </div>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </div>
        </div>

        <button
          className="md:hidden text-white hover:text-gray-300"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Header
