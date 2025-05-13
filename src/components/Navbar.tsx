
import { useState } from 'react';
import { Globe, Search, User, Menu, X, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux.hooks';
import { logoutUser } from '../redux/userSlice';

export default function Navbar() {
const [isOpen, setIsOpen] = useState<boolean>(false);
const [showLangDropdown, setShowLangDropdown] = useState<boolean>(false);
 const { user } = useAppSelector((state) => state.user);
const dispatch = useAppDispatch();
console.log(user);

  return (
    <nav className="w-[95%] py-4 px-6 border-b-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
      
        <Link to="/" className="text-2xl font-black text-[#1D2134] tracking-widest">
          BOOK EVENTS
        </Link>

        {/* Large screen Search Bar */}
        <div className="flex-1 mx-6 hidden md:flex justify-center">
          <div className="relative w-full max-w-md ">
            <input
              type="text"
              placeholder="Search Event"
              className="w-full pl-10 pr-4 py-2 rounded-full shadow-lg border-1 text-[#4B4B4B] focus:outline-[#1D2134] "
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-4">
          { user ? 
            <Link to="/events" className="text-[#4B4B4B] hover:text-black text-xl">
           Events
          </Link> : 
          <>
          <Link to="/login" className="text-[#4B4B4B] hover:text-black text-xl">
             <span className='px-4 py-2 rounded-xl shadow-lg border-1 text-[#FFF] bg-[#1D2134] focus:outline-[#1D2134] hover:bg-[#fff] hover:text-[#1D2134] transition-all duration-300'>
              Login
            </span>
          </Link>
          <Link to="/Signup" className="text-[#4B4B4B] hover:text-black text-xl">
             <span className='px-4 py-2 rounded-xl shadow-lg border-1 text-[#FFF] bg-[#1D2134] focus:outline-[#1D2134] hover:bg-[#fff] hover:text-[#1D2134] transition-all duration-300'>
              Signup
            </span>
          </Link>
          </>

          }

          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowLangDropdown(prev => !prev)}
              className="text-[#4B4B4B] hover:text-black"
            >
              <Globe size={30} />
            </button>

            {showLangDropdown && (
              <div className="absolute right-0 mt-2 bg-white shadow-md rounded-md py-1 w-28 z-50">
                <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                  English
                </button>
                <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                  Arabic
                </button>
              </div>
            )}
          </div>

          { user && <button onClick={() => dispatch(logoutUser())}>
            <LogOut size={30} className="text-[#4B4B4B] hover:text-red-500 cursor-pointer" />
          </button>}
        </div>



        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>



      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4">
          {/* Search */}
          <div className="relative px-4">
            <input
              type="text"
              placeholder="Search Event"
              className="w-full pl-10 pr-4 py-2 rounded-full shadow-lg border-1 text-[#4B4B4B] focus:outline-[#1D2134]"
            />
            <Search className="absolute left-7 top-2.5 text-gray-400" size={18} />
          </div>



          {/* Links */}
          <div className="px-4 flex flex-col space-y-2 text-[#4B4B4B]">
            <Link to="/events" className="hover:text-black">Events</Link>
            
            {/* Language dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowLangDropdown(prev => !prev)}
                className="flex items-center space-x-2 hover:text-black"
              >
                <Globe size={20} />
                <span>Language</span>
              </button>

              {showLangDropdown && (
                <div className="mt-2 bg-white shadow-md rounded-md py-1 w-28 z-50">
                  <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                    English
                  </button>
                </div>
              )}
            </div>

            <button className="flex items-center space-x-2 hover:text-black">
              <User size={20} />
              <span>Profile</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
