"use client";

import { useState } from "react";
import SrCollegeLayout from "@/components/sr-college/SrCollegeLayout";
import "./student.css";

export default function StudentPage() {
  /* LEFT MENU DATA */
  const leftMenuData = {
    Alumni: {
      "Alumni Association":
      
        (
          <div>
          <p>The Institution has registered Alumni Association formed under u/s 8 of the Companies Act 2013
              as nonprofit Company on 7thJanuary 2016 (Pursuant to sub-section (2) of section 7 of the
              Companies Act, 2013 and Rule 8 of the Companies (Incorporation) Rule, 2014) with Reg. No.
              U74120MH2016NPL 271830 and its registered office at SBES College of Arts and Commerce,
              Aurangabad. The share capital of the foundation is Rs. 5,00, 000/- (Rupees five lakh). The
              Association aims at uniting and gathering past students; to provides platform for ex-students to keep
              in touch with the college; to organizes several activities for the benefit and betterment of the present
              students; to organize jointly with college workshops, guest lectures and other educational and
              entertainment program.
              </p>
              &nbsp;
            <p>Adv. Dinesh Vakil, Director</p>
            <p>Dr. Jagdishchandra Khairnar, Director</p>
           </div>
           ),
       
      "Alumni Meet": (
        <p>Alumni Meet information goes here.</p>
      ),
    },

    Scholarship: {
      "Government of India": (
        <div>
        <p className="text-justify">The government of India provides three scholarships schemes for UG and PG students. The details of these schemes are available on the exclusive portal NSP created by the government. Students must register and upload the required documents on it and chose the scheme for which they are eligible after online application submission these students must take printout of the submitted form and submit hardcopy of it along with the required documents like caste certificate/income certificate/domicile certificate/photocopy of bank passbook/Aadhar card/marks sheet/admission receipt/photocopy of leaving certificate in the scholarship section of our college. Scholarships of eligible students are disbursed by the concerned government departments.”.</p>
        <p>&nbsp;</p>
        <p>&rArr; Post Matric Scholarship scheme for Minorities</p>
        <p>&rArr; Central Sector Scheme of Scholarship</p>
        <p>&rArr; Disability Post-Matric Scholarship</p>
      </div>
      ),

      "Government of Maharashtra": (

        <div>
        <p> The government of Maharashtra provides eighteen scholarships and free ship schemes for UG and PG students. The details of these schemes are available on exclusive portal MAHADBT created for it by the government. Students must register and upload the required documents on it and chose the scheme for which they are eligible after online application submission these students must take printout of the submitted form and submit hardcopy of it along with the required documents like caste certificate/income certificate/domicile certificate/photocopy of bank passbook/Aadhar card/marks sheet/admission receipt/photocopy of leaving certificate in the scholarship section of our college. Scholarships of eligible students are disbursed by the concerned government departments. If the forms are rejected students will have to pay full fees.”.</p>
        <p>&nbsp;</p>
        <p>&rArr;  Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Scheme (EBC)</p>
        <p>&rArr; Dr. Punjabrao Deshmukh Vasatigruh Nirvah Bhatta Yojna (Hostel)</p>
        <p>&rArr; State Government Open Merit Scholarship</p>
        <p>&rArr; State Minority Scholarship</p>
        <p>&rArr; Education Concession to the Children Freedom Fighter</p>
        <p>&rArr; Eklavya Scholarship for PG Students</p>
        <p>&rArr; Government of India Post-Matric Scholarship SC</p>
        <p>&rArr; Government of India Post-Matric Scholarship SCST</p>
        <p>&rArr; Government of India Post-Matric Scholarship OBC</p>
        <p>&rArr; Government of India Post-Matric Scholarship SBC</p>
        <p>&rArr; Government of India Post-Matric Scholarship VJNT</p>
        <p>&rArr; Government of India Free ship SC</p>
        <p>&rArr; Government of India Free ship ST</p>
        <p>&rArr; Government of India Free ship OBC</p>
        <p>&rArr; Government of India Free ship SBC</p>
        <p>&rArr; Government of India Free ship VJNT</p>
        <p>&rArr; GOI Post-Matric Scholarship for persons with disability SC</p>
        
        </div>
     ),

      "Instituted by Philanthropists": (
        <div>
        <h2>Donation Deposit Scheme for Prizes to students Instituted by Philanthropists</h2>
            <table className="table1 table-bordered">
                <thead>
                  <tr>          
                    <th>Sr No </th>
					<th >Name of the Prize </th>
					<th >Condition for Prize (Award)</th>
					<th >Amount</th>
					                  </tr>
                </thead>
                <tbody>
				  
                
                  <tr>
                    <td>01</td>
				            <td>Late Smt.Bhimabai Ekbote</td>
					            <td>Highest marks secured Student from BA Marathi </td>
                    <td>Rs.240/-</td>					
                  </tr>
				  
				          <tr>
                    <td>02</td>
				              <td>Annapurna Bhalchandra BhaleraoMemorial Prize </td>
					            <td>Highest marks secured Student from BA who stoods first (Boys & Girls each)  </td>
                    <td>Rs.5000/-</td>					
                  </tr>
				  
				           <tr>
                    <td>03</td>
				              <td>Late Radhabai Krishnrao Marathe Memorial Prize </td>
					            <td>Highest marks secured Student (First) from BA and BCom  </td>
                    <td>Rs.160/-</td>					
                  </tr>
				  
				          <tr>
                    <td>04</td>
				              <td>Late Appasaheb Mandlik Memorial Prize</td>
					            <td>Highest marks secured Student (First) one from BA and one from BCom</td>
                      <td>Rs.469/-&nbsp; &nbsp;&nbsp;&nbsp;</td>					
                  </tr>
				  
				          <tr>
                    <td>05</td>
				            <td>Shri Pramodkumarji Jain(Kasliwal) Prize </td>
					          <td>Highest marks secured Student from BCom</td>
                    <td>Rs.330/-</td>					
                  </tr>
				  
				          <tr>
                    <td>06</td>
				            <td>Late Eknathrarao Wamanrao Kshirsagar Memorial</td>
					          <td>Highest marks secured Student (First) from BCom Cost Account</td>
                    <td>Rs.600/-</td>					
                  </tr>
				  
				          <tr>
                    <td>07</td>
				            <td>Late Keshavrao Mirkhelkar Sports Prize  </td>
					          <td>Higherst (Overall) Performance in Sports </td>
                    <td>Rs.600/-</td>					
                  </tr>
				  
				          <tr>
                    <td>08</td>
				            <td>Late Nalinitai Yashwant Kolhatkar Memorial Prize(Donar Sow Malti Gore)</td>
					          <td>Highest marks secured Student (First) from BA Music</td>
                    <td>Rs.250/-</td>					
                  </tr>
				  
				          <tr>
                    <td>09</td>
				            <td>Late Prabhakar Bhalerao Memorial Prize </td>
					         <td>Prize for Bhasha Pustak Parichay (Marathi, Hindi, English) to the student who stood First, Second & Third in each subject area.</td>
                    <td>Rs.350/-I Rs.200/-II Rs.150/-III  Rs.2100</td>					
                  </tr>
				  
				          <tr>
                    <td>10</td>
				            <td>Late Durgesh Gavande Memorial(Donar Sow Chandramal Gavande) </td>
					          <td>Highest marks secured Student (First) from BCom Information Technology (Computer) </td>
                    <td>Rs.500</td>					
                  </tr>
				  
				           <tr>
                    <td>11</td>
				            <td>Late Shrikrishna Damodar Khairnar Memorial Prize(Donar Dr.J.S. Khairnar) </td>
					          <td>Highest marks secured Student (First) from BA English Optional </td>
                    <td>Rs.500</td>					
                  </tr>
				  
				          <tr>
                    <td>12</td>
				            <td>Late Prof.Laxman Motiram Ghuge Memorial Prize </td>
					          <td>Highest marks secured Student (First) from BA Economics. (Boys & Girls each) </td>
                    <td>Rs.1500</td>					
                  </tr>
				  
				          <tr>
                    <td>13</td>
				            <td>Late Shri Govindbhai Shroff Sponsored Karmveer Bhaurao Patil NSS Prize.   </td>
					          <td>Highest (Overall) Performance in NSS (Boys & Girls each) </td>
                    <td>Rs.125</td>					
                  </tr>
				          
                  <tr>
                    <td>14</td>
				            <td>Prof.Chandramohan G Bhatul Memorial Prize     </td>
					          <td>Highest marks secured Student (First) from BA English Optional </td>
                    <td>Rs.500</td>					
                  </tr>
				  
				          <tr>
                    <td>15</td>
				            <td>Prof. Dr. Madhavi Apte  Memorial Prize    </td>
					          <td>Highest marks secured Student (First) from BA/BCom FY/SY SL-English  </td>
                    <td>Rs.500</td>					
                  </tr>
				  
				          <tr>
                    <td>16</td>
				            <td>Dr. Arwind Munje Memorial Prize      </td>
					          <td>Higherst (Overall) Performance in Dramastic </td>
                    <td>Rs.500</td>					
                  </tr>
				  
				         <tr>
                    <td>17</td>
				            <td>Saw Sujata Tambe Memorial Prize  </td>
					          <td>Higherst (Overall) Performance in Sports</td>
                    <td>Rs.500</td>					
                  </tr>
				  
				          <tr>
                    <td>18</td>
				            <td>Late R. N. Tambe Memorial Prize   </td>
					          <td>Highest marks secured Student (First) from BA English Optional</td>
                    <td>Rs.500</td>					
                  </tr>
				  
				          <tr>
                    <td>19</td>
				            <td>Late Bhagirithibai Raghunath Alhwani Prize </td>
					          <td>Highest marks secured Student from BA Marathi.</td>
                    <td>Rs.500</td>					
                  </tr>
				  
				          <tr>
                    <td>20</td>
				            <td>Surmani Pandit Uttamrao Agnihotri Memorial Prize  </td>
					          <td>Highest marks secured Student (First) from BA Music</td>
                    <td>Rs.500</td>					
                  </tr>
				  
				          <tr>
                    <td>21</td>
				            <td>Late Dr. M. Shalini Rao-Pargaonkar Scholar Ship for UG Student   </td>
					          <td>One Female BA/BCom/BBA/BCA Student </td>
                    <td>Rs.25000</td>					
                  </tr>
				  
				          <tr>
                    <td>22</td>
				            <td>Late Dr. M. Shalini Rao-Pargaonkar Scholar Ship for PG Student  </td>
					          <td>One Female MCom Student </td>
                    <td>Rs.30000</td>					
                  </tr>
				  				
                </tbody>
              </table>
        </div>
      ),
    },

     "Student Development": {
      NCC: (
        <p>NCC Information</p>
      ),
      NSS: (
        <p>NSS Information</p>
      ),
      Treking: (
        <p>Treking Information</p>
      ),
      Avishkar: (
        <p><>

  <div
    style={{
      background: "#f8f9fa",
      padding: "20px",
      borderRadius: "10px",
      marginBottom: "20px",
      borderLeft: "5px solid #0d6efd",
    }}
  >
    <h2 style={{ color: "#003366", marginBottom: "10px" }}>
      Avishkar General Information
    </h2>

<p style={{ lineHeight: "1.8" }}>
  His Excellency, Governor of Maharashtra,
  <strong> Shri. S. M. Krishna</strong> initiated a novel research project
  competition named <strong>Avishkar</strong> in 2006. This innovative
  activity is implemented through the Board of College and University
  Development (BCUD). The competition encourages students to showcase
  research, innovation, creativity, and problem-solving abilities.
</p>

  </div>

  <h3 style={{ color: "#0d6efd", marginBottom: "15px" }}>
    📌 Guidelines for Participants
  </h3>

  <ul
    style={{
      lineHeight: "2",
      paddingLeft: "25px",
      marginBottom: "25px",
    }}
  >
    <li>Projects may be presented as Live Demonstrations, Models, or Posters.</li>
    <li>Maximum two entries per category from each college/institution.</li>
    <li>Poster size should be 1m × 1m for the first-round presentation.</li>
    <li>Selected projects will qualify for oral presentations.</li>
    <li>Presentation Time: 8 Minutes + 2 Minutes Question & Answer Session.</li>
    <li>Only one representative will present the project.</li>
    <li>Registration is compulsory and free of cost.</li>
    <li>Participation Certificates will be issued by the University.</li>
    <li>Basic facilities like electricity, tables, projectors, and display boards will be provided.</li>
    <li>The decision of judges shall be final and binding.</li>
  </ul>

  <h3 style={{ color: "#0d6efd", marginBottom: "15px" }}>
    🎯 Categories for Participation
  </h3>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
      gap: "15px",
      marginBottom: "30px",
    }}
  >
    <div className="category-card">Humanities, Languages & Fine Arts</div>
    <div className="category-card">Commerce, Management & Law</div>
    <div className="category-card">Pure Sciences</div>
    <div className="category-card">Agriculture & Animal Husbandry</div>
    <div className="category-card">Engineering & Technology</div>
    <div className="category-card">Medicine & Pharmacy</div>
  </div>

  <h3 style={{ color: "#0d6efd", marginBottom: "15px" }}>
    📅 Avishkar Competition Schedule 2026
  </h3>

  <div style={{ overflowX: "auto" }}>
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        textAlign: "center",
      }}
    >
      <thead>
        <tr style={{ background: "#003366", color: "#fff" }}>
          <th style={{ padding: "12px", border: "1px solid #ddd" }}>
            Sr. No.
          </th>
          <th style={{ padding: "12px", border: "1px solid #ddd" }}>
            Level
          </th>
          <th style={{ padding: "12px", border: "1px solid #ddd" }}>
            Date
          </th>
        </tr>
      </thead>

  <tbody>
    <tr>
      <td style={{ padding: "10px", border: "1px solid #ddd" }}>
        01
      </td>
      <td style={{ padding: "10px", border: "1px solid #ddd" }}>
        College Level
      </td>
      <td style={{ padding: "10px", border: "1px solid #ddd" }}>
        18 August 2026
      </td>
    </tr>

    <tr style={{ background: "#f8f9fa" }}>
      <td style={{ padding: "10px", border: "1px solid #ddd" }}>
        02
      </td>
      <td style={{ padding: "10px", border: "1px solid #ddd" }}>
        District Level
      </td>
      <td style={{ padding: "10px", border: "1px solid #ddd" }}>
        Will be declared soon
      </td>
    </tr>

    <tr>
      <td style={{ padding: "10px", border: "1px solid #ddd" }}>
        03
      </td>
      <td style={{ padding: "10px", border: "1px solid #ddd" }}>
        University Level
      </td>
      <td style={{ padding: "10px", border: "1px solid #ddd" }}>
        29 & 30 September 2026
      </td>
    </tr>
  </tbody>
