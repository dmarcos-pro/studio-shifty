"use client"
import React, { useState, useEffect, useRef } from "react"
import type { HeaderNav, HeaderSubMenu, HeaderSubMenuItem, HeaderService, HeaderSubMenuMap } from "@type/container"

import { usePathname } from 'next/navigation'

import { useQuery } from 'react-query'
import { fetchServices, fetchNav } from '@api/index'

import Link from 'next/link'
import Icon from '@component/icon'

// CSS
import styles from '@scss/header.module.scss'
import cta from '@scss/link.module.scss'

const Header = () => {
  const pathname = usePathname()

  const [scrolled, setScrolled] = useState<boolean>(false)
  const [scrollbar, setScrollbar] = useState<number>(0)
  const [desktop, setDesktop] = useState<boolean>(true)
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const [subMenu, setSubMenu] = useState<HeaderSubMenu>({
    active: false,
    top: null,
    left: null,
    width: null,
    size: null,
    items: []
  })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY !== 0 ? true : false)
      const windowHeight = document.body.offsetHeight - window.innerHeight
      const positionScroll = (window.scrollY / windowHeight) * 100
      setScrollbar(positionScroll)
      setSubMenu(prevSubMenu => ({ ...prevSubMenu, active: false }))
    }
    window.addEventListener("scroll", handleScroll)
    const updateDevice = () => {
      setDesktop(window.innerWidth > 768 ? true : false)
    }
    updateDevice()
    window.addEventListener('resize', updateDevice)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener('resize', updateDevice)
    }
  }, [])

  const { data: nav } = useQuery('nav', () => fetchNav('navigation'))

  const { data: services } = useQuery('services', () => fetchServices())

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const headerRef = useRef<any>()

  const calculateSubMenuPosition = (event: HTMLElement, id: string): {
    active: boolean
    top: number
    left: number
    width: number
    size: number
    items: HeaderSubMenuItem[]
  } => {
    const allSubMenu: HeaderSubMenuItem[] = []
    if (id === "services") {
      services.forEach((services: HeaderService) => {
        if (!allSubMenu.some(sub => sub.name === services.name)) {
          allSubMenu.push({ name: services.name, id: services.id })
        }
      })
    }
    return {
      active: !subMenu.active,
      top: headerRef.current.clientHeight,
      left: event.getBoundingClientRect().left,
      width: 200,
      size: event.clientWidth,
      items: allSubMenu
    }
  }

  const toggleSubMenu = (event: React.MouseEvent<HTMLDivElement>, id: string) => {
    const targetElement = event.currentTarget as HTMLDivElement
    const newSubMenu = calculateSubMenuPosition(targetElement, id)
    setSubMenu(newSubMenu)
  }


  return (
    <header
      className={`${styles.header} ${!desktop ? styles.responsive : ''} ${scrolled ? styles.headerScrolled : ''}`}
      ref={headerRef}
    >
      <nav className={menuOpen ? styles.navOpen : ''}>
        {nav && nav.map((item: HeaderNav, index: number) => {
          return (
            <div key={`navHeader-${index}`}>
              {item.submenu ? (
                <div
                  className={`link ${cta.link}`}
                  onClick={(event) => toggleSubMenu(event, `${item.id}`)}
                >
                  {item.name}
                </div>
              ) : (
                <Link href={`${item.link}`} className={`link ${cta.link} ${pathname === item.link ? styles.activeLink : ''}`}>
                  {item.name}
                </Link>

              )}
            </div>
          )
        })}
        {subMenu.active && (
          <div
            className={`${styles.subMenu}`}
            style={{
              top: subMenu.top !== null ? subMenu.top : undefined,
              left: subMenu.left !== null ? subMenu.left : undefined,
              width: subMenu.width !== null ? `${subMenu.width}px` : undefined,
              transform: subMenu.width !== null && subMenu.size !== null ? `translateX(-${(subMenu.width - subMenu.size) / 2}px)` : undefined
            }}
          >
            {subMenu.items.map((item: HeaderSubMenuMap, index) => {
              return (
                <Link href={`/services/${item.id}`} key={index} className={`link ${pathname === `/services/${item.id}` ? styles.activeLink : ''}`} onClick={(e) => { setSubMenu(prevSubMenu => ({ ...prevSubMenu, active: false })) }}>
                  {item.name}
                </Link>
              )
            })}
          </div>
        )}
        {!desktop && (
          <div onClick={() => { toggleMenu(); }}>
            <Icon value="close">
              Fermer
            </Icon>
          </div>
        )}
      </nav>
      {!desktop && (
        <div>
          <div className={styles.menu} onClick={() => { toggleMenu(); }}>
            <Icon value="menu" />
          </div>
        </div>
      )}
      <div className={styles.scrollBar}>
        <span style={{ width: scrollbar + '%' }}></span>
      </div>
    </header>
  )
};

export default Header;