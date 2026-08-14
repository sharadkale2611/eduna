"use client";

import { useState } from "react";
import CollegeLayout from "@/components/sr-college/SrCollegeLayout";

export default function ResearchCenterPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const researchGuides = [

    {
      srNo: 1,
      name: "Prof. (Dr.) Anand V. Choudhary",
      designation: "Professor",
      subjectguide: "Commerce",
       photo: "/assets/images/faculty/AVC.jpeg",
      },
  
      {
      srNo: 2,
      name: "Prof. (Dr.) Pramod P. Deo",
      designation: "Professor",
      subjectguide: "Commerce",
       photo: "/assets/images/faculty/PPD.jpeg",
      },
    {
      srNo: 3,
      name: "Prof. (Dr.) Hemchandra N. Deshmukh",
      designation: "Professor",
      subjectguide: "Commerce",
      photo: "/assets/images/faculty/HND.jpeg",
      },

    {
      srNo: 4,
      name: "Prof. (Dr.) Dr. Feroz A. Baig",
      designation: "Professor",
      subjectguide: "Commerce",
      photo: "/assets/images/faculty/FAB.jpEg",
      },

    {
      srNo: 5,
      name: "Prof. (Dr.) Dr. Savita G. Joshi",
      designation: "Professor",
      subjectguide: "Commerce",
       photo: "/assets/images/faculty/SGJ.jpeg",
      },

    
    {
      srNo: 6,
      name: "Prof. (Dr.) Dr. Dilip S. Chavan",
      designation: "Professor",
      subjectguide: "Commerce",
       photo: "/assets/images/faculty/DSC.jpg",
      },

      //   {
      // srNo: 1,
      // name: "2",
      // designation: "3",
      // subjectguide: "4",
      //  photo: "/assets/images/faculty/Sdemo.jpg",
      // },

        

           
  ];

  return (
    <CollegeLayout>
      <div
        style={{
          padding: "20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#003366",
            marginBottom: "20px",
            
          }}
        >
          Research Center
        </h1>

        {/* About Research Center */}
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            marginBottom: "25px",
            textAlign: "center"
          }}
        >
          <h2 style={{ color: "#003366" }}>
            About Research Center
          </h2>

          <p>
            The Research Center of the college promotes quality
            research, innovation, publication, academic excellence,
            and interdisciplinary studies among faculty members and
            research scholars. The center encourages participation in
            funded research projects, seminars, conferences,
            workshops, patents, and publications.
          </p>

          <h3
            style={{
              marginTop: "20px",
              color: "#003366",
            }}
          >
            Objectives
          </h3>

          <ul>
            <li>
              Promote research culture among faculty and students.
            </li>
            <li>
              Encourage publication in reputed journals.
            </li>
            <li>
              Facilitate funded research projects.
            </li>
            <li>
              Support innovation, patents, and consultancy.
            </li>
            <li>
              Organize seminars, workshops, and conferences.
            </li>
          </ul>
        </div>

        {/* Research Guides */}
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          <h2
            style={{
              color: "#003366",
              marginBottom: "15px",
              textAlign: "center"
            }}
          >
            Research Guides
          </h2>

          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
              }}
            >
              <thead>
                <tr
                  style={{
                    backgroundColor: "#003366",
                    color: "#fff",
                  }}
                >
                  <th style={thStyle}>Sr. No.</th>
                  <th style={thStyle}>
                    Name of Research Guide
                  </th>
                  <th style={thStyle}>Designation</th>
                  <th style={thStyle}>Research Guide</th>
                   <th style={thStyle}>Photo</th>
                </tr>
              </thead>

              <tbody>
                {researchGuides.map((guide) => (
                  <tr key={guide.srNo}>
                    <td style={tdStyle}>{guide.srNo}</td>

                    <td style={tdStyle}>{guide.name}</td>
               
                    <td style={tdStyle}>
                      {guide.designation}
                    </td>

                    <td style={tdStyle}>
                      {guide.subjectguide}
                    </td>

                    <td style={tdStyle}>
                      <img
                        src={guide.photo}
                        alt={guide.name}
                        onClick={() =>
                          setSelectedImage(guide.photo)
                        }
                        style={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "50%",
                          objectFit: "cover",
                          cursor: "pointer",
                          display: "block",
                          margin: "0 auto",
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Image Popup */}
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9999,
            }}
          >
            <img
              src={selectedImage}
              alt="Research Guide"
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: "90%",
                maxHeight: "90%",
                borderRadius: "10px",
                boxShadow:
                  "0 0 20px rgba(255,255,255,0.3)",
              }}
            />
          </div>
        )}
      </div>
    </CollegeLayout>
  );
}

const thStyle: React.CSSProperties = {
  border: "1px solid #ddd",
  padding: "10px",
  textAlign: "left",
};

const tdStyle: React.CSSProperties = {
  border: "1px solid #ddd",
  padding: "10px",
};