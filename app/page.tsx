import CollegeLayout from "@/components/college-layout/CollegeLayout";
import CollegeHero from "@/components/college/CollegeHero";
import CollegeButtons from "@/components/college/CollegeButtons";
import CollegeNews from "@/components/college/CollegeNews";
// import CollegePrograms from "@/components/college/CollegeProgramss";

export default function HomePage() {
  return (
    <CollegeLayout>
      <CollegeHero />
      {/* <CollegeButtons /> */}
      <CollegeNews />
      {/* <CollegePrograms /> */}
    </CollegeLayout>
  );
}