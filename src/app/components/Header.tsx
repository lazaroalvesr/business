'use client'

import Image from "next/image";
import { useState } from 'react'


export default function Header() {
  const [ativo, setAtivo] = useState(false)

  function ativarMenu() {
    setAtivo((ativo) => !ativo)
  }

  return (
    <div>
      <div className="max-w-7xl m-auto">
        <header className="flex mt-5 items-center mx-4 lg:mx-0 justify-between">
          <div className="flex items-center">
            <Image
              src={'/img/icon.png'}
              alt="ola"
              width={56}
              height={12}
            />
            <p className="text-xl pl-4">BiznesZone</p>
          </div>
          <nav>
            <ul className={`flex absolute lg:static lg:h-auto left-0 top-20 
          ${ativo ? 'w-full h-56  justify-center flex-col items-center bg-gray-50 z-50' : 'h-0 overflow-hidden'}`}>
              <li className="p-2 text-purple-600 underline text-lg cursor-pointer">Start</li>
              <li className="p-2 text-lg cursor-pointer">About Us</li>
              <li className="p-2 text-lg cursor-pointer">Services</li>
              <li className="p-2 text-lg cursor-pointer">Contact</li>
            </ul>
            <button className="lg:hidden flex" onClick={() => ativarMenu()}>
              {ativo ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              }
            </button>
          </nav>
        </header>
      </div>
    </div>
  )
}
