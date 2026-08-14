"use client";

import { useState } from "react";
import SrCollegeLayout from "@/components/sr-college/SrCollegeLayout";
import "./department.css";
import { sub } from "framer-motion/client";
import { table } from "console";

export default function programmePage() {

  const [active, setActive] = useState("Commerce");
  const [subActive, setSubActive] = useState("");

  /* ================= MENU DATA ================= */

  const menuData: any = {

    "Commerce": {
      submenu: {
        "Course Detials": {
          content: (
        <div className="bg-gray-200 p-6 text-sm leading-6 text-black">
          
          {/* PROFILE */}
          <h2 className="text-red-600 font-bold mb-2">PROFILE</h2>

          <h3 className="font-semibold">Scope of the Subject:</h3>
          <ul className="list-disc ml-6 mb-3">
            <li>Recognized as a oldest branch of knowledge provides knowledge and trains people.</li>
            <li>Branch of knowledge imports knowledge of skill in the field of trade, business, industry and other allied areas of sciences.</li>
            <li>Synergy of many subjects which relates to commerce and management.</li>
            <li>Imparts and provides contemporary knowledge for creating employability and EDP Development.</li>
            <li>Links local environment to global for maintaining balance between demand and supply.</li>
            <li>Branch of knowledge applies and train professionalism.</li>
          </ul>

          <h3 className="font-semibold">Significance:</h3>
          <ul className="list-disc ml-6 mb-3">
            <li>Concern with commercial, trade related, business related and service oriented approach.</li>
            <li>Emerging as a branch of knowledge supporting independent professions.</li>
            <li>More professionalism, expertise and service oriented approach.</li>
            <li>Main pillar of economic development and national prosperity.</li>
            <li>Most important and demanding discipline on global platform, links and integrates human society and nation.</li>
          </ul>

          <h3 className="font-semibold">Objectives:</h3>
          <ul className="list-disc ml-6 mb-3">
            <li>To create awareness about global economy and developing professional attitude to exploit resources properly and in prudent manner.</li>
            <li>To orient, train and create employability as well as EDP Environment amongst youth.</li>
            <li>To create awareness, avenues and opportunities to the youth.</li>
          </ul>

          <h3 className="font-semibold">Introduction to Department:</h3>
          <ul className="list-disc ml-6 mb-3">
            <li>SBES Arts and Commerce College established in 1963.</li>
            <li>Curriculum reflects in real life practices and students are equipped with knowledge, skill and develops professionalism.</li>
            <li>Contemporary and competency capability cultivated and nurtured.</li>
            <li>Faculty continuously expanding with number, quality and impact.</li>
            <li>Versatile expertise and adaptive nature shared with students.</li>
            <li>Innovative teaching and ICT application incorporated as a part of practice.</li>
            <li>Participative teaching and learning practice.</li>
          </ul>

          <h3 className="font-semibold">Objectives of Department:</h3>
          <ul className="list-disc ml-6">
            <li>To provide knowledge, skill and capability among students.</li>
            <li>To develop competitive approach and competency.</li>
            <li>More practical and skill oriented approach.</li>
            <li>Awareness of global environment and real experience of local situation linked in curriculum.</li>
            <li>Techno-oriented approach and real experience provided to students.</li>
            <li>Principle of sharing and caring cultivated in day-to-day life.</li>
            <li>Participative teaching, learning and knowledge sharing practiced in classroom and college environment.</li>
          </ul>

          
          <h3>Establishment of the Department and Programmes offered</h3>
          <p>
                
                <div className="overflow-x-auto">
          <table className="w-full border border-gray-400 text-sm text-left">
    
                  <thead className="bg-blue-600 text-black">
                     <tr>
                       <th className="border border-gray-400 px-4 py-2">Sr. No.</th>
                       <th className="border border-gray-400 px-4 py-2">Courses/Programmes</th>
                       <th className="border border-gray-400 px-4 py-2">Annual/semester/choice based credit system</th>
                        <th className="border border-gray-400 px-4 py-2">Year of Establishment</th>
                      </tr>
                  </thead>

                <tbody>
                    <tr className="hover:bg-gray-100">
                      <td className="border border-gray-400 px-4 py-2">1</td>
                      <td className="border border-gray-400 px-4 py-2">B.Com</td>
                      <td className="border border-gray-400 px-4 py-2">Choice Based Credit System / Semester</td>
                      <td className="border border-gray-400 px-4 py-2">12/07/1963</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr className="hover:bg-gray-100">
                      <td className="border border-gray-400 px-4 py-2">2</td>
                      <td className="border border-gray-400 px-4 py-2">M.Com</td>
                      <td className="border border-gray-400 px-4 py-2">Choice Based Credit System / Semester</td>
                      <td className="border border-gray-400 px-4 py-2">13/08/1976</td>
                    </tr>
                </tbody>
                
          </table>
          </div>
              </p>

        </div>
      )
        },

                
        "Faculty of Department": {
          content: (
            <>
              <p>
                
                <table className="w-full border border-gray-400 text-sm text-left">
    
                  <thead className="bg-blue-600 text-black">
                     <tr>
                       <th className="border border-gray-400 px-4 py-2">Sr. No.</th>
                       <th className="border border-gray-400 px-4 py-2">Name</th>
                       <th className="border border-gray-400 px-4 py-2">Qualification</th>
                        <th className="border border-gray-400 px-4 py-2">Designation</th>
                        <th className="border border-gray-400 px-4 py-2">Tenure</th>
                      </tr>                      
                  </thead>

                <tbody>
                    <tr className="hover:bg-gray-100">
                      <td className="border border-gray-400 px-4 py-2">1</td>
                      <td className="border border-gray-400 px-4 py-2">Dr. A. V. Choudhary</td>
                      <td className="border border-gray-400 px-4 py-2">M.com. M.Phil., Ph.D.</td>
                      <td className="border border-gray-400 px-4 py-2">Vice-Principal</td>
                      <td className="border border-gray-400 px-4 py-2">06/01/2004</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr className="hover:bg-gray-100">
                      <td className="border border-gray-400 px-4 py-2">2</td>
                      <td className="border border-gray-400 px-4 py-2">Dr. D. S. Chavan</td>
                      <td className="border border-gray-400 px-4 py-2">M.com., SET,MPM,DTL,GDCA, Ph.D.</td>
                      <td className="border border-gray-400 px-4 py-2">Professor</td>
                      <td className="border border-gray-400 px-4 py-2">02/09/2006</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr className="hover:bg-gray-100">
                      <td className="border border-gray-400 px-4 py-2">3</td>
                      <td className="border border-gray-400 px-4 py-2">Dr. F. A. Baig</td>
                      <td className="border border-gray-400 px-4 py-2">M.com., SET, Ph.D.</td>
                      <td className="border border-gray-400 px-4 py-2">Professor</td>
                      <td className="border border-gray-400 px-4 py-2">05/12/2006</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr className="hover:bg-gray-100">
                      <td className="border border-gray-400 px-4 py-2">4</td>
                      <td className="border border-gray-400 px-4 py-2">Dr. S. N. Dhage</td>
                      <td className="border border-gray-400 px-4 py-2">M.com M.Phil., Ph.D., NET..</td>
                      <td className="border border-gray-400 px-4 py-2">Assistant Professor</td>
                      <td className="border border-gray-400 px-4 py-2">	26/09/2023</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr className="hover:bg-gray-100">
                      <td className="border border-gray-400 px-4 py-2">5</td>
                      <td className="border border-gray-400 px-4 py-2">Dr. V. U. Panchal</td>
                      <td className="border border-gray-400 px-4 py-2">M. Com., Ph. D.</td>
                      <td className="border border-gray-400 px-4 py-2">Assistant Professor</td>
                      <td className="border border-gray-400 px-4 py-2"> 26/09/2023 </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr className="hover:bg-gray-100">
                      <td className="border border-gray-400 px-4 py-2">6</td>
                      <td className="border border-gray-400 px-4 py-2">Mr. N. Upadhye</td>
                      <td className="border border-gray-400 px-4 py-2">M.Com, NET</td>
                      <td className="border border-gray-400 px-4 py-2">Assistant Professor</td>
                      <td className="border border-gray-400 px-4 py-2"> 26/09/2023 </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr className="hover:bg-gray-100">
                      <td className="border border-gray-400 px-4 py-2">7</td>
                      <td className="border border-gray-400 px-4 py-2">Mr. R. Rathi</td>
                      <td className="border border-gray-400 px-4 py-2">M.Com, CA, ISA, SET, NET</td>
                      <td className="border border-gray-400 px-4 py-2">Assistant Professor</td>
                      <td className="border border-gray-400 px-4 py-2"> 26/09/2023 </td>
                    </tr>
                </tbody>

          </table>
              </p>
            </>
          )

        },

        "Former Faculty of Department ": {
          content: (
            <>
              <p>
                
                <table className="w-full border border-gray-400 text-sm text-left">
    
                  <thead className="bg-blue-600 text-black">
                     <tr>
                       <th className="border border-gray-400 px-4 py-2">Sr. No.</th>
                       <th className="border border-gray-400 px-4 py-2">Name</th>
                       {/* <th className="border border-gray-400 px-4 py-2">Qualification</th> */}
                        {/* <th className="border border-gray-400 px-4 py-2">Designation</th> */}
                        <th className="border border-gray-400 px-4 py-2">Tenure</th>
                      </tr>                      
                  </thead>

               <tbody>
                  <tr className="hover:bg-gray-100">
                     <td className="border border-gray-400 px-4 py-2">1</td>
                     <td className="border border-gray-400 px-4 py-2">Mr. M Y Khan</td>
                     <td className="border border-gray-400 px-4 py-2">10/06/1964 to 31/08/2002</td>
                  </tr>

                  <tr className="hover:bg-gray-100">
                    <td className="border border-gray-400 px-4 py-2">2</td>
                    <td className="border border-gray-400 px-4 py-2">Dr. J. N. Desai</td>
                    <td className="border border-gray-400 px-4 py-2">15/06/1965 to 30/09/2000</td>
                  </tr>

                  <tr className="hover:bg-gray-100">
                    <td className="border border-gray-400 px-4 py-2">3</td>
                    <td className="border border-gray-400 px-4 py-2">Mr. A. K. Kulkarni</td>
                    <td className="border border-gray-400 px-4 py-2">15/06/1970 to 30/04/2003</td>
                  </tr>

                  <tr className="hover:bg-gray-100">
                    <td className="border border-gray-400 px-4 py-2">4</td>
                    <td className="border border-gray-400 px-4 py-2">Dr. S. K. Mishra</td>
                    <td className="border border-gray-400 px-4 py-2">15/06/1971 to 31/12/2002</td>
                  </tr>

                  <tr className="hover:bg-gray-100">
                    <td className="border border-gray-400 px-4 py-2">5</td>
                    <td className="border border-gray-400 px-4 py-2">Mr. A. U. Deshpande</td>
                    <td className="border border-gray-400 px-4 py-2">21/06/1971 to 31/12/2002</td>
                  </tr>

                  <tr className="hover:bg-gray-100">
                    <td className="border border-gray-400 px-4 py-2">6</td>
                    <td className="border border-gray-400 px-4 py-2">Dr. B. Y. Kshirsagar</td>
                    <td className="border border-gray-400 px-4 py-2">06/07/1971 to 30/04/2009</td>
                  </tr>

                  <tr className="hover:bg-gray-100">
                    <td className="border border-gray-400 px-4 py-2">7</td>
                    <td className="border border-gray-400 px-4 py-2">Mr. N. D. Sadafule</td>
                    <td className="border border-gray-400 px-4 py-2">16/09/1974 to 31/03/2004</td>
                  </tr>

                  <tr className="hover:bg-gray-100">
                    <td className="border border-gray-400 px-4 py-2">8</td>
                    <td className="border border-gray-400 px-4 py-2">Mr. A. K. Thakre</td>
                    <td className="border border-gray-400 px-4 py-2">27/09/1974 to 21/07/2006</td>
                  </tr>

                  <tr className="hover:bg-gray-100">
                    <td className="border border-gray-400 px-4 py-2">9</td>
                    <td className="border border-gray-400 px-4 py-2">Ms. S. K. Cholkar</td>
                    <td className="border border-gray-400 px-4 py-2">11/10/1974 to 30/06/1976</td>
                  </tr>

                  <tr className="hover:bg-gray-100">
                    <td className="border border-gray-400 px-4 py-2">10</td>
                    <td className="border border-gray-400 px-4 py-2">Mr. S. B. Kulkarni</td>
                    <td className="border border-gray-400 px-4 py-2">20/08/1976 to 31/05/2005</td>
                  </tr>

                  <tr className="hover:bg-gray-100">
                    <td className="border border-gray-400 px-4 py-2">11</td>
                    <td className="border border-gray-400 px-4 py-2">Mr. H.S. Deshmukh</td>
                    <td className="border border-gray-400 px-4 py-2">13/10/1978 to 30/06/2008</td>
                  </tr>

                  <tr className="hover:bg-gray-100">
                    <td className="border border-gray-400 px-4 py-2">12</td>
                    <td className="border border-gray-400 px-4 py-2">Dr. L. R. Nagargoje</td>
                    <td className="border border-gray-400 px-4 py-2">13/10/1978 to 17/08/2004</td>
                  </tr>

                  <tr className="hover:bg-gray-100">
                    <td className="border border-gray-400 px-4 py-2">13</td>
                    <td className="border border-gray-400 px-4 py-2">Dr. A. M. Kathar</td>
                    <td className="border border-gray-400 px-4 py-2">20/12/1978 to 28/02/2013</td>
                  </tr>

                  <tr className="hover:bg-gray-100">
                    <td className="border border-gray-400 px-4 py-2">14</td>
                    <td className="border border-gray-400 px-4 py-2">Ms. S. D. Mhaisekar</td>
                    <td className="border border-gray-400 px-4 py-2">01/09/1979 to 01/09/1983</td>
                  </tr>

                  <tr className="hover:bg-gray-100">
                    <td className="border border-gray-400 px-4 py-2">15</td>
                    <td className="border border-gray-400 px-4 py-2">Mr. A. B. Deshpande</td>
                    <td className="border border-gray-400 px-4 py-2">01/09/1979 to 30/08/2014</td>
                  </tr>

                  <tr className="hover:bg-gray-100">
                    <td className="border border-gray-400 px-4 py-2">16</td>
                    <td className="border border-gray-400 px-4 py-2">Dr. V. S. Mishra</td>
                    <td className="border border-gray-400 px-4 py-2">27/01/1981 to 31/08/2007</td>
                  </tr>

                  <tr className="hover:bg-gray-100">
                    <td className="border border-gray-400 px-4 py-2">17</td>
                    <td className="border border-gray-400 px-4 py-2">Dr. B. B. Ekshinge</td>
                    <td className="border border-gray-400 px-4 py-2">15/09/1979 to 14/01/1987</td>
                  </tr>

                  <tr className="hover:bg-gray-100">
                    <td className="border border-gray-400 px-4 py-2">18</td>
                    <td className="border border-gray-400 px-4 py-2">Mr. J. B. Wargade</td>
                    <td className="border border-gray-400 px-4 py-2">15/06/2009 to 30/09/2010</td>
                  </tr>

                  <tr className="hover:bg-gray-100">
                    <td className="border border-gray-400 px-4 py-2">19</td>
                    <td className="border border-gray-400 px-4 py-2">Dr. J. S. Khairnar</td>
                    <td className="border border-gray-400 px-4 py-2">15/09/1979</td>
                  </tr>

                   <tr className="hover:bg-gray-100">
                    <td className="border border-gray-400 px-4 py-2">20</td>
                    <td className="border border-gray-400 px-4 py-2">Mr. S. S. Ranmare</td>
                    <td className="border border-gray-400 px-4 py-2">11/09/2003</td>
                  </tr>

                  <tr className="hover:bg-gray-100">
                    <td className="border border-gray-400 px-4 py-2">20</td>
                    <td className="border border-gray-400 px-4 py-2">Mr. S.M. Thombare</td>
                    <td className="border border-gray-400 px-4 py-2">01/01/2004</td>
                  </tr>

                  <tr className="hover:bg-gray-100">
                    <td className="border border-gray-400 px-4 py-2">21</td>
                    <td className="border border-gray-400 px-4 py-2">Dr. H.N. Deshmukh</td>
                    <td className="border border-gray-400 px-4 py-2">31/08/2006</td>
                  </tr>

                  <tr className="hover:bg-gray-100">
                    <td className="border border-gray-400 px-4 py-2">22</td>
                    <td className="border border-gray-400 px-4 py-2">Dr. P. P. Deo</td>
                    <td className="border border-gray-400 px-4 py-2">31/08/2006</td>
                  </tr>

                   <tr className="hover:bg-gray-100">
                    <td className="border border-gray-400 px-4 py-2">23</td>
                    <td className="border border-gray-400 px-4 py-2">Dr. Mrs. S.G. Joshi</td>
                    <td className="border border-gray-400 px-4 py-2">15/06/2009</td>
                  </tr>
            </tbody>
          </table>
              </p>
            </>
          )

          

        }


      }
    },
    
    "Marathi": {
      submenu: {
        "Course Detials": {
          content: (
          <div className="bg-gray-200 p-6 text-sm leading-6 text-black">
  
            <h2 className="text-red-600 font-bold mb-2">PROFILE</h2>

            <h3 className="font-semibold mb-2">Introduction:</h3>

              <p className="mb-3 text-justify"> Marathi is an Indo-Aryan language. It is the official language of Maharashtra state of India and is one of the 23 official languages of India. There were 73 million speakers in 2001; Marathi has the fourth largest number of native speakers in India. The major dialects of Marathi are called Standard Marathi and Warhadi Marathi. There are a few other sub-dialects like Ahirani, Dangi, Vadvali, Samavedi, Khandeshi, and Malwani etc. Standard Marathi is the official language of the State of Maharashtra. Marathi is primarily spoken in Maharashtra and parts of neighboring states.  </p>
              <p className="mb-3 text-justify"> The first known examples of the written Marathi language are found in inscriptions dating to about the 11th century. Today Marathi is most commonly written using the Devanagari script, which is also used in the Hindi and Sanskrit languages. The form of Devanagari used to write Marathi is slightly different from that used to write Hindi and other Indian languages. </p>
              <p className="mb-3 text-justify"> Marathi Literature has strengthened the devotional mindset propounded by the Bhakti Movement in medieval times. The literature of Mahanubhav and Warkari sect enriched the Marathi language. Modern Marathi literature reflects social changes including Dalit and rural literature movements.  </p>
              <p className="text-justify">The Saraswati Bhuvan Education Society’s Arts and Commerce College was established in June 1963. The Marathi department, established in 1963, plays an important role in academic, social, and cultural development of students.  </p>
            </div>
      )
        },

                
        "Faculty of Department": {
          content: (
            <>
              <p>
                
                <table className="w-full border border-gray-400 text-sm text-left">
    
                  <thead className="bg-blue-600 text-black">
                     <tr>
                       <th className="border border-gray-400 px-4 py-2">Sr. No.</th>
                       <th className="border border-gray-400 px-4 py-2">Name</th>
                       <th className="border border-gray-400 px-4 py-2">Qualification</th>
                        <th className="border border-gray-400 px-4 py-2">Designation</th>
                        <th className="border border-gray-400 px-4 py-2">Tenure</th>
                      </tr>                      
                  </thead>

                <tbody>
                    <tr className="hover:bg-gray-100">
                      <td className="border border-gray-400 px-4 py-2">1</td>
                      <td className="border border-gray-400 px-4 py-2">Dr. Balaji Nagtilak</td>
                      <td className="border border-gray-400 px-4 py-2">M.A., Ph.D.</td>
                      <td className="border border-gray-400 px-4 py-2">Associate Professor</td>
                      <td className="border border-gray-400 px-4 py-2">20-07-1992</td>
                    </tr>
                </tbody>
                
          </table>
              </p>
            </>
          )
        },
      
             "Former Faculty of Department": {
          content: (
            <>
            <p>
                
                <table className="w-full border border-gray-400 text-sm text-left">
    
                  <thead className="bg-blue-600 text-black">
                     <tr>
                       <th className="border border-gray-400 px-4 py-2">Sr. No.</th>
                       <th className="border border-gray-400 px-4 py-2">Name</th>
                       <th className="border border-gray-400 px-4 py-2">Tenure</th>
                      </tr>                      
                  </thead>

                <tbody>
                    <tr className="hover:bg-gray-100">
                      <td className="border border-gray-400 px-4 py-2">1</td>
                      <td className="border border-gray-400 px-4 py-2">Chandrakant Bhalerao</td>
                      <td className="border border-gray-400 px-4 py-2">15-06-1951 to 31-10- 1990</td>
                    </tr>

                    <tr className="hover:bg-gray-100">
                      <td className="border border-gray-400 px-4 py-2">2</td>
                      <td className="border border-gray-400 px-4 py-2">Tukaram Kulkarni</td>
                      <td className="border border-gray-400 px-4 py-2">15-06-1963 to 31-12-1991</td>
                    </tr>

                    <tr className="hover:bg-gray-100">
                      <td className="border border-gray-400 px-4 py-2">3</td>
                      <td className="border border-gray-400 px-4 py-2">Dr. Laxman. Deshpande</td>
                      <td className="border border-gray-400 px-4 py-2">15-06-1967 to 12-03-1980</td>
                    </tr>

                    <tr className="hover:bg-gray-100">
                      <td className="border border-gray-400 px-4 py-2">4</td>
                      <td className="border border-gray-400 px-4 py-2">Dr. Mangala Vaishanav</td>
                      <td className="border border-gray-400 px-4 py-2">15-06-1970 to 31-08-2002</td>
                    </tr>
                </tbody>
                
          </table>
              </p>
              
            </>
          )

          

        }

      }
    },

    "Hindi": {
      submenu: {
        "Course Detials": {
          content: (
          <div className="bg-gray-200 p-6 text-sm leading-6 text-black">
            <h2 className="text-red-600 font-bold mb-4">PROFILE</h2>

             <h3 className="font-semibold mb-2">A) Introduction</h3>

             <h3 className="font-medium mb-2">a) Scope of the Subject</h3>
                <p className="mb-3 text-justify"> Hindi is a direct descendant of Sanskrit through Prakrit and Apabhramsha. It is a highly expressive language capable of conveying emotions through simple and gentle words while also supporting exact and rational reasoning. Hindi belongs to the India group of the Indo-Iranian sub-family of the Indo-European family of languages. It is the official language of India and is written in the Devanagari script. </p>
                <p className="mb-3 text-justify"> Hindi literature is broadly divided into four prominent forms or styles: Bhakti
                   (devotional), Shringar (beauty), Virgatha (heroic poetry), and Adhunik (modern literature).
                   Hindi prose has developed into various forms such as novels, short stories, dramas,
                   essays, autobiographies, and many other literary genres, enriching the language and its
                  cultural significance. </p>

               <h3 className="font-medium mb-2">b) Significance of the Subject</h3>
                  <p className="mb-3 text-justify"> The significance of Hindi lies not only in its status as a language but also as a rich
                    storehouse of literature. Hindi literature is a continuous carrier of human values and
                    spirit rooted in the ancient ethos of Indian civilization. The Bhakti movement strengthened
                    spiritual beliefs, while modern Hindi literature inspired nationalism, challenged
                    imperialism, depicted natural beauty, reflected urban and rural life, and analyzed the
                    impact of globalization from diverse perspectives.  </p>

                 <h3 className="font-medium mb-2"> c) Objectives of the Subject</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li>
                        To realize the objective envisaged in the Constitution under Article 351 regarding Hindi.
                      </li>
                      <li>
                        To promote the spread of the Hindi language and literature.
                      </li>
                      <li>
                        To develop Hindi as a medium of expression for all elements of India's composite culture
                        and national integration.
                      </li>
                      <li>
                        To enrich Hindi through assimilation, development, and research while preserving its
                        originality and incorporating forms, styles, and expressions from Hindustani and other
                        Indian languages.
                      </li>
                    </ul>

                <h3 className="font-medium mb-2">d) Introduction of the Department</h3>
                    <p className="mb-3 text-justify">
                      The Saraswati Bhuvan Education Society’s Arts and Commerce College was established in
                      June 1963 and received government sanction vide order of the Education and Social Welfare
                      Department, Sachivalaya, Bombay, No. UMF/2363/87831/U dated 09/09/1963. The Hindi
                      Department was established in the same year and has been actively contributing to the
                      academic and cultural development of students ever since. 
                    </p>

                <h3 className="font-medium mb-2">e) Objectives of the Department</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        To introduce Hindi language learning in an engaging and dynamic manner while developing
                        sensitivity, responsiveness, critical thinking, and creativity among students.
                      </li>
                      <li>
                        To enhance students' reading, writing, speaking, and comprehension skills through
                        progressively advanced language learning activities.
                      </li>
                      <li>
                        To develop a deeper understanding of grammar, literature, and communication skills using
                        increasingly complex subject matter and language styles.
                      </li>
                      <li>
                        To provide students with a strong foundation in Hindi language and literature.
                      </li>
                      <li>
                        To improve students' writing and conversational skills, including essay writing and
                        effective expression of ideas.
                      </li>
                      <li>
                        To acquaint students with media and contemporary developments related to Hindi language
                        and literature.
                      </li>
                    </ul>
              <h3 className="font-medium mb-2">B] Establishment of the Department and Programmes offered</h3>
                <div className="overflow-x-auto">
                 <table className="w-full border border-gray-400 text-sm text-left">
    
                  <thead className="bg-blue-600 text-black">
                     <tr>
                       <th className="border border-gray-400 px-4 py-2">Sr. No.</th>
                       <th className="border border-gray-400 px-4 py-2">Courses/Programmes</th>
                       <th className="border border-gray-400 px-4 py-2">Annual/semester/choice based credit system</th>
                        <th className="border border-gray-400 px-4 py-2">Year of Establishment</th>
                      </tr>
                  </thead>

                 <tbody>
                    <tr className="hover:bg-gray-100">
                      <td className="border border-gray-400 px-4 py-2">1</td>
                      <td className="border border-gray-400 px-4 py-2">BA</td>
                      <td className="border border-gray-400 px-4 py-2">Semester</td>
                      <td className="border border-gray-400 px-4 py-2">1963</td>
                    </tr>
                  </tbody>
                
                
          </table>
          </div>
