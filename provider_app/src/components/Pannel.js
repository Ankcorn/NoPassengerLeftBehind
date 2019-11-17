import React from 'react';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import AddBoxIcon from '@material-ui/icons/AddBox';
function Pannel() {
  return (
    <div className="z-30 inset-y-0 left-0 w-46 sm:hidden md:block bg-gray-900 border-r overflow-y-auto sm:translate-x-0 sm:transition-none -translate-x-full ease-in transition-medium">
      <div className="top-0 left-0 p-6 sm:hidden md:block flex flex-col">
        <button className="block text-gray-900 w-36 flex justify-between items-center my-4 bg-gray-400 px-2 py-1 rounded-lg">
          <AccessibilityNewIcon className="mx-2" />
          <span className="px-3 py-1 sm:hidden md:block">Assistance</span>
        </button>
        <a className="block text-gray-300 w-36 flex justify-between items-center hover:text-red-100 my-4 rounded-lg px-2 py-1 hover:bg-gray-700" href="https://passanger.netlify.com/">
          <AddBoxIcon className="mx-2" />
          <span className="px-3 py-1 sm:hidden md:block">Create Request</span>
        </a>
        <button className="block text-gray-300 w-36 flex justify-between items-center hover:text-red-100 my-4 rounded-lg px-2 py-1 hover:bg-gray-700">
          <SupervisorAccountIcon className="mx-2" />
          <span className="px-3 py-1 sm:hidden md:block">Employes</span>
        </button>
        <button className="block text-gray-300 w-36 flex justify-between items-center hover:text-red-100 my-4 rounded-lg px-2 py-1 hover:bg-gray-700">
          <AirportShuttleIcon className="mx-2" />
          <span className="px-3 py-1 sm:hidden md:block">Station Taxi</span>

        </button>
        <button className="block text-gray-300 w-36 flex justify-between items-center hover:text-red-100 my-4 rounded-lg px-2 py-1 hover:bg-gray-700">
          <SettingsApplicationsIcon className="mx-2" />
          <span className="px-3 py-1 sm:hidden md:block">Settings</span>
        </button>
        <a className="block text-gray-300 w-36 flex justify-between items-center hover:text-red-100 my-4 rounded-lg px-2 py-1 hover:bg-gray-700">
          <AddBoxIcon className="mx-2" />
          <span className="px-3 py-1 sm:hidden md:block">Create Request</span>
        </a>
      </div>
    </div>
  )
}

export default Pannel;
