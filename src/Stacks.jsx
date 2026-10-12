import { Link } from 'react-router-dom'

const stackGroups = [
    {
        title: 'Frontend',
        technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap', 'TypeScript', 'Next.js'],
    },
    {
        title: 'Backend & Database',
        technologies: ['Node.js', 'Express.js', 'Python', 'Java', 'PHP', 'SQL', 'MongoDB', 'Supabase'],
    },
    {
        title: 'Tools',
        technologies: ['Git', 'GitHub', 'VS Code', 'Vite', 'Antigravity', 'Codex', 'Visual Studeio', 'Postman', 'npm'],
    },
    {
        title: 'Design Tools',
        technologies: ['Photoshop', 'Illustrator', 'Figma'],
    },
]

function Stacks() {
    return (
        <div className="mx-auto mt-12 max-w-3xl px-6">
            <div className="mb-10 flex items-start justify-between gap-6">
                <div>
                    <p className="text mb-2">03 — tech stack</p>
                    <h1 className="text-3xl font-semibold tracking-tight">Tools I work with</h1>
                    <p className="text mt-3 max-w-xl">Technologies I use to design, build, and ship web applications.</p>
                </div>
                <Link className="text tab whitespace-nowrap" to="/">&#8592; back home</Link>
            </div>

            <div className="border-t border-[#e4e4e4]">
                {stackGroups.map((group) => (
                    <section key={group.title} className="grid gap-4 border-b border-[#e4e4e4] py-7 sm:grid-cols-[9rem_1fr]">
                        <h2 className="text-heavy">{group.title}</h2>
                        <div className="flex flex-wrap gap-2">
                            {group.technologies.map((technology) => (
                                <span key={technology} className="stack text">{technology}</span>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    )
}

export default Stacks
