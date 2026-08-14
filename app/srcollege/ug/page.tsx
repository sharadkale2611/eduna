"use client";

import { useState } from "react";
import SrCollegeLayout from "@/components/sr-college/SrCollegeLayout";

export default function ProgrammePage() {
  const menuData: any = {
    "B.A.": {
      years: {
        "1st Year": {
          tabs: {
            "Course Details": (
              <>
                <h3>B.A. First Year - Course Details</h3>
                <p>Eligibility: HSC Passed from any recognized board.</p>
              </>
            ),
            Syllabus: (
              <>
                <h3>B.A. First Year - Syllabus</h3>
                <p>Upload syllabus PDF here.</p>
              </>
            ),
            Subjects: (
              <>
                <h3>B.A. First Year - Subjects</h3>
                <ul>
                  <li>English</li>
                  <li>History</li>
                  <li>Political Science</li>
                </ul>
              </>
            ),
            Fees: (
              <>
                <h3>B.A. First Year - Fee Structure</h3>
                <p>₹ </p>
              </>
            ),
          },
        },

        "2nd Year": {
          tabs: {
            "Course Details": <p>B.A. Second Year Course Details</p>,
            Syllabus: <p>B.A. Second Year Syllabus</p>,
            Subjects: <p>B.A. Second Year Subjects</p>,
            Fees: <p>B.A. Second Year Fee Structure</p>,
          },
        },

        "3rd Year": {
          tabs: {
            "Course Details": <p>B.A. Third Year Course Details</p>,
            Syllabus: <p>B.A. Third Year Syllabus</p>,
            Subjects: <p>B.A. Third Year Subjects</p>,
            Fees: <p>B.A. Third Year Fee Structure</p>,
          },
        },
      },
    },

    "B.Com": {
      years: {
        "1st Year": {
          tabs: {
            "Course Details": <p>B.Com First Year Course Details</p>,
            Syllabus: <p>B.Com First Year Syllabus</p>,
            Subjects: <p>B.Com First Year Subjects</p>,
            Fees: <p>B.Com First Year Fee Structure</p>,
          },
        },
        "2nd Year": {
          tabs: {
            "Course Details": <p>B.Com Second Year Course Details</p>,
            Syllabus: <p>B.Com Second Year Syllabus</p>,
            Subjects: <p>B.Com Second Year Subjects</p>,
            Fees: <p>B.Com Second Year Fee Structure</p>,
          },
        },
        "3rd Year": {
          tabs: {
            "Course Details": <p>B.Com Third Year Course Details</p>,
            Syllabus: <p>B.Com Third Year Syllabus</p>,
            Subjects: <p>B.Com Third Year Subjects</p>,
            Fees: <p>B.Com Third Year Fee Structure</p>,
          },
        },
      },
    },

    BBA: {
      years: {
        "1st Year": {
          tabs: {
            "Course Details": <p>BBA First Year Course Details</p>,
            Syllabus: <p>BBA First Year Syllabus</p>,
            Subjects: <p>BBA First Year Subjects</p>,
            Fees: <p>BBA First Year Fee Structure</p>,
          },
        },
        "2nd Year": {
          tabs: {
            "Course Details": <p>BBA Second Year Course Details</p>,
            Syllabus: <p>BBA Second Year Syllabus</p>,
            Subjects: <p>BBA Second Year Subjects</p>,
            Fees: <p>BBA Second Year Fee Structure</p>,
          },
        },
        "3rd Year": {
          tabs: {
            "Course Details": <p>BBA Third Year Course Details</p>,
            Syllabus: <p>BBA Third Year Syllabus</p>,
            Subjects: <p>BBA Third Year Subjects</p>,
            Fees: <p>BBA Third Year Fee Structure</p>,
          },
        },
      },
    },

    BCA: {
      years: {
        "1st Year": {
          tabs: {
            "Course Details": <p>BCA First Year Course Details</p>,
            Syllabus: <p>BCA First Year Syllabus</p>,
            Subjects: <p>BCA First Year Subjects</p>,
            Fees: <p>BCA First Year Fee Structure</p>,
          },
        },
        "2nd Year": {
          tabs: {
            "Course Details": <p>BCA Second Year Course Details</p>,
            Syllabus: <p>BCA Second Year Syllabus</p>,
            Subjects: <p>BCA Second Year Subjects</p>,
            Fees: <p>BCA Second Year Fee Structure</p>,
          },
        },
        "3rd Year": {
          tabs: {
            "Course Details": <p>BCA Third Year Course Details</p>,
            Syllabus: <p>BCA Third Year Syllabus</p>,
            Subjects: <p>BCA Third Year Subjects</p>,
            Fees: <p>BCA Third Year Fee Structure</p>,
          },
        },
      },
    },
  };

  const [course, setCourse] = useState("B.A.");
  const [year, setYear] = useState("1st Year");
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
                  setYear("1st Year");
                  setTab("Course Details");
                }}
              >
                {courseName}
              </div>

              {course === courseName && (
                <div className="years">
                  {Object.keys(menuData[courseName].years).map((yearName) => (
                    <div
                      key={yearName}
                      className={`year ${
                        year === yearName ? "activeYear" : ""
                      }`}
                      onClick={() => {
                        setYear(yearName);
                        setTab("Course Details");
                      }}
                    >
                      {yearName}
                    </div>
                  ))}
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
            {Object.keys(menuData[course].years[year].tabs).map((tabName) => (
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
          min-height: 450px;
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