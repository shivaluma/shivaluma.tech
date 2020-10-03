import React, { useEffect } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
import Comment from "../components/comment"
deckDeckGoHighlightElement()
const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark

  const { previous, next } = pageContext

  const commentBox = React.createRef()

  useEffect(() => {
    const commentScript = document.createElement("script")

    commentScript.async = true
    commentScript.src = "https://utteranc.es/client.js"
    commentScript.setAttribute("repo", "shivaluma/comments") // CHANGE THIS if you're just going to clone this repo and use the code. Do not test your code using my repo.
    commentScript.setAttribute("issue-term", "pathname")
    commentScript.setAttribute("id", "utterances")
    commentScript.setAttribute("theme", "github-light")
    commentScript.setAttribute("crossorigin", "anonymous")
    if (commentBox && commentBox.current) {
      commentBox.current.appendChild(commentScript)
    } else {
      console.log(`Error adding utterances comments on: ${commentBox}`)
    }
  }, []) // eslint-disable-line

  return (
    <Layout>
      <SEO postPath={location.pathname} postNode={post} postSEO />
      <article
        className="container"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header className="mb-4">
          <h1 className="text-4xl font-semibold Muli " itemProp="headline">
            {post.frontmatter.title}
          </h1>
          <p className="text-sm text-gray-700">{post.frontmatter.date}</p>
        </header>
        <div className="relative flex mt-8">
          <div>
            <section
              className="flex-wrap flex-grow pt-3 overflow-hidden leading-7 whitespace-normal markdown-body"
              dangerouslySetInnerHTML={{ __html: post.html }}
              itemProp="articleBody"
            />

            <div id="comments" className="mt-8">
              <h2 className="w-full py-2 text-3xl font-semibold border-b">
                Comments
              </h2>
              <Comment commentBox={commentBox} />
            </div>
          </div>
          <div className="ml-3">
            <nav className="sticky top-0 flex-shrink-0 hidden w-64 py-2 text-lg font-semibold border-b border-gray-400 lg:block">
              Table of contents
            </nav>
          </div>
        </div>
      </article>
      <nav className="blog-post-nav">
        <ul>
          <li>
            {previous && (
              <Link aria-label="prev" to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link aria-label="next" to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
  }
`
