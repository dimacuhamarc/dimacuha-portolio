import { AiFillHome } from 'react-icons/ai';
import { IoIosCodeWorking } from 'react-icons/io';
import { Menu } from '@headlessui/react'
import { SiMaterialdesignicons } from 'react-icons/si';
import { MdWork, MdOutlineWeb } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';

import Highlighted from '../template/Highlighted';

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="bg-slate-600 bg-opacity-90 backdrop-blur-sm top-4 inset-x-0 mx-auto fixed rounded-xl w-8/12 max-sm:w-full max-sm:top-0 z-50 shadow-lg shadow-slate-900 hover:scale-105">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className=" max-md:hidden text-center sm:text-left">
            <h1 className="text-2xl font-bold text-gray-100 sm:text-3xl">
              Hi, I'm Marc Dimacuha 👋
              <p className="mt-1.5 text-sm text-gray-10 rounded-2xl">
                <Highlighted>Frontend Web Developer 💻🎉</Highlighted>
              </p>
            </h1>
          </div>

          <div className="mt-4 flex flex-col max-md:flex-row gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <Link to="/">
              <button
                className={`inline-flex items-center justify-center gap-1.5 rounded-lg ${
                  location.pathname === '/' ? 'bg-slate-400' : 'bg-indigo-500'
                } px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-400 focus:outline-none focus:ring`}
                type="button"
              >
                <AiFillHome />
                <span className='max-md:hidden'>Home</span>
              </button>
            </Link>

            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className={`inline-flex w-full justify-center rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}>
                  <IoIosCodeWorking
                    className="mr-2 -ml-1 max-md:mr-0 max-md:-ml-1 h-5 w-5  text-white hover:text-violet-100"
                    aria-hidden="true"
                  />
                  <span className='max-md:hidden'>Projects</span>
                </Menu.Button>
              </div>
              <Menu.Items className="absolute right-0 w-44 mt-2 origin-top-right bg-slate-400 bg-opacity-20 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="web-development"
                        className={`${
                          active ? 'bg-indigo-500 text-white' : 'text-white'
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        <span className="mr-2">
                          <MdOutlineWeb
                            className="w-5 h-5"
                            aria-hidden="true"
                          />
                        </span>
                        Web Development
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="multimedia"
                        className={`${
                          active ? 'bg-indigo-500 text-white' : 'text-white'
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        <span className="mr-2">
                          <SiMaterialdesignicons
                            className="w-5 h-5"
                            aria-hidden="true"
                          />
                        </span>
                        Multimedia Design
                      </Link>
                    )}
                  </Menu.Item>
                  
                </div>
              </Menu.Items>
            </Menu>

            <Link to="/contact">
              <button
                className={`inline-flex items-center justify-center gap-1.5 rounded-lg ${
                  location.pathname === '/contact'
                    ? 'bg-slate-400'
                    : 'bg-indigo-500'
                } px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-400 focus:outline-none focus:ring`}
                type="button"
              >
                <MdWork /> Contact Me
              </button>
            </Link>
            <Link to="/career">
              <button
                className={`inline-flex items-center justify-center gap-1.5 rounded-lg ${
                  location.pathname === '/contact'
                    ? 'bg-slate-400'
                    : 'bg-indigo-500'
                } px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-400 focus:outline-none focus:ring`}
                type="button"
              >
                <MdWork /> Career
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
