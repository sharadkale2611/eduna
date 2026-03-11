"use client";

import { useState } from "react";
import CollegeLayout from "@/components/sr-college/SrCollegeLayout";
import "./student.css";

export default function StudentPage() {

const [active,setActive] = useState("Student");
const [subActive,setSubActive] = useState("");

const content={
Alumni:"The Institution has registered Alumni Association formed under u/s 8 of the Companies Act 2013 as nonprofit Company on 7th January 2016 with Reg. No. U74120MH2016NPL271830 and its registered office at SBES College of Arts and Commerce, Aurangabad.",

Scholarship:"Scholarship programs support deserving students.",

Health:"Health services provide medical assistance."
};

const scholarshipMenu=[
"Government Scholarship",
"Merit Scholarship",
"Minority Scholarship"
];

const scholarshipContent={
"Government Scholarship": [ "The government of India provides three scholarships schemes for UG and PG students. The details of these schemes are available on the exclusive portal NSP created by the government. Students must register and upload the required documents on it and chose the scheme for which they are eligible after online application submission these students must take printout of the submitted form and submit hardcopy of it along with the required documents like caste certificate/income certificate/domicile certificate/photocopy of bank passbook/Aadhar card/marks sheet/admission receipt/photocopy of leaving certificate in the scholarship section of our college. Scholarships of eligible students are disbursed by the concerned government departments.”Government scholarships are provided by the central and state government.",
                            " 1. Post Matric Scholarship scheme for Minorities",
                            " 2. Central Sector Scheme of Scholarship",
                            " 3. Disability Post-Matric Scholarship"
                          ],  

"Merit Scholarship":"Merit scholarship is provided to students with excellent academic performance.",
"Minority Scholarship":"Minority scholarships are provided for minority category students.",
};

return(

<CollegeLayout>

<div className="student-container">

{/* Sidebar */}

<div className="sidebar">
<ul>
<li onClick={()=>{setActive("Alumni");setSubActive("")}}>Alumni →</li>

<li onClick={()=>{setActive("Scholarship");setSubActive("")}}>
Scholarship →
</li>

<li onClick={()=>{setActive("Health");setSubActive("")}}>
Health Services →
</li>
</ul>
</div>

{/* Right Content */}

<div className="content">

<h2 className="title">{active}</h2>

{/* Scholarship Top Menu */}

{active==="Scholarship" && (

<div className="top-menu">

{scholarshipMenu.map((item,index)=>(
<button key={index} onClick={()=>setSubActive(item)}>
{item}
</button>
))}

</div>

)}

{/* Content */}

{active==="Scholarship" && subActive ? (

<p>{scholarshipContent[subActive]}</p>

):(

<p>{content[active]}</p>

)}

</div>

</div>

</CollegeLayout>

);
}