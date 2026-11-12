import { Link } from "react-router-dom";

function Projects() {
    return (
        <div>
            <div className="max-w-3xl mx-auto px-6 mt-20">
                <div className="flex flex-row justify-between mb-4">
                    <h1 className="text">02 — projects</h1>
                    <Link className="text tab" to="/projects">
                        view all{" "}
                        <span className="link-arrow" aria-hidden="true">
                            &#8594;
                        </span>
                    </Link>
                </div>
                <a target="_blank" href="https://usekip.vercel.app/">
                    <div className="card flex flex-row justify-between gap-4">
                        <div>
                            <h1 className="text-heavy normal link-title">
                                Kip - AI Coding Agent Orchestrator
                            </h1>
                            <p className="text">
                                AI orchestration utility that prevents low-quality AI code
                                generation
                            </p>
                        </div>
                        <div>
                            <p className="text small text-right whitespace-nowrap">Dev Tool</p>
                        </div>
                    </div>
                </a>
                <a target="_blank" href="https://insta-frame-three.vercel.app/">
                    <div className="card bottom flex flex-row justify-between gap-4">
                        <div>
                            <h1 className="text-heavy normal link-title">
                                InstaFrame — Webpage Studio & Responsive Viewports
                            </h1>
                            <p className="text">
                                A web tool to preview responsive websites across devices and
                                capture realistic mockups.
                            </p>
                        </div>
                        <div>
                            <p className="text small text-right whitespace-nowrap">Dev Tool</p>
                        </div>
                    </div>
                </a>
                <a target="_blank" href="https://schedy-sepia.vercel.app/">
                    <div className="card bottom flex flex-row justify-between gap-4">
                        <div>
                            <h1 className="text-heavy normal link-title">
                                Schedy — Shared Workspace Calendar
                            </h1>
                            <p className="text">
                                A minimalist shared workspace and productivity
                            </p>
                        </div>
                        <div>
                            <p className="text small text-right whitespace-nowrap">Web App</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}
export default Projects;
