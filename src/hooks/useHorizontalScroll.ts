import { useEffect, useRef } from 'react'
import { Subject } from 'rxjs'
import { isBrowser } from '../utils'

export const useHorizontalScroll = (
  elementRef?: React.RefObject<HTMLElement>
) => {
  const scrollLeftSubject = useRef(new Subject<number>())
  useEffect(() => {
    function transformScroll(event: any) {
      if (!event.deltaY) {
        return
      }
      event.currentTarget.scrollLeft += event.deltaY + event.deltaX
      scrollLeftSubject.current.next(event.currentTarget.scrollLeft)
      event.preventDefault()
    }
    if (isBrowser()) {
      const element =
        elementRef?.current ||
        document.scrollingElement ||
        document.documentElement
      scrollLeftSubject.current.next(element.scrollLeft || 0)
      element.addEventListener('wheel', transformScroll)
      return () => element.removeEventListener('wheel', transformScroll)
    }
  }, [elementRef])

  return scrollLeftSubject.current
}
