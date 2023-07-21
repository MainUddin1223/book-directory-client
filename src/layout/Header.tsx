import { useAppSelector } from '@/redux/hooks'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CgProfile } from 'react-icons/cg'


const Header = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false)
const { auth } = useAppSelector((state) => state.auth)


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-primary sticky top-0 z-50 ">
      <div className="  container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="uppercase text-white font-bold text-2xl cursor-pointer">
          <Link to="/">Book Directory</Link>
        </div>
        <div>
        </div>
<div className=''>
          {/* midum and large devices */}
          <div className='text-white gap-4 font-semibold text-lg hidden md:flex'>
          <Link to="/">Home</Link>
          {
            auth.email?<>
             <Link to="/">Add a book</Link>
             <Link to="/">
                  <CgProfile className="text-2xl" />
                </Link>
            </>: <Link to="/login">Login</Link>
          }
        </div>
        {/* small devices */}
        <div className={`text-white gap-4 font-semibold text-lg flex flex-col absolute  top-20 bg-primary md:hidden ${isMenuOpen ? 'right-0' : 'hidden '} transition delay-200 duration-1000 linear p-4 text-center `}>
        {
          auth.email && <Link to="/">
          <CgProfile className="text-3xl mx-auto" />
        </Link>
         }
          <Link to="/">Home</Link>
          {
            auth.email?<>
             <Link to="/">Add a book</Link>
            </>: <Link to="/login">Login</Link>
          }
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

