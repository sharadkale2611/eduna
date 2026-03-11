"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "./SrCollegeHeader.css";

export default function SrCollegeHeader() {
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
                            Accredited by NAAC with A+ Grade
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
                    {/* <Image
                        src="/assets/images/sqaaf.png"
                        alt="SQAAF A+"
                        width={60}
                        height={60}
                      /> */}
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
                          <Link href="/programme">Programme</Link>
                          <ul className="sub-menu">
                            <li><Link href="/UG">Under Graduation</Link></li>
                            <li><Link href="/PG">Post Graduation</Link></li>
                            <li><Link href="/BBA">PhD</Link></li>
                            <li><Link href="/BCA">Certificates</Link>
                        </li>
                     </ul>
                        </li>

                        <li><Link href="/department">Department</Link></li>
                         <li><Link href="/faculty">Falulty</Link></li>
                        <li><Link href="/srcollege/facilities">Facilities</Link></li>
                        <li><Link href="/srcollege/student ">Student </Link></li>
                        <li><Link href="/Research ">Research </Link></li>
                        <li><Link href="/library ">Library </Link></li>
                        <li><Link href="/srcollege/naac ">NAAC </Link></li>
                        <li><Link href="/srcollege/contact">Contact </Link></li>
                    </ul>
                </div>

            </nav>

        </header>
    );
}