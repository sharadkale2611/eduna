"use client";

import { useState } from "react";
import SrCollegeLayout from "@/components/sr-college/SrCollegeLayout";

export default function FacultyPage() {
  const [activeTab, setActiveTab] = useState("teaching");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const teachingFaculty = [
    {
      id: 1,
      name: "Dr. Vivek R. Mirgane",
      qualification: "MA. PhD",
      designation: "Principal & Professor",
      subject: "English",
      specialization: "English",
      resume: "/assets/images/faculty/cv/demo.jpg",
      photo: "/assets/images/faculty/VRM.jpg",
    },
    
      {
      id: 2,
      name: "Dr. Sandip Chaudhari",
      qualification: "MA, SET, PhD",
      designation: "Vie-Principal & Professor",
      subject: "Sociology ",
      specialization: "Sociology of Education, Sociology of Development",
      resume: "/assets/images/faculty/cv/demo.jpg",
      photo: "/assets/images/faculty/SMC.jpeg",
    },

         {
      id: 3,
      name: "Dr. Anand Chaoudhary",
      qualification: "M.Com, PhD",
      designation: "Vie-Principal & Professor",
      subject: "Commerce ",
      specialization: "Marketing",
      resume: "/assets/images/faculty/cv/demo.jpg",
      photo: "/assets/images/faculty/AVC.jpeg",
    },


    {
      id: 4,
      name: "Dr. Madhav Gaikwad",
      qualification: "MA, NET, PhD",
      designation: "Professor",
      subject: "Economics",
      specialization: "Public Economics, Macro Economics",
      resume: "/assets/images/faculty/cv/demo.jpg",
      photo: "/assets/images/faculty/MMG.jpg",
    },

    {
      id: 5,
      name: "Dr. Makarand Paithnakar",
      qualification: " MA, SET, PhD",
      designation: "Professor",
      subject: "Public Administration",
      specialization: "Public Administrator",
      resume: "/assets/images/faculty/cv/demo.jpg",
      photo: "/assets/images/faculty/MAP.jpg",
    },


    {
      id: 6,
      name: "	Dr. Balaji Nagtilak",
      qualification: "MA, PhD",
      designation: "Professor",
      subject: "Hindi",
      specialization: "Dalit Letrecher ",
      resume: "/assets/images/faculty/cv/demo.jpg",
      photo: "/assets/images/faculty/BN.jpeg",
    },

     {
      id: 7,
      name: "	Dr. Gurudatta Rajput",
      qualification: "MA, SET, PhD",
      designation: "Professor",
      subject: "Hindi",
      specialization: "संत साहित्य, आधुनिक कविता",
      resume: "/assets/images/faculty/cv/demo.jpg",
      photo: "/assets/images/faculty/GGR.jpg",
    },

     {
      id: 8,
      name: "Dr. Dayanand Kamble",
      qualification: "MPEd, SET, NIS, PhD",
      designation: "Director of Physical Educationn",
      subject: "Physical Education",
      specialization: "Athletics, Officiating and Coaching",
      resume: "/assets/images/faculty/cv/demo.jpg",
      photo: "/assets/images/faculty/DRK.jpg",
    },

     {
      id: 9,
      name: "Dr. Smita Shinde",
      qualification: "MA, SET, PhD",
      designation: "HOD & Professor",
      subject: "History",
      specialization: "History of Marathas",
      resume: "/assets/images/faculty/cv/demo.jpg",
      photo: "/assets/images/faculty/SSS.jpeg",
    },

     {
      id: 10,
      name: "Dr. Sanjay Mohad",
      qualification: "MA, NET, PhD",
      designation: "HOD & Professor",
      subject: "Music",
      specialization: "Hindustani Classical Vocal",
      resume: "/assets/images/faculty/cv/demo.jpg",
      photo: "/assets/images/faculty/SM.jpg",
    },

     {
      id: 11,
      name: "Dr.	Dilip Chavan",
      qualification: "MCom, MPM, MBA, SET, PhD",
      designation: "Professor",
      subject: "Commerce",
      specialization: "Accounting, Taxation and Management",
      resume: "/assets/images/faculty/cv/demo.jpg",
      photo: "/assets/images/faculty/DSC.jpg",
    },

     {
      id: 12,
      name: "Dr. Feroj Baig",
      qualification: "MCom, SET, PhD",
      designation: "Professor",
      subject: "Commerce",
      specialization: "Accounting, Finance, Auditing",
      resume: "/assets/images/faculty/cv/demo.jpg",
      photo: "/assets/images/faculty/FAB.jpeg",
    },

     {
      id: 13,
      name: "Dr. Gorakh Kakade",
      qualification: "MA, SET, NET, PhD",
      designation: "Associate Professor",
      subject: "Hindi",
      specialization: "Dalit-Aadivasi Sahitya,Translation",
      resume: "/assets/images/faculty/cv/demo.jpg",
      photo: "/assets/images/faculty/GPK.jpeg",
    },

     {
      id: 14,
      name: "Dr. Kishor Shirsat",
      qualification: " MA, NET, PhD",
      designation: "HOD & Professor",
      subject: "Dramatics",
      specialization: "Direction, Production and Acting",
      resume: "/assets/images/faculty/cv/demo.jpg",
      photo: "/assets/images/faculty/KVS.jpg",
    },

     {
      id: 15,
      name: "Dr. Seema Dhage",
      qualification: "MCom, NET, PhD",
      designation: "Assistant Professor",
      subject: "Commerce",
      specialization: "Organisation Behavior",
      resume: "/assets/images/faculty/cv/demo.jpg",
      photo: "/assets/images/faculty/SND.jpg",
    },

     {
      id: 16,
      name: " Dr. Vikrant Panchal",
      qualification: " MCom, PhD",
      designation: "Assistant Professor",
      subject: "Commerce",
      specialization: "Management, Communication and IT Applications",
      resume: "/assets/images/faculty/cv/demo.jpg",
      photo: "/assets/images/faculty/VUP.jpg",
    },

     {
      id: 17,
      name: "Mr. 	Nilesh Upadhye",
      qualification: "MCom, NET",
      designation: "Assistant Professor",
      subject: "Commerce",
      specialization: "Management Accounting and Audit",
      resume: "/assets/images/faculty/cv/demo.jpg",
      photo: "/assets/images/faculty/NNU.jpg",
    },

    {
      id: 18,
      name: "Mr Rushikesh Rathi",
      qualification: "MCom, CA, ISA, SET, NET",
      designation: "Assistant Professor",
      subject: "Commerce",
      specialization: "Management Accounting and Audit",
      resume: "/assets/images/faculty/cv/demo.jpg",
      photo: "/assets/images/faculty/RNR.jpeg",
    },
     
    
    //  {
    //   id: 1,
    //   name: "2",
    //   qualification: "3",
    //   designation: "4",
    //   subject: "5",
    //   specialization: "6",
    //   resume: "/assets/images/faculty/cv/demo.jpg",
    //   photo: "/assets/images/faculty/demp.jpg",
    // },

    //  {
    //   id: 1,
    //   name: "2",
    //   qualification: "3",
    //   designation: "4",
    //   subject: "5",
    //   specialization: "6",
    //   resume: "/assets/images/faculty/cv/demo.jpg",
    //   photo: "/assets/images/faculty/demp.jpg",
    // },

  

    
  ];

  const nonTeachingFaculty = [
    {
      id: 1,
      name: "Ms. Manjushri Bhalerao",
      designation: "Registrar",
      Section: "Establishment",
      photo: "/assets/images/faculty/mbhalerao.jpg",
    },

    {
      id: 2,
      name: "Mr. Vilas Bandewar",
      designation: "Office Superintendent",
      Section: "Establishment",
      photo: "/assets/images/faculty/vilasbandewar.jpg",
    },

    {
      id: 3,
      name: "Mr. Sunil Dighule",
      designation: "Head Clerk",
      Section: "Salary",
      photo: "/assets/images/faculty/sunildighule.jpg",
    },

    {
      id: 4,
      name: "Mr. Mukund Gajre",
      designation: "Senior Clerk",
      Section: "Senior Academic",
      photo: "/assets/images/faculty/mukundgajre.jpg",
    },

    {
      id: 5,
      name: "Mr. Vishwamber Hapsenkar",
      designation: "Senior Clerk",
      Section: "Senior Academic",
      photo: "/assets/images/faculty/demo.jpg",
    },

    {
      id: 6,
      name: "Mr. Vijay Pandit",
      designation: "Junior Clerk",
      Section: "Cahiar",
      photo: "/assets/images/faculty/vijaypandit.jpg",
    },

    {
      id: 7,
      name: "Mr. Sandeep Raut",
      designation: "Junior Clerk",
      Section: "Junior Academic",
      photo: "/assets/images/faculty/sandeepraut.jpg",
    },

    {
      id: 8,
      name: "Mr. Sushil Nighvekar",
      designation: "Junior Clerk",
      Section: "Accounts",
      photo: "/assets/images/faculty/sushil.jpg",
    },
    {
      id: 9,
      name: "Mr. Bhivraj Bhoye",
      designation: "Junior Clerk",
      Section: "Scholership",
      photo: "/assets/images/faculty/bhivraj.jpg",
    },

    {
      id: 10,
      name: "Mr. Suresh Dabhade",
      designation: "Library Clerk",
      Section: "Library Clerk",
      photo: "/assets/images/faculty/demo.jpg",
    },

    {
      id: 11,
      name: "Mr. Sanjay Jagarwal",
      designation: "Junior Clerk",
      Section: "Inword / Outword",
      photo: "/assets/images/faculty/sanjayj.jpg",
    },

    {
      id: 12,
      name: "Mr Nilesh Khangaure",
      designation: "Junior Clerk",
      Section: "Senior Academic",
      photo: "/assets/images/faculty/nileshk.jpg",
    },

    {
      id: 13,
      name: "Mr. Anil Dhangare",
      designation: "Junior Clerk",
      Section: "Cahier",
      photo: "/assets/images/faculty/adhangare.jpg",
    },

     {
      id: 14,
      name: "Mr. Shrikant Inamdar",
      designation: "Clerk",
      Section: "Junior Academic",
      photo: "/assets/images/faculty/ng/shrikant.jpg",
    },

     {
      id: 15,
      name: "Ms. Tejaswini Joshi",
      designation: "Clerk",
      Section: "Accounts",
      photo: "/assets/images/faculty/ng/tejaswini.jpeg",
    },

     {
      id: 16,
      name: "Mr. Hariram Shinde",
      designation: "Clerk",
      Section: "Scholership",
      photo: "/assets/images/faculty/ng/harirams.jpg",
    },

    {
      id: 17,
      name: "Mr. Shriyash Kolharikar",
      designation: "Clerk",
      Section: "ScholeJunio Academic",
      photo: "/assets/images/faculty/ng/demo.jpg",
    },
    

     {
      id: 18,
      name: "Ms. Snehal Kajalkar",
      designation: "Lab Assistant",
      Section: "Computer Lab" ,
      photo: "/assets/images/faculty/ng/demo.jpg",
    },

      {
      id: 19,
      name: "Mr. Durgesh Thakur",
      designation: "IT Admin",
      Section: "IT Support" ,
      photo: "/assets/images/faculty/ng/durgesh.png",
    },
  ];

  return (
    <SrCollegeLayout>
      <h4
        style={{
          textAlign: "center",
          marginTop: "16px",
          marginBottom: "20px",
        }}
      >
        Faculty
      </h4>

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
            onClick={() => setActiveTab("teaching")}
            style={{
              padding: "8px 20px",
              borderRadius: "50px",
              border: "none",
              cursor: "pointer",
              backgroundColor:
                activeTab === "teaching"
                  ? "#2563eb"
                  : "transparent",
              color:
                activeTab === "teaching"
                  ? "#ffffff"
                  : "#1e3a8a",
              fontWeight: "500",
            }}
          >
            Teaching Faculty
          </button>

          <button
            onClick={() => setActiveTab("nonTeaching")}
            style={{
              padding: "8px 20px",
              borderRadius: "50px",
              border: "none",
              cursor: "pointer",
              backgroundColor:
                activeTab === "nonTeaching"
                  ? "#2563eb"
                  : "transparent",
              color:
                activeTab === "nonTeaching"
                  ? "#ffffff"
                  : "#1e3a8a",
              fontWeight: "500",
            }}
          >
            Non-Teaching Faculty
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
          {/* TEACHING TABLE */}
          {activeTab === "teaching" && (
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
                  <th style={thStyle}>Name</th>
                  <th style={thStyle}>Qualification</th>
                  <th style={thStyle}>Designation</th>
                  <th style={thStyle}>Subject</th>
                  <th style={thStyle}>Specialization</th>
                  <th style={thStyle}>Resume</th>
                  <th style={thStyle}>Photo</th>
                </tr>
              </thead>

              <tbody>
                {teachingFaculty.map((item, index) => (
                  <tr key={index}>
                    <td style={tdCenter}>{index + 1}</td>
                    <td style={td}>{item.name}</td>
                    <td style={td}>{item.qualification}</td>
                    <td style={td}>{item.designation}</td>
                    <td style={td}>{item.subject}</td>
                    <td style={td}>{item.specialization}</td>

                   <td style={tdCenter}>
                      <img
                        src={item.resume}
                        alt="Faculty"
                        onClick={() =>
                          setSelectedImage(item.resume)
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

                    <td style={tdCenter}>
                      <img
                        src={item.photo}
                        alt="Faculty"
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

          {/* NON TEACHING TABLE */}
          {activeTab === "nonTeaching" && (
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
                  <th style={thStyle}>Name</th>
                  <th style={thStyle}>Designation</th>
                  <th style={thStyle}>Section</th>
                  <th style={thStyle}>Photo</th>
                </tr>
              </thead>

              <tbody>
                {nonTeachingFaculty.map((item, index) => (
                  <tr key={index}>
                    <td style={tdCenter}>{index + 1}</td>
                    <td style={td}>{item.name}</td>
                    <td style={td}>{item.designation}</td>
                    <td style={td}>{item.Section}</td>

                    <td style={tdCenter}>
                      <img
                        src={item.photo}
                        alt="Staff"
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