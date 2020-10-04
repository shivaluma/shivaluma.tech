import React from "react"

import GithubIcon from "../../assets/github.png"
import GatsbyIcon from "../../assets/gatsby.png"
import VercelIcon from "../../assets/vercel.svg"

const Footer = () => {
  return (
    <footer
      className="container px-4 py-5 text-center"
      style={{ color: "rgba(0,0,0,0.7)" }}
    >
      <ul className="flex flex-wrap justify-center list-none">
        <li className="px-8 py-3 rounded-lg cursor-pointer hover:bg-gray-1000">
          Blog
        </li>
        <li className="px-8 py-3 rounded-lg cursor-pointer hover:bg-gray-1000">
          Guide
        </li>
        <li className="px-8 py-3 rounded-lg cursor-pointer hover:bg-gray-1000">
          RSS
        </li>
        <li className="px-8 py-3 rounded-lg cursor-pointer hover:bg-gray-1000">
          Facebook
        </li>
        <li className="px-8 py-3 rounded-lg cursor-pointer hover:bg-gray-1000">
          LinkedIn
        </li>
        <li className="px-8 py-3 rounded-lg cursor-pointer hover:bg-gray-1000">
          Github
        </li>
      </ul>

      <nav className="flex flex-wrap justify-center mt-8">
        <a
          href="https://www.gatsbyjs.org/"
          title="Built with Gatsby"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GatsbyIcon} className="w-auto h-12 mx-4" alt="Gatsby" />
        </a>
        <a
          href="https://github.com/shivaluma"
          title="Open-source on GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GithubIcon} className="w-auto h-12 mx-4" alt="GitHub" />
        </a>
        <a
          href="https://www.vercel.com/"
          title="Hosted by Vercel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={VercelIcon} className="w-auto h-12 mx-4" alt="Vercel" />
        </a>
      </nav>
    </footer>
  )
}

export default Footer
