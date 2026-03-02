"use client";
import Image from "next/image";
import Link from "next/link";

export default function CollegeHeader() {
    return (
        <header className="college-header">

            {/* Top Institutional Bar
            <div className="college-header__top">
                <span>NAAC A+ Accredited Institution</span>
                <nav>
                    <Link href="/iqac">IQAC</Link>
                    <Link href="/mandatory-disclosure">Mandatory Disclosure</Link>
                </nav>
            </div> */}

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
                        <p>Shree Saraswati Bhuvan Education Society's</p>
                        <h1>SBES College of Arts & Commerce</h1>
                        <p><span>Accredited by NAAC with A+ Grade</span></p>
                        <p><span>Accredited by SQAAF with A+ Grade</span></p>
                    </div>
                    <div className="college-header__naac">
                      <Image
                        src="/assets/images/naac-a-plus.png"
                        alt="NAAC A+ Grade"
                        width={70}
                        height={70}
                      />
                    </div>
                    <div className="college-header__naac">
                      <Image
                        src="/assets/images/sqaaf.png"
                        alt="NAAC A+ Grade"
                        width={70}
                        height={70}
                      />
                    </div>
                </div>

                <div>
                        <p>Saraswati Colony, Aurangpura,</p>
                        <p>Chhatrapati Sambhajinagar, MH 431001</p>
                        <p>0240-2332040, sbescollegeac@yahoo.com</p>
                </div>                              
            </div>

            {/* Primary Navigation */}
            {/* Primary Navigation */}
<nav className="college-header__nav">
  <ul className="main-menu">

    <li><Link href="/">Home</Link></li>

    {/* About Dropdown */}
    <li className="menu-item-has-children">
      <Link href="/sbes">About</Link>
      <ul className="sub-menu">
        <li><Link href="/sbes">SBES Organization</Link></li>
        <li><Link href="/college">College</Link></li>
        </ul>
    </li>

    <li><Link href="/srcollege">Senior College</Link></li>
    <li><Link href="/naac">Junior College</Link></li>
    <li><Link href="/contact">Contact</Link></li>

  </ul>
</nav>

        </header>
    );
}