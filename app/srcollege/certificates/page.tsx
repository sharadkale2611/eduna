"use client";

import { useState } from "react";
import SrCollegeLayout from "@/components/sr-college/SrCollegeLayout";

export default function ProgrammePage() {
  const menuData: any = {
    Certificate: {
      years: {
        "Certificate Course 1": {
          tabs: {
            "Course Details": (
              <>
                <h3>Certificate Course 1 - Course Details</h3>
                <p>
                  Add course objectives, eligibility criteria,
                  duration and intake capacity here.
                </p>
              </>
            ),

            Syllabus: (
              <>
                <h3>Certificate Course 1 - Syllabus</h3>
                <p>Upload syllabus PDF here.</p>
              </>
            ),

            Subjects: (
              <>
                <h3>Certificate Course 1 - Subjects</h3>
                <ul>
                  <li>Module 1</li>
                  <li>Module 2</li>
                  <li>Module 3</li>
                  <li>Practical Training</li>
                </ul>
              </>
            ),

            Duration: (
              <>
                <h3>Certificate Course 1 - Duration</h3>
                <p>6 Months</p>
              </>
            ),
          },
        },

        "Certificate Course 2": {
          tabs: {
            "Course Details": (
              <>
                <h3>Certificate Course 2 - Course Details</h3>
                <p>Course information goes here.</p>
              </>
            ),

            Syllabus: (
              <>
                <h3>Certificate Course 2 - Syllabus</h3>
                <p>Upload syllabus PDF here.</p>
              </>
            ),

            Subjects: (
              <>
                <h3>Certificate Course 2 - Subjects</h3>
                <p>Subject details here.</p>
              </>
            ),

            Duration: (
              <>
                <h3>Certificate Course 2 - Duration</h3>
                <p>3 Months</p>
              </>
            ),
          },
        },

        "Certificate Course 3": {
          tabs: {
            "Course Details": (
              <>
                <h3>Certificate Course 3 - Course Details</h3>
                <p>Course information goes here.</p>
              </>
            ),

            Syllabus: (
              <>
                <h3>Certificate Course 3 - Syllabus</h3>
                <p>Upload syllabus PDF here.</p>
              </>
            ),

            Subjects: (
              <>
                <h3>Certificate Course 3 - Subjects</h3>
                <p>Subject details here.</p>
              </>
            ),

            Duration: (
              <>
                <h3>Certificate Course 3 - Duration</h3>
                <p>1 Year</p>
              </>
            ),
          },
        },
      },
    },
  };

  const [course, setCourse] = useState("Certificate");
  const [year, setYear] = useState("Certificate Course 1");
  const [tab, setTab] = useState("Course Details");

  return (
    <SrCollegeLayout>
      <div className="wrapper">
        {/* Sidebar */}
        <div className="sidebar">
          {Object.keys(menuData).map((courseName) => (
            <div key={courseName}>
              <div
                className={`course ${
                  course === courseName ? "activeCourse" : ""
                }`}
                onClick={() => {
                  setCourse(courseName);
                  setYear("Certificate Course 1");
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

        {/* Content */}
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
          color: white;
        }

        .activeCourse {
          background: #0d6efd;
          color: white;
        }

        .years {
          margin-left: 15px;
          margin-top: 10px;
        }

        .year {
          padding: 10px;
          margin-bottom: 5px;
          border-left: 3px solid #ddd;
          cursor: pointer;
        }

        .activeYear {
          border-left: 3px solid #0d6efd;
          background: #eef5ff;
          color: #0d6efd;
          font-weight: 600;
        }

        .content {
          width: 100%;
        }

        .header {
          background: white;
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
          background: white;
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