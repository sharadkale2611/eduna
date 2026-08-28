"use client";

import { useState } from "react";
import CollegeLayout from "@/components/sr-college/SrCollegeLayout";
import "./library.css";

export default function LibraryPage() {
  const menuData = {
    "Departmental Home": (
      <div className="library-content">
        <img
          src="/assets/images/library/library.jpg"
          alt="Library"
          className="content-image"
        />

        <div className="content-text">
          <p>
            Education and Library are two inseparable or indivisible concepts, both being fundamentally
            and synchronically related to and co-existent with each other. One cannot be separated from 
            the other. None of them is an end in itself; rather both of them together are a means to an
            ultimate end. One dies as soon as the other perishes. One survives as long as the other 
            exists. This inter-relation, co-existence, or this dependence of one upon the other has 
            been coming down from the birth of human civilization to the posterity through a process of 
            evolution. Education cannot exist alone in the absence of library and library has no meaning
            if it cannot impart education. A well-equipped library is a sine qua non for the intellectual,
            moral, and spiritual advancement and elevation of the people of a community. It is an
            indispensable element of the absolute wellbeing of the citizens and that of the nation at 
            large. Considering this aspect, since last 47 years, S.B. Education Society is vigorously 
            taking effort for an overall development of the library and its services extends to the
           Journalists, creative writers and critics from various sections of the society. Since the 
           inception of the college, the library was in the college building, considering the future 
           scope and expansion, it was shifted to the separate building in 2016 with necessary facilities 
           and amenities like Reading Room for PG and UG students, for teachers' stacks room, issue 
           counter etc. Today our library provides the following facilities to beneficiaries:
          </p>
        </div>
      </div>
    ),

    "Library at Glance  ": 
      <p><div className="library-info">
          <table>
            <tbody>
              <tr>
                <td><strong>Library Timing</strong></td>
                <td>9:00 am to 5:00 pm</td>
              </tr>
              <tr>
                <td><strong>Books</strong></td>
                <td>92,021</td>
              </tr>
              <tr>
                <td><strong>E-Library</strong></td>
                <td>N-List, E-Books: 195,809+ Titles, E-Journals: 6,293+ Titles</td>
              </tr>
              <tr>
                <td><strong>Library Automation Software</strong></td>
                <td>Soul 3.0, OPAC</td>
              </tr>
              <tr>
                <td><strong>Periodicals / Magazines / Journals</strong></td>
                <td>29</td>
              </tr>
              <tr>
                <td><strong>Newspapers</strong></td>
                <td>10</td>
              </tr>
              <tr>
                <td><strong>Dainik Marathwada Collection</strong></td>
                <td>Digital and Hard Copy from 1949 to 2000</td>
              </tr>
              <tr>
                <td><strong>Manuscripts</strong></td>
                <td>32</td>
              </tr>
              <tr>
                <td><strong>Area of the Library</strong></td>
                <td>9,600 sq. ft.</td>
              </tr>
              <tr>
                <td><strong>Computer Terminals for Staff and Students</strong></td>
                <td>70</td>
              </tr>
              <tr>
                <td><strong>Separate Reading Room (UG)</strong></td>
                <td>2,142 sq. ft.</td>
              </tr>
              <tr>
                <td><strong>Separate Reading Room (PG)</strong></td>
                <td>468 sq. ft.</td>
              </tr>
              <tr>
                <td><strong>Separate Reading Room (Research Scholars)</strong></td>
                <td>192 sq. ft.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </p>,
    
    "Library Staff": <p>Library Staff Information</p>,
    
   "Unique Collection in Library":
   <p> 
    <section className="unique-library">
  <h2>📚 </h2>

  <div className="collection-box">
    <ul>
      <li>Dr. Babasaheb Ambedkar Writing and Speeches</li>
      <li>Sri Aurobindo</li>
      <li>The Collected Works of Mahatma Gandhi</li>
      <li>Encyclopedia of Gandhian Thought</li>
      <li>Mahatma Gandhi Adhiparwa</li>
      <li>Selected Works of Jawaharlal Nehru</li>
      <li>Samagra Kelkar</li>
      <li>Samagra Savarkar</li>
      <li>Lokhitwadi: Samagra Wangmay</li>
      <li>Mahatma Phule</li>
      <li>OSHO Collection</li>
      <li>Complete Works of Swami Vivekananda</li>
      <li>Encyclopaedia Britannica</li>
      <li>Marathi Vishwakosh</li>
      <li>Hindi Vishwakosh</li>
    </ul>
  </div>
</section>
  </p>,

  
"Repository of Marathawada": (
  <div className="library-content">
    
    <div className="image-stack">
       <img src="/assets/images/library/marathwada.jpg" className="content-image" />
      <img src="/assets/images/library/marathwada1.jpg" className="content-image" />
    </div>

    <div className="content-text">
      <p>
        Library has completely digitalized all daily copies for newspaper Dainik Marathwada starting from 
        1948 till 2000. Original copies of newspaper are preserved and laminated to avoid wear and tear 
        of paper due to aging. Preservation and Digitalization Project was funded by National Archives of 
        Government of India. Reprographic copies of digitalized newspapers are made available to users on 
        proper application and approvals with minimal charges.
      </p>
    </div>

  </div>
),
  
    
"Highlight of the Library":
    
    <p> 
    <section className="unique-library">
     <h2>📚 </h2>

          <div className="collection-box">
            <ul>
              <li> Separate building for library.s</li>
              <li>Separate reading rooms for staff and student.</li>
              <li> Unique reference books.</li>
              <li> Dainik Marathwada collection (1949 to 2000)</li>
              </ul>
          </div>
    </section>
  </p>,


"E-Library": (
  <div>

    {/* MAIN SECTION */}
    <section className="library-content">

      <img
        src="/assets/images/library/library.jpg"
        alt="Library"
        className="content-image"
      />

      <div className="content-text">
        <p>
          Library is equipped with 70 N-Computing systems which allows students to access information from anywhere,
          at any time, with just a few clicks of a mouse or taps on a screen. E-libraries offer a wealth of resources
          that can help students broaden their knowledge, improve their research skills, and boost their academic 
          performance.
        </p>
      </div>

    </section>

    {/* FACILITIES SECTION */}
    <section className="unique-library">

      <h2>📚 Link to E-Library Resources</h2>

      <div className="collection-box">
        <ul>
          <li>Separate building for library</li>
          <li>Separate reading rooms for staff and students</li>
          <li>Rich reference book collection</li>
          <li>Dainik Marathwada collection (1949–2000)</li>
        </ul>
      </div>

    </section>

  </div>
),

    



"Magazines and Journals": <p>Magazines and Journals Information</p>,
       
  
  "Facilities": (
  <div className="facility-grid">

    <div className="facility-item">
      <img src="/assets/images/library/Reading1.jpg" alt="UG Reading Room" />
      <div>
        <h3>Reading Room for UG Students</h3>
        <p>
          Library provides a spacious reading room for undergraduate students
          and students preparing for competitive examinations and
          professional studies.
        </p>
      </div>
    </div>

    <div className="facility-item reverse">
      <img src="/assets/images/library/Reading2.jpg" alt="Faculty Reading Room" />
      <div>
        <h3>Reading Room for Faculty, Researchers & PG Students</h3>
        <p>
          Separate reading room for faculty members, research scholars and
          postgraduate students with reference books and research materials.
        </p>
      </div>
    </div>

    <div className="facility-item">
      <img src="/assets/images/library/opac.jpg" alt="OPAC" />
      <div>
        <h3>OPAC</h3>
        <p>
          Online Public Access Catalogue helps users search books,
          journals, dissertations and other library resources instantly.
        </p>
      </div>
    </div>

    <div className="facility-item reverse">
      <img src="/assets/images/library/nlist.jpg" alt="N-LIST" />
      <div>
        <h3>N-LIST</h3>
        <p>
          Access thousands of e-books and e-journals through N-LIST for
          academic learning and research.
        </p>
      </div>
    </div>

    <div className="facility-item">
      <img src="/assets/images/library/saksham.jpg" alt="Saksham" />
      <div>
        <h3>Indo-NVDA Saksham</h3>
        <p>
          Licensed screen-reading software enables visually impaired users
          to access digital library resources.
        </p>
      </div>
    </div>

    <div className="facility-item reverse">
      <img src="/assets/images/library/scanner.jpg" alt="Scanner" />
      <div>
        <h3>Reprography with Scanner</h3>
        <p>
          High-quality scanning and reprography facilities preserve printed
          resources while improving accessibility.
        </p>
      </div>
    </div>

    <div className="facility-item">
      <img src="/assets/images/library/books-demand.jpg" alt="Books on Demand" />
      <div>
        <h3>Books on Demand</h3>
        <p>
          Required books not available in the library can be procured based
          on academic requirements.
        </p>
      </div>
    </div>

    <div className="facility-item reverse">
      <img src="/assets/images/library/competitive.jpg" alt="Competitive Exam" />
      <div>
        <h3>Competitive Examination Resources</h3>
        <p>
          Updated books, magazines and journals help students prepare for
          competitive and professional examinations.
        </p>
      </div>
    </div>

    <div className="facility-item">
      <img src="/assets/images/library/manuscripts.jpg" alt="Manuscripts" />
      <div>
        <h3>Manuscripts & Bibliographic Services</h3>
        <p>
          Bibliographic services help users locate books, journals,
          manuscripts and research resources efficiently.
        </p>
      </div>
    </div>

  </div>
),

    "Circulation Details": <p>Circulation Details Information</p>,
    "Department Libraries": <p>Department Libraries Information</p>,
   
    "Library Rules": 
    
         <p>
          1. Each student must carry his/her own <strong>Library Card</strong> and <strong>Identity Card (I-Card)</strong> to avail the library facility.<br /><br />

          2. Books are issued for a period of <strong>7 days</strong> only.<br /><br />

          3. Books must be submitted to the library whenever requested by the Librarian.<br /><br />

          4. A fine of <strong>₹0.50 per day</strong> will be charged for books returned after the due date.<br /><br />

          5. Library books should be returned on or before the due date.<br /><br />

          6. Reference books, journals, newspapers, and periodicals are for <strong>library use only</strong>.<br /><br />

          7. If a book is found torn, damaged, or defaced, the borrower shall pay the cost of the book along with the applicable fine.<br /><br />

          8. Torn or missing pages should be reported immediately to the Librarian before borrowing the book.<br /><br />

          9. The use of mobile phones is strictly prohibited inside the library. Phones must be switched off or kept on silent mode.<br /><br />

          10. All staff members are also requested to keep their mobile phones on silent mode while inside the library.<br /><br />

          11. Maintain silence and discipline inside the library at all times.<br /><br />

          12. Handle library books and other resources carefully to preserve them for future users.
        </p>,
     };

  const firstMenu = Object.keys(menuData)[0];

  const [activeMenu, setActiveMenu] =
    useState(firstMenu);

  return (
    <CollegeLayout>
      <div className="library-page">
        <aside className="library-sidebar">
          {Object.keys(menuData).map((menu) => (
            <div
              key={menu}
              className={`library-menu-item ${
                activeMenu === menu ? "active" : ""
              }`}
              onClick={() => setActiveMenu(menu)}
            >
              ⦿ {menu}
            </div>
          ))}
        </aside>

        <main className="library-main">
          <h2>{activeMenu}</h2>

          <div className="library-card">
            {
              menuData[
                activeMenu as keyof typeof menuData
              ]
            }
          </div>
        </main>
      </div>
    </CollegeLayout>
  );
}