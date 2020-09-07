import React from 'react'
import { Link } from 'gatsby'
import Logo from '../../svg/logo'
import MenuIcon from '../../svg/menu'
import './header.sass'

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center w-full max-w-screen-xxl mx-auto app-header">
      {renderButton(<MenuIcon />)}
      <Link to="/" title="Greenfield" className="text-white">
        <Logo />
      </Link>
      {renderButton(<span>En</span>)}
    </header>
  )
}

function renderButton(child: JSX.Element, onClick?: () => void) {
  return (
    <button className="btn items-center justify-center bg-white text-dark">
      {child}
    </button>
  )
}
