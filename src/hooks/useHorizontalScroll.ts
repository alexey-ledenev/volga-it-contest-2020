import { useEffect, useState } from 'react'
import { isBrowser } from '../utils'

export const useHorizontalScroll = (
  elementRef?: React.RefObject<HTMLElement>
) => {
  const [scrollLeft, setScrollLeft] = useState(
    isBrowser() && elementRef?.current ? elementRef.current.scrollLeft : 0
  )
  useEffect(() => {
    function transformScroll(event: any) {
      if (!event.deltaY) {
        return
      }
      const diff = event.deltaY + event.deltaX
      event.currentTarget.scrollLeft += diff
      setScrollLeft(s => s + diff)
      event.preventDefault()
    }
    if (isBrowser()) {
      const element =
        elementRef?.current ||
        document.scrollingElement ||
        document.documentElement
      element.addEventListener('wheel', transformScroll)
      return () => element.removeEventListener('wheel', transformScroll)
    }
  }, [elementRef])

  return [scrollLeft]
}
