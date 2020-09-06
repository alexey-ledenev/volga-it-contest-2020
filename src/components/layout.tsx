import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <header>{data.site.siteMetadata.title}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}
      </footer>
    </>
  )
}

export default Layout
