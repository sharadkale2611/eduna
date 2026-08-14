"use client";

import { useState } from "react";
import SrCollegeLayout from "@/components/sr-college/SrCollegeLayout";

export default function ResearchPage() {
  const [activeTab, setActiveTab] = useState("projects");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const researchProjects = [
  {
    id: 1,
    projectName:
      "2",

    investigator: "3",

    department: "4",

    yearOfAward: "5",

    amountSanctioned: "6",

    duration: "7",

    fundingAgency: "8",

    type: "9",

    photo: "/assets/images/faculty/demo.jpg",
  },

  

  
];
  const researchOutputs = [
    {
      id: 1,
      title: "Research Paper on Economics",
      type: "-",
      year: "2025",
      publisher: "UGC Care Journal",
    },
    {
      id: 2,
      title: "Book Chapter on Commerce",
      type: "Book Chapter",
      year: "2024",
      publisher: "Springer",
    },
    {
      id: 3,
      title: "Patent on Educational Technology",
      type: "Patent",
      year: "2025",
      publisher: "Patent Office",
    },
  ];

  return (
    <SrCollegeLayout>
      {/* <h4
        style={{
          textAlign: "center",
          marginTop: "16px",
          marginBottom: "20px",
        }}
      >
        Research
      </h4> */}

      <h4></h4>
      {/* Tabs */}
      <div
        style={{
          width: "100%",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            backgroundColor: "#dbeafe",
            padding: "5px",
            borderRadius: "50px",
          }}
        >
          <button
            onClick={() => setActiveTab("projects")}
            style={{
              padding: "8px 20px",
              borderRadius: "50px",
              border: "none",
              cursor: "pointer",
              backgroundColor:
                activeTab === "projects"
                  ? "#2563eb"
                  : "transparent",
              color:
                activeTab === "projects"
                  ? "#ffffff"
                  : "#1e3a8a",
              fontWeight: "500",
            }}
          >
            Publication
          </button>

          <button
            onClick={() => setActiveTab("outputs")}
            style={{
              padding: "8px 20px",
              borderRadius: "50px",
              border: "none",
              cursor: "pointer",
              backgroundColor:
                activeTab === "outputs"
                  ? "#2563eb"
                  : "transparent",
              color:
                activeTab === "outputs"
                  ? "#ffffff"
                  : "#1e3a8a",
              fontWeight: "500",
            }}
          >
            Publication
          </button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "0 10px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            overflowX: "auto",
          }}
        >
          {/* Research Projects */}
          {activeTab === "projects" && (
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "14px",
              }}
            >
             <thead
  style={{
    backgroundColor: "#2563eb",
    color: "#fff",
  }}
>
  <tr>
    <th style={thStyle}>Sr. No.</th>

    <th style={thStyle}>
      Name of the Research Project / Endowment
    </th>

    <th style={thStyle}>
      Name of the Principal Investigator /
      Co-investigator
    </th>

    <th style={thStyle}>
      Department of Principal Investigator
    </th>

    <th style={thStyle}>
      Year of Award
    </th>

    <th style={thStyle}>
      Amount Sanctioned
    </th>

    <th style={thStyle}>
      Duration of the Project
    </th>

    <th style={thStyle}>
      Name of the Funding Agency
    </th>

    <th style={thStyle}>
      Type
      <br />
      (Government / Non-Government)
    </th>

    <th style={thStyle}>Photo</th>
  </tr>
</thead>

              <tbody>
  {researchProjects.map((item, index) => (
    <tr key={item.id}>
      <td style={tdCenter}>{index + 1}</td>

      <td style={td}>
        {item.projectName}
      </td>

      <td style={td}>
        {item.investigator}
      </td>

      <td style={td}>
        {item.department}
      </td>

      <td style={td}>
        {item.yearOfAward}
      </td>

      <td style={td}>
        {item.amountSanctioned}
      </td>

      <td style={td}>
        {item.duration}
      </td>

      <td style={td}>
        {item.fundingAgency}
      </td>

      <td style={td}>
        {item.type}
      </td>

      <td style={tdCenter}>
        <img
          src={item.photo}
          alt="Project"
          onClick={() =>
            setSelectedImage(item.photo)
          }
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            objectFit: "cover",
            cursor: "pointer",
          }}
        />
      </td>
    </tr>
  ))}
</tbody>
            </table>
          )}

          {/* Research Outputs */}
          {activeTab === "outputs" && (
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "14px",
              }}
            >
              <thead
                style={{
                  backgroundColor: "#2563eb",
                  color: "#fff",
                }}
              >
                <tr>
                  <th style={thStyle}>Sr. No.</th>
                  <th style={thStyle}>Title</th>
                  <th style={thStyle}>Type</th>
                  <th style={thStyle}>Year</th>
                  <th style={thStyle}>Publisher</th>
                </tr>
              </thead>

              <tbody>
                {researchOutputs.map((item, index) => (
                  <tr key={item.id}>
                    <td style={tdCenter}>{index + 1}</td>
                    <td style={td}>{item.title}</td>
                    <td style={td}>{item.type}</td>
                    <td style={td}>{item.year}</td>
                    <td style={td}>{item.publisher}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <img
            src={selectedImage}
            alt="Preview"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "10px",
            }}
          />
        </div>
      )}
    </SrCollegeLayout>
  );
}

const thStyle: React.CSSProperties = {
  border: "1px solid #ccc",
  padding: "8px",
  textAlign: "left",
};

const td: React.CSSProperties = {
  border: "1px solid #ccc",
  padding: "8px",
};

const tdCenter: React.CSSProperties = {
  border: "1px solid #ccc",
  padding: "8px",
  textAlign: "center",
};