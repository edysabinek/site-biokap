'use client';

import React, { useState } from 'react';
import {navLinks} from "./navLinks";
import Link from 'next/link';

const MobileMenu = () => {
    const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
    const [openThirdLevelKey, setOpenThirdLevelKey] = useState<string | null>(null);

    const toggleMenu = (index: number) => {
        setOpenMenuIndex(prev => (prev === index ? null : index));
    };

    const toggleThirdMenu = (key: string) => {
        setOpenThirdLevelKey(prev => (prev === key ? null : key));
    };

    return (
        <nav className="nav-main mainmenu-nav mt--30">
            <ul className="mainmenu metismenu" id="mobile-menu-active">
                {navLinks.map((link, index) => (
                    link.href ? (
                        <li key={link.label}>
                            <Link className="main" href={link.href}>{link.label}</Link>
                        </li>
                    ) : (
                        <li className={`has-droupdown ${openMenuIndex === index ? 'mm-active' : ''}`} key={link.label}>
                            <a className="main" onClick={() => toggleMenu(index)} href="#">{link.label}</a>
                            <ul className={`submenu mm-collapse ${openMenuIndex === index ? 'mm-show' : ''}`}>
                            {link.children.map((child) =>(
                                <li key={child.label}>
                                    <Link className="mobile-menu-link" href={child.href}>{child.label}</Link>
                                </li>
                            ))}
                        </ul>
                        </li>
                    ))

                )}
            </ul>
        </nav>
    );
};

export default MobileMenu;
