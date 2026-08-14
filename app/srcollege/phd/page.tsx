"use client";

import { useState } from "react";
import SrCollegeLayout from "@/components/sr-college/SrCollegeLayout";

export default function ProgrammePage() {
  const menuData: any = {
    "Ph.D": {
      years: {
        "Course Work": {
          tabs: {
            "Course Details": (
              <>
                <h3>Ph.D Course Work - Course Details</h3>
                <p>
                  Add Ph.D Course Work details, eligibility,
                  admission process and research regulations here.
                </p>
              </>
            ),

            "Syllabus": (
              <>
                <h3>Ph.D Course Work - Syllabus</h3>
                <p>Upload syllabus PDF here.</p>
              </>
            ),

            "Research Guides": (
              <>
                <h3>Research Guides</h3>
                <p>Add approved research guide information here.</p>
              </>
            ),

            "Research Areas": (
              <>
                <h3>Research Areas</h3>
                <ul>
                  <li>Commerce</li>
                  <li>Management</li>
                  <li>Economics</li>
                </ul>
              </>
            ),
          },
        },

        "Research Centre": {
          tabs: {
            "Course Details": (
              <>
                <h3>Research Centre Information</h3>
                <p>
                  Add details about the recognized research centre.
                </p>
              </>
            ),

            "Research Guides": (
              <>
                <h3>Research Guides</h3>
                <p>Guide details here.</p>
              </>
            ),

            "Research Areas": (
              <>
                <h3>Research Areas</h3>
                <p>Research specialization details here.</p>
              </>
            ),

            "Publications": (
              <>
                <h3>Research Publications</h3>
                <p>Add publication information here.</p>
              </>
            ),
          },
        },
      },
    },
  };

  const [course, setCourse] = useState("Ph.D");
  const [year, setYear] = useState("Course Work");
  const [tab, setTab] = useState("Course Details");

  return (
    <SrCollegeLayout>
      <div className="wrapper">
        {/* LEFT MENU */}
        <div className="sidebar">
          {Object.keys(menuData).map((courseName) => (
            <div key={courseName}>
              <div
                className={`course ${
                  course === courseName ? "activeCourse" : ""
                }`}
                onClick={() => {
                  setCourse(courseName);
                  setYear("Course Work");
                  setTab("Course Details");
                }}
              >
                {courseName}
              </div>

              {course === courseName && (
                <div className="years">
                  {Object.keys(menuData[courseName].years).map(
                    (yearName) => (
                      <div
                        key={yearName}
                        className={`year ${
                          year === yearName ? "activeYear" : ""
                        }`}
                        onClick={() => {
                          setYear(yearName);
                          setTab(
                            Object.keys(
                              menuData[courseName].years[yearName]
                                .tabs
                            )[0]
                          );
                        }}
                      >
                        {yearName}
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* RIGHT CONTENT */}
        <div className="content">
          <div className="header">
            <h2>
              {course} / {year}
            </h2>
          </div>

          <div className="tabMenu">
            {Object.keys(
              menuData[course].years[year].tabs
            ).map((tabName) => (
              <button
                key={tabName}
                className={tab === tabName ? "activeTab" : ""}
                onClick={() => setTab(tabName)}
              >
                {tabName}
              </button>
            ))}
          </div>

          <div className="contentBox">
            {menuData[course].years[year].tabs[tab]}
          </div>
        </div>
      </div>

      <style jsx>{`
        .wrapper {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 25px;
          max-width: 1400px;
          margin: auto;
          padding: 25px;
        }

        .sidebar {
          background: #fff;
          border-radius: 12px;
          padding: 15px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
          height: fit-content;
        }

        .course {
          padding: 14px;
          margin-bottom: 8px;
          background: #f5f5f5;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: 0.3s;
        }

        .course:hover {
          background: #0d6efd;
          color: #fff;
        }

        .activeCourse {
          background: #0d6efd;
          color: #fff;
        }

        .years {
          margin-left: 15px;
          margin-bottom: 15px;
        }

        .year {
          padding: 10px;
          margin: 5px 0;
          cursor: pointer;
          border-left: 3px solid #ddd;
        }

        .activeYear {
          background: #eef5ff;
          border-left: 3px solid #0d6efd;
          color: #0d6efd;
          font-weight: 600;
        }

        .content {
          width: 100%;
        }

        .header {
          background: #fff;
          padding: 20px;
          border-radius: 12px;
          margin-bottom: 15px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
        }

        .header h2 {
          margin: 0;
          color: #003366;
        }

        .tabMenu {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 15px;
        }

        .tabMenu button {
          border: none;
          padding: 10px 18px;
          background: #f1f1f1;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
        }

        .activeTab {
          background: #ff8800 !important;
          color: white;
        }

        .contentBox {
          background: #fff;
          border-radius: 12px;
          padding: 25px;
          min-height: 500px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
        }

        @media (max-width: 992px) {
          .wrapper {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </SrCollegeLayout>
  );
}