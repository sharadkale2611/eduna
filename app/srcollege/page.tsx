"use client";

import { useState, useEffect } from "react";
import SrCollegeLayout from "@/components/sr-college/SrCollegeLayout";
import { WhyChooseArea3 } from "@/components/WhyChooseArea";
import { Funfact2 } from "@/components/Funfact";

const slides = [
  "/assets/images/slider/srslider1.jpg",
  "/assets/images/slider/srslider2.jpg",
  "/assets/images/slider/srslider3.jpg",
  "/assets/images/slider/srslider4.jpg",
  "/assets/images/slider/srslider5.jpg",
];

const Page = () => {
  const [current, setCurrent] = useState(0);

  // Next Slide
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  // Previous Slide
  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SrCollegeLayout>
      {/* Slider Section */}
      <section className="slider-section">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === current ? "active" : ""}`}
            style={{
              backgroundImage: `url(${slide})`,
            }}
          />
        ))}

        {/* Overlay */}
        <div className="overlay">
          {/* Left Arrow */}
          <button className="arrow left" onClick={prevSlide}>
            ❮
          </button>

          {/* Right Arrow */}
          <button className="arrow right" onClick={nextSlide}>
            ❯
          </button>
        </div>
      </section>

      {/* Other Sections */}
      <WhyChooseArea3 />
      <Funfact2 />

      {/* CSS */}
      <style>{`
        .slider-section {
          width: 100%;
          height: 100vh;
          position: relative;
          overflow: hidden;
        }

        .slide {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }

        .slide.active {
          opacity: 1;
          z-index: 1;
        }

        .overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: rgba(0, 0, 0, 0.2);
          z-index: 2;
        }

        .arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 55px;
          height: 55px;
          border: none;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.8);
          color: #000;
          font-size: 28px;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 3;
        }

        .arrow:hover {
          background: #000;
          color: #fff;
        }

        .left {
          left: 20px;
        }

        .right {
          right: 20px;
        }

        @media (max-width: 768px) {
          .slider-section {
            height: 60vh;
          }

          .arrow {
            width: 45px;
            height: 45px;
            font-size: 20px;
          }

          .left {
            left: 10px;
          }

          .right {
            right: 10px;
          }
        }
      `}</style>
    </SrCollegeLayout>
  );
};

export default Page;