import CollegeLayout from "@/components/sr-college/SrCollegeLayout";
import Link from "next/link";
import "./naac.css";

export default function NAACPage() {
  const criteria = [
    {
      no: "I",
      title: "Curricular Aspects",
      link: "/naac/criterion-1",
    },
    {
      no: "II",
      title: "Teaching-Learning and Evaluation",
      link: "/naac/criterion-2",
    },
    {
      no: "III",
      title: "Research, Innovations and Extension",
      link: "/naac/criterion-3",
    },
    {
      no: "IV",
      title: "Infrastructure and Learning Resources",
      link: "/naac/criterion-4",
    },
    {
      no: "V",
      title: "Student Support and Progression",
      link: "/naac/criterion-5",
    },
    {
      no: "VI",
      title: "Governance, Leadership and Management",
      link: "/naac/criterion-6",
    },
    {
      no: "VII",
      title: "Institutional Values and Best Practices",
      link: "/naac/criterion-7",
    },
  ];

  const quickLinks = [
    { title: "AQAR Reports", link: "/naac/aqar" },
    { title: "SSR Reports", link: "/naac/ssr" },
    { title: "IIQA Documents", link: "/naac/iiqa" },
    { title: "DVV Clarification", link: "/naac/dvv" },
  ];

  const documents = [
    { title: "NAAC Certificate", link: "#" },
    { title: "Peer Team Report", link: "#" },
    { title: "Best Practices", link: "#" },
    { title: "Institutional Distinctiveness", link: "#" },
  ];

  return (
    <CollegeLayout>
      <div className="naac-page">

        {/* HERO */}
       <section className="naac-hero">

  {/* LEFT CONTENT */}
  <div className="hero-left-content">

    <div className="hero-badge">
      National Assessment and Accreditation Council
    </div>

    <h1 className="hero-title">
      NAAC Accreditation
    </h1>

        <p className="hero-description">
      Access criterion-wise documents, supporting evidence,
      accreditation reports, AQAR submissions, and quality
      assurance initiatives of the institution.
    </p>

    {/* SMALL CARDS ROW */}
    <div className="hero-stats-small">

  <div className="stat-card-small year">
    <h4>A+</h4>
    <span>NAAC Grade</span>
  </div>

  <div className="stat-card-small year">
    <h4>2024</h4>
    <span>Assessment Year</span>
  </div>

</div>

  </div>

  {/* RIGHT IMAGE */}
  <div className="hero-right-image">
    <img
      src="/assets/images/hero/naac.jpg"
      alt="NAAC"
    />
  </div>

</section>
        {/* CRITERIA */}
        <section>
          <div className="section-heading">
            <h2>Criterion Wise Information</h2>
            <p>Explore documents and supporting evidence criterion wise.</p>
          </div>

          <div className="criteria-grid">
            {criteria.map((item) => (
              <Link
                href={item.link}
                key={item.no}
                className="criterion-card"
              >
                <div className="criterion-badge">{item.no}</div>

                <h3>Criterion {item.no}</h3>

                <p>{item.title}</p>

                <span className="view-btn">
                  View Details →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* BOTTOM CARDS */}
        <section className="bottom-section">

          <div className="info-card">
            <div className="card-header">
              <h3>Quick Links</h3>
            </div>

            {quickLinks.map((item) => (
              <Link
                key={item.title}
                href={item.link}
                className="list-link"
              >
                {item.title}
                <span>→</span>
              </Link>
            ))}
          </div>

          <div className="info-card">
            <div className="card-header">
              <h3>Important Documents</h3>
            </div>

            {documents.map((item) => (
              <Link
                key={item.title}
                href={item.link}
                className="list-link"
              >
                {item.title}
                <span>↓</span>
              </Link>
            ))}
          </div>

        </section>
      </div>
    </CollegeLayout>
  );
}