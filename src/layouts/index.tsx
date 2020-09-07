import React from 'react'

import '../styles/global.scss'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  )
}

export default Layout
