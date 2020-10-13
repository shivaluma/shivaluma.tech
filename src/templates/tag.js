import React, { useEffect, useMemo } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Helmet from "react-helmet"
import config from "../utils/config"
import MiniPost from "../components/mini-post"

const TagTemplate = ({ data, pageContext, location }) => {
  const { tag } = pageContext
  const { totalCount, nodes } = data.allMarkdownRemark

  return (
    <Layout>
      <Helmet title={`Posts tagged: ${tag} | ${config.siteTitle}`} />
      <SEO />

      <header>
        <div className="container">
          <h1 className="text-xl Muli lg:text-3xl">Posts tagged: {tag}</h1>

          <p className="text-xl text-gray-800">
            <span className="text-2xl font-semibold text-blue-600">
              {totalCount}{" "}
            </span>
            posts found.
          </p>
        </div>
      </header>
      <section className="container mt-6">
        {nodes.map((post, index) => (
          <MiniPost
            key={index}
            post={post.frontmatter}
            slug={post.fields.slug}
          />
        ))}
      </section>
    </Layout>
  )
}

export default TagTemplate

export const pageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount

      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD")
          title
          tags
        }
      }
    }
  }
`
