import React from 'react'
import { Link } from 'gatsby'
import { Transition } from 'react-transition-group'
import Logo from '../../svg/logo'
import BurgerMenuSvg from '../../svg/menu'
import CloseSvg from '../../svg/close'
import './header.sass'

const menuItems = [
  { title: 'Философия', path: '#' },
  { title: 'Коллекции', path: '#' },
  { title: 'Мой Greenfield', path: '#' },
  { title: 'Что нового', path: '#' },
] as const

const menuSubitems = [
  { title: 'Представительства в мире', path: '#' },
  { title: 'Оптовым клиентам', path: '#' },
  { title: 'Обратная связь', path: '#' },
] as const

export const Header: React.FC = () => {
  const [menuOpened, setMenuOpened] = React.useState(false)
  const toggleMenu = () => setMenuOpened(x => !x)
  const MenuIcon = menuOpened ? CloseSvg : BurgerMenuSvg
  return (
    <header className="flex justify-between items-center w-full max-w-screen-xxl mx-auto app-header">
      {renderButton(<MenuIcon className="app-header__menu-icon" />, toggleMenu)}
      <Link to="/" title="Greenfield" className="text-white">
        <Logo className="app-header__logo-icon" />
      </Link>
      {renderButton(<span>En</span>)}
      {renderMenu(menuOpened)}
    </header>
  )
}

function renderButton(child: JSX.Element, onClick?: () => void) {
  return (
    <button
      className="btn bg-white text-dark app-header__btn"
      onClick={onClick}
    >
      {child}
    </button>
  )
}

function renderMenu(opened: boolean) {
  return (
    <Transition in={opened} timeout={500}>
      {state => (
        <div
          className={`flex items-center justify-center bg-white app-header__menu-box ${state}`}
        >
          <nav>
            {menuItems.map(itm => (
              <a
                key={itm.title}
                href={itm.path}
                title={itm.title}
                className="h3 app-header__menu-item"
              >
                {itm.title}
              </a>
            ))}
            {menuSubitems.map(itm => (
              <a
                key={itm.title}
                href={itm.path}
                title={itm.title}
                className="txt2 app-header__menu-item_small"
              >
                {itm.title}
              </a>
            ))}
          </nav>
          <div>
            <h3 className="h3">Контакты</h3>
            <p className="txt2">GREENFIELD TEA Ltd., London, W1U 2HQ, UK</p>
            <div>
              <p className="txt2">
                Email:&nbsp;
                <a href="mailto:yourmail@greenfield.uk">
                  yourmail@greenfield.uk
                </a>
              </p>
              <p className="txt2">
                Phone:&nbsp;
                <a href="tel:+735687359868">+7 (356) 873 598 68</a>
              </p>
              <p className="txt2">
                Fax:&nbsp;
                <a href="fax:+735676594534">+7 (356) 765 945 34</a>
              </p>
            </div>
            <div>
              <h5 className="h5">Мы в социальных сетях</h5>
              <div className="flex">
                <a href="#">twit</a>
                <a href="#">inst</a>
                <a href="#">vk</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </Transition>
  )
}
