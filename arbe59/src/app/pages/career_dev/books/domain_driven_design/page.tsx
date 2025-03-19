import Link from "next/link";

export default function DomainDrivenDesign() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <Link key="Home" href="/pages/home">Home</Link>
                <h2 className="text-3xl">Domain-Driven Design: Tackling Complexity in the Heart of Software</h2>
                <h3 className="text-xl">Notes & Strategies</h3>
                <p className="text-sm"></p>
            </main>
        </div>
    );
}