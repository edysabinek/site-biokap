"use client"
import React from 'react';
function NavItem() {
    return (
        <div>
            <nav>
                <ul className="parent-nav">
                    <li className="parent">
                        <a className="parent" href="/">
                            Accueil
                        </a>
                    </li>
                    <li className="parent with-megamenu">
                        <a href="#">Nos produits</a>
                        <div className="rts-megamenu">
                            <div className="wrapper">
                                <div className="row align-items-center">
                                    <div className="col-lg-8">
                                        <div className="megamenu-item-wrapper">
                                            {/* single item areas start */}
                                            <div className="single-megamenu-wrapper">
                                                <p className="title">Shop Layout</p>
                                                <ul>
                                                    <li>
                                                        <a href="/shop">
                                                            Shop Grid Sidebar
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/shop-list-sidebar">
                                                            Shop list Sidebar
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/shop-grid-top-filter">
                                                            Shop Top Filter Grid
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/shop-list-top-filter">
                                                            Shop Top Filter List
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* single item areas end */}
                                            {/* single item areas start */}
                                            <div className="single-megamenu-wrapper">
                                                <p className="title">Shop Details</p>
                                                <ul>
                                                    <li>
                                                        <a
                                                            className="sub-b"
                                                            href="/shop/firebase-business-makes-your-profit"
                                                        >
                                                            Shop Details
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="sub-b"
                                                            href="/shop-details-2"
                                                        >
                                                            Shop Details V2
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="sub-b"
                                                            href="/shop-details-right-sidebar"
                                                        >
                                                            Shop Details V3
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="sub-b"
                                                            href="/shop-details-4"
                                                        >
                                                            Shop Details V4
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* single item areas end */}
                                            {/* single item areas start */}
                                            <div className="single-megamenu-wrapper">
                                                <p className="title">Product Feature</p>
                                                <ul>
                                                    <li>
                                                        <a
                                                            className="sub-b"
                                                            href="/shop-details-variable"
                                                        >
                                                            Variable product
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="sub-b"
                                                            href="/shop-details-affiliats"
                                                        >
                                                            Affiliate product
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="sub-b"
                                                            href="/shop-compare"
                                                        >
                                                            Shop Compare
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* single item areas end */}
                                            {/* single item areas start */}
                                            <div className="single-megamenu-wrapper">
                                                <p className="title">Shop Others</p>
                                                <ul>
                                                    <li>
                                                        <a className="sub-b" href="/cart">
                                                            Cart
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="sub-b" href="/checkout">
                                                            Checkout
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="sub-b"
                                                            href="/trackorder"
                                                        >
                                                            Track Order
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* single item areas end */}
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <a
                                            href="/shop"
                                            className="feature-add-megamenu-area"
                                        >
                                            <img
                                                src="assets/images/feature/05.jpg"
                                                alt="feature_product"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="parent">
                        <a className="nav-link" href="#">
                            Comment commander ?
                        </a>
                    </li>
                    <li className="parent hidden">
                        <a className="nav-link" href="/blog">
                            Blog
                        </a>
                    </li>
                    <li className="parents hidden">
                        <a target='_blank' href="/dashboard">
                            Dashboard
                            <span className="badge">New</span>
                        </a>
                    </li>
                    <li className="parent">
                        <a href="/about">À propos</a>
                    </li>
                    <li className="parent">
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavItem;