import Link from "next/link";

export default function CollegeFooter() {
    return (
        <footer className="college-footer">
            {/* Footer Top */}
            <div className="college-footer-top">
                <div className="container footer-grid">
                                                    
                    {/* Important Links */}
                    <div>
                        <h4>Important Links</h4>
                        <ul>
                            <li><Link href="/other-links/rti.pdf" target="blank">RTI</Link></li>
                             <li><Link href="/other-links/icc.pdf" target="blank">ICC</Link></li>
                             <li><Link href="/other-links/Anti-Ragging.pdf" target="blank">Anti-Ragging</Link></li>
                             <li><Link href="//other-links/Grievance-Redressal.pdf" target="blank">Grievance Redressal</Link></li>
                        </ul>
                    </div>

                    {/* NAAC Section */}
                    <div>
                        <h4>NAAC</h4>
                        <ul>
                            <li><Link href="/naac/">IQAC</Link></li>
                            <li><Link href="/naac/ssr">AQAR</Link></li>
                            <li><Link href="/naac/aqar">NAAC</Link></li>
                            <li><Link href="/naac/best-practices">NAAC Overview</Link></li>
                            <li><Link href="/naac/aqar">SSR</Link></li>
                        </ul>
                    </div>
                             

                     {/* NAAC Section */}
                    <div>
                        <h4>Downloads</h4>
                        <ul>
                            <li><Link href="/downloads/">15A</Link></li>
                            <li><Link href="/downloads/">TC Form</Link></li>
                            <li><Link href="/downloads/alumni.pdf">Alumni</Link></li>
                            
                        </ul>
                    </div>

                     {/* Feedback Section */}
                    <div>
                        <h4>Feedback</h4>
                        <ul>
                            <li><Link href="https://forms.gle/AhNigDyrrTpM7mr46" target="_blank">Student's Feedback of Institutional Performance</Link></li>
                            <li><Link href="/downloads/">Library Feedback Form</Link></li>
                            <li><Link href="https://forms.gle/4Hmic5SEurH5q2Uo9" target="_blank">Syllabus B Feedback Form by Student</Link></li>
                                <li><Link href="https://forms.gle/zonaReK3s5sez1k5A" target="_blank">Syllabus C Feedback Form by Teacher, Parents, Alumni, Employer</Link></li>
                            <li><Link href="https://forms.gle/EfVnamWEXTqudKH79" target="_blank">Teacher's Feedback by Students Form</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Footer Middle */}
            <div className="college-footer-middle">
                <p>
                    Address: Saraswati Colony, Aurangpura, Chhatrapati Sambhajinagar,
                    Maharashtra, India. 431001
                </p>
                <p>
                    Phone: <a href="tel:+912402332040">+91 240 233 2040</a> |
                    Email: <a href="mailto:sbescollegeac@yahoo.com">sbescollegeac@yahoo.com</a>
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