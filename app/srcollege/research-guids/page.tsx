"use client";

import { useState } from "react";
import CollegeLayout from "@/components/sr-college/SrCollegeLayout";

export default function ResearchCenterPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const researchGuides = [
    {
      srNo: 1,
      name: "Prof. (Dr.) Makarand A. Paithankar",
      designation: "Professor",
      subjectguide: "Public Administration",
      photo: "/assets/images/faculty/MAP.jpg",
    },
    {
      srNo: 2,
      name: "Prof. (Dr.) Madhav Gaikwad",
      designation: "Professor",
      subjectguide: "Economics",
      photo: "/assets/images/faculty/MMG.jpg",
    },
    {
      srNo: 3,
      name: "Prof. (Dr.) Gurudatta G. Rajpute",
      designation: "Professor",
      subjectguide: "Hindi",
      photo: "/assets/images/faculty/GGR.jpg",
    },
    {
      srNo: 4,
      name: "Prof. (Dr.) Sandip M. Chaudhari",
      designation: "Professor",
      subjectguide: "Sociology",
      photo: "/assets/images/faculty/SMC.jpeg",
    },
    {
      srNo: 5,
      name: "Prof. (Dr.) Smita S. Shinde",
      designation: "Professor",
      subjectguide: "History",
      photo: "/assets/images/faculty/SSS.jpeg",
    },
    {
      srNo: 6,
      name: "Prof. (Dr.) Dayanand R. Kamble",
      designation: "Professor",
      subjectguide: "Physical Education",
      photo: "/assets/images/faculty/DRK.jpg",
    },
    {
      srNo: 7,
      name: "Prof. (Dr.) Sanjay M. Mohad",
      designation: "Professor",
      subjectguide: "Music",
      photo: "/assets/images/faculty/SM.jpg",
    },
    {
      srNo: 8,
      name: "Prof. (Dr.) Pramod P. Deo",
      designation: "Professor",
      subjectguide: "Commerce",
      photo: "/assets/images/faculty/PPD.jpeg",
    },
    {
      srNo: 9,
      name: "Prof. (Dr.) Hemchandra N. Deshmukh",
      designation: "Professor",
      subjectguide: "Commerce",
      photo: "/assets/images/faculty/HND.jpeg",
    },
    {
      srNo: 10,
      name: " Prof. (Dr.) Feroz A. Baig",
      designation: "Professor",
      subjectguide: "Commerce",
      photo: "/assets/images/faculty/FAB.jpeg",
    },
    {
      srNo: 11,
      name: "Prof. (Dr.) Savita G. Joshi",
      designation: "Professor",
      subjectguide: "Commerce",
      photo: "/assets/images/faculty/SGJ.jpeg",
    },
    {
      srNo: 12,
      name: "Prof. (Dr.) Gorakh P. Kakade",
      designation: "Professor",
      subjectguide: "Hindi",
      photo: "/assets/images/faculty/GPK.jpeg",
    },
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
        {/* Title */}
        <h1
          style={{
            textAlign: "center",
            color: "#003366",
            marginBottom: "20px",
          }}
        >
          Research Guides
        </h1>

        {/* Table */}
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#003366", color: "#fff" }}>
                <th style={thStyle}>Sr. No.</th>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Designation</th>
                <th style={thStyle}>Subject Guide</th>
                <th style={thStyle}>Photo</th>
              </tr>
            </thead>

            <tbody>
              {researchGuides.map((guide) => (
                <tr key={guide.srNo}>
                  <td style={tdStyle}>{guide.srNo}</td>

                  <td style={tdStyle}>{guide.name}</td>

                  <td style={tdStyle}>{guide.designation}</td>

                  <td style={tdStyle}>{guide.subjectguide}</td>

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