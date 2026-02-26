import Link from "next/link";

export default function CollegeButtons() {
    return (
        <section className="college-actions text-center">
            <Link href="/senior-college" className="ed-btn">
                SB College Senior
            </Link>
            <Link href="/junior-college" className="ed-btn ed-btn--outline">
                SB College Junior
            </Link>
        </section>
    );
}