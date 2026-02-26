"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
    {
        image: "/assets/images/hero/slide-1.png",
        title: "SBES College of Arts & Commerce",
        subtitle: "Chhatrapati Sambhajinagar",
        description: "Accredited by NAAC with A+ Grade",
    },
    {
        image: "/assets/images/hero/slide-2.png",
        title: "Academic Excellence Since 1975",
        subtitle: "Arts & Commerce Streams",
        description: "Committed to quality higher education",
    },
    {
        image: "/assets/images/hero/slide-3.png",
        title: "Holistic Student Development",
        subtitle: "Academics • Sports • Culture",
        description: "Shaping responsible citizens",
    },
    {
        image: "/assets/images/hero/slide-4.png",
        title: "Research & Innovation",
        subtitle: "NAAC & IQAC Initiatives",
        description: "Promoting academic research and best practices",
    },
];

export default function CollegeHero() {
    return (
        <section className="college-hero-slider">
            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                loop
                autoplay={{
                    delay: 6500,
                    disableOnInteraction: false,
                }}
                className="college-hero-swiper"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="college-hero-slide"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className="college-hero__overlay">
                                <div className="college-hero__content">
                                    <h1>{slide.title}</h1>
                                    <h2>{slide.subtitle}</h2>
                                    <p>{slide.description}</p>

                                    <div className="college-hero__actions">
                                        <Link
                                            href="/senior-college"
                                            className="hero-btn primary"
                                        >
                                            SB College Senior
                                        </Link>
                                        <Link
                                            href="/junior-college"
                                            className="hero-btn secondary"
                                        >
                                            SB College Junior
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}