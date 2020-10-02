import React from "react"
import { getTagColor } from "../utils/tag"

const Tag = ({ text }) => {
  const { bgcolor, color } = getTagColor(text.toLowerCase())
  return (
    <div
      className="font-semibold leading-4 lowercase bg-opacity-50 shadow-sm rounded-xl nowrap hover:bg-opacity-100"
      style={{
        padding: "3px 10px",
        margin: "3.2px",
        fontSize: "12.8px",
        background: bgcolor,
        color: color,
      }}
    >
      {text}
    </div>
  )
}

export default Tag
