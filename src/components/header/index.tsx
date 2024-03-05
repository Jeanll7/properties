import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

import logoImg from '../../assets/logo1.png'
import { Link } from 'react-router-dom';
import { FiUser, FiLogIn } from 'react-icons/fi'

export function Header() {
  const { signed, loadingAuth} = useContext(AuthContext)

  return (
    <div className='w-full flex items-center justify-center h-16 bg-white drop-shadow mb-4'>
      <header className='flex w-full max-w-7xl items-center justify-between px-4 mx-auto'>
        <Link to="/">
          <img className='w-40 h-auto rounded'
            src={logoImg}
            alt="Logo do site"
          />
        </Link>

        {!loadingAuth && signed && (
        <Link to="/dashbord">
          <div className='border-2 rounded-full border-gray-900 p-2'>
            <FiUser size={22} color="#000" />
          </div>
        </Link>
        )}

        {!loadingAuth && !signed && (
        <Link to="/login">
          <FiLogIn size={26} color="#000" />
        </Link>
        )}
      </header>      
    </div>
  )
}
