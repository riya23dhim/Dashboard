import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { BsCheckCircle, BsExclamationCircle } from "react-icons/bs";
const Notification = () => {
  return (
  <div className="w-75 bg-white rounded-xl shadow-xl p-4 text-gray-700">
      
  {/* Header */}
  <div className="flex justify-between items-center mb-4">
    <h3 className="font-semibold text-lg">Notifications</h3>
    <button className="text-sm text-blue-600 hover:underline">Mark all as read</button>
  </div>

  {/* Notification List */}
  <div className="flex flex-col gap-4">

    {/* Single Notification */}
    <div className="flex items-start gap-3">
      <div className="mt-1 text-green-500">
        <BsCheckCircle />
      </div>
      <div className="text-sm">
        <p><span className="font-medium">Maintenance request</span> has been <span className="text-green-600 font-medium">Completed</span>.</p>
        <p className="text-xs text-gray-400 mt-1">5h ago</p>
      </div>
    </div>

    {/* Another Notification */}
    <div className="flex items-start gap-3">
      <div className="mt-1 text-blue-500">
        <BsCheckCircle />
      </div>
      <div className="text-sm">
        <p>Rent payment of <span className="font-medium">$1200</span> was <span className="text-green-600 font-medium">successful</span>.</p>
        <p className="text-xs text-gray-400 mt-1">7h ago</p>
      </div>
    </div>

    {/* Another Notification */}
    <div className="flex items-start gap-3">
      <div className="mt-1 text-yellow-500">
        <BsExclamationCircle />
      </div>
      <div className="text-sm">
        <p>Lease for <span className="font-medium">Apartment 308</span> is set to <span className="text-red-600 font-medium">expire</span> on <span className="font-medium">Oct 15, 2025</span>.</p>
        <p className="text-xs text-gray-400 mt-1">7h ago</p>
      </div>
    </div>

  </div>

  {/* Footer */}
  <div className="mt-4 text-sm text-center text-blue-600 hover:underline cursor-pointer">
    View all notifications
  </div>
</div>)
}
export default Notification ;
 