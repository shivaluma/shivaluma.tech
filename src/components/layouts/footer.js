import React from "react"

import GithubIcon from "../../assets/github.png"
import GatsbyIcon from "../../assets/gatsby.png"
import VercelIcon from "../../assets/vercel.svg"

const Footer = () => {
  return (
    <footer
      className="text-center py-5 container px-4"
      style={{ color: "rgba(0,0,0,0.7)" }}
    >
      <ul className="list-none flex justify-center flex-wrap">
        <li className="px-8 py-3 rounded-lg hover:bg-gray-1000 cursor-pointer">
          Blog
        </li>
        <li className="px-8 py-3 rounded-lg hover:bg-gray-1000 cursor-pointer">
          Guide
        </li>
        <li className="px-8 py-3 rounded-lg hover:bg-gray-1000 cursor-pointer">
          RSS
        </li>
        <li className="px-8 py-3 rounded-lg hover:bg-gray-1000 cursor-pointer">
          Facebook
        </li>
        <li className="px-8 py-3 rounded-lg hover:bg-gray-1000 cursor-pointer">
          LinkedIn
        </li>
        <li className="px-8 py-3 rounded-lg hover:bg-gray-1000 cursor-pointer">
          Github
        </li>
      </ul>

      <nav className="flex justify-center mt-8 flex-wrap">
        <a
          href="https://www.gatsbyjs.org/"
          title="Built with Gatsby"
          target="_blank"
          rel="noopener noreferrer"
          className="img"
        >
          <img src={GatsbyIcon} className="h-12 w-auto mx-4" alt="Gatsby" />
        </a>
        <a
          href="https://github.com/shivaluma"
          title="Open-source on GitHub"
          target="_blank"
          rel="noopener noreferrer"
          className="img"
        >
          <img src={GithubIcon} className="h-12 w-auto mx-4" alt="GitHub" />
        </a>
        <a
          href="https://www.vercel.com/"
          title="Hosted by Vercel"
          target="_blank"
          rel="noopener noreferrer"
          className="img"
        >
          <img
            src={VercelIcon}
            className="h-12 w-auto mx-4"
            className="footer-img"
            alt="Vercel"
          />
        </a>
      </nav>
    </footer>
  )
}

export default Footer
