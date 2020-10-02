import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Posts from "../components/posts"
import PostSlider from "../components/slider"
import InlinePost from "../components/inline-post"
import Subscribe from "../components/subscribe"
import Footer from "../components/layouts/footer"
const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <Bio />
      <Posts title="Featured this month">
        <PostSlider
          posts={[
            {
              category: "gatsby",
            },
            {
              category: "react",
            },
            {
              category: "javascript",
            },
            {
              category: "react",
            },
          ]}
        />
      </Posts>

      <Posts title="Latest posts.">
        <InlinePost />
        <InlinePost />
        <InlinePost />
        <InlinePost />
        <InlinePost />
        <InlinePost />
        <InlinePost />
        <InlinePost />
        <InlinePost />
        <InlinePost />
        <InlinePost />
        <InlinePost />
      </Posts>

      <Subscribe />
      <Footer />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
