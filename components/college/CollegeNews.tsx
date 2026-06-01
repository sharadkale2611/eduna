"use client";

import { useState } from "react";
import Link from "next/link";
import ReactPlayer from "react-player";
import "./college-news.css";

export default function CollegeNewsPrograms() {

  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  /* ---------------- News Data ---------------- */

  const news = [
    {
      date: "05 Mar 2026",
      title: "Admission Notice for Academic Year 2025–26",
      image: "https://picsum.photos/900/600?1",
    },
    {
      date: "18 Feb 2026",
      title: "NAAC Peer Team Visit Schedule Announced",
      image: "https://picsum.photos/900/600?2",
    },
    {
      date: "02 Jan 2026",
      title: "College will remain closed on account of Public Holiday",
      image: "https://picsum.photos/900/600?3",
    },
  ];

  /* ---------------- Programmes Data ---------------- */

  const programmes = [
    {
      date: "10 Mar 2026",
      title: "National Seminar on Research Methodology",
      image: "https://picsum.photos/900/600?4",
    },
    {
      date: "20 Mar 2026",
      title: "Workshop on Career Guidance for Final Year Students",
      image: "https://picsum.photos/900/600?5",
    },
    {
      date: "25 Mar 2026",
      title: "Inter-College Cultural Programme",
      image: "https://picsum.photos/900/600?6",
    },
  ];

  /* ---------------- Videos Data ---------------- */

  const videos = [
    {
      date: "10 Mar 2026",
      title: "National Seminar on Research Methodology",
      url: "https://youtube.com/@sbescollegeofartscommerce?si=jUlLkwI49QpjsXFc",
    },
    {
      date: "20 Mar 2026",
      title: "Workshop on Career Guidance",
      url: "https://youtube.com/@sbescollegeofartscommerce?si=jUlLkwI49QpjsXFc",
    },
    {
      date: "25 Mar 2026",
      title: "Inter-College Cultural Programme",
      url: "https://youtube.com/@sbescollegeofartscommerce?si=jUlLkwI49QpjsXFc",
    },
  ];

  return (
    <>
      <section className="college-updates">
        <div className="container">

          <div className="updates-grid">

            {/* ---------------- NEWS ---------------- */}

            <div className="updates-column">
              <h2>News</h2>

              <ul className="updates-list">

                {news.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => setActiveImage(item.image)}
                    style={{ cursor: "pointer" }}
                  >
                    <span className="date">{item.date}</span>
                    <span className="text">{item.title}</span>
                  </li>
                ))}

              </ul>

              <Link href="/news" className="view-all">
                View All News →
              </Link>
            </div>

            {/* ---------------- PROGRAMMES ---------------- */}

            <div className="updates-column">
              <h2>Upcoming Programmes</h2>

              <ul className="updates-list">

                {programmes.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => setActiveImage(item.image)}
                    style={{ cursor: "pointer" }}
                  >
                    <span className="date">{item.date}</span>
                    <span className="text">{item.title}</span>
                  </li>
                ))}

              </ul>

              <Link href="/programmes" className="view-all">
                View All Programmes →
              </Link>
            </div>

            {/* ---------------- VIDEOS ---------------- */}

            <div className="updates-column">
              <h2>Videos</h2>

              <ul className="updates-list">

                {videos.map((video, index) => (
                  <li
                    key={index}
                    onClick={() => setActiveVideo(video.url)}
                    style={{ cursor: "pointer" }}
                  >
                    <span className="date">{video.date}</span>
                    <span className="text">▶ {video.title}</span>
                  </li>
                ))}

              </ul>

              <Link href="/videos" className="view-all">
                View All Videos →
              </Link>
            </div>

          </div>
        </div>
      </section>


      {/* ---------------- IMAGE MODAL ---------------- */}

      {activeImage && (
        <div className="modal-overlay">

          <div className="modal-content">

            <button
              className="close-btn"
              onClick={() => setActiveImage(null)}
            >
              ✕
            </button>

            <img src={activeImage} alt="popup" />

          </div>

        </div>
      )}


      {/* ---------------- VIDEO MODAL ---------------- */}

      {activeVideo && (
        <div className="modal-overlay">

          <div className="modal-content video">

            <button
              className="close-btn"
              onClick={() => setActiveVideo(null)}
            >
              ✕
            </button>

            <ReactPlayer
              src={activeVideo}
              controls
              playing
              width="100%"
              height="100%"
            />

          </div>

        </div>
      )}
    </>
  );
}