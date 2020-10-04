import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import TocItem from "./toc-item"

const Toc = ({ headers }) => {
  const [current, setCurrent] = useState("")
  useEffect(() => {
    const allHeadings = document.querySelectorAll("h1,h2,h3,h4,h5,h6")
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const id = entry.target.getAttribute("id")
          if (!id) return
          const element = document.querySelector(`a[id="${id}"]`)
          if (!element) return
          if (entry.isIntersecting) {
            setCurrent(id)
          }
        })
      },
      { rootMargin: `0% 0% -70% 0%` }
    )

    allHeadings.forEach(section => observer.observe(section))

    return () => allHeadings.forEach(section => observer.unobserve(section))
  }, [])

  return (
    <nav>
      <ul>
        {headers &&
          headers.map((header, index) => (
            <Link key={index} to={`#${header.id}`} id={header.id}>
              <TocItem header={header} current={current} />
            </Link>
          ))}
      </ul>
    </nav>
  )
}

export default Toc
