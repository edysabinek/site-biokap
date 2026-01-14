"use client";

import {navLinks} from "./navLinks";
import React from "react";

function NavItem() {
    return (
        <div>
            <nav>
                <ul className="parent-nav">
                    {navLinks.map((link) => (
                        <li className={"parent " + link.classname} key={link.label}>
                            {link.href ? (
                                <a href={link.href}>{link.label}</a>
                            ) : (
                                <>
                                    <a className="nav-link" href="#">
                                        {link.label}
                                    </a>
                                    <ul className="submenu">
                                        {link.children.map((child) =>(
                                            <li key={child.label}>
                                                <a className="sub-b" href={child.href}>
                                                    {child.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </li>
                        )

                    )}
                </ul>
            </nav>
        </div>
    );
}

export default NavItem;