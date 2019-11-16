import React from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

function Header() {
  return (
    <header className="flex flex-shrink-0">
      <div className="flex-shrink-0 px-4 py-4 bg-red-900 h-16 w-64">
        <button className="block text-gray-300 inline-flex justify-around align-middle hover:text-red-100">
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=144&amp;h=144&amp;q=80" alt="" className="h-8 w-8 rounded-full object-cover border-white border-width-2" />
          <span className="px-3 py-1 sm:hidden md:block">Brenda Smith</span>
          <KeyboardArrowDownIcon className="my-1" />
        </button>
      </div>
      <div className="flex-1 flex justify-end pl-2 pr-6 bg-red-800">
        <nav className="flex">
          <div className="flex items-center">
            <div className="inline-block relative w-64">
              <select className="block appearance-none w-full text-gray-900 bg-red-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option>Liverpool St Station</option>
                <option>Greater Anglia</option>
                <option>MTR Elizabeth Line</option>
                <option>Ariva Rail London</option>
                <option>No Passenger Left Behind</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <KeyboardArrowDownIcon className="my-1" />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header;
