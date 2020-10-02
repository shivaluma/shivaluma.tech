import React from "react"
import { Link } from "gatsby"
import Header from "./layouts/header"
import Footer from "./layouts/footer"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Helmet>
        <html lang="en" />
      </Helmet>

      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
