import React from 'react'

const Carts = ({
  approvalQueue,
  onRemove,
  onClear,
  onApproveAll,
}) => {
  return (
    <div className="w-72">
      {/* Header */}
      <h3 className="text-lg  text-gray-500 font-semibold mb-3 flex justify-between">
        Approval Queue
        <span className="text-sm  bg-blue-200 rounded-full py-1 px-2.5">
          {approvalQueue.length}
        </span>
      </h3>

      {/* Empty state */}
      {approvalQueue.length === 0 && (
        <p className="text-sm text-gray-500 text-center py-6">
          No items pending approval.
        </p>
      )}

      {/* List */}
      {approvalQueue.length > 0 && (
        <>
          <ul className="space-y-2 max-h-150 overflow-y-auto pr-1">
            {approvalQueue.map((item) => (
              <li
                key={item.id}
                className="flex justify-between  items-center text-sm border border-gray-100 rounded px-2 py-2"
              >
                <div className='   flex gap-2 items-center'>
                  <div>
                 <img
                  src={item.img}
                  alt={item.name}
                  className="w-15 h-15 rounded object-cover mr-2 shrink-0"
                /></div>
                <div className='flex w-45 flex-1 h-20 flex-col p-3 gap-2 bg-gray-50 '>
                <span className="truncate text-center">{item.name}</span>
               <div className='flex gap-4 items-center justify-center'>
                <button
                  onClick={() => onRemove(item.id)}
                  className="text-xs font-semibold text-red-500 hover:bg-red-500/15 cursor-pointer drop-shadow-xl bg-red-500/20 py-1 px-2 rounded-full "
                >
               
                  remove
                
                </button>
                <button
                  onClick={() => onRemove(item.id)}
                  className="text-xs py-1 px-2 bg-green-500/20 cursor-pointer drop-shadow-xl rounded-full text-green-500 hover:bg-green-500/15 hover:text-green-700"
                >
                  Approve
                </button>
                </div>
                </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Action buttons */}
          <div className="mt-4 flex justify-center pt-6 gap-2">
            <button
              onClick={onClear}
              className="text-xs px-4 py-2 text-semibold cursor-pointer hover:drop-shadow-xl border rounded text-red-600 border-red-300 hover:bg-red-50"
            >
              Clear All
            </button>
            {/* workimng beacuse right now i am not sending to backend and usinf dlt logic */}
            <button
              onClick={onApproveAll}
              className="text-xs px-3 py-2 text-semibold cursor-pointer hover:drop-shadow-xl bg-emerald-600 text-white rounded hover:bg-emerald-700"
            >
              Approve All
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Carts