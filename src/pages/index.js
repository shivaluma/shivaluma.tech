import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Posts from "../components/posts"
import InlinePost from "../components/inline-post"
import Subscribe from "../components/subscribe"
import { Helmet } from "react-helmet"
const BlogIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <Helmet title="Shivaluma" />
      <SEO />
      <Bio />

      <Posts title="Latest posts.">
        {posts.map((post, index) => {
          const title = post.frontmatter.title || post.fields.slug
          const { date, tags } = post.frontmatter

          return (
            <Link
              key={index}
              to={post.fields.slug}
              itemProp="url"
              aria-label={post.frontmatter.title}
            >
              <InlinePost title={title} date={date} tags={tags} />
            </Link>
          )
        })}
      </Posts>
      <Subscribe />
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
          tags
        }
      }
    }
  }
`
