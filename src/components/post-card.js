import React from "react"
import { FiClock } from "react-icons/fi"
import { Category } from "../utils/category"
const PostCard = ({ post }) => {
  const data = Category[post.category]

  return (
    <div
      className="relative z-50 overflow-hidden duration-300 ease-in-out transform shadow-lg rounded-2xl w-72 h-88 hover:-translate-y-2"
      style={{
        background: data.bgcolor,
      }}
    >
      <div
        className="w-full h-full"
        style={{
          background: "linear-gradient( 0deg, #2d3748 0%, transparent 100% )",
        }}
      ></div>
      <div className="absolute top-0 left-0 z-10 w-full h-full bg-cover avatar-bg opacity-15"></div>
      <div className="absolute" style={{ top: 20, left: 20 }}>
        <span className="px-2 py-1 text-sm text-black bg-white rounded-md">
          {data.name}
        </span>
      </div>
      <data.icon
        className="absolute right-0 text-white opacity-10"
        style={{ top: 0, right: -40, fontSize: 300 }}
      />

      <div className="absolute bottom-0 left-0 right-0 z-20 w-full px-5 mb-4 text-3xl text-white whitespace-pre-wrap Muli">
        <h4>How to build a sample API with Node.js</h4>
        <div className="flex items-center mt-3 text-xs text-gray-400">
          <span>18-09-2020</span>

          <span className="py-1 ml-3">
            <FiClock className="inline" /> 1 min read
          </span>
        </div>
      </div>
    </div>
  )
}

export default PostCard
