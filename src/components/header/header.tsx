import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Transition } from 'react-transition-group'
import Logo from '../../svg/logo'
import BurgerMenuSvg from '../../svg/menu'
import CloseSvg from '../../svg/close'
import TwitterSvg from '../../svg/twitter'
import InstagramSvg from '../../svg/instagram'
import VkSvg from '../../svg/vk'
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

export const Header: React.FC<{ colored?: boolean }> = ({ colored }) => {
  const [menuOpened, setMenuOpened] = useState(false)
  const [lang, setLang] = useState<'en' | 'ru'>('en') // contains value for change (if lang === 'en', then current lang is 'ru')
  const toggleMenu = () => setMenuOpened(x => !x)
  const changeLang = () => setLang(x => (x === 'en' ? 'ru' : 'en'))
  const MenuIcon = menuOpened ? CloseSvg : BurgerMenuSvg
  return (
    <header className="flex justify-between items-center w-full max-w-screen-xxl mx-auto app-header">
      {renderButton(<MenuIcon className="app-header__menu-icon" />, toggleMenu)}
      <Link
        to="/"
        title="Greenfield"
        className={colored ? 'text-dark-green' : 'text-white'}
      >
        <Logo className="app-header__logo-icon" />
      </Link>
      {renderButton(<span>{lang}</span>, changeLang)}
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
          className={`flex items-center justify-center bg-white app-header__menu ${state}`}
        >
          <div className="flex app-header__menu-wrapper">
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
              <div className="app-header__menu-subitems">
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
              </div>
            </nav>
            <div>
              <h3 className="h3 app-header__menu-item">Контакты</h3>
              <p className="txt2 app-header__menu-lead">
                GREENFIELD TEA Ltd., London, W1U 2HQ, UK
              </p>
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
              <div className="app-header__menu-soc">
                <h5 className="h5">Мы в социальных сетях</h5>
                <div className="flex my-5">
                  <a
                    href="/#"
                    className="text-green bg-white hover:bg-green hover:text-white"
                  >
                    <TwitterSvg />
                  </a>
                  <a
                    href="/#"
                    className="text-green bg-white hover:bg-green hover:text-white"
                  >
                    <InstagramSvg />
                  </a>
                  <a
                    href="/#"
                    className="text-green bg-white hover:bg-green hover:text-white"
                  >
                    <VkSvg />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Transition>
  )
}
