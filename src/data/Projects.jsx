import { Link } from "react-router-dom";

function Projects() {
    return (
        <div>
            <div className="max-w-3xl mx-auto px-6 mt-12">
                <div className="flex flex-row justify-between mb-4">
                    <h1 className="text">02 — projects</h1>
                    <Link className="text tab" to="/projects">
                        view all <span className="link-arrow" aria-hidden="true">&#8594;</span>
                    </Link>
                </div>
                <a target="_blank" href="https://usekip.vercel.app/">
                    <div className="card flex flex-row justify-between">
                        <div>
                            <h1 className="text-heavy normal">
                                Kip - AI Coding Agent Orchestrator
                            </h1>
                            <p className="text">Developer</p>
                        </div>
                        <div>
                            <p className="text text-right">Dev Tool</p>
                        </div>
                    </div>
                </a>
                <a target="_blank" href="https://insta-frame-three.vercel.app/">
                    <div className="card bottom flex flex-row justify-between">
                        <div>
                            <h1 className="text-heavy normal">
                                InstaFrame — Webpage Studio & Responsive Viewports
                            </h1>
                            <p className="text">Full-Stack Developer</p>
                        </div>
                        <div>
                            <p className="text text-right">Dev Tool</p>
                        </div>
                    </div>
                </a>
                <a target="_blank" href="https://schedy-sepia.vercel.app/">
                    <div className="card bottom flex flex-row justify-between">
                        <div>
                            <h1 className="text-heavy normal">Schedy — Shared Workspace Calendar</h1>
                            <p className="text">Full-Stack Developer</p>
                        </div>
                        <div>
                            <p className="text text-right">Web App</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}
export default Projects;
