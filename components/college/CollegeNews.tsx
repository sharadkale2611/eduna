import Link from "next/link";

export default function CollegeNewsPrograms() {
    return (
        <section className="college-updates">
            <div className="container">

                <div className="updates-grid">

                    {/* News Column */}
                    <div className="updates-column">
                        <h2>News & Announcements</h2>
                        <ul className="updates-list">
                            <li>
                                <span className="date">05 Mar 2026</span>
                                <span className="text">
                                    Admission Notice for Academic Year 2025–26
                                </span>
                            </li>
                            <li>
                                <span className="date">18 Feb 2026</span>
                                <span className="text">
                                    NAAC Peer Team Visit Schedule Announced
                                </span>
                            </li>
                            <li>
                                <span className="date">02 Jan 2026</span>
                                <span className="text">
                                    College will remain closed on account of Public Holiday
                                </span>
                            </li>
                        </ul>
                        <Link href="/news" className="view-all">
                            View All News →
                        </Link>
                    </div>

                    {/* Upcoming Programmes Column */}
                    <div className="updates-column">
                        <h2>Upcoming Programmes</h2>
                        <ul className="updates-list">
                            <li>
                                <span className="date">10 Mar 2026</span>
                                <span className="text">
                                    National Seminar on Research Methodology
                                </span>
                            </li>
                            <li>
                                <span className="date">20 Mar 2026</span>
                                <span className="text">
                                    Workshop on Career Guidance for Final Year Students
                                </span>
                            </li>
                            <li>
                                <span className="date">25 Mar 2026</span>
                                <span className="text">
                                    Inter-College Cultural Programme
                                </span>
                            </li>
                        </ul>
                        <Link href="/programmes" className="view-all">
                            View All Programmes →
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}