import React from "react"
import { Link } from "gatsby"
import Header from "./layouts/header"
import Footer from "./layouts/footer"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
