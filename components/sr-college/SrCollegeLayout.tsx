import SrCollegeFooter from "./SrCollegeFooter";
import SrCollegeHeader from "./SrCollegeHeader";

export default function SrCollegeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <SrCollegeHeader />
            <main>{children}</main>
            <SrCollegeFooter />
        </>
    );
}