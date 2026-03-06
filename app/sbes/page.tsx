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
          <div className="about-content" align="justify">
            <h2>About Us</h2>
            <p>
              Established in 1915, Saraswati Bhuvan Education Society has immensely
              contributed not only to education but also to public life of this region.
              Motivated by the patriotic fervour many of its founding fathers had fought
              for the freedom of Hyderabad State from the yoke of Nizam’s regime, post 
              independence the fulcrum of socio-political-development movements of this 
              region had been SB Education Society. SB, the centennial institution, is 
              still one of the few institutions in the State whose members have made a 
              mark in their respective fields and are those who value education and social 
              commitment. The glorious traditions and the best practices of the years are 
              still continued by adapting new trends with the changing times thereby making 
              educational transaction relevant.
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
              <p align="justify">
                To be a leading educational institution committed to holistic development, 
                academic excellence, and strong moral values, fostering skilled, responsible, 
                and socially conscious citizens dedicated to nation-building and societal progress.
              </p>
            </div>

            <div className="side-card">
              <h4>Our Commitment</h4>
              <p align="justify">
                At Shri Saraswati Bhuvan Shikshan Sanstha, our commitment is to provide value-based, 
                inclusive, and progressive education that nurtures the all-round development of every student. 
                Rooted in our rich legacy since 1915, we strive to combine traditional knowledge with modern 
                education to meet the evolving needs of society.  
                We are dedicated to fostering excellence, skill development, 
                innovation, and strong ethical values while promoting harmony and
                cooperation within the educational community. Through continuous improvement, 
                self-reliance, and a deep sense of national responsibility, we remain committed to 
                contributing meaningfully to nation-building and social transformation.
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

          <div className="story-content" >
            <p align="justify">
             Before independence, ‘Marathwada’ was a part of the ‘Hyderabad State’, 
             which was under the rule of the ‘Nizam.’ The medium of education was ‘Urdu’, 
             and teaching in ‘Marathi’ was considered a challenge by the Nizam’s government. 
             Despite such adverse and difficult circumstances, in 1915, visionary founders
              ‘Adv. Shri. Panditrao (Anna Saheb) Pargaonkar’, ‘Adv. Shri. Rajarampant 
              Rajchandra Pol’, ‘Shri. Vasant Balwant Vasishth’, and’ Shri. Digambardasji Chaudhary’ 
              obtained permission from the Nizam Government to provide education in Marathi and took 
              steps to awaken a national spirit among students, thus laying the foundation of the 
              ‘Shri Saraswati Bhuwan Education Society’ in Chhatrapati Sambhajinagar (Maharashtra). 
              Notably, in 1916, when girls could not even imagine stepping out of their homes, we took the
              progressive and enlightened decision to start the ‘Sharda Mandir Kanya Prashala- ‘a school for 
              girls’, to commence girls’ education.

              </p>
              
              <p align="Justify">
                The founders of our institution were committed to values and the moral framework, and this 
                tradition continues to till date. One of the former Secretaries of the institution and Member 
                of Parliament Late Bhauseheb Vaishampayan made relentless efforts for the institution’s expansion 
                in rural area. The modern architect of the institution were freedom fighters of the Hyderabad 
                Liberation Movement. The former president of the institution Late Govindbhai Shroff was honoured 
                with the ‘Padma Vibhushan’. The institution has steadfastly maintained the crucial principle of not 
                turning education into a commercial enterprise while promoting noble human values. The staff and 
                employees of our society are not merely workers but are educational activists and our collaborators.  
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