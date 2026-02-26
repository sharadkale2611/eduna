import Link from "next/link";

export default function CollegeFooter() {
    return (
        <footer className="college-footer">

            {/* Footer Top */}
            <div className="college-footer-top">
                <div className="container footer-grid">

                    {/* College Info */}
                    <div>
                        <h4>SBES College of Arts & Commerce</h4>
                        <p>Chhatrapati Sambhajinagar</p>
                        <p>Accredited by NAAC with A+ Grade</p>
                    </div>

                    {/* Important Links */}
                    <div>
                        <h4>Important Links</h4>
                        <ul>
                            <li><Link href="/mandatory-disclosure">Mandatory Disclosure</Link></li>
                            <li><Link href="/rti">RTI</Link></li>
                            <li><Link href="/iqac">IQAC</Link></li>
                            <li><Link href="/grievance">Grievance Redressal</Link></li>
                            <li><Link href="/anti-ragging">Anti-Ragging</Link></li>
                        </ul>
                    </div>

                    {/* NAAC Section */}
                    <div>
                        <h4>NAAC</h4>
                        <ul>
                            <li><Link href="/naac">NAAC Overview</Link></li>
                            <li><Link href="/naac/ssr">Self Study Report (SSR)</Link></li>
                            <li><Link href="/naac/aqar">AQAR</Link></li>
                            <li><Link href="/naac/best-practices">Best Practices</Link></li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Footer Middle */}
            <div className="college-footer-middle">
                <p>
                    Address: SBES College of Arts & Commerce, Chhatrapati Sambhajinagar,
                    Maharashtra, India
                </p>
                <p>
                    Phone: <a href="tel:+912402345678">+91 240 234 5678</a> |
                    Email: <a href="mailto:sbcollege@gmail.com">sbcollege@gmail.com</a>
                </p>
            </div>

            {/* Footer Bottom */}
            <div className="college-footer-bottom">
                <p>
                    © {new Date().getFullYear()} SBES College of Arts & Commerce.
                    All Rights Reserved.
                </p>
            </div>

        </footer>
    );
}