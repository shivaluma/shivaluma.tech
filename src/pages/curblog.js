// import React, { useMemo } from "react"
// import { graphql } from "gatsby"
// import Helmet from "react-helmet"
// import Layout from "../components/Layout"
// import SEO from "../components/SEO"
// import { getSimplifiedPosts } from "../utils/helpers"
// import config from "../utils/config"

// export default function BlogIndex({ data }) {
//   const posts = data.allMarkdownRemark.edges
//   const simplifiedPosts = useMemo(() => getSimplifiedPosts(posts), [posts])

//   return (
//     <Layout>
//       <Helmet title={`Blog | ${config.siteTitle}`} />
//       <SEO customDescription="Các bài viết, thủ thuật, hướng dẫn và nhiều thứ hay ho khác :D." />
//       <header>
//         <div className="container text-center">
//           <h1>Blog</h1>
//           <p className="subtitle">
//             Các bài viết, hướng dẫn, thủ thuật, suy ngẫm và vô số thứ khác..
//           </p>
//         </div>
//       </header>
//       <section>
//         <div className="container">
//           {/* <Search posts={simplifiedPosts} {...props} /> */}
//         </div>
//       </section>
//     </Layout>
//   )
// }

// export const pageQuery = graphql`
//   query BlogQuery {
//     allMarkdownRemark(
//       sort: { fields: [frontmatter___date], order: DESC }
//       filter: { frontmatter: { template: { eq: "post" } } }
//     ) {
//       edges {
//         node {
//           id
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             title
//             tags
//             categories
//           }
//         }
//       }
//     }
//   }
// `
