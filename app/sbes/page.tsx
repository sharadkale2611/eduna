import CollegeLayout from "@/components/college-layout/CollegeLayout";
import "./sbes.css";

export default function AboutPage() {
  return (
    <CollegeLayout>

      {/* =========================
          ABOUT HERO SECTION
      ========================== */}
      <section className="about-hero">
        <div className="about-hero__container">

          {/* Left Image */}
          <div className="about-image">
            <img
              src="/assets/images/hero/slide-0.jpg"
              alt="SBES College Campus"
            />
          </div>

          {/* Right Content */}
          <div className="about-content">
            <h2>About Us</h2>
            <p>
              Discover a comprehensive range of professional academic programs
              tailored to empower students with unmatched quality and reliability.
            </p>
          </div>

        </div>
      </section>

      {/* =========================
          ACADEMIC / INSTITUTIONAL
      ========================== */}
      <section className="about-hero">
        <div className="about-hero__container">

          <div className="about-content">
            <h2>Academic / Institutional</h2>

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

          {/* Vision + Commitment */}
          <div className="about-side">
            <div className="side-card">
              <h4>Our Vision</h4>
              <p>
                To be the most trusted and forward-thinking academic institution,
                fostering excellence in education and holistic development.
              </p>
            </div>

            <div className="side-card">
              <h4>Our Commitment</h4>
              <p>
                We provide top-quality programs aligned with global standards
                while upholding strong ethical values and social responsibility.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================
          HISTORY SECTION
      ========================== */}
      <section className="story-section">
        <div className="story-container">

          <h2 className="story-title">History</h2>

          <div className="story-content">
            <p>
              Shree Saraswati Bhuvan Education Society was established in 1915
              with just 25 students. Over the decades, the institution has
              significantly expanded, now serving approximately 20,000 students
              across its 10 secondary schools, 2 primary schools, 2 senior colleges,
              1 CBSE school, and 2 hostels.

              Thousands of alumni are at the forefront in various fields in India
              and abroad. The Society has immensely contributed not only to education
              but also to uplifting public life in the region.

              Motivated by patriotic fervour, many founding members fought for the
              freedom of Hyderabad State from the Nizam regime. Post-independence,
              the Society became a fulcrum of socio-political development movements
              in the region.

              In 2000, Shri Saraswati Bhuvan Education Society received the
              prestigious “Ideal Educational Institution – State Award for
              Meritorious Public Service in the Educational and Social Sector”
              from the Government of Maharashtra.

              Today, the institution holds a distinguished position across
              Marathwada and Maharashtra.
            </p>
          </div>

        </div>
      </section>

      {/* =========================
          FOUNDING LEADERS
      ========================== */}
      <section className="team-section">
        <div className="team-container">

          <h2 className="story-title">Our Founding Leaders</h2>

          <div className="team-grid">

            <div className="team-card">
              <img src="/founder/Panditrao-Pargaonkar-150x150.jpg" alt="Panditrao Pargaonkar" />
              <h6>Adv. Shri. Panditrao Pargaonkar</h6>
              <p>Founder</p>
            </div>

            <div className="team-card">
              <img src="/founder/Digambardasji-Chaudhari-150x150.jpg" alt="Digambardasji Chaudhary" />
              <h6>Adv. Shri. Digambardasji Chaudhary</h6>
              <p>Founder</p>
            </div>

            <div className="team-card">
              <img src="/founder/Rajarampat-Pol.jpg" alt="Rajaram Pant Pol" />
              <h6>Adv. Shri. Rajaram Pant Pol</h6>
              <p>Founder</p>
            </div>

            <div className="team-card">
              <img src="/founder/Bhausaheb-Vaishanpayan1.jpg" alt="Bhausaheb Vaishampayan" />
              <h6>Shri. Bhausaheb Vaishampayan</h6>
              <p>Architect of Rural Expansion</p>
            </div>

            <div className="team-card">
              <img src="/founder/Govindbhai-Shroff.jpg" alt="Govindbhai Shroff" />
              <h6>Shri. Govindbhai Shroff</h6>
              <p>Architect of Modern Expansion</p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================
          GOVERNING COUNCIL
      ========================== */}
      <section className="table-section">

        <h4>Governing Council Committee (2023–2028)</h4>

        <div className="table-container">
          <table className="governance-table">

            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Designation</th>
              </tr>
            </thead>

            <tbody>
              <tr><td>1</td><td>Adv. Shri. Dinesh Vakil</td><td>President</td></tr>
              <tr><td>2</td><td>Dr. Suhas Bardapurkar</td><td>Vice-President</td></tr>
              <tr><td>3</td><td>Dr. Balkrushna Kshirsagar</td><td>Vice-President</td></tr>
              <tr><td>4</td><td>Dr. Shreerang Deshpande</td><td>General Secretary</td></tr>
              <tr><td>5</td><td>Shri. Milind Ranade</td><td>Treasurer</td></tr>
              <tr><td>6</td><td>Dr. Rashmi Borikar</td><td>Joint Secretary</td></tr>
              <tr><td>7</td><td>Adv. Shri. Rameshwar Totla</td><td>Joint Secretary</td></tr>
              <tr><td>8</td><td>Dr. Ulhas Shiurkar</td><td>Joint Secretary</td></tr>
              <tr><td>9</td><td>CA Shri. Mukesh Hundiwala</td><td>Joint Treasurer</td></tr>
              <tr><td>10</td><td>Dr. Sunil Deshpande</td><td>Joint Secretary</td></tr>
              <tr><td>11</td><td>Shri. Pravin Mandlik</td><td>Trustee</td></tr>
              <tr><td>12</td><td>Shri. Amol Bhale</td><td>Trustee</td></tr>
              <tr><td>13</td><td>Shri. Ramesh Joshi</td><td>Trustee</td></tr>
              <tr><td>14</td><td>Dr. Milind Konarde</td><td>Trustee</td></tr>
              <tr><td>15</td><td>Dr. Smt. Sadhana Shah</td><td>Trustee</td></tr>
              <tr><td>16</td><td>Dr. Yogesh Ingle</td><td>Trustee</td></tr>
              <tr><td>17</td><td>Shri. Ramchandra Bhogale</td><td>Past President</td></tr>
              <tr><td>18</td><td>Dr. Nandkumar Ukadgaonkar</td><td>Past Secretary</td></tr>
              <tr><td>19</td><td>Dr. Daya Patil</td><td>Representative of Professors</td></tr>
              <tr><td>20</td><td>Shri. Sudhakar Kapre</td><td>Representative of Teacher</td></tr>
              <tr><td>21</td><td>Dr. Anil Shankarwar</td><td>Representative of Principals</td></tr>
              <tr><td>22</td><td>Shri. Vishwarup Nikumbh</td><td>Representative of Headmasters</td></tr>
              <tr><td>23</td><td>Shri. Gopal Wagh</td><td>Representative of Branch Heads</td></tr>
            </tbody>

          </table>
        </div>

      </section>

    </CollegeLayout>
  );
}