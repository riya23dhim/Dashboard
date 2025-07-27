import React from 'react'
import { FiUser, FiLogOut, FiMessageCircle, FiHelpCircle } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';


const UserProfile = () => {
  const navigate=useNavigate()
  const handleClick=()=>{
    localStorage.removeItem("token")
    sessionStorage.removeItem("token")
    navigate("/login")
    
  }
  return (
    <div className="w-64 p-4 bg-gray-900 text-gray-100 rounded-lg shadow-lg">
    {/* Top - Name & Email */}
    <div className="mb-4 border-b border-gray-700 pb-2">
      <h3 className="text-lg font-semibold">Riya Dhiman</h3>
      <p className="text-sm text-gray-400">driyanjali@gmail.com</p>
    </div>

    {/* Menu Options */}
    <div className="flex flex-col gap-3">
      
      <div className="flex items-center gap-3 cursor-pointer  p-1 rounded-xl hover:bg-dark-hover  text-gray-400 hover:text-white">
        <FiUser className="text-xl" />
        <span>Profile</span>
      </div>

      <div className="flex items-center gap-3 cursor-pointer  p-1 rounded-xl hover:bg-dark-hover  text-gray-400 hover:text-white">
        <FiMessageCircle className="text-xl" />
        <span>Community</span>
      </div>

      <div className="flex items-center gap-3  p-1 rounded-xl hover:bg-dark-hover  cursor-pointer text-gray-400 hover:text-white">
        <FiHelpCircle className="text-xl" />
        <span>Help Center</span>
      </div>

      <div className="flex items-center gap-3  p-1 rounded-xl hover:bg-dark-hover cursor-pointer text-gray-400 hover:text-white">
        <FiLogOut className="text-xl" />
        <span onClick={handleClick}>Logout</span>
      </div>
    </div>

    {/* Bottom Links */}
    <div className="border-t border-gray-700 mt-4 pt-3 text-sm flex flex-col gap-2">
      <span className="cursor-pointer text-gray-400 hover:text-white">Privacy Policy</span>
      <span className="cursor-pointer text-gray-400 hover:text-white">Terms of Use</span>
    </div>
  </div>
  )
}

export default UserProfile