</div>
      )
        },

                
        "Faculty of Department": {
          content: (
            <>
              <p>
                
                <table className="w-full border border-gray-400 text-sm text-left">
    
                  <thead className="bg-blue-600 text-black">
                     <tr>
                       <th className="border border-gray-400 px-4 py-2">Sr. No.</th>
                       <th className="border border-gray-400 px-4 py-2">Name</th>
                       <th className="border border-gray-400 px-4 py-2">Qualification</th>
                        <th className="border border-gray-400 px-4 py-2">Designation</th>
                        <th className="border border-gray-400 px-4 py-2">Tenure</th>
                      </tr>                      
                  </thead>

                <tbody>
                    <tr className="hover:bg-gray-100">
                      <td className="border border-gray-400 px-4 py-2">1</td>
                      <td className="border border-gray-400 px-4 py-2">Dr. G. G.Rajput</td>
                      <td className="border border-gray-400 px-4 py-2">MA, SET, PhD</td>
                      <td className="border border-gray-400 px-4 py-2">HOD, Associate Professor</td>
                      <td className="border border-gray-400 px-4 py-2">25.11,1994 till date</td>
                    </tr>
                </tbody>

                <tbody>
                    <tr className="hover:bg-gray-100">
                      <td className="border border-gray-400 px-4 py-2">2</td>
                      <td className="border border-gray-400 px-4 py-2">Dr. G. P.Kakade</td>
                      <td className="border border-gray-400 px-4 py-2">MA, B.Ed, SET NET, PhD</td>
                      <td className="border border-gray-400 px-4 py-2"> Associate Professor</td>
                      <td className="border border-gray-400 px-4 py-2">23.12.2010 till date</td>
                    </tr>
                </tbody>

                <tbody>
                    <tr className="hover:bg-gray-100">
                      <td className="border border-gray-400 px-4 py-2">3</td>
                      <td className="border border-gray-400 px-4 py-2">Dr.S.N.Nandnurwale</td>
                      <td className="border border-gray-400 px-4 py-2">MA, PhD</td>
                      <td className="border border-gray-400 px-4 py-2"> Associate Professor</td>
                      <td className="border border-gray-400 px-4 py-2">22.12.2010 till date</td>
                    </tr>
                </tbody>
                
          </table>
              </p>
            </>
          )
        },
      
             "Former Faculty of Department": {
          content: (
            <>
            <p>
                
                <table className="w-full border border-gray-400 text-sm text-left">
    
                  <thead className="bg-blue-600 text-black">
                     <tr>
                       <th className="border border-gray-400 px-4 py-2">Sr. No.</th>
                       <th className="border border-gray-400 px-4 py-2">Name</th>
                       <th className="border border-gray-400 px-4 py-2">Tenure</th>
                      </tr>                      
                  </thead>

                <tbody>
                    <tr className="hover:bg-gray-100">
                      <td className="border border-gray-400 px-4 py-2">1</td>
                      <td className="border border-gray-400 px-4 py-2">Dr. B. M.Verma</td>
                      <td className="border border-gray-400 px-4 py-2">10.06.1963 to 31.12.1989</td>
                    </tr>

                    <tr className="hover:bg-gray-100">
                      <td className="border border-gray-400 px-4 py-2">2</td>
                      <td className="border border-gray-400 px-4 py-2">Prof. C. N. Nayadhish</td>
                      <td className="border border-gray-400 px-4 py-2">22.06.1963 to 31.07.1996</td>
                    </tr>

                    <tr className="hover:bg-gray-100">
                      <td className="border border-gray-400 px-4 py-2">3</td>
                      <td className="border border-gray-400 px-4 py-2">Prof. V. S. Kapoor</td>
                      <td className="border border-gray-400 px-4 py-2">15.06.1970 to 30.09.2008</td>
                    </tr>

                    <tr className="hover:bg-gray-100">
                      <td className="border border-gray-400 px-4 py-2">4</td>
                      <td className="border border-gray-400 px-4 py-2">Dr. S. N. Shaha</td>
                      <td className="border border-gray-400 px-4 py-2">03.02.1976 to 28.02.2009</td>
                    </tr>
                </tbody>
                
          </table>
              </p>
              
            </>
          )

          

        }

      }
    },


     "English": {
      submenu: {
        "Course Detials": {
          content: (
            <>
              <div className="bg-gray-200 p-6 text-sm leading-6 text-black">
                <h2 className="text-red-600 font-bold mb-4">PROFILE</h2>

                <h3 className="font-semibold mb-2">A) Introduction</h3>

                <p className="mb-3 text-justify">
                  The Department of English at SBES College of Arts and Commerce strives for the
                  enrichment of the English language and provides in-depth aesthetic knowledge and
                  an eagerness to appreciate the language in its ingenuity. The department caters
                  to students enrolled in B.A. and B.Com. programmes.
                </p>

                <p className="mb-3 text-justify">
                  The study of English as a subject has two major dimensions: <strong>English Language
                  Study</strong> and <strong>English Literature Study</strong>. The scope of English
                  Language Study includes Linguistics, which deals with various aspects such as
                  Phonology (Phonetics), Morphology, Syntax, Semantics, and Grammar.
                </p>

                <p className="mb-3 text-justify">
                  Literature is a form of writing that expresses and communicates thoughts,
                  feelings, and attitudes toward life. It concerns people of all ages, times,
                  and countries and serves as a reflection of society. Literature is both
                  life-enhancing and a criticism of life. With the growing importance of English
                  and the world becoming a global village, the scope of English language and
                  literature has expanded significantly.
                </p>

                <p className="mb-3 text-justify">
                  English literature is no longer limited to Great Britain; it has become an
                  expression of cultures and societies across the world where English is used as
                  a medium of communication. The study of English literature encompasses literary
                  works from different countries as well as translated literature.
                </p>

                <p className="mb-3 text-justify">
                  Literature exists in diverse forms such as poetry, drama, novels, prose,
                  fiction, non-fiction, essays, and articles. These various literary forms and
                  their subgenres broaden the scope of the subject and offer students rich
                  opportunities for learning and appreciation.
                </p>

                <p className="mb-4 text-justify">
                  English is rapidly becoming the lingua franca of the world. Literature provides
                  numerous avenues for acquiring language proficiency while simultaneously
                  developing cultural awareness, critical thinking, and communication skills.
                </p>

                <h3 className="font-semibold mb-2">B) Objectives of the Subject</h3>

                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    To impart effective communication skills to students.
                  </li>
                  <li>
                    To enable students to respond to contemporary demands where English language
                    proficiency and communication skills are essential for employment and
                    entrepreneurship.
                  </li>
                  <li>
                    To help students master the four language skills: Listening, Speaking,
                    Reading, and Writing.
                  </li>
                  <li>
                    To familiarize students with literary compositions such as prose, stories,
                    poems, essays, dramas, and novels, which represent the highest forms of
                    creative expression.
                  </li>
                  <li>
                    To provide the best context and environment for language learning and
                    literary appreciation.
                  </li>
                  <li>
                    To expose students through literature to the values of life in the
                    contemporary world and develop ethical and social awareness.
                  </li>
                  <li>
                    To cultivate critical thinking, creativity, and analytical abilities
                    through the study of language and literature.
                  </li>
                </ul>
                
                
                <h3 className="font-medium mb-2">B] Establishment of the Department and Programmes offered</h3>
                <div className="overflow-x-auto">
                 <table className="w-full border border-gray-400 text-sm text-left">
    
                  <thead className="bg-blue-600 text-black">
                     <tr>
                       <th className="border border-gray-400 px-4 py-2">Sr. No.</th>
                       <th className="border border-gray-400 px-4 py-2">Courses/Programmes</th>
                       <th className="border border-gray-400 px-4 py-2">Annual/semester/choice based credit system</th>
                        <th className="border border-gray-400 px-4 py-2">Year of Establishment</th>
                      </tr>
                  </thead>

                 <tbody>
                    <tr className="hover:bg-gray-100">
                      <td className="border border-gray-400 px-4 py-2">1</td>
                      <td className="border border-gray-400 px-4 py-2">BA</td>
                      <td className="border border-gray-400 px-4 py-2">Semester</td>
                      <td className="border border-gray-400 px-4 py-2">1963</td>
                    </tr>
                  </tbody>              
                
                 <tbody>
                    <tr className="hover:bg-gray-100">
                      <td className="border border-gray-400 px-4 py-2">2</td>
                      <td className="border border-gray-400 px-4 py-2">B.Com</td>
                      <td className="border border-gray-400 px-4 py-2">Choice based credit system</td>
                      <td className="border border-gray-400 px-4 py-2">1963</td>
                    </tr>
                  </tbody>
                  </table>
                  </div>
          </div>
            </>
          )
        },

           "Faculty of Department": {
          content: (
            <>
             <p>
                
                <table className="w-full border border-gray-400 text-sm text-left">
    
                  <thead className="bg-blue-600 text-black">
                     <tr>
                       <th className="border border-gray-400 px-4 py-2">Sr. No.</th>
                       <th className="border border-gray-400 px-4 py-2">Name</th>
                       <th className="border border-gray-400 px-4 py-2">Qualification</th>
                        <th className="border border-gray-400 px-4 py-2">Designation</th>
                        <th className="border border-gray-400 px-4 py-2">Tenure</th>
                      </tr>                      
                  </thead>

                <tbody>
                    <tr className="hover:bg-gray-100">
                      <td className="border border-gray-400 px-4 py-2">1</td>
                      <td className="border border-gray-400 px-4 py-2">Dr. V. R. Mirgane</td>
                      <td className="border border-gray-400 px-4 py-2">M.A., Ph.D.</td>
                      <td className="border border-gray-400 px-4 py-2">Principal</td>
                      <td className="border border-gray-400 px-4 py-2"></td>
                    </tr>
                </tbody>
                
          </table>
              </p>
            </>
          )

        },

         "Former Faculty of Department": {
          content: (
            <>
             <p>
                
                <table className="w-full border border-gray-400 text-sm text-left">
    
                  <thead className="bg-blue-600 text-black">
                     <tr>
                       <th className="border border-gray-400 px-4 py-2">Sr. No.</th>
                       <th className="border border-gray-400 px-4 py-2">Name</th>
                       <th className="border border-gray-400 px-4 py-2">Tenure</th>
                      </tr>                      
                  </thead>

                <tbody>
                  <tr className="hover:bg-gray-100">
                    <td className="border border-gray-400 px-4 py-2">1</td>
                    <td className="border border-gray-400 px-4 py-2">Dr. V. V. Yardi</td>
                    <td className="border border-gray-400 px-4 py-2">June 1963 - 15/06/1964</td>
                  </tr>

                  <tr className="hover:bg-gray-100">
                    <td className="border border-gray-400 px-4 py-2">2</td>
                    <td className="border border-gray-400 px-4 py-2">Dr. S. G. Tambe</td>
                    <td className="border border-gray-400 px-4 py-2">15/06/1964 - 31/12/1994</td>
                  </tr>

                  <tr className="hover:bg-gray-100">
                    <td className="border border-gray-400 px-4 py-2">3</td>
                    <td className="border border-gray-400 px-4 py-2">Prof. P. B. Deshpande</td>
                    <td className="border border-gray-400 px-4 py-2">15/06/1971 - 16/03/1983</td>
                  </tr>

                  <tr className="hover:bg-gray-100">
                    <td className="border border-gray-400 px-4 py-2">4</td>
                    <td className="border border-gray-400 px-4 py-2">Prof. G. M. Baktul</td>
                    <td className="border border-gray-400 px-4 py-2">15/06/1970 - 30/09/2000</td>
                  </tr>

                  <tr className="hover:bg-gray-100">
                    <td className="border border-gray-400 px-4 py-2">5</td>
                    <td className="border border-gray-400 px-4 py-2">Dr. H. A. Khan</td>
                    <td className="border border-gray-400 px-4 py-2">10/09/1975 - 21/11/2005</td>
                  </tr>

                  <tr className="hover:bg-gray-100">
                    <td className="border border-gray-400 px-4 py-2">6</td>
                    <td className="border border-gray-400 px-4 py-2">Dr. S. M. Bhoomkar</td>
                    <td className="border border-gray-400 px-4 py-2">10/10/1974 - 31/05/2010</td>
                  </tr>

                  <tr className="hover:bg-gray-100">
                    <td className="border border-gray-400 px-4 py-2">7</td>
                    <td className="border border-gray-400 px-4 py-2">Dr. V. S. Jadhav</td>
                    <td className="border border-gray-400 px-4 py-2">02/01/1995 - 16/12/2014</td>
                  </tr>

                  <tr className="hover:bg-gray-100">
                    <td className="border border-gray-400 px-4 py-2">8</td>
                    <td className="border border-gray-400 px-4 py-2">Dr. S. S. Yannawar</td>
                    <td className="border border-gray-400 px-4 py-2">06/10/1978 - 05/07/2012</td>
                  </tr>
                </tbody>
                
          </table>
              </p>
            </>
          )

        }

      }
    },
  
    "Political  Science": {
      submenu: {
        "Course Detials": {
          content: (
            <>
              <p>
                
              <div className="bg-gray-200 p-6 text-sm leading-6 text-black">
                <h2 className="text-red-600 font-bold mb-4">PROFILE</h2>

                <h3 className="font-semibold mb-3">
                  A] Introduction (should be written in one page covering following a, b, c, d and e points)
                </h3>

                <h3 className="font-semibold mt-4 mb-2">a) Scope of the Subject</h3>

                <p className="mb-3 text-justify">
                  Political Science is a subject which deals the entire functioning of the state.
                  As science of the state, the role of political science is to encompass the area
                  of internal and external security of the state. The main emphasis is given on
                  the socio-economic stability of human life. It decides the role of each and
                  every individual living in the state. Political Science is an old subject
                  emerged with the existence of the state itself. The existence and the importance
                  of the political science is linked with the utility value of the state. This
                  subject is varied in the nature as the nature of the state accordingly. The
                  political systems are not static in their nature. Old Greek political systems
                  as well as the religious nature states and modern democratic states are the
                  major examples to show this variety. The human civilization proceeds in the
                  process of development. Political science as a subject of the state indicates
                  this process of development defining the political role of the state.
                </p>

                <h3 className="font-semibold mt-4 mb-2">b) Significance of the Subject</h3>

                <p className="mb-3 text-justify">
                  As a subject of study, political science plays crucial role in the human
                  development.
                </p>

                <ol className="list-decimal pl-6 mb-4 space-y-1">
                  <li>It helps to create state as an important institution.</li>
                  <li>It defines the nature of the state.</li>
                  <li>Providing entire mechanism for functioning of the state.</li>
                  <li>It provides the internal and external security philosophy.</li>
                  <li>It plays an important role in creation of law and enforcement of law.</li>
                  <li>
                    It provides the hope and aspirations to the people about justice,
                    equality, liberty and good governance.
                  </li>
                  <li>It defines the human rights and human dignity.</li>
                  <li>It provides the insight of good citizen and welfare state.</li>
                  <li>
                    This subject deals the entire process of power functioning in the state.
                  </li>
                  <li>It analyzes the political process and players engaged in it.</li>
                </ol>

                <h3 className="font-semibold mt-4 mb-2">c) Objectives of the Subject</h3>

                <p className="mb-3 text-justify">
                  As an ancient subject, political science provides essential objectives to the
                  human growth in the field of politics. The objectives are as follows:
                </p>

                <ol className="list-decimal pl-6 mb-4 space-y-1">
                  <li>To create the state and state ideologies.</li>
                  <li>
                    To decide the nature and function of the good and bad political systems.
                  </li>
                  <li>
                    To provide philosophical background to each and every political system.
                  </li>
                  <li>
                    To provide the insight about state power functioning and rivalries.
                  </li>
                  <li>
                    To provide the ideologies of welfare and democratic systems.
                  </li>
                  <li>
                    To decide the objectives, ethics of international relations.
                  </li>
                  <li>
                    To make human life peaceful by providing insight about political role
                    about individuals.
                  </li>
                </ol>

                <h3 className="font-semibold mt-4 mb-2">c) Introduction of the Department</h3>

                <p className="mb-3 text-justify">
                  The Saraswati Bhuvan Education Society’s Arts and Commerce College was
                  established in June 1963 and got government sanction vide order of Education
                  and Social Welfare Department, Sachivalaya, Bombay 32,
                  No.UMF/2363/87831/U of dated 09/09/1963. The Political Science department
                  is established in year 1963 is one of the important department, the subject
                  being of vital concern for the liberal arts education. The department has
                  taken lead role in the intellectual development and persuasion of scholarship
                  in the college. This department has taken initiative in the academic
                  development of students. It has engaged actively in projects and programmes
                  of the college apart from academic life.
                </p>

                <h3 className="font-semibold mt-4 mb-2">d) Objectives of the Department</h3>

                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    To develop students attitude and aptitude in Politics, democracy and
                    universal political values.
                  </li>
                  <li>
                    To develop political analysis competencies of students.
                  </li>
                  <li>
                    Boost up students rational thinking and logical reasoning.
                  </li>
                  <li>
                    To help in personality development of the students.
                  </li>
                  <li>
                    To counsel students for UPSC and MPSC Examinations.
                  </li>
                </ul>

                <h3 className="font-medium mb-2">B] Establishment of the Department and Programmes offered</h3>
                              <div className="overflow-x-auto">
                              <table className="w-full border border-gray-400 text-sm text-left">
                  
                                <thead className="bg-blue-600 text-black">
                                  <tr>
                                    <th className="border border-gray-400 px-4 py-2">Sr. No.</th>
                                    <th className="border border-gray-400 px-4 py-2">Courses/Programmes</th>
                                    <th className="border border-gray-400 px-4 py-2">Annual/semester/choice based credit system</th>
                                      <th className="border border-gray-400 px-4 py-2">Year of Establishment</th>
                                    </tr>
                                </thead>

                              <tbody>
                                  <tr className="hover:bg-gray-100">
                                    <td className="border border-gray-400 px-4 py-2">1</td>
                                    <td className="border border-gray-400 px-4 py-2">BA</td>
                                    <td className="border border-gray-400 px-4 py-2">Semester</td>
                                    <td className="border border-gray-400 px-4 py-2">1963</td>
                                  </tr>
                                </tbody>
                              
                              
                        </table>
                        </div>
              </div>
              </p>
            </>
          )
        },
                
        "Faculty of Department": {
          content: (
            <>
              <p>
                
                <table className="w-full border border-gray-400 text-sm text-left">
    
                  <thead className="bg-blue-600 text-black">
                     <tr>
                       <th className="border border-gray-400 px-4 py-2">Sr. No.</th>
                       <th className="border border-gray-400 px-4 py-2">Name</th>
                       <th className="border border-gray-400 px-4 py-2">Qualification</th>
                        <th className="border border-gray-400 px-4 py-2">Designation</th>
                        <th className="border border-gray-400 px-4 py-2">Tenure</th>
                      </tr>                      
                  </thead>

                <tbody>
                    <tr className="hover:bg-gray-100">
                      <td className="border border-gray-400 px-4 py-2">1</td>
                      <td className="border border-gray-400 px-4 py-2">Dr. N.B. Aghav</td>
                      <td className="border border-gray-400 px-4 py-2">M. A. Ph.D. SET</td>
                      <td className="border border-gray-400 px-4 py-2">Professor</td>
                      <td className="border border-gray-400 px-4 py-2">1989 to till date</td>
                    </tr>
                </tbody>
                
          </table>
              </p>
            </>
          )

        },

        "Former Faculty of Department": {
          content: (
            <>
              <p>
                
                <table className="w-full border border-gray-400 text-sm text-left">
    
                  <thead className="bg-blue-600 text-black">
                     <tr>
                       <th className="border border-gray-400 px-4 py-2">Sr. No.</th>
                       <th className="border border-gray-400 px-4 py-2">Name</th>
                       <th className="border border-gray-400 px-4 py-2">Tenure</th>
                      </tr>                      
                  </thead>

                <tbody>
                    <tr className="hover:bg-gray-100">
                      <td className="border border-gray-400 px-4 py-2">1</td>
                      <td className="border border-gray-400 px-4 py-2">V S .Joshi</td>
                      <td className="border border-gray-400 px-4 py-2">10.06.1963 to 31.12.1989</td>
                    </tr>

                    <tr className="hover:bg-gray-100">
                      <td className="border border-gray-400 px-4 py-2">2</td>
                      <td className="border border-gray-400 px-4 py-2">Prof. C. N. Nayadhish</td>
                      <td className="border border-gray-400 px-4 py-2">22.06.1963 to 31.07.1996</td>
                    </tr>

                    <tr className="hover:bg-gray-100">
                      <td className="border border-gray-400 px-4 py-2">3</td>
                      <td className="border border-gray-400 px-4 py-2">Prof. V. S. Kapoor</td>
                      <td className="border border-gray-400 px-4 py-2">15.06.1970 to 30.09.2008</td>
                    </tr>

                    <tr className="hover:bg-gray-100">
                      <td className="border border-gray-400 px-4 py-2">4</td>
                      <td className="border border-gray-400 px-4 py-2">Dr. S. N. Shaha</td>
                      <td className="border border-gray-400 px-4 py-2">03.02.1976 to 28.02.2009</td>
                    </tr>
                </tbody>
                <tr className="hover:bg-gray-100">
                      <td className="border border-gray-400 px-4 py-2">4</td>
                      <td className="border border-gray-400 px-4 py-2">Dr. S. N. Shaha</td>
                      <td className="border border-gray-400 px-4 py-2">03.02.1976 to 28.02.2009</td>
                    </tr>
                  
                  <tr className="hover:bg-gray-100">
                      <td className="border border-gray-400 px-4 py-2">5</td>
                      <td className="border border-gray-400 px-4 py-2">	Dr. N.B. Aghav</td>
                      <td className="border border-gray-400 px-4 py-2">03.02.1976 to 28.02.2009</td>
                    </tr>
          </table>
              </p>
            </>
          )

        }


      }
    },

    "Public Administration": {
      submenu: {
        "Course Detials": {
          content: (
            <>
              <p>
              <div className="bg-gray-200 p-6 text-sm leading-6 text-black">
                <h2 className="text-red-600 font-bold mb-4">PROFILE</h2>

                <h3 className="font-semibold mb-3">A] Introduction</h3>

                <p className="mb-3 text-justify">
                  The word ‘administration’ is derived from Latin word “administrate”, which means
                  to ‘care for’ or ‘to look after people’ to manage affairs. According to this wide
                  definition every human activity involves some kind of administration. Even simple
                  activities could not be carried on without some form of organization. With the
                  growing complexity of modern life administration has become more and more complex.
                  Administration is a group activity which involves co-operation and co-ordination
                  to achieve desired goals or objectives. It has an element of rationality and is
                  thus a rational action, an endeavor to maximize the achievement of goals or
                  objectives by a group of human being. Organization and Management are special
                  features of administrative activity. No condensed definition can encompass public
                  administration. Public Administration is co-operative group effort in a public
                  setting. It covers all three branches of government i.e. executive, legislative
                  and judicial and their inter-relationships. Public administration has an important
                  role in the formulation of Public Policy and is thus a part of the political
                  process. It is different in significant ways from Private administration and at
                  the same time is closely associated with numerous private groups and individuals
                  in providing services to the community.
                </p>

                <p className="mb-4 text-justify">
                  The Saraswati Bhuvan Education Society’s Arts and Commerce College was established
                  in June 1963. Public administration is available as a separate optional for BA
                  degree since the inception of the college but it was under department of Political
                  Science as the then practice followed even in University. Public administration
                  department became separate in 2005. The first appointment of Public administration
                  was made in this year. Since then the department has organized various activities.
                </p>

                <h3 className="font-semibold mb-3">Objectives of Department</h3>

                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    To develop students interest in government, governance and civil society at
                    large.
                  </li>
                  <li>
                    To develop understanding of public policy analysis of students.
                  </li>
                  <li>
                    To develop habit of rational thinking and scientific inquiry.
                  </li>
                  <li>
                    To organize activities for personality development of the students.
                  </li>
                  <li>
                    To counsel students for UPSC and MPSC Examinations.
                  </li>
                </ul>


                <h3 className="font-semibold mb-3">B] Establishment of the Department and Programmes offered</h3>
                <table className="w-full border border-gray-400 text-sm text-left">
    
                  <thead className="bg-blue-600 text-black">
                     <tr>
                       <th className="border border-gray-400 px-4 py-2">Sr. No.</th>
                       <th className="border border-gray-400 px-4 py-2">Courses/Programmes</th>
                       <th className="border border-gray-400 px-4 py-2">Annual/semester/choice based credit system</th>
                        <th className="border border-gray-400 px-4 py-2">Year of Establishment</th>
                      </tr>                      
                  </thead>

                <tbody>
                    <tr className="hover:bg-gray-100">
                      <td className="border border-gray-400 px-4 py-2">1</td>
                      <td className="border border-gray-400 px-4 py-2">BA with Public Administration as
                              one out of the three optional was
                              available but it was under
                              department of political science of
                              our college.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">Semester</td>
                      <td className="border border-gray-400 px-4 py-2">1963</td>
                     
                    </tr>
                </tbody>
                
                <tbody>
                    <tr className="hover:bg-gray-100">
                      <td className="border border-gray-400 px-4 py-2">1</td>
                      <td className="border border-gray-400 px-4 py-2">Department of Public
                          Administration as a separate
                          department
                      </td>
                      <td className="border border-gray-400 px-4 py-2">Semester</td>
                      <td className="border border-gray-400 px-4 py-2">2005</td>
                     
                    </tr>
                </tbody>

                  <tbody>
                    <tr className="hover:bg-gray-100">
                      <td className="border border-gray-400 px-4 py-2">1</td>
                      <td className="border border-gray-400 px-4 py-2">UGC- ADD On Certificate Course
                              in Basic Photography
                      </td>
                      <td className="border border-gray-400 px-4 py-2">Credit</td>
                      <td className="border border-gray-400 px-4 py-2">2012</td>
                     
                    </tr>
                </tbody>


          </table>
                
              </div>
          </p>
            </>
          )
        },

                
        "Faculty of Department": {
          content: (
            <>
              <p>
                
                <table className="w-full border border-gray-400 text-sm text-left">
    
                  <thead className="bg-blue-600 text-black">
                     <tr>
                       <th className="border border-gray-400 px-4 py-2">Sr. No.</th>
                       <th className="border border-gray-400 px-4 py-2">Name of the Teacher</th>
                       <th className="border border-gray-400 px-4 py-2">Qualification</th>
                        <th className="border border-gray-400 px-4 py-2">Designation</th>
                        <th className="border border-gray-400 px-4 py-2">Tenure</th>
                      </tr>                      
                  </thead>

                <tbody>
                    <tr className="hover:bg-gray-100">
                      <td className="border border-gray-400 px-4 py-2">1</td>
                      <td className="border border-gray-400 px-4 py-2">Dr. M.A. Paithankar</td>
                      <td className="border border-gray-400 px-4 py-2">MA,SET, PhD</td>
                      <td className="border border-gray-400 px-4 py-2">Professor</td>
                      <td className="border border-gray-400 px-4 py-2">14/06/2005</td>
                    </tr>
                </tbody>


                
                
                </table>
              </p>
            </>
          )

        },

          "Former Faculty of Department": {
          content: (
            <>
              <p>
                
                <table className="w-full border border-gray-400 text-sm text-left">
    
                  <thead className="bg-blue-600 text-black">
                     <tr>
                       <th className="border border-gray-400 px-4 py-2">Sr. No.</th>
                       <th className="border border-gray-400 px-4 py-2">Name of the Teacher</th>
                       <th className="border border-gray-400 px-4 py-2"> Qualification</th>
                        <th className="border border-gray-400 px-4 py-2">Designation</th>
                        <th className="border border-gray-400 px-4 py-2">Tenure</th>
                      </tr>                      
                  </thead>

                <tbody>
                    <tr className="hover:bg-gray-100">
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2"></td>
                     
                    </tr>
                </tbody>
               



          </table>
              </p>
            </>
          )

        }

      }
    },

    "Sociology": {
      submenu: {
        "Course Detials": {
          content: (
            <>
              <p>
              
                  <div className="bg-gray-200 p-6 text-sm leading-6 text-black">
                    <h2 className="text-red-600 font-bold mb-4">PROFILE</h2>

                    <h3 className="font-semibold mb-3">
                      A] Introduction (should be written in one page covering following a, b, c, d and e points)
                    </h3>

                    <h3 className="font-semibold mt-4 mb-2">a) Scope of the Subject</h3>

                    <p className="mb-3 text-justify">
                      August Comte is considered as the founding fathers of Sociology, one of the basic
                      disciplines whose academic contribution and research pursuit has enriched social
                      sciences and understanding of human context and its interplay. Sociology is an exciting
                      and illuminating field, which involves the scientific study of human social behavior and
                      its origin, development, organization and institution.
                    </p>

                    <p className="mb-3 text-justify">
                      This will help us to comprehend the human behavior with its cause and consequence.
                      Sociology as a subject requires the student’s patient and keen observation to understand
                      the behavior of human beings through their social interactions, and understand how
                      societies organize, develop and change. Education in Sociology can explore many
                      avenues for you hospitals, private clinics, private practice, social service, criminal
                      justice, law, media, etc. Sociology's subject matter is diverse, and thus there are
                      different areas where one can specialize in with the advent of studies and career. There
                      are experts who study behavior of children, deal with problems of adolescents, decode
                      criminal behavior and action, assist students to broaden their horizon and become able
                      enough to conduct an effective communication, analyze and solve their problems and so
                      much more. One can choose from the many options present and think of making their
                      career in the world of Sociology. Sociology as a discipline study Society, Kinship,
                      Social Problems, Social issues, Caste, Class, Gender, Social Movements, etc.
                    </p>

                    <h3 className="font-semibold mt-4 mb-2">b) Significance of the Subject</h3>

                    <p className="mb-3 text-justify">
                      Sociology is the only subject which study human social relationships and institutions
                      scientifically. Even though the scientific study of society and scientific promotion of
                      human welfare have been neglected for long periods, the present scenario realized the
                      practical aspect of sociology and its importance in the study of social problems, social
                      work and in social adjustment. To achieve this scientific study of society the
                      formulation of social policies which require certain amount of knowledge about that
                      society is required. The descriptive sociology provides a great deal of information
                      which is helpful in making decisions on social policy.
                    </p>

                    <h3 className="font-semibold mt-4 mb-2">c) Objectives of the Subject</h3>

                    <ol className="list-lower-roman pl-6 mb-4 space-y-1">
                      <li>
                        Describe how sociology is similar to and different from other social sciences.
                      </li>
                      <li>
                        Explain the major methods and concepts it used in the systematic study of
                        society.
                      </li>
                      <li>
                        Describe various social structures in societies and methods and degrees of
                        social stratification.
                      </li>
                      <li>
                        Explain processes of socialization, and how socialization operates in different
                        societies and cultures.
                      </li>
                      <li>
                        Explain the role of gender in society.
                      </li>
                      <li>
                        Describe how the tools of analysis and methods of sociology are applicable to
                        work and involvement in their community.
                      </li>
                      <li>
                        Observing the society with scientific temperament and to study the social issues.
                      </li>
                    </ol>

                    <h3 className="font-semibold mt-4 mb-2">d) Introduction of the Department</h3>

                    <p className="mb-3 text-justify">
                      Department of Sociology is one of the oldest Departments in the college. The
                      Department of in the college started functioning in 1963. Sociology is being taught at
                      the undergraduate level. Gender Studies, Sociology of Education, Social Movements
                      these are the focused research areas by the department. Dr. Snehalata Mankar, associate
                      professor, heading the department. She is engaging in research on the Social Movement
                      in Maharashtra. Mr. Sandip Chaudhari, associate professor, equally contributing in the
                      overall development of the students and working on various research projects sponsored
                      by UGC and Dr. B.A.M.U, Aurangabad.
                    </p>

                    <p className="mb-3 text-justify">
                      ‘Learning through experience’ is the basic principle of the Department. Hence the
                      department has been organized various innovative programmes. The department is
                      engaged in student centric and research oriented activities. The field based student
                      projects as a mandatory component of the course syllabus. Networks established with
                      voluntary groups for the exposure to the students. The Department is making efforts to
                      inculcate socio-cultural values among the students. And are improving the social and
                      research skills of them. The department also focuses and emphasizes on the societal
                      understanding and analytical skills of students.
                    </p>

                    <h3 className="font-semibold mt-4 mb-2">e) Objectives of the Department</h3>

                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li>To develop students attitude and aptitude in Sociology</li>
                      <li>
                        To develop social sensitivity, social responsibility and promote social harmony.
                      </li>
                      <li>
                        To make sociology for knowledge and knowledge for employment both.
                      </li>
                      <li>
                        To help in personality development of the students
                      </li>
                    </ul>

                    <h3 className="font-semibold mt-6 mb-3">
                      B] Establishment of the Department and Programmes offered
                    </h3>

                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-400">
                        <thead>
                          <tr className="bg-gray-300">
                            <th className="border border-gray-400 px-4 py-2">Sr. No.</th>
                            <th className="border border-gray-400 px-4 py-2">
                              Courses/Programmes
                            </th>
                            <th className="border border-gray-400 px-4 py-2">
                              Annual/semester/choice based credit system
                            </th>
                            <th className="border border-gray-400 px-4 py-2">
                              Year of Establishment
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2">1</td>
                            <td className="border border-gray-400 px-4 py-2">B A</td>
                            <td className="border border-gray-400 px-4 py-2">Semester</td>
                            <td className="border border-gray-400 px-4 py-2">1963</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
              </p>
            </>
          )
        },

                
        "Faculty of Department": {
          content: (
            <>
              <p>
                
                <table>
                  <thead>
                          <tr className="bg-gray-300">
                            <th className="border border-gray-400 px-4 py-2">Sr. No.</th>
                            <th className="border border-gray-400 px-4 py-2">Name</th>
                            <th className="border border-gray-400 px-4 py-2">Qualification</th>
                            <th className="border border-gray-400 px-4 py-2">Designation</th>
                            <th className="border border-gray-400 px-4 py-2">Tenure</th>
                          </tr>
                        </thead>
                  <tbody>
                      <tr className="hover:bg-gray-100">
                        <td className="border border-gray-400 px-4 py-2">01</td>
                        <td className="border border-gray-400 px-4 py-2">Dr. Sandip Chaudhari</td>
                        <td className="border border-gray-400 px-4 py-2">M A, SET</td>
                        <td className="border border-gray-400 px-4 py-2">Vice-principal Professor</td>
                        <td className="border border-gray-400 px-4 py-2">27-12-1999 till the date</td>
                      </tr>

                   </tbody>
                </table>
              </p>
            </>
          )

        },

      "Former Faculty of Department": {
          content: (
            <>
              <p>
                
                <table>
                  <thead>
                          <tr className="bg-gray-300">
                            <th className="border border-gray-400 px-4 py-2">Sr. No.</th>
                            <th className="border border-gray-400 px-4 py-2">Name</th>
                            <th className="border border-gray-400 px-4 py-2">Tenure</th>
                          </tr>
                        </thead>
                  <tbody>
                      <tr className="hover:bg-gray-100">
                        <td className="border border-gray-400 px-4 py-2">01</td>
                        <td className="border border-gray-400 px-4 py-2">Dr. Kamal Muley</td>
                        <td className="border border-gray-400 px-4 py-2">1963 to 1992</td>
                      </tr>

                      <tr className="hover:bg-gray-100">
                        <td className="border border-gray-400 px-4 py-2">02</td>
                        <td className="border border-gray-400 px-4 py-2">Dr. Ramesh Kherde</td>
                        <td className="border border-gray-400 px-4 py-2">1972 to 1998</td>
                      </tr>
                      
                      <tr className="hover:bg-gray-100">
                        <td className="border border-gray-400 px-4 py-2">03</td>
                        <td className="border border-gray-400 px-4 py-2">Dr. Snehalata Mankar</td>
                        <td className="border border-gray-400 px-4 py-2">07-01-1993</td>
                      </tr>
                    </tbody>
                </table>
              </p>
            </>
          )

        }

      }
    },

    "History": {
      submenu: {
        "Course Detials": {
          content: (
            <>
              <p>
                      <div className="bg-gray-200 p-6 text-sm leading-6 text-black">
                      <h2 className="text-red-600 font-bold mb-4">PROFILE</h2>

                      <h3 className="font-semibold mb-3">A] Introduction</h3>

                      <p className="mb-3 text-justify">
                        The Saraswati Bhuvan Education Society’s Arts and Commerce College was established in
                        June 1963. History was available since the establishment of the college. Presently history is
                        much sought optional because it being popular optional subject for the Public Service
                        Commission Examinations. The department helps aspirants of this examination and also
                        actively involved in research activity.
                      </p>

                      <p className="mb-3 text-justify">
                        The scope of History is vast; it is the story of man in relation to totality of his behavior and
                        its means the breadth, comprehensiveness, variety and extent of learning experiences,
                        provided by the study. History which was only limited to a local saga, has during the course
                        of century become universal history of mankind, depicting man’s achievements in every
                        field of life-political, economic, social, cultural, scientific, technological, religious and
                        artistic etc., and at various levels-local, regional, national, and international. History is a
                        comprehensive subject and includes all multi-disciplinary branches; history is mother of all
                        social sciences.
                      </p>

                      <p className="mb-3 text-justify">
                        History enables students to appreciate the human achievements of the past, for their own
                        interest and for the legacy left to later generations. The aim of history syllabus should be to
                        stimulate students’ interest in and enjoyment of exploring the past, to develop a critical
                        understanding of the past and to enable them to participate as active, informed and
                        responsible citizens. In the history syllabus students are given opportunities for self-understanding,
                        proper conception of time, space and society, handling controversial issues
                        and developing national and international understanding.
                      </p>

                      <h3 className="font-semibold mb-3">Objectives of the Subject</h3>

                      <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>To promote self-understanding</li>
                        <li>To give proper conception of time, space and society</li>
                        <li>To enable the pupils to assess the values and achievements of their own age</li>
                        <li>To develop right attitudes</li>
                        <li>To foster national feelings</li>
                        <li>To develop international understanding</li>
                        <li>To give training for handling controversial issues</li>
                      </ul>

                      <h3 className="font-semibold mb-3">Objectives of the Department</h3>

                      <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>To develop student interest about history.</li>
                        <li>
                          To inculcate the values of freedom, nationalism, heritage, traditions, art and
                          architecture and evolution of nation and culture.
                        </li>
                        <li>To guide students for competitive exams</li>
                        <li>To organize study tours</li>
                        <li>To organize programmes for the personality development of the students.</li>
                      </ul>

                      <h3 className="font-semibold mt-6 mb-3">
                        B] Establishment of the Department and Programmes offered
                      </h3>

                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-400">
                          <thead>
                            <tr className="bg-gray-300">
                              <th className="border border-gray-400 px-4 py-2">Sr. No.</th>
                              <th className="border border-gray-400 px-4 py-2">
                                Courses/Programmes
                              </th>
                              <th className="border border-gray-400 px-4 py-2">
                                Annual/semester/choice based credit system
                              </th>
                              <th className="border border-gray-400 px-4 py-2">
                                Year of Establishment
                              </th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr className="hover:bg-gray-100">
                              <td className="border border-gray-400 px-4 py-2">1</td>
                              <td className="border border-gray-400 px-4 py-2">BA</td>
                              <td className="border border-gray-400 px-4 py-2">Semester</td>
                              <td className="border border-gray-400 px-4 py-2">1963</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

              </p>
            </>
          )
        },

                
        "Faculty of Department": {
          content: (
            <>
              <p>
                
                <table>
                  <thead>
                            <tr className="bg-gray-300">
                              <th className="border border-gray-400 px-4 py-2">Sr. No.</th>
                              <th className="border border-gray-400 px-4 py-2">Name</th>
                              <th className="border border-gray-400 px-4 py-2">Qualification</th>
                              <th className="border border-gray-400 px-4 py-2">Designation</th>
                              <th className="border border-gray-400 px-4 py-2">Tenure</th>
                            </tr>
                          </thead>

                  
                  <tbody>
                      <tr className="hover:bg-gray-100">
                        <td className="border border-gray-400 px-4 py-2">1</td>
                        <td className="border border-gray-400 px-4 py-2">Dr. S. S. Shinde</td>
                        <td className="border border-gray-400 px-4 py-2">MA., B. Ed.,SET., Ph.D  </td>
                        <td className="border border-gray-400 px-4 py-2">Professor</td>
                        <td className="border border-gray-400 px-4 py-2"> 14-7- 2003 till date   </td>
                      </tr>
                     </tbody>
                </table>
              </p>
            </>
          )

          
        },
        "Former Faculty of Department": {
          content: (
            <>
              <p>
                
                <table>
                  <thead>
                            <tr className="bg-gray-300">
                              <th className="border border-gray-400 px-4 py-2">Sr. No.</th>
                              <th className="border border-gray-400 px-4 py-2">Name</th>
                              <th className="border border-gray-400 px-4 py-2">Tenure</th>
                            </tr>
                          </thead>

                  
                  <tbody>
                      <tr className="hover:bg-gray-100">
                        <td className="border border-gray-400 px-4 py-2">1</td>
                        <td className="border border-gray-400 px-4 py-2">Mr. V. R. Muley</td>
                        <td className="border border-gray-400 px-4 py-2">
                          10.06.1963 to 31.05.1996
                        </td>
                      </tr>

                      <tr className="hover:bg-gray-100">
                        <td className="border border-gray-400 px-4 py-2">2</td>
                        <td className="border border-gray-400 px-4 py-2">Mr. M. Z. Thorat</td>
                        <td className="border border-gray-400 px-4 py-2">
                          29.07.1970 to 30.09.1976<br />
                          29.07.1979 to 26.10.1994
                        </td>
                      </tr>

                      <tr className="hover:bg-gray-100">
                        <td className="border border-gray-400 px-4 py-2">3</td>
                        <td className="border border-gray-400 px-4 py-2">Dr. B. S. Deshpande</td>
                        <td className="border border-gray-400 px-4 py-2">
                          15.11.1971 to 30.06.2000
                        </td>
                      </tr>
                    </tbody>
                </table>
              </p>
            </>
          )

        }

      }
    },

     "Economics": {
      submenu: {
        "Course Detials": {
          content: (
            <>
              <p>
                
                  <div className="bg-gray-200 p-6 text-sm leading-6 text-black">
                    <h2 className="text-red-600 font-bold mb-4">PROFILE</h2>

                    <h3 className="font-semibold mb-3">A] Introduction</h3>

                    <p className="mb-3 text-justify">
                      Economics is the study of how societies, governments, businesses, households,
                      and individuals allocate their scarce resources. Everyone wants to increase
                      their wealth holding and standard of living, increase their productive
                      resources and expand their business activities. The study of economics can
                      also provide valuable knowledge for decision making in everyday life.
                    </p>

                    <p className="mb-3 text-justify">
                      Economics is a social science which organizes a highly quantitative,
                      data-driven, problem-solving approach towards understanding the behavior of
                      human beings. Economics is therefore the field of study that is best placed
                      to track, study, project and predict human behavior and as such is one of
                      the most important and relevant skills for the world today, helping us
                      choose wisely when it comes to our personal, social and professional lives.
                    </p>

                    <p className="mb-3 text-justify">
                      The most important advantage of economics is helping society decide and
                      formulate ways for the optimum allocation of its limited and scarce
                      resources. Economics is valuable not only for the topics it studies but also
                      for its methods of analysis. As an academic discipline, it helps in
                      understanding the economic system of society and institutions and defines
                      the nature of economic problems.
                    </p>

                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li>
                        Provides the entire mechanism of the economic system along with internal
                        and external economic policies.
                      </li>
                      <li>Plays an essential role in the creation of economic policy.</li>
                      <li>
                        Provides hope and aspirations to people regarding social justice,
                        economic inequality and poverty.
                      </li>
                      <li>
                        Deals with the entire process of economic power functioning in society.
                      </li>
                      <li>
                        Analyzes economic processes and the players engaged in these processes.
                      </li>
                    </ul>

                    <p className="mb-3 text-justify">
                      The Saraswati Bhuvan Education Society’s College of Arts and Commerce was
                      established in June 1963. Since then Economics has been available as an
                      optional subject. The former teachers substantially contributed in shaping
                      the department and the department remains grateful to them.
                    </p>

                    <h3 className="font-semibold mb-3">Objectives of the Department</h3>

                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li>To develop students' attitude and aptitude in Economics.</li>
                      <li>To develop economic analysis competencies among students.</li>
                      <li>To boost students' rational thinking and logical reasoning.</li>
                      <li>To help in personality development of the students.</li>
                      <li>To counsel students for IES and ISS Examinations.</li>
                    </ul>

                    <h3 className="font-semibold mt-6 mb-3">
                      B] Establishment of the Department and Programmes Offered
                    </h3>

                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-400">
                        <thead>
                          <tr className="bg-gray-300">
                            <th className="border border-gray-400 px-4 py-2">Sr. No.</th>
                            <th className="border border-gray-400 px-4 py-2">
                              Courses/Programmes
                            </th>
                            <th className="border border-gray-400 px-4 py-2">
                              Annual/Semester/Choice Based Credit System
                            </th>
                            <th className="border border-gray-400 px-4 py-2">
                              Year of Establishment
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr className="hover:bg-gray-100">
                            <td className="border border-gray-400 px-4 py-2">1</td>
                            <td className="border border-gray-400 px-4 py-2">B.A. Economics</td>
                            <td className="border border-gray-400 px-4 py-2">Semester</td>
                            <td className="border border-gray-400 px-4 py-2">1963</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

              </p>
            </>
          )
        },

         "Faculty of Department": {
          content: (
            <>
              <p>
              
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-400">
                      <thead>
                        <tr className="bg-gray-300">
                          <th className="border border-gray-400 px-4 py-2">Sr. No.</th>
                          <th className="border border-gray-400 px-4 py-2">Name</th>
                          <th className="border border-gray-400 px-4 py-2">Qualification</th>
                          <th className="border border-gray-400 px-4 py-2">Designation</th>  
                          <th className="border border-gray-400 px-4 py-2">Tenure</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr className="hover:bg-gray-100">
                          <td className="border border-gray-400 px-4 py-2">1</td>
                          <td className="border border-gray-400 px-4 py-2">Dr. M.M. Gaikwad</td>
                          <td className="border border-gray-400 px-4 py-2">M.A. (Eco), B.Ed., Ph.D.</td>
                          <td className="border border-gray-400 px-4 py-2">Professor</td>
                          <td className="border border-gray-400 px-4 py-2">1995 till date</td>
                        </tr>

                      </tbody>
                    </table>
                  </div>

                
              </p>
            </>
          )

        },
        
        
        "Former Faculty of Department": {
          content: (
            <>
              <p>
              
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-400">
                      <thead>
                        <tr className="bg-gray-300">
                          <th className="border border-gray-400 px-4 py-2">Sr. No.</th>
                          <th className="border border-gray-400 px-4 py-2">Name</th>
                          <th className="border border-gray-400 px-4 py-2">Tenure</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr className="hover:bg-gray-100">
                          <td className="border border-gray-400 px-4 py-2">1</td>
                          <td className="border border-gray-400 px-4 py-2">
                            Prof. R. M. Rathi
                          </td>
                          <td className="border border-gray-400 px-4 py-2">
                            1963 - 2000
                          </td>
                        </tr>

                        <tr className="hover:bg-gray-100">
                          <td className="border border-gray-400 px-4 py-2">2</td>
                          <td className="border border-gray-400 px-4 py-2">
                            Prof. D. S. Borikar
                          </td>
                          <td className="border border-gray-400 px-4 py-2">
                            1965 - 1995
                          </td>
                        </tr>

                        <tr className="hover:bg-gray-100">
                          <td className="border border-gray-400 px-4 py-2">3</td>
                          <td className="border border-gray-400 px-4 py-2">
                            Prof. P. R. Kulkarni
                          </td>
                          <td className="border border-gray-400 px-4 py-2">
                            1971 - 1994
                          </td>
                        </tr>

                        <tr className="hover:bg-gray-100">
                          <td className="border border-gray-400 px-4 py-2">4</td>
                          <td className="border border-gray-400 px-4 py-2">
                            Prof. N. M. Apte
                          </td>
                          <td className="border border-gray-400 px-4 py-2">
                            1971 - 1973
                          </td>
                        </tr>

                        <tr className="hover:bg-gray-100">
                          <td className="border border-gray-400 px-4 py-2">5</td>
                          <td className="border border-gray-400 px-4 py-2">
                            Dr. B. S. Gheware
                          </td>
                          <td className="border border-gray-400 px-4 py-2">
                            1980 - 2015
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                
              </p>
            </>
          )

        }

      }
    },

    "Dramatics": {
      submenu: {
        "Course Detials": {
          content: (
            <>
              <p>
              
                  <div className="bg-gray-200 p-6 text-sm leading-6 text-black">
                    <h2 className="text-red-600 font-bold mb-4">PROFILE</h2>

                    <h3 className="font-semibold mb-3">A] Introduction</h3>

                    <p className="mb-3 text-justify">
                      Theater is the miniature of real life. Theater reflects the amalgamation of
                      personal, social, religious, political, national and universal thoughts.
                      It is an ancient art form that finds expression through the life of every
                      individual and has its own unique identity in the spectrum of human
                      existence.
                    </p>

                    <p className="mb-3 text-justify">
                      Nowadays, dramatics is regarded as a science that deals with both the inner
                      and outer conflicts of human life. The study of dramatics provides wide
                      opportunities for personal growth and development. It helps students
                      understand human behavior, emotions, relationships, and social structures
                      through artistic expression.
                    </p>

                    <h3 className="font-semibold mb-3">Scope of the Subject</h3>

                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li>
                        Cultural practices and processes including traditions, customs,
                        festivals, and rituals in local, national, and global contexts.
                      </li>
                      <li>
                        Oral studies and oracy including myths, legends, folktales, folklore,
                        storytelling, public speaking, and praise poetry.
                      </li>
                      <li>
                        Study of written, visual, and oral texts in relation to identity,
                        society, culture, ideology, power relationships, time, and change.
                      </li>
                      <li>
                        Performance styles, traditions, movements, and contributions of
                        theatrical practitioners within historical and social contexts.
                      </li>
                      <li>
                        Dramatic practices such as improvisation, role play,
                        characterization, acting, directing, designing, stagecraft, arts
                        administration, and entertainment technology.
                      </li>
                      <li>
                        Dramatic media including stage, film, television, radio, video, and
                        new media as storytelling platforms.
                      </li>
                    </ul>

                    <h3 className="font-semibold mb-3">Significance of the Subject</h3>

                    <p className="mb-3 text-justify">
                      Dramatics is the science of behavior that deals with conflict, emotions,
                      nature, composition, structure, and action-reaction processes. It is one
                      of the important disciplines in the Arts faculty and serves as a bridge
                      between Psychology and Sociology by helping students understand both
                      individual and social behavior.
                    </p>

                    <h3 className="font-semibold mb-3">
                      Objectives of the Subject / Department
                    </h3>

                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li>To develop students' attitude and aptitude in theatrical movements.</li>
                      <li>To build one's personality as a well-mannered human being.</li>
                      <li>To develop educational competencies among students.</li>
                      <li>To boost students' creativity and logical reasoning.</li>
                      <li>To provide opportunities for theatre-related occupations.</li>
                      <li>To develop students' psychology as a good audience.</li>
                    </ul>

                    <h3 className="font-semibold mb-3">Introduction of the Department</h3>

                    <p className="mb-3 text-justify">
                      The Saraswati Bhuvan Education Society’s Arts and Commerce College was
                      established in June 1963 and received government sanction vide order of
                      the Education and Social Welfare Department, Sachivalaya, Bombay 32,
                      No. UMF/2363/87831/U dated 09/09/1963.
                    </p>

                    <p className="mb-3 text-justify">
                      The Department of Dramatics was established in 1977 and is a pioneer in
                      providing dramatics education to students of this region. It is one of the
                      oldest aided departments under the University and has been home to eminent
                      professors who have made substantial contributions to theatre education and
                      practice.
                    </p>

                    <h3 className="font-semibold mt-6 mb-3">
                      B] Establishment of the Department and Programmes Offered
                    </h3>

                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-400">
                        <thead>
                          <tr className="bg-gray-300">
                            <th className="border border-gray-400 px-4 py-2">Sr. No.</th>
                            <th className="border border-gray-400 px-4 py-2">
                              Courses / Programmes
                            </th>
                            <th className="border border-gray-400 px-4 py-2">
                              Annual / Semester / Choice Based Credit System
                            </th>
                            <th className="border border-gray-400 px-4 py-2">
                              Year of Establishment
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr className="hover:bg-gray-100">
                            <td className="border border-gray-400 px-4 py-2">1</td>
                            <td className="border border-gray-400 px-4 py-2">BAFY</td>
                            <td className="border border-gray-400 px-4 py-2">Semester</td>
                            <td className="border border-gray-400 px-4 py-2">1977 - 1978</td>
                          </tr>

                          <tr className="hover:bg-gray-100">
                            <td className="border border-gray-400 px-4 py-2">2</td>
                            <td className="border border-gray-400 px-4 py-2">BASY</td>
                            <td className="border border-gray-400 px-4 py-2">Semester</td>
                            <td className="border border-gray-400 px-4 py-2">1978 - 1979</td>
                          </tr>

                          <tr className="hover:bg-gray-100">
                            <td className="border border-gray-400 px-4 py-2">3</td>
                            <td className="border border-gray-400 px-4 py-2">BATY</td>
                            <td className="border border-gray-400 px-4 py-2">Semester</td>
                            <td className="border border-gray-400 px-4 py-2">1979 - 1980</td>
                          </tr>

                          <tr className="hover:bg-gray-100">
                            <td className="border border-gray-400 px-4 py-2">4</td>
                            <td className="border border-gray-400 px-4 py-2">
                              Proficiency Certificate Course in Dramatics (PCCD)
                            </td>
                            <td className="border border-gray-400 px-4 py-2">Annual</td>
                            <td className="border border-gray-400 px-4 py-2">
                              2002 - 2003 to 2012 - 2013
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

              </p>
            </>
          )
        },

                
        "Faculty of Department": {
          content: (
            <>
              <p>
               

                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-400">
                        <thead>
                          <tr className="bg-gray-300">
                            <th className="border border-gray-400 px-4 py-2">Sr. No.</th>
                            <th className="border border-gray-400 px-4 py-2">Name</th>
                            <th className="border border-gray-400 px-4 py-2">Qualification</th>
                            <th className="border border-gray-400 px-4 py-2">Designation</th>
                            <th className="border border-gray-400 px-4 py-2">Tenure</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr className="hover:bg-gray-100">
                            <td className="border border-gray-400 px-4 py-2">1</td>
                            <td className="border border-gray-400 px-4 py-2">
                              Mr. Kishore V. Shirsat
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              MPA in Theater Art, NET
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Head and Assistant Professor
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              April 2011 – Till Date
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

              </p>
            </>
          )

          
        },
        "Former Faculty of Department": {
          content: (
            <>
              <p>
            

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-400">
                    <thead>
                      <tr className="bg-gray-300">
                        <th className="border border-gray-400 px-4 py-2">Sr. No.</th>
                        <th className="border border-gray-400 px-4 py-2">Name</th>
                        <th className="border border-gray-400 px-4 py-2">Tenure</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr className="hover:bg-gray-100">
                        <td className="border border-gray-400 px-4 py-2">1</td>
                        <td className="border border-gray-400 px-4 py-2">
                          Prof. Dr. Laxmanrao N. Deshpande
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          1978 to 1979
                        </td>
                      </tr>

                      <tr className="hover:bg-gray-100">
                        <td className="border border-gray-400 px-4 py-2">2</td>
                        <td className="border border-gray-400 px-4 py-2">
                          Prof. Dr. Dilip N. Ghare
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          1980 to 2011
                        </td>
                      </tr>

                      <tr className="hover:bg-gray-100">
                        <td className="border border-gray-400 px-4 py-2">3</td>
                        <td className="border border-gray-400 px-4 py-2">
                          Mr. Yashvant Deshmukh
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          1981 to 2002
                        </td>
                      </tr>

                      <tr className="hover:bg-gray-100">
                        <td className="border border-gray-400 px-4 py-2">4</td>
                        <td className="border border-gray-400 px-4 py-2">
                          Mr. Avinash Kherde
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          1990 to 2007
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </p>
            </>
          )

        }

      }
    },

    "Sports": {
      submenu: {
        "Course Detials": {
          content: (
            <>
              <p>
              
                    <div className="bg-gray-200 p-6 text-sm leading-6 text-black">
                      <h2 className="text-red-600 font-bold mb-4">PROFILE</h2>

                      <h3 className="font-semibold mb-3">A] Introduction</h3>

                      <p className="mb-3 text-justify">
                        In the last few decades, sports have gained tremendous popularity all over
                        the globe. The popularity of sports continues to increase rapidly and this
                        trend is expected to continue in the future. Sports serve vital social and
                        cultural functions and contribute significantly to the overall welfare of
                        society through the all-round development of human personality.
                      </p>

                      <p className="mb-3 text-justify">
                        Keeping in mind the aims, organizations, and means of sports activities,
                        sports are classified into several areas such as performance sports,
                        physical education, rehabilitation sports, fitness and leisure sports, and
                        adventure sports. Each area caters to the requirements of a particular
                        section of society. Performance sports have gained considerable importance
                        and have developed their own structure, organization, and scientific
                        framework.
                      </p>

                      <p className="mb-3 text-justify">
                        Physical Education is accepted worldwide as an integral part of the
                        educational curriculum from primary education to postgraduate studies.
                        Physical Education is one of the optional subjects in the social science
                        faculty and contributes not only to physical fitness but also to the
                        emotional and social development of individuals.
                      </p>

                      <h3 className="font-semibold mb-3">
                        Scope of Physical Education and Sports
                      </h3>

                      <p className="mb-3 text-justify">
                        The areas of specialization in Physical Education include Sports Training,
                        Sports Psychology, Sports Management, Sports Marketing, Sports Event
                        Management, Sports Writing, Sports Journalism, Sports Goods Production,
                        Sports Anthropometry, Sports Biomechanics, Sports Law, Sports Nutrition,
                        Sports Physiotherapy, Sports Administration, Sports Engineering, Yoga
                        Education, Health and Physical Fitness, Physiology and Exercise, Sports
                        Doping Studies, and many other related fields.
                      </p>

                      <h3 className="font-semibold mb-3">
                        Introduction of the Department of Physical Education
                      </h3>

                      <p className="mb-3 text-justify">
                        SBES College of Arts and Commerce was established in 1963. The Department
                        of Physical Education was established simultaneously and has since been
                        catering to the sporting needs of students. The department provides indoor
                        sports facilities such as Table Tennis, Chess, Badminton, Carrom, and
                        Gymnastics, as well as outdoor sports facilities including Cricket,
                        Volleyball, Athletics, Football, Kabaddi, and Kho-Kho.
                      </p>

                      <p className="mb-3 text-justify">
                        To promote sports awareness, the department organizes intramural
                        competitions every year. Various indoor and outdoor games are conducted to
                        encourage participation and develop sporting skills among students.
                      </p>

                      <p className="mb-3 text-justify">
                        The department felicitates outstanding sportspersons during the annual
                        social gathering and provides technical training through faculty members to
                        nurture sporting talent. It also supports players participating in
                        inter-collegiate competitions by providing TA/DA and sports kits.
                      </p>

                      <p className="mb-3 text-justify">
                        As part of its community outreach activities, the department actively
                        organizes the inter-institutional sports event "S.B. Krida Mohatsav" every
                        year since 2009. Around 900 players from rural and urban branches of
                        Saraswati Bhuvan Education Society participate in sports such as Kho-Kho,
                        Kabaddi, and Volleyball during this two-day event.
                      </p>

                      <h3 className="font-semibold mb-3">Objectives of the Department</h3>

                      <ul className="list-decimal pl-6 mb-4 space-y-2">
                        <li>To involve college students in sports activities.</li>
                        <li>To promote sports awareness among students.</li>
                        <li>To identify sporting talent.</li>
                        <li>To nurture sports talent.</li>
                        <li>To motivate students to participate in competitive sports.</li>
                        <li>
                          To propagate the importance of physical fitness and a healthy lifestyle.
                        </li>
                      </ul>

                      <h3 className="font-semibold mt-6 mb-3">
                        B] Establishment of the Department
                      </h3>

                      <p className="mb-4 text-justify">
                        The Department of Physical Education was established in the year 1963.
                      </p>

                      <h3 className="font-semibold mt-6 mb-3">
                        C] Former Faculties of the Department
                      </h3>

                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-400">
                          <thead>
                            <tr className="bg-gray-300">
                              <th className="border border-gray-400 px-4 py-2">Sr. No.</th>
                              <th className="border border-gray-400 px-4 py-2">
                                Name of the Head
                              </th>
                              <th className="border border-gray-400 px-4 py-2">
                                Section
                              </th>
                              <th className="border border-gray-400 px-4 py-2">
                                Tenure
                              </th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr className="hover:bg-gray-100">
                              <td className="border border-gray-400 px-4 py-2">1</td>
                              <td className="border border-gray-400 px-4 py-2">
                                Prof. C. G. Dharmadhikari
                              </td>
                              <td className="border border-gray-400 px-4 py-2">
                                Senior College
                              </td>
                              <td className="border border-gray-400 px-4 py-2">
                                01.07.1969 to 30.11.2001
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>


              </p>
            </>
          )
        },

                
        "Faculty of Department": {
          content: (
            <>
              <p>
               

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-400">
                      <thead>
                        <tr className="bg-gray-300">
                          <th className="border border-gray-400 px-4 py-2">Sr. No.</th>
                          <th className="border border-gray-400 px-4 py-2">
                            Name of the Teacher
                          </th>
                          <th className="border border-gray-400 px-4 py-2">
                            Designation
                          </th>
                          <th className="border border-gray-400 px-4 py-2">
                            Tenure
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr className="hover:bg-gray-100">
                          <td className="border border-gray-400 px-4 py-2">1</td>
                          <td className="border border-gray-400 px-4 py-2">
                            Dr. Dayanand R. Kamble
                          </td>
                          <td className="border border-gray-400 px-4 py-2">
                            Director of Physical Education
                          </td>
                          <td className="border border-gray-400 px-4 py-2">
                            12/09/2003 – Till Date
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>


              </p>
            </>
          )

          
        },
        "Former Faculty of Department": {
          content: (
            <>
              <p>
                   <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-400">
                        <thead>
                          <tr className="bg-gray-300">
                            <th className="border border-gray-400 px-4 py-2">Sr. No.</th>
                            <th className="border border-gray-400 px-4 py-2">
                              Name of the Head
                            </th>
                            <th className="border border-gray-400 px-4 py-2">
                              Section
                            </th>
                            <th className="border border-gray-400 px-4 py-2">
                              Tenure
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr className="hover:bg-gray-100">
                            <td className="border border-gray-400 px-4 py-2">1</td>
                            <td className="border border-gray-400 px-4 py-2">
                              Prof. C. G. Dharmadhikari
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Senior College
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              01.07.1969 to 30.11.2001
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>


              </p>
            </>
          )

        }

      }
    },

    "Music": {
      submenu: {
        "Course Detials": {
          content: (
            <>
              <p>
                
                    <div className="bg-gray-200 p-6 text-sm leading-6 text-black">
                      <h2 className="text-red-600 font-bold mb-4">PROFILE</h2>

                      <h3 className="font-semibold mb-3">A] Introduction</h3>

                      <p className="mb-3 text-justify">
                        Music is an art that transcends region, religion, caste, creed, language,
                        and time. It is one of the strongest mediums of expression and one of the
                        easiest ways of communication. Music possesses a unique power to express
                        inner consciousness to the outer world and is therefore considered the
                        supreme of all arts. It plays a vital role in relaxing the mind and body,
                        leading to mental integrity, wisdom, and emotional balance. Such a
                        cultivated mind helps regulate human frailties and contributes to the
                        well-being of society. Thus, music becomes a great source of pleasure,
                        happiness, and personal growth.
                      </p>

                      <p className="mb-3 text-justify">
                        Music has immense academic and professional scope. Students can pursue
                        higher education and research through programs such as B.A., M.A., NET,
                        Ph.D., Post-Doctoral Fellowships, and other specialized research areas in
                        Music. The subject offers opportunities for careers in teaching,
                        performance, composition, research, music production, and cultural
                        preservation.
                      </p>

                      <p className="mb-3 text-justify">
                        Music holds great significance in human life. It is not merely the
                        projection of sound but a phenomenon that combines sound, rhythm, and human
                        emotions to attain universal peace. Being a geo-biological and
                        psycho-physiological process, music has profound social relevance. It
                        provides students with the right vision, mental harmony, and emotional
                        solace. The knowledge and practice of music satisfy natural human emotions
                        and sentiments while uplifting individuals to a higher plane of bliss and
                        aesthetic fulfillment.
                      </p>

                      <h3 className="font-semibold mb-3">Objectives of the Subject</h3>

                      <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>
                          To study and experience the nature and principles of notes and rhythm.
                        </li>
                        <li>
                          To understand the science of Music for higher education, research, and
                          lifelong learning.
                        </li>
                        <li>
                          To create mastery over advanced domain knowledge in Music.
                        </li>
                        <li>
                          To provide value-based and ethical leadership in professional and social
                          life.
                        </li>
                        <li>
                          To nurture musical talent and create performers, singers, composers,
                          coaches, and entrepreneurs in the field of Music.
                        </li>
                      </ul>

                      <h3 className="font-semibold mb-3">Introduction of the Department</h3>

                      <p className="mb-3 text-justify">
                        The Saraswati Bhuvan Education Society’s Arts and Commerce College was
                        established in June 1963 as per the government sanction vide order of the
                        Education and Social Welfare Department, Sachivalaya, Bombay 32,
                        No. UMF/2363/87831/U dated 09/09/1963.
                      </p>

                      <p className="mb-3 text-justify">
                        The Department of Music was established in 1975 with the sanction of the
                        Government of Maharashtra vide letter No. UMF/5074/1948-25 dated
                        27/09/1975. It is one of the largest and oldest aided departments under the
                        University. The department has been home to nationally acclaimed professors
                        who have made significant contributions to nurturing Indian Classical and
                        Folk Music traditions.
                      </p>

                      <p className="mb-3 text-justify">
                        The department offers a three-year degree course in Music, providing
                        students with a strong foundation for postgraduate studies. Students gain
                        knowledge of fundamental concepts and principles of Music while developing
                        practical and theoretical competencies.
                      </p>

                      <p className="mb-3 text-justify">
                        Admissions are conducted online. Eligible students who have passed the XII
                        Examination with English as a subject or equivalent examinations such as
                        D.Ed., DME, DCE, and DEE with English may apply. Admissions are granted on
                        a first-come, first-served basis as per the guidelines mentioned in the
                        college Information Brochure and website.
                      </p>

                      <h3 className="font-semibold mb-3">Objectives of the Department</h3>

                      <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>
                          To achieve competency in shaping and developing students' careers.
                        </li>
                        <li>
                          To make collective efforts for the preservation of India's rich musical
                          and cultural heritage.
                        </li>
                        <li>
                          To encourage higher education, research, and lifelong learning in Music.
                        </li>
                      </ul>

                      <h3 className="font-semibold mt-6 mb-3">
                        B] Establishment of the Department and Programmes Offered
                      </h3>

                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-400">
                          <thead>
                            <tr className="bg-gray-300">
                              <th className="border border-gray-400 px-4 py-2">Sr. No.</th>
                              <th className="border border-gray-400 px-4 py-2">
                                Courses / Programmes
                              </th>
                              <th className="border border-gray-400 px-4 py-2">
                                Annual / Semester / Choice Based Credit System
                              </th>
                              <th className="border border-gray-400 px-4 py-2">
                                Year of Establishment
                              </th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr className="hover:bg-gray-100">
                              <td className="border border-gray-400 px-4 py-2">1</td>
                              <td className="border border-gray-400 px-4 py-2">B.A. I</td>
                              <td className="border border-gray-400 px-4 py-2">Semester</td>
                              <td className="border border-gray-400 px-4 py-2">1975</td>
                            </tr>

                            <tr className="hover:bg-gray-100">
                              <td className="border border-gray-400 px-4 py-2">2</td>
                              <td className="border border-gray-400 px-4 py-2">B.A. II</td>
                              <td className="border border-gray-400 px-4 py-2">Semester</td>
                              <td className="border border-gray-400 px-4 py-2">1976</td>
                            </tr>

                            <tr className="hover:bg-gray-100">
                              <td className="border border-gray-400 px-4 py-2">3</td>
                              <td className="border border-gray-400 px-4 py-2">B.A. III</td>
                              <td className="border border-gray-400 px-4 py-2">Semester</td>
                              <td className="border border-gray-400 px-4 py-2">1977</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

              </p>
            </>
          )
        },

                
        "Faculty of Department": {
          content: (
            <>
              <p>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-400">
                        <thead>
                          <tr className="bg-gray-300">
                            <th className="border border-gray-400 px-4 py-2">Sr. No.</th>
                            <th className="border border-gray-400 px-4 py-2">Name</th>
                            <th className="border border-gray-400 px-4 py-2">Qualification</th>
                            <th className="border border-gray-400 px-4 py-2">Designation</th>
                            <th className="border border-gray-400 px-4 py-2">Tenure</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr className="hover:bg-gray-100">
                            <td className="border border-gray-400 px-4 py-2">1</td>
                            <td className="border border-gray-400 px-4 py-2">
                              Dr. Sanjay Mohad
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              M.A., Ph.D., NET
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Associate Professor
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              2003 – Onwards
                            </td>
                          </tr>

                        </tbody>
                      </table>
                    </div>

              </p>
            </>
          )

          
        },
        "Former Faculty of Department": {
          content: (
            <>
              <p>
                
                    <h3 className="font-semibold mt-6 mb-3">
                      D] Former Faculty Members of the Department
                    </h3>

                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-400">
                        <thead>
                          <tr className="bg-gray-300">
                            <th className="border border-gray-400 px-4 py-2">Sr. No.</th>
                            <th className="border border-gray-400 px-4 py-2">Name</th>
                            <th className="border border-gray-400 px-4 py-2">Tenure</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr className="hover:bg-gray-100">
                            <td className="border border-gray-400 px-4 py-2">1</td>
                            <td className="border border-gray-400 px-4 py-2">
                              Pandit Nathrao Neralkar
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              1974 – 1995
                            </td>
                          </tr>

                          <tr className="hover:bg-gray-100">
                            <td className="border border-gray-400 px-4 py-2">2</td>
                            <td className="border border-gray-400 px-4 py-2">
                              Prof. Shivram Gosavi
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              01.08.1983 – 31.05.2014
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

              </p>
            </>
          )

        }

      }
    },
  };

  /* ================= COMPONENT ================= */

  return (

    <SrCollegeLayout>

      <div className="student-container">

        {/* ================= Sidebar ================= */}

  <div className="sidebar flex justify-center items-center h-full">
  <ul className="w-full">
    {Object.keys(menuData).map((menu) => (
      <li
        key={menu}
       onClick={() => {
          setActive(menu);

          const firstSubmenu = Object.keys(
            menuData[menu].submenu
          )[0];

          setSubActive(firstSubmenu);
        }}
        className={`flex justify-center items-center 
                    text-center 
                    font-semibold   /* 👈 makes text bold */
                    border border-gray-2500 
                    rounded-lg 
                    py-3 my-2 
                    cursor-pointer 
                    ${active === menu ? "bg-blue-500 text-blue" : "bg-white"}
                    hover:bg-blue-500 hover:text-white 
                    transition`}
      >
        {menu}
      </li>
    ))}
  </ul>
</div>

        {/* ================= Content ================= */}

        <div className="content">

          <h2 className="title">{active}</h2>

          {/* ===== Sub Menu ===== */}

          {menuData[active].submenu && (

            <div className="top-menu">

              {Object.keys(menuData[active].submenu).map((sub) => (
                <button
                  key={sub}
                  onClick={() => setSubActive(sub)}
                  className={subActive === sub ? "active-btn" : ""}
                >
                  {sub}
                </button>
              ))}

            </div>

          )}

          {/* ===== Sub Content ===== */}

          {menuData[active].submenu && subActive && (

            <div className="submenu-content">
              {menuData[active].submenu[subActive].content}
            </div>

          )}

          {/* ===== Default Content ===== */}

          {!menuData[active].submenu && (

            <div className="main-content">
              {menuData[active].content}
            </div>

          )}

        </div>

      </div>

    </SrCollegeLayout>

  );

}