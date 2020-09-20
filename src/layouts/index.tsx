import React, { useEffect, useRef, useState } from 'react'
import { Subject } from 'rxjs'
import { isBrowser } from '../utils'
import { useHorizontalScroll } from '../hooks/useHorizontalScroll'
import { Header } from '../components/header/header'
import '../styles/global.scss'

export const ScrollCtx = React.createContext(new Subject<number>())

const Layout: React.FC = ({ children }) => {
  const [firstScreenOpened, setFirstScreenOpened] = useState(true)

  const mainEl = useRef<HTMLElement>(null)
  const [scrollLeft] = useHorizontalScroll(mainEl)

  const scrollLeftSubject = useRef(new Subject<number>())

  useEffect(() => {
    if (isBrowser()) {
      setFirstScreenOpened(
        scrollLeft < (mainEl.current?.clientWidth || window.innerWidth) / 2
      )
      scrollLeftSubject.current.next(scrollLeft)
    }
  }, [scrollLeft])

  return (
    <ScrollCtx.Provider value={scrollLeftSubject.current}>
      <Header colored={!firstScreenOpened} />
      <main ref={mainEl}>{children}</main>
    </ScrollCtx.Provider>
  )
}

export default Layout
