/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { FiGithub, FiLinkedin } from "react-icons/fi"
import Avatar from "../assets/shiro.jpeg"
const Bio = () => {
  return (
    <div className="relative bg-white">
      <div className="container">
        <div className="flex w-full pt-8 pb-16">
          <div className="w-full text-center lg:text-left lg:w-1/2 Muli ">
            <h1 className="text-4xl font-extrabold lg:text-5xl">
              Hi, I'm <span className="text-blue-700">Viet Thanh</span>.
            </h1>

            <h2 className="text-3xl font-extrabold lg:text-4xl">
              Full-stack Developer.
            </h2>

            <h3 className="mt-6 text-lg font-semibold text-gray-700 lg:text-xl">
              Specialized in Javascript, React, NextJS, NodeJS.
            </h3>

            <div className="mt-8 font-extrabold">
              <button className="inline-flex items-center px-5 py-3 text-black bg-white border-2 border-black rounded-lg hover:bg-black hover:text-white focus:outline-none text-md Muli">
                <FiGithub className="mr-3" /> Github
              </button>

              <button className="inline-flex items-center px-5 py-3 ml-6 text-blue-800 bg-white border-2 border-blue-800 rounded-lg hover:text-white hover:bg-blue-800 focus:outline-none text-md Muli">
                <FiLinkedin className="mr-3" /> LinkedIn
              </button>
            </div>
          </div>
          <div className="relative flex-1 hidden w-1/2 lg:block">
            <div
              className="absolute top-0 left-0 w-full transform translate-y-1/2 opacity-25 avatar-bg"
              style={{ height: "50%" }}
            ></div>

            <div
              className="absolute top-0 z-10 transform -translate-x-1/2"
              style={{ left: "50%" }}
            >
              <img
                src={Avatar}
                className="w-64 h-64 rounded-full shadow-xl"
                alt="Shivaluma"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bio
