import { Link } from "gatsby"
import React from "react"
import { FiSearch } from "react-icons/fi"

import Logo from "../../assets/logo.png"

const Header = ({ hideSearch }) => {
  return (
    <header className="bg-white">
      <div className="container">
        <div className="flex items-center justify-center py-8 lg:justify-between">
          <Link to="/">
            <img className="cursor-pointer" src={Logo} alt="Logo" />
          </Link>
          {!hideSearch && (
            <div className="relative hidden text-gray-800 lg:block">
              <input
                type="search"
                name="search"
                label="Search"
                placeholder="Search for post..."
                aria-labelledby="searchbar"
                className="h-10 px-8 pr-10 text-sm bg-gray-300 rounded-full focus:outline-none"
              />

              <span
                id="search-bar"
                type="submit"
                className="absolute top-0 right-0 mt-3 mr-4"
              >
                <FiSearch className="w-4 h-4" />
              </span>
            </div>
          )}
          <div className="items-end hidden lg:flex">
            <span className="px-4 text-sm font-semibold text-gray-800 cursor-pointer hover:text-blue-700">
              Home
            </span>
            <span className="px-4 text-sm font-semibold text-gray-800 cursor-pointer hover:text-blue-700">
              About Me
            </span>
            <span className="px-4 text-sm font-semibold text-gray-800 cursor-pointer hover:text-blue-700">
              Contact
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
