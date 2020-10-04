import React from "react"

const TocItem = ({ header, current }) => {
  return (
    <li
      className={`mt-1 ml-${(header.depth - 1) * 2} text-md ${
        header.id === current ? "selected-anchor" : ""
      }`}
    >
      {header.value}
    </li>
  )
}

export default TocItem
