import { useEffect } from 'react'

const isBrowser = (): boolean => typeof window !== 'undefined'

export const useHorizontalScroll = (
  elementRef?: React.RefObject<HTMLElement>
) => {
  useEffect(() => {
    if (isBrowser()) {
      const element =
        elementRef?.current ||
        document.scrollingElement ||
        document.documentElement
      element.addEventListener('wheel', transformScroll)
      return () => element.removeEventListener('wheel', transformScroll)
    }
  }, [elementRef])
}

function transformScroll(event: any) {
  if (!event.deltaY) {
    return
  }
  event.currentTarget.scrollLeft += event.deltaY + event.deltaX
  event.preventDefault()
}
