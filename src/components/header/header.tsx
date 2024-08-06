import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { cartCT } from "../../context/cart";
import { FaUser, FaSearch, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { useForm } from "react-hook-form";

type Props = {};

const Header = (props: Props) => {
  const { cart } = useContext(cartCT);
  const [growboxDropdownOpen, setGrowboxDropdownOpen] = useState(false);
  const [toepfeDropdownOpen, setToepfeDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate()
  const {register,handleSubmit} = useForm();
  const onSubmit = (data:any) =>{
    const {keywords} = data
    navigate (`/search?keyword=${keywords}`) 
    // console.log(data);
    
  }

  const toggleGrowboxDropdown = () => {
    setGrowboxDropdownOpen(!growboxDropdownOpen);
  };

  const toggleToepfeDropdown = () => {
    setToepfeDropdownOpen(!toepfeDropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  

  return (
    <>
     
      <header className="bg-gradient-to-r from-[#4E7C32] to-[#A7AF97]">
        <div className="flex items-center justify-between p-4 md:py-4">
          <div className="flex items-center ml-72 bg-white px-4 py-2 rounded w-full md:w-2/6">
            <form onSubmit={handleSubmit(onSubmit)} className="flex items-center w-full">
              <input
                type="text"
                {...register('keywords')}
                className="outline-none placeholder-gray-400 flex-1"
                placeholder="Suchen Sie nach Produkten, Marken und mehr"
                
                
              />
              <button className="ml-2 text-gray-400">
                <FaSearch className="h-5 w-5" />  
              </button>
            </form>
          </div>
          <div className="hidden md:flex items-center text-white ml-4 md:ml-40">
            <p>EN</p>
            <svg className="w-4 h-4 inline-block ml-1 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 12l6-6H4l6 6z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="hidden md:flex items-center text-white ml-4">
            <FaUser className="ml-4 md:ml-28" />
            <a href="/dashboard" className="ml-2">Account</a>
          </div>
          <div className="hidden md:flex items-center mr-40 text-white ml-4">
            <FaShoppingCart className="ml-4 md:ml-16" />
            <p className="ml-2">Cart ({cart.length})</p>
          </div>
          <button className="block md:hidden text-white" onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <hr className='bg-white w-10/12 mx-auto hidden md:block' />

        <nav className={`max-w-[1200px] mx-auto px-4 md:px-0 ${menuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className='flex flex-col md:flex-row flex-wrap gap-2 justify-center md:justify-start'>
            <li className="mx-2">
              <Link>
                <div className="block py-2 md:py-6 text-white">
                  Trang chủ
                  <svg className="w-4 h-4 inline-block ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 12l6-6H4l6 6z" clipRule="evenodd" />
                  </svg>
                </div>
              </Link>
            </li>
            <li className="relative mx-2">
              <div className="block py-2 md:py-6 text-white" onClick={toggleGrowboxDropdown}>
                Cửa hàng
                <svg className="w-4 h-4 inline-block ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 12l6-6H4l6 6z" clipRule="evenodd" />
                </svg>
              </div>
              {growboxDropdownOpen && (
                <div className="absolute left-0 mt-1 bg-white shadow-lg rounded-md">
                  <ul className="py-1">
                    <li><Link to={""} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Komplettsets</Link></li>
                  </ul>
                </div>
              )}
            </li>
            
            <li className="mx-2">
              <Link>
                <div className="block py-2 md:py-6 text-white">
                  danh mục
                  <svg className="w-4 h-4 inline-block ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 12l6-6H4l6 6z" clipRule="evenodd" />
                  </svg>
                </div>
              </Link>
            </li>
            <li className="relative mx-2">
              <div className="block py-2 md:py-6 text-white" onClick={toggleToepfeDropdown}>
                sản phẩm mới
                <svg className="w-4 h-4 inline-block ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 12l6-6H4l6 6z" clipRule="evenodd" />
                </svg>
              </div>
              {toepfeDropdownOpen && (
                <div className="absolute left-0 mt-1 bg-white shadow-lg rounded-md">
                  <ul className="py-1">
                    <li><Link to={""} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Eckige Töpfe</Link></li>
                    <li><Link to={""} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Runde Töpfe</Link></li>
                    <li><Link to={""} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Untersetzer</Link></li>
                    <li><Link to={""} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Pflanzschalen</Link></li>
                  </ul>
                </div>
              )}
            </li>
            <li className="mx-2">
              <Link>
                <div className="block py-2 md:py-6 text-white">
                  sản phẩm bán chạy
                  <svg className="w-4 h-4 inline-block ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 12l6-6H4l6 6z" clipRule="evenodd" />
                  </svg>
                </div>
              </Link>
            </li>
            <li className="mx-2">
              <Link>
                <div className="block py-2 md:py-6 text-white">
                 đại giảm giá
                  <svg className="w-4 h-4 inline-block ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 12l6-6H4l6 6z" clipRule="evenodd" />
                  </svg>
                </div>
              </Link>
            </li>
            <li className="mx-2">
              <Link to={'/register'}>
                <div className="block py-2 md:py-6 text-white">
                  đăng ký
                  
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      
    </>
  );
};

export default Header;
