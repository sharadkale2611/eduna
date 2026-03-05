import CollegeLayout from "@/components/college-layout/CollegeLayout";

export default function AboutPage() {
  return (
    <CollegeLayout>

      {/* Hero Section */}
      <section className="about-hero-pro">
  <div className="container hero-content">
     <h1 style={{textAlign:'center'}} >About</h1>
      </div>
</section>

      {/* Institutional Overview */}
      <section className="about-overview">
        <div className="container overview-grid">
          <div>
            <h2>Institutional Overview</h2>
            <p>
              Established with a vision to empower students through
              accessible and quality education, SBES College has grown
              into a respected center of higher learning in
              Chhatrapati Sambhajinagar.
            </p>
            <p>
              The college fosters intellectual growth, ethical values,
              leadership skills, and social responsibility among students.
            </p>
          </div>

          <div className="stats-box">
            <div>
              <h3>25+</h3>
              <p>Years of Excellence</p>
            </div>
            <div>
              <h3>3000+</h3>
              <p>Students Enrolled</p>
            </div>
            <div>
              <h3>50+</h3>
              <p>Qualified Faculty</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Mission Philosophy */}
      <section className="vision-mission-pro">
        <div className="container vm-grid">
          <div className="vm-card">
            <h3>Our Vision</h3>
            <p>
              To be a leading institution committed to academic excellence,
              innovation, and character building.
            </p>
          </div>

          <div className="vm-card">
            <h3>Our Mission</h3>
            <ul>
              <li>Deliver quality education aligned with global standards</li>
              <li>Encourage research and innovation</li>
              <li>Promote ethical and social responsibility</li>
              <li>Prepare students for lifelong success</li>
            </ul>
          </div>

          <div className="vm-card">
            <h3>Core Values</h3>
            <ul>
              <li>Integrity</li>
              <li>Excellence</li>
              <li>Inclusivity</li>
              <li>Accountability</li>
            </ul>
          </div>
        </div>
      </section>
      

      {/* Principal Message */}
      <section className="leadership-section">
        <div className="container leadership-grid">
          <div>
            <img
              src="/staff/principal.jpg"
              alt="Principal"
              className="principal-photo"
            />
          </div>
          <div>
            <h2>Message from the Principal</h2>
            <p>
              At SBES College, we believe education is not merely about
              acquiring knowledge but about shaping character and vision.
              Our institution nurtures academic rigor alongside moral values.
            </p>
            <p>
              We strive to create responsible citizens equipped to face
              global challenges with confidence and competence.
            </p>
            <h4>- Dr. Vivek Mirgane</h4>
          </div>
        </div>
      </section>

      {/* Institutional Journey */}
      <section className="timeline-section">
        <div className="container">
          <h2 className="center-title">Our Journey</h2>

          <div className="timeline">
            <div className="timeline-item">
              <span>1998</span>
              <p>College Established</p>
            </div>
            <div className="timeline-item">
              <span>2008</span>
              <p>NAAC Accreditation Achieved</p>
            </div>
            <div className="timeline-item">
              <span>2018</span>
              <p>Expansion of Academic Programs</p>
            </div>
            <div className="timeline-item">
              <span>2024</span>
              <p>Digital Campus Initiative</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CDC Section */}

      {/* Creative College Development Committee */}
<section className="cdc-creative">
  <div className="container">

    <div className="cdc-creative-header">
      <h2>College Development Committee</h2>
      <p>
        Strategic leadership guiding academic excellence, governance,
        and institutional growth.
      </p>
    </div>

    {/* Chairman Highlight */}
    <div className="cdc-creative-chairman">
      <div className="cdc-highlight-card">
        <img src="/cdc/chairman.jpg" alt="Chairman" />
        <h3>Dr. ABC XYZ</h3>
        <span>Chairman</span>
      </div>
    </div>

    {/* Members Grid */}
    <div className="cdc-creative-grid">

      <div className="cdc-creative-card">
        <img src="/cdc/principal.jpg" alt="Principal" />
        <h4>Dr. Principal Name</h4>
        <p>Member Secretary</p>
      </div>

      <div className="cdc-creative-card">
        <img src="/cdc/member1.jpg" alt="Member" />
        <h4>Prof. Member One</h4>
        <p>Faculty Representative</p>
      </div>

      <div className="cdc-creative-card">
        <img src="/cdc/member2.jpg" alt="Member" />
        <h4>Mr. Member Two</h4>
        <p>Industry Representative</p>
      </div>

      <div className="cdc-creative-card">
        <img src="/cdc/member3.jpg" alt="Member" />
        <h4>Mrs. Member Three</h4>
        <p>Social Representative</p>
      </div>

    </div>

  </div>
</section>

    </CollegeLayout>
  );
}