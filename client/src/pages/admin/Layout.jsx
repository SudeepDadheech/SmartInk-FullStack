import React from 'react'
import { assets } from '../../assets/assets'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/admin/Sidebar'
import { useAppContext } from '../../context/AppContext'

const Layout = () => {
  const { axios, setToken, navigate } = useAppContext()

  const logout = () => {
    localStorage.removeItem('token')
    axios.defaults.headers.common['Authorization'] = null
    setToken(null)
    navigate('/')
  }

  return (
    <>
      {/* Top Navbar */}
      <header className="flex items-center justify-between h-[70px] px-6 sm:px-12 border-b border-gray-300 bg-gradient-to-r from-cyan-500 to-blue-600 shadow-md">
        <img
          src={assets.logo}
          alt="Logo"
          className="w-36 sm:w-44 cursor-pointer filter brightness-90 hover:brightness-100 transition"
          onClick={() => navigate('/')}
        />
        <button
          onClick={logout}
          className="
            text-sm 
            px-6 py-2 
            bg-white 
            text-blue-700 
            font-semibold 
            rounded-full 
            shadow-md 
            border border-blue-600
            hover:bg-blue-600 
            hover:text-white 
            transition 
            duration-300 
            cursor-pointer
            select-none
            "
          aria-label="Logout"
          type="button"
        >
          Logout
        </button>
      </header>

      {/* Main content */}
      <main className="flex h-[calc(100vh-70px)] bg-blue-50">
        <Sidebar />
        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
      </main>
    </>
  )
}

export default Layout
