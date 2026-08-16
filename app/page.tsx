"use client";

import { useState, useEffect } from "react";

import CollegeLayout from "@/components/college-layout/CollegeLayout";
import CollegeNews from "@/components/college/CollegeNews";

const slides = [
  {
    image: "/assets/images/slider/slider1.jpg",
  },
  {
    image: "/assets/images/slider/slider2.jpg",
  },
  {
    image: "/assets/images/slider/slider3.jpg",
  },
];

export default function HomePage() {
  const [current, setCurrent] = useState(0);
  const [visitorCount, setVisitorCount] = useState(210356);
  const START_COUNT = 210356;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  // Auto Slider
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Visitor Counter
  useEffect(() => {
  

    const storedCount = localStorage.getItem("visitorCount");

    if (storedCount) {
      const newCount = parseInt(storedCount) + 1;
      localStorage.setItem("visitorCount", newCount.toString());
      setVisitorCount(newCount);
    } else {
      localStorage.setItem(
        "visitorCount",
        START_COUNT.toString()
      );
      setVisitorCount(START_COUNT);
    }
  }, []);

  return (
    <CollegeLayout>
      {/* Slider Section */}
      <section className="slider-section">
        <div
          className="slide"
          style={{
            backgroundImage: `url(${slides[current].image})`,
          }}
        >
          <div className="overlay">
            <button className="arrow left" onClick={prevSlide}>
              ❮
            </button>

            <button className="arrow right" onClick={nextSlide}>
              ❯
            </button>
          </div>
        </div>
      </section>

      {/* News Section */}
      <CollegeNews />

      {/* Visitor Counter */}
      <section className="visitor-section">
        <span className="visitor-text">Visitors :</span>

        <div className="counter">
          {visitorCount
            .toString()
            .padStart(6, "0")
            .split("")
            .map((digit, index) => (
              <div key={index} className="digit-box">
                {digit}
              </div>
            ))}
        </div>
      </section>

      <style jsx>{`
        .slider-section {
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }

        .slide {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          position: relative;
        }

        .overlay {
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.2);
          position: relative;
        }

        .arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 55px;
          height: 55px;
          border: none;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.85);
          color: #000;
          font-size: 28px;
          cursor: pointer;
          z-index: 10;
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

        /* Visitor Counter */
        .visitor-section {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 6px;
          padding: 8px 0;
          background: #fff;
          border-top: 1px solid #e5e5e5;
        }

        .visitor-text {
          font-size: 14px;
          font-weight: 600;
          color: #444;
        }

        .counter {
          display: flex;
          gap: 2px;
        }

        .digit-box {
          width: 24px;
          height: 30px;
          background: #111;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: bold;
          font-family: "Courier New", monospace;
          border: 1px solid #333;
          border-radius: 2px;
        }

        @media (max-width: 768px) {
          .slider-section {
            height: 60vh;
          }

          .arrow {
            width: 40px;
            height: 40px;
            font-size: 18px;
          }

          .digit-box {
            width: 20px;
            height: 26px;
            font-size: 15px;
          }

          .visitor-text {
            font-size: 13px;
          }
        }
      `}</style>
    </CollegeLayout>
  );
}