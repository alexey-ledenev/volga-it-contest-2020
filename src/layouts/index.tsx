import React, { useEffect, useRef, useState } from 'react'
import { Subject } from 'rxjs'
import { useHorizontalScroll } from '../hooks/useHorizontalScroll'
import { Header } from '../components/header/header'
import '../styles/global.scss'
import { throttleTime } from 'rxjs/operators'

export const ScrollCtx = React.createContext(new Subject<number>())

const Layout: React.FC = ({ children }) => {
  const [firstScreenOpened, setFirstScreenOpened] = useState(true)

  const mainEl = useRef<HTMLElement>(null)
  const scrollLeftSubject = useHorizontalScroll(mainEl)

  useEffect(() => {
    const s = scrollLeftSubject.pipe(throttleTime(50)).subscribe(scrollLeft => {
      setFirstScreenOpened(
        scrollLeft < (mainEl.current?.clientWidth || window.innerWidth) / 2
      )
    })
    return () => {
      s.unsubscribe()
    }
  }, [scrollLeftSubject])

  return (
    <>
      <Header colored={!firstScreenOpened} />
      <ScrollCtx.Provider value={scrollLeftSubject}>
        <main ref={mainEl}>{children}</main>
      </ScrollCtx.Provider>
    </>
  )
}

export default Layout
