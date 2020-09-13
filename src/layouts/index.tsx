import React from 'react'
import { Header } from '../components/header/header'
import { useHorizontalScroll } from '../hooks/useHorizontalScroll'
import '../styles/global.scss'

const Layout: React.FC = ({ children }) => {
  const mainEl = React.useRef<HTMLElement>(null)
  useHorizontalScroll(mainEl)
  return (
    <>
      <Header />
      <main ref={mainEl}>{children}</main>
    </>
  )
}

export default Layout
