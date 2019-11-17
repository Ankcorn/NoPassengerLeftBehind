import React from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
const staff = gql`
query {
  staffById(id: 1) {
    name
    pic
    phone
    id
  }
}
`
function Button() {
  const { data, loading } = useQuery(staff)
  if (loading) {
    return <div className="w-56"></div>;
  }
  return (
    <button className="block text-gray-300 flex justify-around align-middle hover:text-red-100">
      <img src={data.staffById.pic} alt="" className="h-8 w-8 rounded-full object-cover border-white border-width-2 mx-4" />
      <span className="px-3 py-1 sm:hidden md:block">{data.staffById.name}</span>
      <KeyboardArrowDownIcon className="my-1" />
    </button>
  )
}
function Header() {
  return (
    <header className="flex flex-shrink-0">
      <div className="flex-shrink-0 px-2 py-2 bg-red-900 h-12 sm:w-24 md:w-56">
        <Button />
      </div>
      <div className="flex-1 flex justify-end pl-2 pr-6 bg-red-800">
        <nav className="flex">
          <div className="flex items-center">
            <div className="inline-block relative w-64">
              <select className="block appearance-none w-full shadow text-gray-900 bg-red-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
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
