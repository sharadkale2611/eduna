"use client";
import Image from "next/image";
import Link from "next/link";

export default function CollegeHeader() {
    return (
        <header className="college-header">

            {/* Top Institutional Bar */}
            <div className="college-header__top">
                <span>NAAC A+ Accredited Institution</span>
                <nav>
                    <Link href="/iqac">IQAC</Link>
                    <Link href="/mandatory-disclosure">Mandatory Disclosure</Link>
                </nav>
            </div>

            {/* Main Identity Block */}
            <div className="college-header__identity">
                <div className="college-header__brand">
                    <Image
                        src="/assets/images/college-logo.png"
                        alt="SBES College Logo"
                        width={70}
                        height={70}
                    />
                    <div>
                        <h1>SBES College of Arts & Commerce</h1>
                        <p>Chhatrapati Sambhajinagar</p>
                        <span>Accredited by NAAC with A+ Grade</span>
                    </div>
                </div>

                <div className="college-header__naac">
                    <Image
                        src="/assets/images/naac-a-plus.png"
                        alt="NAAC A+ Grade"
                        width={70}
                        height={70}
                    />
                </div>
            </div>

            {/* Primary Navigation */}
            <nav className="college-header__nav">
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/academics">Academics</Link></li>
                    <li><Link href="/naac">NAAC</Link></li>
                    <li><Link href="/iqac">IQAC</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>

        </header>
    );
}