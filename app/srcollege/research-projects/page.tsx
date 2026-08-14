"use client";

import { useState } from "react";
import SrCollegeLayout from "@/components/sr-college/SrCollegeLayout";

export default function ResearchPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const researchProjects = [
    {
      id: 1,
      projectName:
        "In Search of Sound Finance: An Explorative Analysis of the Resources of Maharashtda Government with special reference to Marathwada Region",

      investigator: "Dr. Paithankar M.A.",

      department: "Public Administration",

      yearOfAward: "2015",

      amountSanctioned: "6.80",

      duration: "01-7-2015 to 30-06-2018 (3 Years)",

      fundingAgency: "UGC, New Delhi",

      type: "Government",

      photo: "/assets/images/faculty/MAP.jpg",
    },

    {
      id: 2,
      projectName:
        "हिंदी में अनूदित भारतीय कथा साहित्य में आदिवासी जीवन Hindi Me Anudit Bhartiya Kata Sahitya Me Aadivasi Jivan",

      investigator: "Dr. Kakade G.P.",

      department: "Hindi",

      yearOfAward: "2015",

      amountSanctioned: "5.20",

      duration: "01/07/2015 to 30/06/2018 (3 Years)",

      fundingAgency: "UGC, New Delhi",

      type: "Government",

      photo: "/assets/images/faculty/GPK.jpeg",
    },

    {
      id: 3,
      projectName:
        "A Comparative Study of Customer Satisfaction in Selected Scheduled and Nationalized Bank of Chhatrapati Sambhaji Nagar District",

      investigator: "Dr. Chavan D.S.",

      department: "Commerce",

      yearOfAward: "2016",

      amountSanctioned: "2.20",

      duration: "14-07-2017 to 13-07-2019 (2 Years)",

      fundingAgency: "UGC, New Delhi (WRO)",

      type: "Government",

      photo: "/assets/images/faculty/DSC.jpg",
    },

    {
      id: 4,
      projectName:
        "The SHG Bank Linkage Programme: A Comparative Analysis of Selected Public and Private Banks in Marathwada",

      investigator: "Mr. Thombre S.M.",

      department: "Commerce",

      yearOfAward: "2017",

      amountSanctioned: "0.95",

      duration: "2017-2019 (2 Years)",

      fundingAgency: "UGC, New Delhi (WRO)",

      type: "Government",

      photo: "/assets/images/faculty/demo.jpg",
    },

    {
      id: 5,
      projectName:
        "Impact of Globalization on Consumers’ Buying Behavior Regarding Consumer Durable Products in Chhatrapati Sambhaji Nagar District",

      investigator: "Dr. Baig F. A.",

      department: "Commerce",

      yearOfAward: "2017",

      amountSanctioned: "0.65",

      duration: "15-01-2017 to 14-01-2019 (2 Years)",

      fundingAgency: "UGC, New Delhi (WRO)",

      type: "Government",

      photo: "/assets/images/faculty/FAB.jpeg",
    },

    {
      id: 6,
      projectName: "A Sociological Study of Female Foeticide of Maharashtda special reference to Distdict Beed",

      investigator: "Dr. Chaudhari S. M.",

      department: "Sociology",

      yearOfAward: "2017",

      amountSanctioned: "3.00",

      duration: "26-07-2017 to 25-07-2019 (2 years)",

      fundingAgency: "UGC, New Delhi ( WRO)",

      type: "Government",

      photo: "/assets/images/faculty/SMC.jpeg",
    },

    {
      id: 7,
      projectName: "Understanding Work Life Balance- An Empirical Study of Women Administdators in Marathwada division of Maharashtda",

      investigator: "Dr. Paithankar M.A.",

      department: "Public Administdation",

      yearOfAward: "2019",

      amountSanctioned: "1.70",

      duration: "2018-2019 (1 Years)",

      fundingAgency: "Maharashtda State Commission for Women",

      type: "Government",

      photo: "/assets/images/faculty/MAP.jpg",
    },

    {
      id: 8,
      projectName: "औरंगाबादच्या आर्थिक विकासात पर्यटन व्यवसायाचे योगदान: विश्लेषणात्मक अभ्यास Aurangabadchya arthik vikasat paryatan vyavasyache yogdan: vishleshanatmak abhyas2",

      investigator: "Dr. Gaikwad M.M.",

      department: "Economics",

      yearOfAward: "2019",

      amountSanctioned: "0.50",

      duration: "24-06-2019 to 31-01-2021(1.5 Years)",

      fundingAgency: "Dr. Babasaheb Ambedkar Marathwada University Chhatrapati Sambhaji Nagar",

      type: "9Non-Government",

      photo: "/assets/images/faculty/MMG.jpg",
    },

    {
      id: 9,
      projectName: "Trends and Transformation in Administrative Culture: A Study of Chhatrapati Sambhaji Nagar",

      investigator: "Dr. Paithankar M.A.",

      department: "Public Administdation",

      yearOfAward: "2019",

      amountSanctioned: "0.50",

      duration: "24-06-2019 to 31-01-2021(1.5 Years)",

      fundingAgency: "Dr. Babasaheb Ambedkar Marathwada University, Chhatrapati Sambhaji Nagar",

      type: "Non-Government",

      photo: "/assets/images/faculty/MAP.jpg",
    },

    {
      id: 10,
      projectName: "मराठवाड्याच्या कमानी रंगभूमीवरिल १९५० नन्तरच्या कलावंतांचे योगदान : एक आढावा Marathvadyachya kamani rangbhoomivaril 1950 nantarchya kalavantanche yogdan : ek adhava",

      investigator: "Dr. Shirsat K.V.",

      department: "Dramatics",

      yearOfAward: "2019",

      amountSanctioned: "0.50",

      duration: "24-06-2019 to 31-01-2021(1.5 Years)",

      fundingAgency: "Dr. Babasaheb Ambedkar Marathwada University, Chhatrapati Sambhaji Nagar",

      type: "Non-Government",

      photo: "/assets/images/faculty/KVS.jpg",
    },

    {
      id: 11,
      projectName: "Impact of Agnihotda: A socio- psychological and environmental study in Chhatrapati Sambhaji Nagar city.",

      investigator: "Dr. Mankar S.S.",

      department: "Sociology",

      yearOfAward: "2019",

      amountSanctioned: "0.50",

      duration: "24-06-2019 to 31-01-2021(1.5 Years)",

      fundingAgency: "Dr. Babasaheb Ambedkar Marathwada University, Chhatrapati Sambhaji Nagar",

      type: "Non-Government",

      photo: "/assets/images/faculty/Demo.jpeg",
    },

    {
      id: 12,
      projectName: "Ekatma Manav Darshan - Sankalpana Kosh",

      investigator: "Dr. M.A. Paithankar",

      department: "Public Administdation",

      yearOfAward: "2021",

      amountSanctioned: "5.00",

      duration: "7-03-2020 to 16-03-2022 (2 Years)",

      fundingAgency: "Indian Council of Philosophical Research",

      type: "Government",

      photo: "/assets/images/faculty/MAP.jpg",
    },

    // {
    //   id: 1,
    //   projectName:
    //     "2",

    //   investigator: "3",

    //   department: "4",

    //   yearOfAward: "5",

    //   amountSanctioned: "6",

    //   duration: "7",

    //   fundingAgency: "8",

    //   type: "9",

    //   photo: "/assets/images/faculty/Demo.jpeg",
    // },

   
  ];

  return (
    <SrCollegeLayout>
      <h4></h4>

      {/* Research Projects Title */}
      <div
        style={{
          width: "100%",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            display: "inline-block",
            backgroundColor: "#2563eb",
            color: "#fff",
            padding: "10px 25px",
            borderRadius: "50px",
            fontWeight: "600",
            fontSize: "16px",
          }}
        >
          Research Projects
        </div>
      </div>

      {/* Table */}
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
                  Principal Investigator /
                  Co-investigator
                </th>

                <th style={thStyle}>
                  Department of Principal Investigator
                </th>

                <th style={thStyle}>Year of Award</th>

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
              </tr>
            </thead>

            <tbody>
              {researchProjects.map((item, index) => (
                <tr key={item.id}>
                  <td style={tdCenter}>{index + 1}</td>

                  <td style={td}>
                    {item.projectName}
                  </td>

                  <td style={tdCenter}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <img
                        src={item.photo}
                        alt="Project"
                        onClick={() =>
                          setSelectedImage(item.photo)
                        }
                        style={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "50%",
                          objectFit: "cover",
                          cursor: "pointer",
                          border: "2px solid #2563eb",
                        }}
                      />

                      <span
                        style={{
                          textAlign: "center",
                          fontWeight: "500",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.investigator}
                      </span>
                    </div>
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Image Preview Modal */}
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
  verticalAlign: "middle",
};

const tdCenter: React.CSSProperties = {
  border: "1px solid #ccc",
  padding: "8px",
  textAlign: "center",
  verticalAlign: "middle",
};