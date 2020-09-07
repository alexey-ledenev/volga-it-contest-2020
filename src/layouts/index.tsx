import React from 'react'
import { Header } from '../components/header/header'
import '../styles/global.scss'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
