import Link from "next/link";

export default function DesignPatterns() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <Link key="Home" href="/pages/home">Home</Link>
                <h2 className="text-3xl">Design Patterns: Elements of Reusable Object-Oriented Software</h2>
                <h3 className="text-xl">Notes & Strategies</h3>
                <p className="text-sm"></p>
            </main>
        </div>
    );
}