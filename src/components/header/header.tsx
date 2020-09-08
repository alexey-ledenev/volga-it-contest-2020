import React from 'react'
import { Link } from 'gatsby'
import Logo from '../../svg/logo'
import MenuIcon from '../../svg/menu'
import './header.sass'

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center w-full max-w-screen-xxl mx-auto app-header">
      {renderButton(<MenuIcon className="app-header__menu-icon" />)}
      <Link to="/" title="Greenfield" className="text-white">
        <Logo className="app-header__logo-icon" />
      </Link>
      {renderButton(<span>En</span>)}
    </header>
  )
}

function renderButton(child: JSX.Element, onClick?: () => void) {
  return (
    <button className="btn bg-white text-dark app-header__btn">{child}</button>
  )
}
