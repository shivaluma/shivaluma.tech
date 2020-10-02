import React from "react"
import Tag from "./tag"
const InlinePost = () => {
  return (
    <div className="w-full px-4 py-4 mb-2 rounded-xl hover:bg-gray-200">
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="flex flex-col mr-6">
          <span className="text-xs font-medium text-gray-600">
            Septemper 10, 2020
          </span>

          <h4 className="text-xl font-semibold text-black Muli">
            Understanding the Event Loop, Callbacks, Promise and Async/Await in
            Javascript.
          </h4>
        </div>

        <div className="flex flex-wrap items-center flex-shrink-0 w-full lg:w-1/3 mt-5 lg:mt-0">
          <Tag text="Javascript" />
          <Tag text="Asynchronous" />
          <Tag text="Asynchronous" />
          <Tag text="Asynchronous" />
          <Tag text="Webpack" />
        </div>
      </div>
    </div>
  )
}

export default InlinePost
