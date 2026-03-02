import CollegeLayout from "@/components/college-layout/CollegeLayout";

export default function AboutPage() {
  return (
    <CollegeLayout>

      {/* Modern About Section */}
      <section className="about-modern">
        <div className="about-wrapper">

          {/* Left Image */}
          <div className="about-image">
            <img
              src="/assets/images/hero/slide-0.jpg"
              alt="About SBES College"
            />
          </div>

          {/* Middle Content */}
          <div className="about-content">
            <h2>About Us</h2>
            <p>
              Discover a comprehensive range of professional academic programs
              tailored to empower students with unmatched quality and reliability.
            </p>
          </div>
        </div>
      </section>


      {/* Vision & Mission Section */}
      <section className="about-modern">
        <div className="about-wrapper">
          {/* Middle Content */}
          <div className="about-content">
            <h2>Academic / Institutional </h2>
            
            <div className="about-stats">
              <div>
                <h3>110+</h3>
                <span>Years Excellence</span>
              </div>
              <div>
                <h3>20000+</h3>
                <span>Students Enrollment</span>
              </div>
              <div>
                <h3>400+</h3>
                <span>Expert Faculty</span>
              </div>
              <div>
                <h3>10</h3>
                <span>Secondary Schools</span>
              </div>
              <div>
                <h3>2</h3>
                <span>Primary Schools</span>
              </div>
              <div>
                <h3>1</h3>
                <span>CBSE School</span>
              </div>
              <div>
                <h3>1</h3>
                <span>Girls Hostel</span>
              </div>
              <div>
                <h3>1</h3>
                <span>Boys Hostel</span>
              </div>
            </div>
          </div>

          {/* Right Cards */}
          <div className="about-side">
            <div className="side-card dark">
              <h4>Our Vision</h4>
              <p>
                To be the most trusted and forward-thinking academic institution.
              </p>
            </div>

            <div className="side-card orange">
              <h4>Our Commitment</h4>
              <p>
                We provide top-quality programs aligned with global standards.
              </p>
            </div>
          </div>

        </div>
      </section>

      <section className="story-section">
  <div className="story-container">

     <h2 className="story-title">History </h2>

    <div className="story-content">
      <p>
        Shree Saraswati Bhuvan Education Society Established in 1915, with just 25 students, this educational institution has
        now significantly expanded, with approximately 20,000 students receiving education 
        across its 10 secondary schools, 2 primary schools, 2 senior colleges, 1 CBSE school,
        and 2 hostels. Thousands of our alumni are in forefront in all walks of life in 
        India and abroad. Saraswati Bhuvan Education Society has immensely contributed 
        not only to education but also to uplift the public life of this region. 
        Motivated by the patriotic fervour many of its founding fathers had fought
        for the freedom of Hyderabad State from the yoke of Nizam regime. 
        Post independence the fulcrum of socio-political-development movements of this 
        region had been SB Education Society. SB, the centennial institution, is still one
        of the few institutions in the State whose members have made a mark in their 
        respective fields and uphold the value education and social commitment. 
        The glorious traditions and the best practices of the years are still 
        continued by adapting new trends with the changing times thereby making 
        educational development changes. Shri Saraswati Bhuwan Education Society was awarded
        the first ‘Ideal Educational Institution – State Award for Meritorious Public Service
        in the Educational and Social Sector’ in 2000 by the Government of Maharashtra. 
        Our educational institution holds a prestigious position not just in Marathwada but
        across Maharashtra.
      </p>
    </div>

  </div>
</section>

{/* Founder section  */}
<section className="team-section">
  <div className="team-container">
    <div className="team-grid" style={{ display: 'flex', flexWrap: 'nowrap', overflowX: 'auto' }}>
      <div className="team-card">
        <img src="/founder/Panditrao-Pargaonkar-150x150.jpg" />
        <h6>Adv. Shri. Panditrao Pargaonkar</h6>
        <p>Founder</p>
      </div>
      
      <div className="team-card">
        <img src="/founder/Digambardasji-Chaudhari-150x150.jpg" />
        <h6>Adv. Shri. Digambardasji Chaudhary</h6>
        <p>Founder</p>
      </div>
      
      <div className="team-card">
        <img src="/founder/Rajarampat-Pol.jpg" />
        <h6>Adv. Shri. Rajaram Pant Pol</h6>
        <p>Founder</p>
      </div>
      
      <div className="team-card">
        <img src="/founder/Bhausaheb-Vaishanpayan1.jpg"/>
        <h6>Shri. Bhausaheb Vaishampayan</h6>
        <p>Architect of Rural Expansion</p>
      </div>
      
      <div className="team-card">
        <img src="/founder/Govindbhai-Shroff.jpg" />
        <h6>Shri. Govindbhai Shroff</h6>
        <p>Architect of Modern Expansion</p>
      </div>
    </div>
  </div>
</section>

{/* Governing Council Committee (2023-2028)*/}

<section className="table-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <h4 style={{ marginBottom: '20px' }}>Governing Council Committee (2023-2028)</h4>
  <div className="table-container" style={{ width: '100%', maxWidth: '800px' }}>
    <table className="governance-table" style={{ margin: '0 auto', width: '100%', borderCollapse: 'collapse', border: '1px solid #333' }}>
      <thead>
        <tr style={{ borderBottom: '2px solid #333', borderRight: '1px solid #333' }}>
          <th style={{ border: '1px solid #333', padding: '12px' }}>S.No</th>
          <th style={{ border: '1px solid #333', padding: '12px' }}>Name</th>
          <th style={{ border: '1px solid #333', padding: '12px' }}>Designation</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ borderBottom: '1px solid #333' }}>
          <td style={{ border: '1px solid #333', padding: '12px' }}>1</td>
          <td style={{ border: '1px solid #333', padding: '12px' }}>Adv. Shri. Dinesh Vakil</td>
          <td style={{ border: '1px solid #333', padding: '12px' }}>President</td>
        </tr>
        <tr style={{ borderBottom: '1px solid #333' }}>
          <td style={{ border: '1px solid #333', padding: '12px' }}>2</td>
          <td style={{ border: '1px solid #333', padding: '12px' }}>	Dr. Suhas Bardapurkar</td>
          <td style={{ border: '1px solid #333', padding: '12px' }}>Vice- President</td>
        </tr>
        <tr style={{ borderBottom: '1px solid #333' }}>
          <td style={{ border: '1px solid #333', padding: '12px' }}>3</td>
          <td style={{ border: '1px solid #333', padding: '12px' }}>Dr. Balkrushna Kshirsagar</td>
          <td style={{ border: '1px solid #333', padding: '12px' }}>Vice- President</td>
        </tr>
        <tr style={{ borderBottom: '1px solid #333' }}>
          <td style={{ border: '1px solid #333', padding: '12px' }}>4</td>
          <td style={{ border: '1px solid #333', padding: '12px' }}>Dr. Shreerang Deshpande</td>
          <td style={{ border: '1px solid #333', padding: '12px' }}>General Secretary</td>
        </tr>
        <tr style={{ borderBottom: '1px solid #333' }}>
          <td style={{ border: '1px solid #333', padding: '12px' }}>5</td>
          <td style={{ border: '1px solid #333', padding: '12px' }}>Shri. Milind Ranade</td>
          <td style={{ border: '1px solid #333', padding: '12px' }}>Treasurer</td>
        </tr>
        <tr style={{ borderBottom: '1px solid #333' }}>
          <td style={{ border: '1px solid #333', padding: '12px' }}>6</td>
          <td style={{ border: '1px solid #333', padding: '12px' }}>Dr. Rashmi Borikar</td>
          <td style={{ border: '1px solid #333', padding: '12px' }}>Joint Secretary</td>
        </tr>
        <tr style={{ borderBottom: '1px solid #333' }}>
          <td style={{ border: '1px solid #333', padding: '12px' }}>7</td>
          <td style={{ border: '1px solid #333', padding: '12px' }}>Adv. Shri.  Rameshwar Totla</td>
          <td style={{ border: '1px solid #333', padding: '12px' }}>Joint Secretary</td>
        </tr>
        <tr style={{ borderBottom: '1px solid #333' }}>
          <td style={{ border: '1px solid #333', padding: '12px' }}>8</td>
          <td style={{ border: '1px solid #333', padding: '12px' }}>Dr. Ulhas Shiurkar</td>
          <td style={{ border: '1px solid #333', padding: '12px' }}>Joint Secretary</td>
        </tr>
        <tr style={{ borderBottom: '1px solid #333' }}>
          <td style={{ border: '1px solid #333', padding: '12px' }}>9</td>
          <td style={{ border: '1px solid #333', padding: '12px' }}>CA Shri. Mukesh Hundiwala</td>
          <td style={{ border: '1px solid #333', padding: '12px' }}>Joint Treasurer</td>
        </tr>
        <tr style={{ borderBottom: '1px solid #333' }}>
          <td style={{ border: '1px solid #333', padding: '12px' }}>10</td>
          <td style={{ border: '1px solid #333', padding: '12px' }}>	Dr. Sunil Deshpande</td>
          <td style={{ border: '1px solid #333', padding: '12px' }}>Joint Secretary</td>
        </tr>
        <tr style={{ borderBottom: '1px solid #333' }}>
          <td style={{ border: '1px solid #333', padding: '12px' }}>11</td>
          <td style={{ border: '1px solid #333', padding: '12px' }}>Shri. Pravin Mandlik</td>
          <td style={{ border: '1px solid #333', padding: '12px' }}>Trustee</td>
        </tr>
        <tr style={{ borderBottom: '1px solid #333' }}>
          <td style={{ border: '1px solid #333', padding: '12px' }}>12</td>
          <td style={{ border: '1px solid #333', padding: '12px' }}>Shri. Amol Bhale</td>
          <td style={{ border: '1px solid #333', padding: '12px' }}>Trustee</td>
        </tr>
        <tr style={{ borderBottom: '1px solid #333' }}>
          <td style={{ border: '1px solid #333', padding: '12px' }}>13</td>
          <td style={{ border: '1px solid #333', padding: '12px' }}>Shri. Ramesh Joshi</td>
          <td style={{ border: '1px solid #333', padding: '12px' }}>Trustee</td>
        </tr>
        <tr style={{ borderBottom: '1px solid #333' }}>
          <td style={{ border: '1px solid #333', padding: '12px' }}>14</td>
          <td style={{ border: '1px solid #333', padding: '12px' }}>Dr. Milind Konarde</td>
          <td style={{ border: '1px solid #333', padding: '12px' }}>Trustee</td>
        </tr>
        <tr style={{ borderBottom: '1px solid #333' }}>
          <td style={{ border: '1px solid #333', padding: '12px' }}>15</td>
          <td style={{ border: '1px solid #333', padding: '12px' }}>Dr. Smt. Sadhana Shah</td>
          <td style={{ border: '1px solid #333', padding: '12px' }}>Trustee</td>       </tr>
        <tr style={{ borderBottom: '1px solid #333' }}>
          <td style={{ border: '1px solid #333', padding: '12px' }}>16</td>
          <td style={{ border: '1px solid #333', padding: '12px' }}>Dr. Yogesh Ingle</td>
          <td style={{ border: '1px solid #333', padding: '12px' }}>Trustee</td>
        </tr>
        <tr style={{ borderBottom: '1px solid #333' }}>
          <td style={{ border: '1px solid #333', padding: '12px' }}>17</td>
          <td style={{ border: '1px solid #333', padding: '12px' }}>Shri. Ramchandra Bhogale</td>
          <td style={{ border: '1px solid #333', padding: '12px' }}>Past President</td>
        </tr>
        <tr style={{ borderBottom: '1px solid #333' }}>
          <td style={{ border: '1px solid #333', padding: '12px' }}>18</td>
          <td style={{ border: '1px solid #333', padding: '12px' }}>Dr. Nandkumar Ukadgaonkar</td>
          <td style={{ border: '1px solid #333', padding: '12px' }}>Past Secretary</td>
        </tr>
        <tr style={{ borderBottom: '1px solid #333' }}>
          <td style={{ border: '1px solid #333', padding: '12px' }}>19</td>
          <td style={{ border: '1px solid #333', padding: '12px' }}>Dr. Daya Patil</td>
          <td style={{ border: '1px solid #333', padding: '12px' }}>Representative of Professors</td>
        </tr>
        <tr style={{ borderBottom: '1px solid #333' }}>
          <td style={{ border: '1px solid #333', padding: '12px' }}>20</td>
          <td style={{ border: '1px solid #333', padding: '12px' }}>Shri. Sudhakar Kapre</td>
          <td style={{ border: '1px solid #333', padding: '12px' }}>Representative of Teacher</td>
        </tr>
        <tr style={{ borderBottom: '1px solid #333' }}>
          <td style={{ border: '1px solid #333', padding: '12px' }}>21</td>
          <td style={{ border: '1px solid #333', padding: '12px' }}>Dr. Anil Shankarwar</td>
          <td style={{ border: '1px solid #333', padding: '12px' }}>Representative of Principals</td>
        </tr>
        <tr style={{ borderBottom: '1px solid #333' }}>
          <td style={{ border: '1px solid #333', padding: '12px' }}>22</td>
          <td style={{ border: '1px solid #333', padding: '12px' }}>Shri. Vishwarup Nikumbh</td>
          <td style={{ border: '1px solid #333', padding: '12px' }}>Representative of Headmasters</td>
        </tr>
        <tr style={{ borderBottom: '1px solid #333' }}>
          <td style={{ border: '1px solid #333', padding: '12px' }}>23</td>
          <td style={{ border: '1px solid #333', padding: '12px' }}>	Shri. Gopal Wagh</td>
          <td style={{ border: '1px solid #333', padding: '12px' }}>Representative of Branch Heads</td>
        </tr>
        
      </tbody>
    </table>
  </div>
</section>

    </CollegeLayout>
  );
}