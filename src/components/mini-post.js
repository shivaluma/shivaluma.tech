import { Link } from "gatsby"
import React from "react"

const MiniPost = ({ post, slug }) => {
  return (
    <Link href={slug}>
      <div className="flex items-center py-3 ">
        <time
          className="text-sm text-center text-gray-700"
          style={{ flex: "0 0 70px" }}
        >
          {post.date}
        </time>
        <h2 className="ml-4 text-lg font-medium text-gray-800 hover:underline">
          {post.title}
        </h2>
      </div>
    </Link>
  )
}

export default MiniPost
