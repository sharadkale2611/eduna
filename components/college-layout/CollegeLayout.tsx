import CollegeHeader from "./CollegeHeader";
import CollegeFooter from "./CollegeFooter";

export default function CollegeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <CollegeHeader />
            <main>{children}</main>
            <CollegeFooter />
        </>
    );
}