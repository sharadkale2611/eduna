"use client";

import { useState } from "react";
import SrCollegeLayout from "@/components/sr-college/SrCollegeLayout";
import "./student.css";
import { sub } from "framer-motion/client";

export default function StudentPage() {

  const [active, setActive] = useState("Alumni");
  const [subActive, setSubActive] = useState("");

  /* ================= MENU DATA ================= */

  const menuData: any = {

    Alumni: {
      submenu: {
        "Alumni Association": {
          content: (
            <>
              <p>
                The Institution has registered Alumni Association formed under u/s 8 of the Companies Act 2013 as nonprofit Company on 7th January 2016 with Reg. No. U74120MH2016NPL271830 and its registered office at SBES College of Arts and Commerce, Aurangabad.
              </p>
            </>
          )
        },
        "Alumni Meet": {
          content: (
            <>
              <p>
                The Institution has registered Alumni Association formed under u/s 8 of the Companies Act 2013 as nonprofit Company on 7th January 2016 with Reg. No. U74120MH2016NPL271830 and its registered office at SBES College of Arts and Commerce, 
                Aurangabad.
                <table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>John Doe</td>
                    </tr>
                  </tbody>
                </table>
              </p>
            </>
          )

        }

      }
    },

    Scholarship: {
      submenu: {

        "Government Scholarship": {
          content: (
            <>
              <p>
                The government of India provides three scholarships schemes for UG and PG students. The details of these schemes are available on the exclusive portal NSP created by the government. Students must register and upload the required documents on it and chose the scheme for which they are eligible after online application submission these students must take printout of the submitted form and submit hardcopy of it along with the required documents like caste certificate/income certificate/domicile certificate/photocopy of bank passbook/Aadhar card/marks sheet/admission receipt/photocopy of leaving certificate in the scholarship section of our college. Scholarships of eligible students are disbursed by the concerned government departments. Government scholarships are provided by the central and state government.
              </p>

              <ol>
                <li>Post Matric Scholarship scheme for Minorities</li>
                <li>Central Sector Scheme of Scholarship</li>
                <li>Disability Post-Matric Scholarship</li>
              </ol>
            </>
          )
        },

        "Merit Scholarship": {
          content: (
            <p>
              Merit scholarship is provided to students with excellent academic performance.
            </p>
          )
        },

        "Minority Scholarship": {
          content: (
            <p>
              Minority scholarships are provided for minority category students.
            </p>
          )
        }

      }
    },

    Health: {
      content: (
        <p>
          Health services provide medical assistance.
        </p>
      )
    }

  };

  /* ================= COMPONENT ================= */

  return (

    <SrCollegeLayout>

      <div className="student-container">

        {/* ================= Sidebar ================= */}

        <div className="sidebar">

          <ul>

            {Object.keys(menuData).map((menu) => (
              <li
                key={menu}
                onClick={() => {
                  setActive(menu);
                  setSubActive("");
                }}
              >
                {menu} →
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