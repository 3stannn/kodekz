import { Link } from "react-router-dom";

const technologies = [
    "HTML",
    "CSS",
    "Bootstrap",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Python",
    "Java",
    "Node.js",
    "Express.js",
];

function Stack() {
    return (
        <div className="max-w-2xl mx-auto px-6 mt-8">
            <div className="flex flex-row justify-between mb-4">
                <h1 className="text">03 — tech stack</h1>
                <Link className="text tab" to="/stacks">
                    view all <span className="link-arrow" aria-hidden="true">&#8594;</span>
                </Link>
            </div>
            <div className="flex flex-wrap gap-2 w-full">
                {technologies.map((technology) => (
                    <span key={technology} className="stack text normal">
                        {technology}
                    </span>
                ))}
                <Link className="stack dotted text tab" to="/stacks">
                    view all <span className="link-arrow" aria-hidden="true">&#8594;</span>
                </Link>
            </div>
        </div>
    );
}
export default Stack;
