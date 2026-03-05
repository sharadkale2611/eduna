import JrCollegeHeader from "./JrCollegeHeader";
import JrCollegeFooter from "./JrCollegeFooter";

export default function JrCollegeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <JrCollegeHeader />
            <main>{children}</main>
            <JrCollegeFooter />
        </>
    );
}