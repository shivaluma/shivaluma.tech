import React from "react"
import Tag from "./tag"
const InlinePost = ({ title, date, tags, time }) => {
  return (
    <article
      itemScope
      itemType="http://schema.org/Article"
      className="w-full px-4 py-4 mb-2 cursor-pointer rounded-xl hover:bg-gray-200"
    >
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="flex flex-col flex-grow mr-6">
          <div className="flex items-center text-xs font-medium text-gray-700">
            <span>{date}</span>
            <span className="mx-2">&bull;</span>
            <span>{time}</span>
          </div>

          <h4 className="text-xl font-semibold text-black Muli">{title}</h4>
        </div>

        <div className="flex flex-wrap items-center flex-shrink-0 w-full mt-5 lg:w-1/3 lg:mt-0">
          {tags && tags.map((tag, index) => <Tag key={index} text={tag} />)}
        </div>
      </div>
    </article>
  )
}

export default InlinePost
