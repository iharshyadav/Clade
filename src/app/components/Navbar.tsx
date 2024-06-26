'use client'

import React from 'react'
import { BellRing, Briefcase, ChevronDown, HandCoins, Menu, MessageSquare, X } from 'lucide-react'
import Image from 'next/image'
import {  usePathname } from 'next/navigation'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  
  const params = usePathname()
  console.log(params)



  const menuItems = [
    {
      name: 'Jobs',
      href: "/jobs/jobsPreview",
      icon:<Briefcase size={20} />
    },
    {
      name: 'Messages',
      href: '/messages',
      icon:<MessageSquare size={20} />
    },
    {
      name: 'Payments',
      href: '/payments',
      icon:<HandCoins size={20} />
    },
  ]

  return (
    <div className="relative w-full bg-white border-b-[1px]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2 text-black">
          <span className="font-bold text-[#dc4a2e]">LOGO</span>
        </div>
        <div className="hidden lg:flex gap-3">
          <div className="flex items-center bg-[#dc4a2e] justify-center gap-1 text-white p-3 rounded-[30px]">
          <Briefcase size={20} />
          <p className='text-sm'>Jobs</p>
          </div>
          <ul className="inline-flex space-x-8 border-[1px] pr-5 p-1 pl-5 rounded-[30px] gap-7 shadow-[inset_0_1px_4px_rgba(0,0,0,0.4)]">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  <div className="flex items-center justify-center gap-1 p-3 rounded-[30px] bg-white">
                    {item.icon}
                    {item.name}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:flex lg:items-center lg:justify-center lg:gap-3">
          <BellRing size={18} className="text-black" />
          <div className="flex items-center justify-center ">
            <Image src="/Rectangle 5.png" alt="logo" width={20} height={20} />
            <ChevronDown className="text-black" size={13} />
          </div>
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span className="font-bold text-[#dc4a2e]">LOGO</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
                <button
                  type="button"
                  className="mt-4 w-full rounded-md bg-[#dc4a2e] px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Button
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
