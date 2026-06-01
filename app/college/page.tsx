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
          <div align="justify">
            <h2>Institutional Overview</h2>
            <p>
             &nbsp; &nbsp; &nbsp; Today we are living in the borderless world seemingly made small by the wonders of 
              Information and Technology with the advent of a global economy. Political, social, 
              economic and cultural changes have all led to increasing awareness of the need to 
              understand the world from a range of perspective and have created a demand for people
               with specialization and competencies.
            </p>
            <p>
              &nbsp; &nbsp; &nbsp; SBES College of Arts and Commerce provides and develops the skill set requirements of the 
              students necessary to face the challenges of the times. The society and the college have a 
              long and distinguished history in the domain of education, which is increasingly becoming 
              challenging, interesting and dynamic learning experience.
            </p>

            <p>
              &nbsp; &nbsp; &nbsp; The SBES College of Arts and Commerce is affiliated to Dr. Babasaheb Ambedkar Marathwada
              University, Chhatrapati Sambhaji Nagar. The College has now branched out in various streams
              of education. Many courses have been introduced at UG and PG level to meet the new 
              challenges and demands in education. BA with Indian Classical Music and Dramatics is very
              well appreciated. The average strength of senior college students since last few years is 
              almost 3000 out of which more than 55% are girls students.
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
              “To inculcate rational universal values in its pursuit to achieve excellence for a just society.”
            </p>
          </div>

          <div className="vm-card">
            <h3>Our Mission</h3>
              <p>
                “To provide quality education by promoting inquiry, research,
                 scholarship, creativity and social sensitivity for civil society.”
              </p>
          </div>

          <div className="vm-card">
            <h3>Objectives</h3>
            <p>
              "To provide besides formal education, the professional and career oriented courses to be 
              persuaded simultaneously to compliment traditional, fundamental and liberal education."
            </p>
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

        <h4>College Development Committee </h4>

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
              <tr><td>1</td><td>Shree Deepak Pande</td><td>Chairman</td></tr>
              <tr><td>2</td><td>C.A. Mukesh Hundiwala</td><td>Society Secretary Reprecentative</td></tr>
              <tr><td>3</td><td>Mr. Ajay Shah</td><td>Society Reprecentative "Social Service</td></tr>
              <tr><td>4</td><td>Mr. Anil R. Mali</td><td>Society Reprecentative "Business"</td></tr>
              <tr><td>5</td><td>Mrs. Anil R. Mali</td><td>Society Reprecentative "Education"</td></tr>
              <tr><td>6</td><td>Mrs. Chhaya Mahajan</td><td>Society Reprecentative "Research"</td></tr>
              <tr><td>7</td><td>Dr. Kishor V. Shirsath</td><td>Prof.  Reprecentative </td></tr>
              <tr><td>8</td><td>Mr. Sunil O. Dighule</td><td>Non-Teaching Reprecentative</td></tr>
              <tr><td>9</td><td>Dr. Anand V. Chaudhary</td><td>Vice-Principal</td></tr>
              <tr><td>10</td><td>Dr. Sandeep M.Chaudhari</td><td>Vice-Principal</td></tr>
              <tr><td>11</td><td>Dr. Vikrant U. Panchal</td><td>Coordinator, IQAC</td></tr>
              <tr><td>12</td><td>Dr. Gajanan Sanap</td><td>Permanent Invited Member</td></tr>
              <tr><td>13</td><td>Dr. Vivek R. Mirgane</td><td>Principal</td></tr>
            </tbody>

          </table>
        </div>

      </section>

      {/* College Coordinator Committee */}
       <section className="table-section">

        <h4>College Coordinator Committee </h4>

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
              <tr><td>1</td><td>Dr. Ulhas Shiurkar</td><td>Chairman</td></tr>
              <tr><td>2</td><td>Dr. Rashmi Borikar</td><td>Joint Secretary, SBES</td></tr>
              <tr><td>3</td><td>Adv. Rameshwar Totla</td><td>Joint Secretary, SBES</td></tr>
              <tr><td>4</td><td>Dr. Sunil Deshpande</td><td>Joint Secretary, "Invited" SBES</td></tr>
                          
            </tbody>

          </table>
        </div>

      </section>

    </CollegeLayout>
  );
}