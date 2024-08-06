import React, { useContext } from 'react'
import { ActionCT } from '../../context/action'
import Login from '../user/login'
import Register from '../user/register'

type Props = {}

const Footer = (props: Props) => {
  const {userAction} = useContext(ActionCT)
  return (
    <>
    {(userAction.isLogin)&&
    <><Login/></>
    }
    {/* {
    (userAction.isRegister)&&
    <><Register/></>
    } */}
    <div className=" bg-gradient-to-br from-[#fff] to-[#DCEED9] pb-20 pt-10">
        <div className="">
          <h1 className="text-3xl font-bold font-baloo text-[#505F4E] ml-72">
            Etwas abonnieren *  <br />_ Unser Newsletter<span className="text-4xl "></span>
          </h1>
          <div className="mt-4 flex">
            <p className="text-[#555555] ml-80">
              Get weekly update about our <br /> product on your email, no spam <br /> guaranteed we promise <span role="img" aria-label="peace">✌️</span>
            </p>
            <div className="mt-4 flex ml-40">
              <div className="relative flex items-center w-full">
                <span className="absolute left-3 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.94 3.06a8.002 8.002 0 0112.12 0 7.978 7.978 0 011.756 6.182l-.066.192A5.992 5.992 0 0110 18H6.888A7.978 7.978 0 015 12.244a8.035 8.035 0 01-2.06-9.182zM14.612 9.95l-.188-.05a1.5 1.5 0 10-1.287 2.787l.188.05a1.5 1.5 0 101.287-2.787zM10.5 4a1 1 0 100 2 1 1 0 000-2zm-2 4a1 1 0 100 2 1 1 0 000-2zm2.5 4a1 1 0 110 2 1 1 0 010-2zm-3.5 2a1 1 0 100 2 1 1 0 000-2zm5-4a1 1 0 100 2 1 1 0 000-2zm-2.5 2a1 1 0 110 2 1 1 0 010-2zm-3 2a1 1 0 100 2 1 1 0 000-2zm5.5 1a1 1 0 110 2 1 1 0 010-2zM8.5 12a1 1 0 100 2 1 1 0 000-2z" />
                  </svg>
                </span>
                <input
                  type="email"
                  placeholder="youremail123@gmail.com"
                  className="w-full pr-64 py-3 pl-10 border rounded-md focus:outline-none focus:ring-2 "
                />
                <button className='bg-[#656C66] top-4 right-32 p-4 relative '>
                <div className="text-white text-xs font-semibold font-['Poppins'] tracking-widest">ABONNIEREN</div>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
      <footer className='bg-[#053D29] p-4 py-10 flex' >
        <div className='ml-20 mt-11'>
          <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing <br />
            elit, sed do eiusmod tempor incididunt ut labore et <br />
            dolore magna aliqua</p>
          <div className="flex items-center space-x-4 mt-6">
            

          </div>
        </div>
        <div className='ml-40 text-white'>
          <ul>
            <h4>Um</h4>
            <li className='mt-3'>Kontaktiere uns</li>
            <li className='mt-3'>Über uns</li>
            <li className='mt-3'>Karriere</li>
            <li className='mt-3'>Unternehmensinformationen </li>
          </ul>
        </div>
        <div className='text-white ml-20'>
          <ul>
            <h4>Hilfe</h4>
            <li className='mt-3'>Unsere Produzenten</li>
            <li className='mt-3'>Zahlung</li>
            <li className='mt-3'>Versand</li>
            <li className='mt-3'>Stornierung & Rückgabe </li>
            <li className='mt-3'>Verstoß melden</li>
          </ul>
        </div>
        <div className='text-white ml-20'>
          <ul>
            <h4>pOLITIK</h4>
            <li className='mt-3'>Rücknahmegarantie</li>
            <li className='mt-3'>Nutzungsbedingungen</li>
            <li className='mt-3'>Sicherheit</li>
            <li className='mt-3'>Privatsphäre </li>
            <li className='mt-3'>Seitenverzeichnis</li>
          </ul>
        </div>


      </footer>
      <div className='bg-[#062F21] p-4 flex gap-96 justify-center'>
        <p className='text-white '> 2023 hood.de , Inc.</p>
        
        <p className='text-white'>Scroll to top</p>

      </div>
    </>
  )
}

export default Footer