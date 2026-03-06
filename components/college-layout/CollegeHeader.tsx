"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "./CollegeHeader.css";

export default function CollegeHeader() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">

            {/* Top Info Bar */}
            <div className="topbar">
                <div className="container">
                    <div className="topbar-left">
                        <span>NAAC A+ Accredited Institution</span>
                    </div>
                    <div className="topbar-right">
                        <span>0240-2332040</span>
                        <span>sbescollegeac@yahoo.com</span>
                    </div>
                </div>
            </div>

            {/* Main Identity */}
            <div className="identity container">
                <div className="brand">
                    <Image
                        src="/assets/images/college-logo.png"
                        alt="SBES College Logo"
                        width={75}
                        height={75}
                    />

                    <div className="brand-text">
                        <p className="society-name">
                            Shree Saraswati Bhuvan Education Society's
                        </p>
                        <h1>SBES College of Arts & Commerce</h1>
                        <p className="accreditation">
                            Accredited by NAAC & SQAAF with A+ Grade
                        </p>
                    </div>
                </div>

                <div className="accreditation-logos">
                    <Image
                        src="/assets/images/naac-a-plus.png"
                        alt="NAAC A+"
                        width={60}
                        height={60}
                    />
                    <Image
                        src="/assets/images/sqaaf.png"
                        alt="SQAAF A+"
                        width={60}
                        height={60}
                    />
                </div>
            </div>

            {/* Navigation */}
            <nav className="navbar">
                <div className="container nav-inner">
                    <button
                        className="hamburger"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        ☰
                    </button>

                    <ul className={`menu ${menuOpen ? "open" : ""}`}>
                        <li><Link href="/">Home</Link></li>
                        <li className="menu-item-has-children">
                          <Link href="/sbes">About</Link>
                          <ul className="sub-menu">
                            <li><Link href="/sbes">SBES Organization</Link></li>
                            <li><Link href="/college">College</Link></li>
                          </ul>
                        </li>

                        <li><Link href="/srcollege/home">Senior College</Link></li>
                        <li><Link href="/naac">Junior College</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>

        </header>
    );
}