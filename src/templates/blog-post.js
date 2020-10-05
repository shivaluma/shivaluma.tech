import React, { useEffect, useMemo } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
import Comment from "../components/comment"
import slugs from "github-slugger"
import Toc from "../components/toc"
import ShareButtons from "../components/sharebuttons"
const preprocessHeading = h => {
  const cleanValue = h.value
    .replace(/<(\/)?[^>]+>/g, "")
    .replace(/\s{2,}/g, " ")
  return {
    depth: h.depth,
    value: cleanValue,
    id: slugs.slug(cleanValue),
  }
}

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark

  const { previous, next } = pageContext
  const headings = useMemo(() => {
    return data.markdownRemark.headings
      .filter(h => h.depth >= 1 && h.depth <= 6)
      .map(preprocessHeading)
  }, [data.markdownRemark.headings])

  const commentBox = React.createRef()

  useEffect(() => {
    deckDeckGoHighlightElement()
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
          <time className="text-sm text-gray-700">{post.frontmatter.date}</time>
          {post.frontmatter.description && (
            <p
              className="mt-5 text-xl font-light text-gray-600"
              aria-label="descriptions"
            >
              {post.frontmatter.description}
            </p>
          )}
        </header>
        <div className="relative flex w-full mt-8">
          <div className="flex flex-col flex-wrap w-full">
            <section
              className="w-full pt-3 overflow-hidden leading-7 break-words markdown-body"
              dangerouslySetInnerHTML={{ __html: post.html }}
              itemProp="articleBody"
            />

            <div className="w-full py-2 flex flex-col mt-5">
              <span className="text-md italic font-medium mb-2">
                Love this post ? Share it!
              </span>
              <ShareButtons
                title={post.frontmatter.title}
                url={location.href}
              />
            </div>

            <div id="comments" className="mt-8">
              <h2 className="w-full py-2 text-3xl font-semibold border-b">
                Comments
              </h2>
              <Comment commentBox={commentBox} />
            </div>
          </div>
          <div className="ml-5">
            <nav className="sticky top-0 flex-shrink-0 hidden w-64 lg:block">
              <div className="w-full py-2 text-lg font-semibold border-b border-gray-400">
                Table of contents
              </div>
              <Toc headers={headings} />
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
      headings {
        depth
        value
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
  }
`
