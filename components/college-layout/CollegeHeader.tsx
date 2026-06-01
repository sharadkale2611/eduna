"use client";

import { useState } from "react";
import CollegeLayout from "@/components/college-layout/CollegeLayout";

const data = [
  {
    name: "B.A.",
    children: [
      {
        name: "History",
        topics: ["Ancient", "Medieval", "Modern"],
      },
      {
        name: "Political Science",
        topics: ["Theory", "Public Admin", "IR"],
      },
    ],
  },
  {
    name: "M.A.",
    children: [
      {
        name: "English",
        topics: ["Poetry", "Drama", "Criticism"],
      },
      {
        name: "Psychology",
        topics: ["Cognitive", "Clinical", "Behavior"],
      },
    ],
  },
];

export default function ArtsCoursesPage() {
  // const [openCourse, setOpenCourse] = useState(null);
  const [openCourse, setOpenCourse] = useState<number | null>(null);

  return (
    <CollegeLayout>
      <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white py-16 px-4">

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-center mb-16 tracking-wide">
          Arts Course Structure
        </h1>

        {/* ROOT NODE */}
        <div className="flex flex-col items-center">
          <div className="px-10 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-xl text-lg font-semibold backdrop-blur-md">
            🎨 Arts Faculty
          </div>

          {/* CONNECTOR */}
          <div className="w-[2px] h-12 bg-gray-500 my-4"></div>

          {/* COURSES */}
          <div className="flex gap-20 flex-wrap justify-center">

            {data.map((course, i) => {
              const isOpen = openCourse === i;

              return (
                <div key={i} className="flex flex-col items-center">

                  {/* COURSE NODE */}
                  <div
                    onClick={() =>
                      setOpenCourse(isOpen ? null : i)
                    }
                    className={`cursor-pointer px-6 py-3 rounded-xl transition-all duration-300 backdrop-blur-lg
                      ${isOpen
                        ? "bg-green-500 scale-110 shadow-2xl"
                        : "bg-white/10 hover:bg-white/20"}
                    `}
                  >
                    {course.name}
                  </div>

                  {/* LINE */}
                  <div
                    className={`w-[2px] bg-gray-500 transition-all duration-500 ${
                      isOpen ? "h-10 opacity-100" : "h-0 opacity-0"
                    }`}
                  ></div>

                  {/* SUBJECTS */}
                  <div
                    className={`transition-all duration-500 overflow-hidden ${
                      isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="space-y-6 mt-4">

                      {course.children.map((sub, j) => (
                        <div key={j} className="flex flex-col items-center">

                          {/* SUBJECT NODE */}
                          <div className="px-5 py-2 rounded-lg bg-purple-500/80 backdrop-blur-md shadow-lg hover:scale-105 transition">
                            {sub.name}
                          </div>

                          {/* SMALL LINE */}
                          <div className="w-[2px] h-6 bg-gray-500 my-1"></div>

                          {/* TOPICS */}
                          <div className="flex gap-2 flex-wrap justify-center max-w-[200px]">
                            {sub.topics.map((t, k) => (
                              <div
                                key={k}
                                className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition"
                              >
                                {t}
                              </div>
                            ))}
                          </div>

                        </div>
                      ))}

                    </div>
                  </div>

                </div>
              );
            })}

          </div>
        </div>
      </div>
    </CollegeLayout>
  );
}