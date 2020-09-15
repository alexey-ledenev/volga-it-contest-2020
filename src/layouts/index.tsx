import React, { useEffect, useRef, useState } from 'react'
import { isBrowser } from '../utils'
import { useHorizontalScroll } from '../hooks/useHorizontalScroll'
import { Header } from '../components/header/header'
import '../styles/global.scss'

const Layout: React.FC = ({ children }) => {
  const [firstScreenOpened, setFirstScreenOpened] = useState(true)

  const mainEl = useRef<HTMLElement>(null)
  const [scrollLeft] = useHorizontalScroll(mainEl)

  useEffect(() => {
    if (isBrowser()) {
      setFirstScreenOpened(
        scrollLeft < (mainEl.current?.clientWidth || window.innerWidth) / 2
      )
    }
  }, [scrollLeft])
  return (
    <>
      <Header colored={!firstScreenOpened} />
      <main ref={mainEl}>{children}</main>
    </>
  )
}

export default Layout
