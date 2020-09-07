import React from 'react'

const Menu: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg
    width="22"
    height="12"
    viewBox="0 0 22 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="22" height="2" rx="1" fill="currentColor" />
    <rect y="5" width="22" height="2" rx="1" fill="currentColor" />
    <rect y="10" width="13.619" height="2" rx="1" fill="currentColor" />
  </svg>
)

export default Menu
