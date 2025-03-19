import Link from "next/link";

export default function PragmaticProgrammer() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <Link key="Home" href="/pages/home">Home</Link> 
                <h2 className="text-3xl">The Pragmatic Programmer</h2>
                <h3 className="text-xl">Notes & Strategies</h3>
                <p className="text-sm">I started reading this book on 1/20/2025 and completed it on 2/20/2025. Below, I have documented the specific takeaways I’ve had from what I’ve read, and my strategies to apply these things in both my work routines and my career development projects.</p>
                
                <h3 className="text-xl">Chapter 1 - A Pragmatic Philosophy</h3>
                <ul className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                    <li className="mb-2">Don’t Live with Broken Windows - a single instance of poor design or poor implementation, allowed, will encourage future transgressions, both by myself and others. When expediency tempts me to make a shortcut or to “go back and fix it later”, don’t give in to this temptation. That’s a broken window. When you see a freshly broken window by a colleague, call them out.</li>
                    <li className="mb-2">Good Enough Software - there’s no finish line. Software that looks perfect today is out of date and incorrect tomorrow. This isn’t an invitation to engage in poor design, it’s a reminder that software which is well designed and meets the user’s requirements, is good enough and should be deployed.</li>
                    <li className="mb-2">Knowledge Portfolio - it’s kind of the inspiration for this entire site. I want a continually maintained, demonstrable portfolio of skills, an updated (living) resume, and always a short term plan in progress for acquiring new skills.</li>
                </ul>
                
                <h3 className="text-xl">Chapter 2 - A Pragmatic Approach</h3>
                <ul className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                    <li className="mb-2">DRY (Don’t Repeat Yourself) - I am well aware of this principle as the D in SOLID. However, knowing by itself doesn’t do anything. More up-front design and more after-development review would help find the code duplication that occurs as the software gets written, which is a difficult time to recognize it. Also, the code providing mock data for unit tests is a danger zone for duplicated code.</li>
                    <li className="mb-2">Orthogonality - if changes in one thing don’t necessitate changes in the other, then they are “orthogonal”, and orthogoal code is maintainable code. This is something to notice while making changes. If making a simple change requires making parallel or sympathetic updates in several places, then fix it.</li>
                    <li className="mb-2">Estimating - don’t give them before you’re ready, and don’t apologize for not giving premature estimates. And don’t just guess. Take the time to understand what’s being asked and what the impact is before giving an estimate. Tightly coupled systems that aren’t orthogonal provide multipliers on estimates that you often neglect to include.</li>
                </ul>

                <h3 className="text-xl">Chapter 3 - The Basic Tools</h3>
                <ul className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                    <li className="mb-2">Shell Games - I really need to start thinking about using shell scripts to automate frequent jobs and using the shell script rather than the Windows GUI to do things. This is probably best done by recognizing in the moment that I’m doing something repetetive or manual in the GUI that is likely automatable through a script. Some of the things I do with the Print & Mail system are good candidates.</li>
                    <li className="mb-2">Power Editing - I want to get better with VS Code rather than relying so much on Visual Studio. Visual Studio pushes me towards back-end development in strictly .NET languages (C#). I think VS Code is a better tool to work with front-end frameworks and other non-proprietary languages, but can also work with .NET code as well.</li>
                    <li className="mb-2">Engineering Daybooks - I sort of already do this, and honestly it’s a little like journaling, which I’m pretty good at. But it’s disjointed and disorganized. It would be better if I had beginning-of-day and end-of-day rituals to formally start and end a daybook, and to review them in some kind of systematic way so I get feedback on my own notes.</li>
                </ul>

                <h3 className="text-xl">Chapter 4 - Pragmatic Paranoia</h3>
                <ul className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">

                </ul>

                <h3 className="text-xl">Chapter 5 - Bend, or Break</h3>
                <ul className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                    <li className="mb-2">Juggling the Real World - Between Finite State Machines, Observer and Publish/Subscribe, and Events, I need to remember to consider the use of standardized patterns when applying the needs of the system rather than forging ahead with effectively implementing the same things, but not necessarily to the exact standards, nor using standardized libraries that are available in the language. I tend to get momentum and keep going and sometimes I need to adopt a start/stop cycle where I dedicate specific time to think about what I’m implementing and refactor as necessary.</li>
                    <li className="mb-2">Inheritance Tax - I have been programming by interface rather than explicit object-inheritance for some time, but I didn’t realize that object inheritance had become an anti-pattern of sorts.</li>
                    <li className="mb-2">Configuration - this makes total sense, but having once central spot for configuration-as-a-service within the platform makes total sense. It’s superior for any volatile configuration data because you have a UI providing administrative control across an entire platform. Applications or services which utilize the same configuration values don’t need to each define them, and configuration values can be changed without the need for restarting applications and services.</li>
                </ul>

                <h3 className="text-xl">Chapter 6 - Concurrency</h3>
                <ul className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">

                </ul>

                <h3 className="text-xl">Chapter 7 - While You Are Coding</h3>
                <ul className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                    <li className="mb-2">Listen to Your Lizard Brain - if you get “stuck” or where it doesn’t feel right what you’re doing, get out of the main code. This is the time to take a walk, talk with a coworker about the issue, or prototype. Take the opportunity.</li>
                    <li className="mb-2">Programming By Coincidence - embarrassingly, I see a lot of myself described in this section. All of it comes back to coding without a bigger plan in place. I think a lot of the problem that I have here is that my ADHD brain goes off in tangents and gets carried away on “side quests” which don’t have a plan because they weren’t part of the original plan. I’d be much better served if I did just the bare minimum bit of investigation when I get to one of these crossroads, and if necessary, created a work item for later or otherwise raised attention to the issue. It’s entirely possible it’s not as important as all that. I think the best way for me to remember to do this and not chase the rabbit is by starting each day with a written, enumerated plan and be in the habit of constantly coming back to it. This will discourage the time-spend that always accompanies these unplanned expeditions. While this plan won’t include those side quests, it might include yesterdays once they’ve been formalized into true work items, which can go through the proper process of design consideration, estimation, communication with other devs, possibly prototyping, etc.</li>
                    <li className="mb-2">Refactoring - the explanation for the metaphor gardening being more appropriate than the metaphor of construction to software engineering really hits home. It’s not prescriptive, but it’s very informative. The code needs to be weeded, reorganized, restructured, and reconsidered regularly, any time something new has been learned. Key to the free ability to do this is sufficient unit test coverage to ensure that external behavior hasn’t been negatively affected by refactoring efforts. This is another big feather in the cap of unit testing.</li>
                </ul>

                <h3 className="text-xl">Chapter 8 - Before the Project</h3>
                <ul className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                    <li className="mb-2">The Requirements Pit - I knew this already but it’s worth repeating and remembering. Users don’t fully know what they want when they ask for a system or a feature. They have an idea, but once they see something start to materialize, they get a better idea. Our job as programmers is to guide them through the process of discovering exactly what it is that they need and want. To that end, the more you can put yourself in their shoes, the better you can do this.</li>
                    <li className="mb-2">Working Together - this is something I appreciate the value of, but nonetheless don’t do nearly enough, particularly working 100% remotely. Pair programming reduces broken windows and adds multiple brains to help get un-stuck from issues.</li>
                </ul>

                <h3 className="text-xl">Chapter 9 - Pragmatic Projects</h3>
                <ul className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">

                </ul>
            </main>
        </div>
    );
}