"use client"
import React, { useState, useEffect, useRef } from "react";
import data from '../content.json';

import { useRouter } from 'next/router'

import Link from '@component/link';
import Btn from '@component/btn';
import Icon from '@component/icon';

// IMAGE
import logo from '@images/logo.png';

// CSS
import styles from '@scss/header.module.scss';
import link from '@scss/link.module.scss';

const Header = () => {
    const router = useRouter()
    
    const [scrolled, setScrolled] = useState(false);
    const [scrollbar, setScrollbar] = useState(0);
    const [desktop, setDesktop] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const [subMenu, setSubMenu] = useState({
        active: false,
        top: null,
        left: null,
        width: null,
        size: null,
        items: []
    });

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY !== 0 ? true : false);
            let windowHeight = document.body.offsetHeight - window.innerHeight;
            let positionScroll = (window.scrollY / windowHeight) * 100;
            setScrollbar(positionScroll);
            setSubMenu(prevSubMenu => ({ ...prevSubMenu, active: false }));
        };
        window.addEventListener("scroll", handleScroll);
        const updateDevice = () => {
            setDesktop(window.innerWidth > 768 ? true : false);
        };
        updateDevice();
        window.addEventListener('resize', updateDevice);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener('resize', updateDevice);
        };
    }, []);

    const navigationItems = data.navigation.filter(item => item.category.includes('navigation'));
    const contactItems = data.navigation.filter(item => item.id.includes('contact'));

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const headerRef = useRef();

    const calculateSubMenuPosition = (item, id) => {
        const allSubMenu = [];
        if (id === "services") {
            data.services.offer.forEach((services) => {
                if (!allSubMenu.some(sub => sub.name === services.name)) {
                    allSubMenu.push({ name: services.name, url: services.link });
                }
            });
        }
        return {
            active: !subMenu.active,
            top: headerRef.current.clientHeight,
            left: item.target.getBoundingClientRect().left,
            width: 200,
            size: item.target.clientWidth,
            items: allSubMenu
        };
    }

    const toggleSubMenu = (event, id) => {
        const newSubMenu = calculateSubMenuPosition(event, id);
        setSubMenu(newSubMenu);
    }

    return (
        <header
            className={`${styles.header} ${!desktop ? styles.responsive : ''} ${scrolled ? styles.headerScrolled : ''}`}
            ref={headerRef}
        >
            <figure className={styles.logo}>
                <button onClick={() => router.push('/about')}>About</button>
                <Link url="/" default>
                    <img src={logo.src} alt={`${data.name}`} />
                </Link>
            </figure>
            <nav className={menuOpen ? styles.navOpen : ''}>
                {navigationItems.map((item, index) => {
                    return (
                        <div key={`navHeader-${index}`}>
                            {item.submenu ? (
                                <div
                                    className={`${link.link}`}
                                    onClick={(event) => toggleSubMenu(event, `${item.id}`)}
                                >
                                    {item.name}
                                </div>
                            ) : (
                                <Link url={`${item.link}`}>
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
                            top: subMenu.top,
                            left: subMenu.left,
                            width: `${subMenu.width}px`,
                            transform: `translateX(-${(subMenu.width - subMenu.size) / 2}px)`
                        }}
                        >
                        {subMenu.items.map( (item, index) => {
                            return (
                                <a href={item.url} key={index} className="link">
                                    {item.name}
                                </a>
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
            <div>
                {contactItems.map((item, index) => {
                    return (
                        <Btn key={`navHeader-${index}`} icon color="blue" url={`${item.link}`}>
                            {item.name}
                        </Btn>
                    )
                })}
                {!desktop && (
                    <div className={styles.menu} onClick={() => { toggleMenu(); }}>
                        <Icon value="menu" />
                    </div>
                )}
            </div>
            <div className={styles.scrollBar}>
                <span style={{ width: scrollbar + '%' }}></span>
            </div>
        </header>
    )
};

export default Header;