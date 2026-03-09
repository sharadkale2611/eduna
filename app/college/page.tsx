import CollegeLayout from "@/components/college-layout/CollegeLayout";
import "./college.css";

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
              accessible and quality education, SBES College of Arts & Commerce has grown
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
              <h3>60+</h3>
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
    <div className="leadership-image-container">
      <img
        src="/staff/principal.jpeg"
        alt="Dr. Vivek Mirgane"
        className="principal-photo"
      />
      <div className="principal-name-tag">
        <h4>Dr. Vivek Mirgane</h4>
        <p>Principal, SBES College of Arts & Commerce</p>
      </div>
    </div>

    <div className="leadership-content">
      <h2 className="section-title">Principal’s Message</h2>
      <div className="message-body">
        <p>
          As the Principal of the <strong>NAAC A+ accredited</strong> SBES College of Arts and Commerce,
          Chhatrapati Sambhajinagar, it is my distinct pleasure to extend a heartfelt 
          welcome to our prestigious institution.
        </p>

        <p>
          Established in 1963 under the patronage of the Saraswati Bhuvan Education
          Society, our college has a proud legacy of delivering exemplary education
          in the fields of Arts and Commerce. Our core philosophy — <em>"To inculcate 
          rational, universal values in our pursuit of excellence for a just society"</em>
          — reflects our unwavering commitment to fostering an environment where
          students cultivate critical thinking, originality, and a strong sense of
          civic responsibility.
        </p>

        <p>
          SBES College offers a broad array of academic programs, including 
          BA, BCom, BCA, and BBA. We also offer M.Com and 
          host an Advanced Research Centre for Ph.D. in Commerce.
        </p>

        <p>
          Beyond traditional academics, we emphasize 
          practical skill development. We offer 
          32 value-added certificate courses designed to equip students with
          industry-relevant skills in areas such as Accounting, IT, and Tally.
        </p>

        <p>
          Our state-of-the-art facilities — including a well-stocked library, 
          modern computer labs, and vibrant music and cultural events — provide countless
          opportunities for students to explore their talents.
        </p>

        <p className="closing-statement">
          If you are seeking education that contributes to career building, character
          building, and nation building, you are at the right place. Join us where heritage meets innovation.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Institutional Journey */}
      <section className="timeline-section">
        <div className="container">
          <h2 className="center-title">Our Journey</h2>

          <div className="timeline">
            <div className="timeline-item">
              <span>1963</span>
              <p>College Established</p>
            </div>
            <div className="timeline-item">
              <span>2010</span>
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
       <section className="table-section">

        <h4>College Development Committee (2023–2028)</h4>

        <div className="table-container">
          <table className="college-table">

            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Designation</th>
              </tr>
            </thead>

            <tbody>
              <tr><td>1</td><td>Shree Deepak Pande</td><td>President</td></tr>
              <tr><td>2</td><td>Shree</td><td>Vice-President</td></tr>
            </tbody>

          </table>
        </div>

      </section>
    </CollegeLayout>
  );
}