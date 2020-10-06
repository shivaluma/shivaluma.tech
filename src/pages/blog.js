import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import SEO from "../components/seo"

const Blog = () => {
  return (
    <Layout>
      <Helmet title="Blog - Shivaluma" />
      <SEO />
      <section className="container" aria-label="Blog">
        <div className="flex flex-col items-center justify-center w-full">
          <header className="text-4xl font-semibold text-center text-gray-800 Muli">
            Blog
          </header>
          <span className="mt-3 text-xl text-center text-gray-600">
            Articles, tutorials, guides, tips and many more!
          </span>

          <input
            className="w-full px-5 py-3 mx-4 mt-8 placeholder-gray-600 border border-gray-600 rounded-md text-md md:w-88 focus:outline-none"
            placeholder="Search for anythings..."
            type="text"
          ></input>
        </div>

        <div className="w-full"></div>
      </section>
    </Layout>
  )
}

export default Blog
