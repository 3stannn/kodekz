import { Link } from "react-router-dom";

function Experiences() {
    return (
        <div className="mx-auto mt-12 max-w-3xl px-6">
            <div className="mb-10 flex items-start justify-between gap-6">
                <div>
                    <p className="text mb-2">01 — experience</p>
                    <h1 className="text-2xl font-medium tracking-tight">Experience</h1>
                    <p className="text normal mt-4 max-w-xl">
                        Taking client projects from initial wireframe to live, deployed
                        product.
                    </p>
                </div>
                <Link className="text tab whitespace-nowrap" to="/">
                    <span className="link-arrow link-arrow--back" aria-hidden="true">&#8592;</span> back home
                </Link>
            </div>
            <div className="card flex flex-row justify-between">
                <div>
                    <h1 className="text-heavy normal">
                        AWS Learning Club Genesis - Tech Team
                    </h1>
                    <p className="text">
                        Tarlac State University | College of Computer Studies
                    </p>
                </div>
                <div>
                    <p className="text text-right whitespace-nowrap">2026 - Present</p>
                </div>
            </div>
            <div className="card bottom flex flex-row justify-between">
                <div>
                    <h1 className="text-heavy normal">
                        Programmer's Den – Finance Team | Graphic Designer
                    </h1>
                    <p className="text">
                        Tarlac State University | College of Computer Studies
                    </p>
                </div>
                <div>
                    <p className="text text-right whitespace-nowrap">2025 - 2026</p>
                </div>
            </div>
            <div className="card bottom flex flex-row justify-between">
                <div>
                    <h1 className="text-heavy normal">
                        Junior Philippine Computer Society – Graphic Designer
                    </h1>
                    <p className="text">
                        Tarlac State University | College of Computer Studies
                    </p>
                </div>
                <div>
                    <p className="text text-right whitespace-nowrap">2024 - 2025</p>
                </div>
            </div>
            <div className="card bottom flex flex-row justify-between">
                <div>
                    <h1 className="text-heavy normal">Web Developer</h1>
                    <p className="text">Freelance</p>
                </div>
                <div>
                    <p className="text text-right whitespace-nowrap">2024 - Present</p>
                </div>
            </div>
            <div className="card bottom flex flex-row justify-between">
                <div>
                    <h1 className="text-heavy normal">Graphic Designer</h1>
                    <p className="text">Freelace</p>
                </div>
                <div>
                    <p className="text text-right whitespace-nowrap">2022 - Present</p>
                </div>
            </div>
        </div>
    );
}
export default Experiences;
