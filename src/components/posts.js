import React from "react"

const Posts = ({ title, children }) => {
  return (
    <div className="container mt-12 mb-16">
      <div>
        <div className="pl-6 text-2xl font-extrabold border-l-4 border-gray-500 Muli">
          {title}
        </div>
        {/* <button className="px-3 py-1 ml-5 text-xs font-semibold text-gray-900 bg-gray-300 rounded-lg focus:outline-none">
          View All
        </button> */}
      </div>

      <div className="w-full mt-6">{children}</div>
    </div>
  )
}

export default Posts
