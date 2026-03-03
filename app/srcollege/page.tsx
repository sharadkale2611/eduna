import { Blog1 } from "@/components/Blog";
import { CallToAction2 } from "@/components/CallToAction";
import { Category2 } from "@/components/Category";
import Contact from "@/components/Contact";
import { Course5 } from "@/components/Course";
import { Features1 } from "@/components/Features";
import { Funfact2 } from "@/components/Funfact";
import { Partner1 } from "@/components/Partner";
import { Testimonial3 } from "@/components/Testimonial";
import { WhyChooseArea3, WhyChooseArea5 } from "@/components/WhyChooseArea";
import EdunaLayout from "@/layout/EdunaLayout";
import Link from "next/link";
const page = () => {
  return (
    <EdunaLayout header={3} footer={2}>
      <section className="ed-hero ed-hero--style3">
        <div className="owl-carousel ed-hero__slider">
          {/* Single Slider  */}
          <div className="ed-hero__slider-item">
            <img
              src="assets/images/hero/home-3/hero-img-1.jpg"
              alt="hero-img-1"
            />
          </div>
          {/* Single Slider  */}
          <div className="ed-hero__slider-item">
            <img
              src="assets/images/hero/home-3/hero-img-2.jpg"
              alt="hero-img-2"
            />
          </div>
          {/* Single Slider  */}
          <div className="ed-hero__slider-item">
            <img
              src="assets/images/hero/home-3/hero-img-3.jpg"
              alt="hero-img-3"
            />
          </div>
        </div>
        
      </section>
      <Partner1 containerClass="ed-partner section-gap section-bg-color-1" />
      <WhyChooseArea3 />
      <Funfact2 />
      <Category2 />
      <Course5 />
      <CallToAction2 />
      <Features1 />
      <WhyChooseArea5 />
      <Testimonial3 />
      <Contact />
      <Blog1 />
    </EdunaLayout>
  );
};
export default page;
