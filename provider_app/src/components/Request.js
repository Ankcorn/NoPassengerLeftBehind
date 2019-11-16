import React from 'react';
import TrainIcon from '@material-ui/icons/Train';
import WarningIcon from '@material-ui/icons/Warning';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import PhonelinkRingIcon from '@material-ui/icons/PhonelinkRing';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

function getStatus(helping, index) {
  try {
    if (!helping[index].staff) {
      return { text: 'Upcoming', color: 'blue' }
    }
    if (helping[index].done) {
      return { text: 'Recieved', color: 'green' }
    }
    return { text: `${helping[index].staff} Helping`, color: 'orange' }
  } catch (e) {
    return { text: 'Upcoming', color: 'blue' }
  }
}

function getHelpAtState(a, opts) {
  try {
    return opts[a.length]
  } catch (e) {
    return opts[0]
  }

}
function Request({ name, comment, phone, start, stop, pic, helping, toc, delayed, end_time, start_time }) {
  return (
    <article className="bg-white px-3 py-1 rounded-lg shadow flex w-full my-6 justify-between">
      <img src={pic} alt="" className="h-14 w-16 rounded-full object-cover border-white border-width-2 self-center" />
      <div className="px-4 self-center">
        <p className="p-1 text-lg font-bold">{name}</p>
        <p className="p-1">{comment}</p>
        <a className="p-1 text-blue-600" href="tel:07492094264">{phone} <PhonelinkRingIcon /></a>
      </div>
      <div className="flex-1 w-auto flex-no-wrap flex flex-grow">
        <div className="mx-4 flex justify-center inline-block w-auto items-center">
          <div className="text-gray-900 mx-2 my-2 font-bold"><div>{start}</div> <div> {start_time} </div>{delayed === "start" && <div className="flex"><WarningIcon className="text-red-600" /> Delayed</div>}</div>
          <span className={`rounded-full bg-${getStatus(helping, 0).color}-600 shadow p-2 inline-block w-auto mx-2`}>
            <AccountBalanceIcon />
          </span>
          <span className={`rounded-lg bg-${getStatus(helping, 0).color}-600 px-2 py-1 shadow`}>{getStatus(helping, 0).text}</span>
        </div>
        <div className="mx-6 flex justify-center items-center">
          <p className="text-gray-900 mx-2 my-2 font-bold">{toc}</p>
          <span className={`rounded-full bg-${getStatus(helping, 1).color}-600 shadow p-2 inline-block w-auto mx-2`}>
            <TrainIcon />
          </span>
          <span className={`rounded-lg bg-${getStatus(helping, 1).color}-600 px-2 py-1 shadow`}>{getStatus(helping, 1).text}</span>
        </div>
        <div className="mx-4 flex justify-center items-center">
          <div className="text-gray-900 mx-1 my-1 block font-bold"> <div>{stop}</div> <div> {end_time} </div>{delayed === "stop" && <div className="flex"><WarningIcon className="text-red-600" /> Delayed</div>}</div>
          <span className={`rounded-full bg-${getStatus(helping, 2).color}-600 shadow p-2 inline-block w-auto mx-2`}>
            <AccountBalanceIcon />
          </span>
          <span className={`rounded-lg bg-${getStatus(helping, 2).color}-600 px-2 py-1 shadow`}>{getStatus(helping, 2).text}</span>
        </div>
      </div>
      <button className="rounded-sm self-center bg-gray-800 text-white p-2 max-h-16">Help at {getHelpAtState(helping, [start, toc, stop])}</button>
      <button className="self-end hidden"><KeyboardArrowDownIcon /></button>

    </article >
  )
}


export default Request
