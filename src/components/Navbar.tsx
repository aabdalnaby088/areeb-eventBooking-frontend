
import { useEffect, useState } from 'react';
import { Globe, Menu, X, LogOut, Tickets } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux.hooks';
import { logoutUser } from '../redux/userSlice';
import { useCart } from '../hooks/useCart';
import styled from 'styled-components';
import { toggleTheme } from '../redux/themeSlice';
import { useTranslation } from 'react-i18next';
import { setLanguage } from '../redux/languageSlice';

export default function Navbar() {
  
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showLangDropdown, setShowLangDropdown] = useState<boolean>(false);
  const { user } = useAppSelector((state) => state.user);
  const darkMode = useAppSelector((state) => state.theme.darkMode);
  const dispatch = useAppDispatch();
  
  const [cartCount, setCartCount] = useState<number>(0);
  const cart = useCart();
  
  
const { t } = useTranslation();
  
const changeLanguage = (lng: 'en' | 'es') => {

  dispatch(setLanguage(lng ));
};



useEffect(() => {
  if (cart.data?.data?.items) {
    const totalQuantity = cart.data.data.items.reduce(
      (acc: number, item: { quantity: number }) => acc + item.quantity,
      0
    );
    setCartCount(totalQuantity);
  }else{
    setCartCount(0);
  }
}, [cart.data]);



  return (

    <nav className="w-[95%] py-4 px-6 border-b-2 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between ">


       <div className='md:hidden' >
        <Link
        style={{ fontFamily: "'Bagel Fat One', sans-serif" }}
         to="/" className="text-2xl font-black text-primary tracking-widest">
          BOOK EVENTS
        </Link>
        </div>


        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-4  w-full justify-between">
         
{/* ************************************************* */}


{/* left side icons */}
    <div className=' flex justify-evenly w-[25%]'>
          { user ? 
          <>
            <Link to="/events" className="text-secondary cursor-pointer text-xl">
           {t('navbar.events')}
          </Link> 
            <Link to="/cart" className="text-secondary text-xl cursor-pointer relative">
              <Tickets size={30} />
              <span className='absolute bottom-[60%] start-[80%] text-xs text-white bg-red-500 rounded-2xl px-1'>{cartCount}</span>
          </Link> 
          </>
          
          : 
          <>
           <Link to="/events" className="text-secondary cursor-pointer text-xl">
           {t('navbar.events')}
          </Link>
          <Link to="/login" className="text-secondary text-md ">
             <span className='px-4 py-2 rounded-xl shadow-lg border-1 text-bg bg-primary focus:outline-primary hover:text-primary hover:bg-bg transition-all duration-300'>
              {t('navbar.login')}
            </span>
          </Link>
          <Link to="/Signup" className="text-secondary  text-md">
             <span className='px-4 py-2 rounded-xl shadow-lg border-1 text-bg bg-primary  focus:outline-primary hover:text-primary hover:bg-bg transition-all duration-300'>
              {t('navbar.signup')}
            </span>
          </Link>
          </>

          }

      </div>

{/* ************************************************* */}


      <div >
        <Link
        style={{ fontFamily: "'Bagel Fat One', sans-serif" }}
         to="/" className="text-2xl font-black text-primary tracking-widest">
          BOOK EVENTS
        </Link>
        </div>




{/* ***************************************************** */}


{/* right side icons */}
<div className=' w-[25%] flex justify-evenly'>
          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowLangDropdown(prev => !prev)}
              className="text-secondary cursor-pointer"
            >
              <Globe size={30} />
            </button>

            {showLangDropdown && (
              <div className="absolute right-0 mt-2 bg-white shadow-md rounded-md py-1 w-28 z-50">
                <button className="block w-full text-left px-4 py-2 text-sm text-black"
                  onClick={() => changeLanguage('en')}
                >
                  English 🇬🇧
                </button>
                <button className="block w-full text-left px-4 py-2 text-sm text-black"
                  onClick={() => changeLanguage('es')}
                >
                  español 🇪🇸
                </button>
              </div>
            )}
          </div>

          {/* night mode button here */}

      <StyledWrapper>
      <label className="switch">
        <input id="input" type="checkbox" checked={darkMode} onChange={() => dispatch(toggleTheme())} />
        <div className="slider round">
          <div className="sun-moon">
            <svg id="moon-dot-1" className="moon-dot" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg id="moon-dot-2" className="moon-dot" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg id="moon-dot-3" className="moon-dot" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg id="light-ray-1" className="light-ray" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg id="light-ray-2" className="light-ray" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg id="light-ray-3" className="light-ray" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg id="cloud-1" className="cloud-dark" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg id="cloud-2" className="cloud-dark" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg id="cloud-3" className="cloud-dark" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg id="cloud-4" className="cloud-light" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg id="cloud-5" className="cloud-light" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg id="cloud-6" className="cloud-light" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
          </div>
          <div className="stars">
            <svg id="star-1" className="star" viewBox="0 0 20 20">
              <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
            </svg>
            <svg id="star-2" className="star" viewBox="0 0 20 20">
              <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
            </svg>
            <svg id="star-3" className="star" viewBox="0 0 20 20">
              <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
            </svg>
            <svg id="star-4" className="star" viewBox="0 0 20 20">
              <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
            </svg>
          </div>
        </div>
      </label>
    </StyledWrapper>


          { user && <button onClick={() => dispatch(logoutUser())}>
            <LogOut size={30} className="text-secondary hover:text-red-500 cursor-pointer" />
          </button>}
