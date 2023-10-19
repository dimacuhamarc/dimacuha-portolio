import { Menu } from '@headlessui/react'
import Body from "../template/Body";
import { FaAdjust } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export default function Contact() {
  return (
    <Body>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              Options
              <FaAdjust
                className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>
          

        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-black bg-opacity-20 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="#"
                  className={`${
                    active ? 'bg-violet-500 text-white' : 'text-white'
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  <span className="mr-2">
                    <FaAdjust
                      className="w-5 h-5"
                      aria-hidden="true"
                    />
                  </span>
                  Dark Mode
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Menu>
    </Body>
  );
}