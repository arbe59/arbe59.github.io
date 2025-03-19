import Link from "next/link";

export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <h2 className="text-3xl">Overview</h2>
                <p className="text-sm">This page will serve as my central hub to showcase my experience, abilities, and resume.  My initial plan is to keep track of a career development plan, my resume, and a showcase of projects.</p>
                <hr />
                <h2 className="text-3xl">Resume</h2>
                <p className="text-sm">I have an existing but out of date and I think underwhelming MS Word resume. I want to create an interactive resume on this site that not only lists my career accomplishments and credentials, but allows visitors to see my work.</p>
                <p className="text-sm">Next steps - Create a separate resume page that hosts my actual resume.</p>
                <hr />
                <h2 className="text-3xl">Career Plan</h2>
                <p className="text-sm">Because I have always worked for .NET shops, I have remained somewhat pigeonholed in the .NET stack. My skills and experience have grown, but at the same time, I have avoided many other tech stacks and professional skills. I will document and track my progress through a plan to acquire and demonstrate abilities in new technologies here.</p>
                <p className="text-sm">This will take the form of acquiring new knowledge through a list of books I’ve decided to make my way through, as well as adding projects to my repository portfolio. Ultimately, I want this site to provide demos of these projects.</p>
                <h3 className="text-2xl">Reading List</h3>
                <ul className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                    <li className="mb-2"><Link key="Pragmatic Programmer" href="/pages/career_dev/books/pragmatic_programmer">The Pragmatic Programmer</Link></li>
                    <li className="mb-2"><Link key="Clean Code" href="/pages/career_dev/books/clean_code">Clean Code: A Handbook of Agile Software Craftsmanship</Link></li>
                    <li className="mb-2"><Link key="Cracking Coding Interview" href="/pages/career_dev/books/cracking_coding_interview">Cracking the Coding Interview: 189 Programming Questions and Solutions</Link></li>
                    <li className="mb-2"><Link key="Introduction to Algorithms" href="/pages/career_dev/books/intro_algorithms">Introduction to Algorithms</Link></li>
                    <li className="mb-2"><Link key="Domain Driven Design" href="/pages/career_dev/books/domain_driven_design">Domain-Driven Design: Tackling Complexity in the Heart of Software</Link></li>
                    <li className="mb-2"><Link key="Design Patterns" href="/pages/career_dev/books/design_patterns">Design Patterns: Elements of Reusable Object-Oriented Software</Link></li>
                    <li className="mb-2"><Link key="System Design 1" href="/pages/career_dev/books/system_design_1">System Design Interview - An Insider’s Guide</Link></li>
                </ul>
            </main>
        </div>
    );
}