</div>

          
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

          {/* Links */}
          <div className="px-4 flex flex-col space-y-2 text-secondary">
             { user ? 
          <>
            <Link to="/events" className="text-secondary  text-xl">
           {t('navbar.events')}
          </Link> 
            <Link to="/cart" className="text-secondary  text-xl relative">
              <Tickets size={30} />
              <span className='absolute bottom-[60%] start-[10%] text-xs text-white bg-red-500 rounded-2xl px-1'>{cartCount}</span>
          </Link> 
              <button className="flex items-center space-x-2 hover:text-primary"  onClick={() => dispatch(logoutUser())}>
              <LogOut size={30} className="text-secondary hover:text-red-500 cursor-pointer" />
              <span>{t('navbar.logout')}</span>
            </button>
          </>
          
          : 
          <div className='flex flex-col gap-3'>
           <Link to="/events" className="text-secondary hover:text-primary text-xl">
           Events
          </Link>
          <Link to="/login" className="text-secondary hover:text-primary text-sm">
             <span className='px-2 py-1 rounded-xl shadow-lg border-1 text-bg bg-primary  focus:outline-primary hover:text-primary hover:bg-bg transition-all duration-300'>
              {t('navbar.login')}
            </span>
          </Link>
          <Link to="/Signup" className="text-secondary hover:text-primary text-sm">
             <span className='px-2 py-1 rounded-xl shadow-lg border-1 text-bg bg-primary  focus:outline-primary hover:text-primary hover:bg-bg transition-all duration-300'>
              {t('navbar.signup')}
            </span>
          </Link>
          </div>

          }

      {/* night mode button here */}

      <StyledWrapper>
      <label className="switch">
        <input id="input" type="checkbox" checked={darkMode} onChange={() => dispatch(toggleTheme())} />
        <div className="slider round">
          <div className="sun-moon">
            <svg id="moon-dot-1" className="moon-dot" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg id="moon-dot-2" className="moon-dot" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg id="moon-dot-3" className="moon-dot" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg id="light-ray-1" className="light-ray" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg id="light-ray-2" className="light-ray" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg id="light-ray-3" className="light-ray" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg id="cloud-1" className="cloud-dark" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg id="cloud-2" className="cloud-dark" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg id="cloud-3" className="cloud-dark" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg id="cloud-4" className="cloud-light" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg id="cloud-5" className="cloud-light" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
            <svg id="cloud-6" className="cloud-light" viewBox="0 0 100 100">
              <circle cx={50} cy={50} r={50} />
            </svg>
          </div>
          <div className="stars">
            <svg id="star-1" className="star" viewBox="0 0 20 20">
              <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
            </svg>
            <svg id="star-2" className="star" viewBox="0 0 20 20">
              <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
            </svg>
            <svg id="star-3" className="star" viewBox="0 0 20 20">
              <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
            </svg>
            <svg id="star-4" className="star" viewBox="0 0 20 20">
              <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
            </svg>
          </div>
        </div>
      </label>
    </StyledWrapper>
            
            {/* Language dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowLangDropdown(prev => !prev)}
                className="flex items-center space-x-2 "
              >
                <Globe size={20} />
                <span>{t('navbar.language')}</span>
              </button>

              {showLangDropdown && (
                <div className="mt-2 bg-white shadow-md rounded-md py-1 w-28 z-50">
                  <button className="block w-full text-left px-4 py-2 text-sm text-black"
                  onClick={() => changeLanguage('en')}
                  >
                    English 🇬🇧
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-sm text-black"
                  onClick={() => changeLanguage('es')}
                  >
                     español 🇪🇸
                  </button>
                </div>
              )}
            </div>


          </div>
        </div>
      )}
    </nav>
  );
}



const StyledWrapper = styled.div`
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  .switch #input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #2196f3;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    z-index: 0;
    overflow: hidden;
  }

  .sun-moon {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: yellow;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  #input:checked + .slider {
    background-color: black;
  }

  #input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  #input:checked + .slider .sun-moon {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
    background-color: white;
    -webkit-animation: rotate-center 0.6s ease-in-out both;
    animation: rotate-center 0.6s ease-in-out both;
  }

  .moon-dot {
    opacity: 0;
    transition: 0.4s;
    fill: gray;
  }

  #input:checked + .slider .sun-moon .moon-dot {
    opacity: 1;
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round .sun-moon {
    border-radius: 50%;
  }

  #moon-dot-1 {
    left: 10px;
    top: 3px;
    position: absolute;
    width: 6px;
    height: 6px;
    z-index: 4;
  }

  #moon-dot-2 {
    left: 2px;
    top: 10px;
    position: absolute;
    width: 10px;
    height: 10px;
    z-index: 4;
  }

  #moon-dot-3 {
    left: 16px;
    top: 18px;
    position: absolute;
    width: 3px;
    height: 3px;
    z-index: 4;
  }

  #light-ray-1 {
    left: -8px;
    top: -8px;
    position: absolute;
    width: 43px;
    height: 43px;
    z-index: -1;
    fill: white;
    opacity: 10%;
  }

  #light-ray-2 {
    left: -50%;
    top: -50%;
    position: absolute;
    width: 55px;
    height: 55px;
    z-index: -1;
    fill: white;
    opacity: 10%;
  }

  #light-ray-3 {
    left: -18px;
    top: -18px;
    position: absolute;
    width: 60px;
    height: 60px;
    z-index: -1;
    fill: white;
    opacity: 10%;
  }

  .cloud-light {
    position: absolute;
    fill: #eee;
    animation-name: cloud-move;
    animation-duration: 6s;
    animation-iteration-count: infinite;
  }

  .cloud-dark {
    position: absolute;
    fill: #ccc;
    animation-name: cloud-move;
    animation-duration: 6s;
    animation-iteration-count: infinite;
    animation-delay: 1s;
  }

  #cloud-1 {
    left: 30px;
    top: 15px;
    width: 40px;
  }

  #cloud-2 {
    left: 44px;
    top: 10px;
    width: 20px;
  }

  #cloud-3 {
    left: 18px;
    top: 24px;
    width: 30px;
  }

  #cloud-4 {
    left: 36px;
    top: 18px;
    width: 40px;
  }

  #cloud-5 {
    left: 48px;
    top: 14px;
    width: 20px;
  }

  #cloud-6 {
    left: 22px;
    top: 26px;
    width: 30px;
  }

  @keyframes cloud-move {
    0% {
      transform: translateX(0px);
    }

    40% {
      transform: translateX(4px);
    }

    80% {
      transform: translateX(-4px);
    }

    100% {
      transform: translateX(0px);
    }
  }

  .stars {
    transform: translateY(-32px);
    opacity: 0;
    transition: 0.4s;
  }

  .star {
    fill: white;
    position: absolute;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    animation-name: star-twinkle;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }

  #input:checked + .slider .stars {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }

  #star-1 {
    width: 20px;
    top: 2px;
    left: 3px;
    animation-delay: 0.3s;
  }

  #star-2 {
    width: 6px;
    top: 16px;
    left: 3px;
  }

  #star-3 {
    width: 12px;
    top: 20px;
    left: 10px;
    animation-delay: 0.6s;
  }

  #star-4 {
    width: 18px;
    top: 0px;
    left: 18px;
    animation-delay: 1.3s;
  }

  @keyframes star-twinkle {
    0% {
      transform: scale(1);
    }

    40% {
      transform: scale(1.2);
    }

    80% {
      transform: scale(0.8);
    }

    100% {
      transform: scale(1);
    }
  }`;