</table>
  </div>

  <style jsx>{`
    .category-card {
      background: #ffffff;
      border-left: 4px solid #0d6efd;
      padding: 15px;
      border-radius: 8px;
      font-weight: 600;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      transition: 0.3s;
    }

    .category-card:hover {
      transform: translateY(-3px);
    }
  `}</style>

</>
</p>
        
      ),

      "Certificate Cources": (
        <p>Certificate Information</p>
      ),
    },

    
    "Student Walfare": {
      Grievance: (
        <div className="pdf-viewer">
          <iframe
            src="/assets/student/Grievance.pdf"
            title="Grievance PDF"
            width="100%"
            height="800"
          />
        </div>
      ),
      Feedback: (
        <div>
        <h2>Donation Deposit Scheme for Prizes to students Instituted by Philanthropists</h2>
            <table className="table2 table-bordered">
                <thead>
                  <tr>          
                    <th>Sr No </th>
					          <th> Feedback </th>
					          <th >Web Link</th>
					        </tr>
                </thead>
                <tbody>
				  
                
                  <tr>
                    <td>1</td>
				            <td>I (B) - Curriculum Feedback by Students</td>
					          <td> <a href="https://forms.gle/ieLuH6qTxgALRnJd7" target="blank"> Click Here </a> </td>
                  </tr>
                  
                  <tr>
                    <td>2</td>
				            <td>I (C) - Curriculum Feedback by Teachers, Parents, Alumni, Employer</td>
					          <td> <a href="https://forms.gle/SYvG2g4cneRph7gCA" target="blank"> Click Here </a> </td>
                  </tr>
                  
                <tr>
                  <td >3</td>
                  <td > II Teacher's Feedback by Students </td>
                  <td> <a href="https://forms.gle/oBF6js2KWBbziZ1R9" target="blank">Click Here</a> </td>
								</tr>
							
				        <tr>
                  <td >4</td>
                  <td > IV - Feedback on Activity, Program, Project </td>
                  <td> <a href="https://forms.gle/sLHhs3htraQPFDM77" target="blank">Click Here</a>  </td>
                </tr>
							
                <tr>
                  <td >5</td>
                  <td > V - Student's Feedback of Institutional Performance </td>
                  <td> <a href="https://forms.gle/KoVceb141kMX79BDA" target="blank">Click Here</a>  </td>
								</tr>
				  				
                </tbody>
              </table>
        </div>
      ),
      "Anti-ragging": (

        <div>
        <p>In pursuance to the Judgment of the Hon’ble Supreme Court of India dated 08.05.2009 in Civil
          Appeal No. 887/2009, the University Grants Commission has framed “UGC Regulations on curbing
          the menace of ragging in higher educational institutions, 2009” which have been notified on 4th July
          2009 in the Gazette of India. These regulations are mandatory for all Universities/Institutions. The
          UGC has made it mandatory for all students/parents to submit anti ragging related affidavits to the
          institutions at the time of admission. Now it is brought to the notice of all Universities, Institutions,
          Students and Parents that these affidavits can be downloaded from the web site of UGC and or
          related other web sites. </p>
          &nbsp; 
          &nbsp;
          <p></p>

          <a href="https://www.antiragging.in/">https://www.antiragging.in/</a>

          </div>
      ),
      "Mentor Mentee": (
        <p>Mentor Mentee information.</p>
      ),
    },

    // Health: {
    //   "Medical Facility": (
    //     <p>Medical Facility information.</p>
    //   ),
    //   "Health Camp": (
    //     <p>Health Camp information.</p>
    //   ),
    // },
  };

  /* RIGHT MENU DATA */
  const rightMenuData = {
    "Fees Structure": {
      Prospectus: (
         <div className="pdf-viewer">
          <iframe
            src="/assets/student/Demo.pdf"
            title="Grievance pdf"
            width="100%"
            height="800"
          />
        </div>
      ),

      Fees: (
         <div className="pdf-viewer">
          <iframe
            src="/assets/student/Fees.pdf"
            title="Fees Structure pdf"
            width="100%"
            height="800"
          />
        </div>
      ),
      
    },

    "Placement & Cell": {
      Circulars: (
        <p>Latest Circulars.</p>
      ),
      
    },

    Forms: {
      Admission: (
        <p>Admission Form details.</p>
      ),
      Scholarship: (
        <p>Scholarship Form details.</p>
      ),
    },
  };

  /* DEFAULT MENU */
  const firstLeftMenu = Object.keys(leftMenuData)[0];
  const firstLeftSub = Object.keys(
    leftMenuData[firstLeftMenu as keyof typeof leftMenuData]
  )[0];

  const firstRightMenu = Object.keys(rightMenuData)[0];
  const firstRightSub = Object.keys(
    rightMenuData[firstRightMenu as keyof typeof rightMenuData]
  )[0];

  const [activeSide, setActiveSide] =
    useState<"left" | "right">("left");

  const [activeLeft, setActiveLeft] =
    useState(firstLeftMenu);

  const [activeLeftSub, setActiveLeftSub] =
    useState(firstLeftSub);

  const [activeRight, setActiveRight] =
    useState(firstRightMenu);

  const [activeRightSub, setActiveRightSub] =
    useState(firstRightSub);

  /* LEFT MENU CLICK */
  const handleLeftMenu = (menu: string) => {
    setActiveSide("left");
    setActiveLeft(menu);

    const firstSub = Object.keys(
      leftMenuData[menu as keyof typeof leftMenuData]
    )[0];

    setActiveLeftSub(firstSub);
  };

  /* RIGHT MENU CLICK */
  const handleRightMenu = (menu: string) => {
    setActiveSide("right");
    setActiveRight(menu);

    const firstSub = Object.keys(
      rightMenuData[menu as keyof typeof rightMenuData]
    )[0];

    setActiveRightSub(firstSub);
  };

  return (
    <SrCollegeLayout>
      <div className="student-container">
        {/* LEFT SIDEBAR */}
        <aside className="sidebar">
          <h3>Main Menu</h3>

          {Object.keys(leftMenuData).map((menu) => (
            <div
              key={menu}
              className={`menu-item ${
                activeLeft === menu
                  ? "active-menu"
                  : ""
              }`}
              onClick={() =>
                handleLeftMenu(menu)
              }
            >
              {menu}
            </div>
          ))}
        </aside>

        {/* CENTER CONTENT */}
        <main className="center-content">
          {/* LEFT SUBMENU */}
          {activeSide === "left" && (
            <div className="top-submenu">
              {Object.keys(
                leftMenuData[
                  activeLeft as keyof typeof leftMenuData
                ]
              ).map((sub) => (
                <button
                  key={sub}
                  className={`submenu-btn ${
                    activeLeftSub === sub
                      ? "active-submenu-btn"
                      : ""
                  }`}
                  onClick={() =>
                    setActiveLeftSub(sub)
                  }
                >
                  {sub}
                </button>
              ))}
            </div>
          )}

          {/* RIGHT SUBMENU */}
          {activeSide === "right" && (
            <div className="top-submenu">
              {Object.keys(
                rightMenuData[
                  activeRight as keyof typeof rightMenuData
                ]
              ).map((sub) => (
                <button
                  key={sub}
                  className={`submenu-btn ${
                    activeRightSub === sub
                      ? "active-submenu-btn"
                      : ""
                  }`}
                  onClick={() =>
                    setActiveRightSub(sub)
                  }
                >
                  {sub}
                </button>
              ))}
            </div>
          )}

          <div className="content-box">
          {activeSide === "left" && (
    <>
      {
        leftMenuData[
          activeLeft as keyof typeof leftMenuData
        ][activeLeftSub as keyof typeof leftMenuData[keyof typeof leftMenuData]]
      }
    </>
  )}

  {activeSide === "right" && (
    <>
      {
        rightMenuData[
          activeRight as keyof typeof rightMenuData
        ][activeRightSub as keyof typeof rightMenuData[keyof typeof rightMenuData]]
      }
    </>
  )}
</div>
        </main>

        {/* RIGHT SIDEBAR */}
        <aside className="sidebar">
          <h3>Main Menu</h3>

          {Object.keys(rightMenuData).map((menu) => (
            <div
              key={menu}
              className={`menu-item ${
                activeRight === menu
                  ? "active-menu"
                  : ""
              }`}
              onClick={() =>
                handleRightMenu(menu)
              }
            >
              {menu}
            </div>
          ))}
        </aside>
      </div>
    </SrCollegeLayout>
  );
}