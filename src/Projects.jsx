import { Link } from "react-router-dom";

function Projects() {
    return (
        <div className="mx-auto mt-12 max-w-3xl px-6">
            <div className="mb-10 flex items-start justify-between gap-6">
                <div>
                    <p className="text mb-2">02 — projects</p>
                    <h1 className="text-2xl font-medium tracking-tight">Projects </h1>
                    <p className="text normal mt-8 max-w-xl">
                        Systems I've built for clients, and the things I build for myself.
                    </p>
                </div>
                <Link className="text tab whitespace-nowrap" to="/">
                    <span className="link-arrow link-arrow--back" aria-hidden="true">&#8592;</span> back home
                </Link>
            </div>
            <a target="_blank" href="https://usekip.vercel.app/">
                <div className="card flex flex-col justify-between gap-4">
                    <div className="flex flex-row justify-between">
                        <div>
                            <h1 className="text-heavy link-title">Kip - AI Coding Agent Orchestrator</h1>
                        </div>
                        <div>
                            <p className="text text-right">Dev Tool</p>
                        </div>
                    </div>
                    <div>
                        <p className="text">
                            Kip is an easy-setup AI orchestration utility that prevents
                            low-quality AI code generation, optimizing workflows for Codex,
                            Claude Code, and Antigravity.
                        </p>
                    </div>
                </div>
            </a>
            <a
                target="_blank"
                href="https://marketplace.visualstudio.com/items?itemName=kodekz01.simply-slate-theme"
            >
                <div className="card bottom flex flex-col justify-between gap-4">
                    <div className="flex flex-row justify-between">
                        <div>
                            <h1 className="text-heavy link-title">Simply Slate Theme</h1>
                        </div>
                        <div>
                            <p className="text text-right">VS Code</p>
                            <p className="text text-right">Theme</p>
                        </div>
                    </div>
                    <div>
                        <p className="text">
                            A minimalist VS Code theme built for developers seeking a refined
                            aesthetic. Combines soft slate palettes with intentional contrast
                            to keep the editor clean, modern, and easy on the eyes.
                        </p>
                    </div>
                </div>
            </a>
            <a target="_blank" href="https://insta-frame-three.vercel.app/">
                <div className="card bottom flex flex-col justify-between gap-4">
                    <div className="flex flex-row justify-between">
                        <div>
                            <h1 className="text-heavy link-title">
                                InstaFrame — Webpage Studio & Responsive Viewports
                            </h1>
                        </div>
                        <div>
                            <p className="text text-right">Web App</p>
                            <p className="text text-right">Web Extension</p>
                        </div>
                    </div>
                    <div>
                        <p className="text">
                            Eliminates the friction of manual browser resizing and third-party
                            mockup tools. Provides live, multi-device viewport previews and
                            converts active web tabs into studio-grade mockups in a single
                            click.
                        </p>
                    </div>
                </div>
            </a>
            <a target="_blank" href="https://schedy-sepia.vercel.app/">
                <div className="card bottom flex flex-col justify-between gap-4">
                    <div className="flex flex-row justify-between">
                        <div>
                            <h1 className="text-heavy link-title">
                                Schedy — Shared Workspace and Calendar
                            </h1>
                        </div>
                        <div>
                            <p className="text text-right">Web App</p>
                        </div>
                    </div>
                    <div>
                        <p className="text">
                            Designed and engineered an intuitive shared workspace that pairs
                            event scheduling with a central bulletin board. Built with
                            responsive layouts and real-time state updates to keep teams
                            aligned effortlessly.
                        </p>
                    </div>
                </div>
            </a>
            <a target="_blank" href="https://expense-tracker-fawn-psi-24.vercel.app/">
                <div className="card bottom flex flex-col justify-between gap-4">
                    <div className="flex flex-row justify-between">
                        <div>
                            <h1 className="text-heavy link-title">Expense Tracker</h1>
                        </div>
                        <div>
                            <p className="text text-right">Web App</p>
                        </div>
                    </div>
                    <div>
                        <p className="text">
                            A clean personal finance web app designed to log transactions,
                            categorize spending, and visualize cash flow in real time.
                        </p>
                    </div>
                </div>
            </a>
            <a target="_blank" href="https://github.com/3stannn/Tyto">
                <div className="card bottom flex flex-col justify-between gap-4">
                    <div className="flex flex-row justify-between">
                        <div>
                            <h1 className="text-heavy link-title">Tyto — Payment Ledger System</h1>
                        </div>
                        <div>
                            <p className="text text-right">Application</p>
                        </div>
                    </div>
                    <div>
                        <p className="text">
                            Architected a reliable ledger management system to handle
                            transaction entries, compute real-time balances, and maintain
                            financial records. Emphasized clean UI controls and rigorous data
                            integrity.
                        </p>
                    </div>
                </div>
            </a>
        </div>
    );
}
export default Projects;
