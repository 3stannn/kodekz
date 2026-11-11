import { Link } from "react-router-dom";
import kipLogo from "@/assets/projects/kip.png";
import instaFrameLogo from "@/assets/projects/instaframe.png";
import schedyLogo from "@/assets/projects/schedy.png";

function Projects() {
    return (
        <div className="mx-auto mt-12 max-w-3xl px-6">
            <div className="mb-10 grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-6 gap-y-4">
                <div>
                    <p className="text mb-2">02 — projects</p>
                    <h1 className="text-2xl font-medium tracking-tight">Projects </h1>
                </div>
                <Link className="text tab whitespace-nowrap" to="/">
                    <span className="link-arrow link-arrow--back" aria-hidden="true">
                        &#8592;
                    </span>{" "}
                    back home
                </Link>
                <p className="text normal col-span-2 max-w-xl sm:col-span-1">
                    Systems I've built for clients, and the things I build for myself.
                </p>
            </div>
            <div className="lg:px-10">
                <div className="proj-card shadow-sm mb-6 sm:mb-8">
                    <img src={kipLogo} alt="" />
                    <div className="proj-card-content">
                        <h2 className="link-title text-xl sm:text-2xl">Kip - AI Coding Agent Orchestration</h2>
                        <p className="text">
                            Kip is an easy-setup AI orchestration utility that prevents
                            low-quality AI code generation, optimizing workflows for Codex,
                            Claude Code, and Antigravity.
                        </p>
                        <div className="proj-card-footer">
                            <a className="whitespace-nowrap" target="_blank" href="https://usekip.vercel.app/">
                                <span className="text-heavy">
                                    <span className="small">Check it out</span>{" "}
                                    <span className="link-arrow" aria-hidden="true">
                                        &#8599;
                                    </span>
                                </span>
                            </a>
                            <span className="text small">AI Dev Tool</span>
                        </div>
                    </div>
                </div>
                <div className="proj-card shadow-sm mb-6 sm:mb-8">
                    <img src={instaFrameLogo} alt="" />
                    <div className="proj-card-content">
                        <h2 className="link-title text-xl sm:text-2xl">InstaFrame — Webpage Studio & Responsive Viewports</h2>
                        <p className="text normal">
                            Eliminates the friction of manual browser resizing and third-party
                            mockup tools. Provides live, multi-device viewport previews and
                            converts active web tabs into studio-grade mockups in a single
                            click.
                        </p>
                        <div className="proj-card-footer">
                            <a className="whitespace-nowrap" target="_blank" href="https://insta-frame-three.vercel.app/">
                                <span className="text-heavy">
                                    <span className="small">Check it out</span>{" "}
                                    <span className="link-arrow" aria-hidden="true">
                                        &#8599;
                                    </span>
                                </span>
                            </a>
                            <span className="text small">Dev Tool</span>
                        </div>
                    </div>
                </div>
                <div className="proj-card shadow-sm mb-6 sm:mb-8">
                    <img src={schedyLogo} alt="" />
                    <div className="proj-card-content">
                        <h2 className="link-title text-xl sm:text-2xl">Schedy — Shared Workspace and Calendar</h2>
                        <p className="text normal">
                            Designed and engineered an intuitive shared workspace that pairs
                            event scheduling with a central bulletin board. Built with
                            responsive layouts and real-time state updates to keep teams
                            aligned effortlessly.
                        </p>
                        <div className="proj-card-footer">
                            <a className="whitespace-nowrap" target="_blank" href="https://schedy-sepia.vercel.app/">
                                <span className="text-heavy">
                                    <span className="small">Check it out</span>{" "}
                                    <span className="link-arrow" aria-hidden="true">
                                        &#8599;
                                    </span>
                                </span>
                            </a>
                            <span className="text small">Web App</span>
                        </div>
                    </div>
                </div>
                <a
                    target="_blank"
                    href="https://marketplace.visualstudio.com/items?itemName=kodekz01.simply-slate-theme"
                >
                    <div className="card flex flex-col justify-between gap-4">
                        <div className="flex justify-between gap-3">
                            <div>
                                <h2 className="text-heavy link-title">Simply Slate Theme</h2>
                            </div>
                            <div className="shrink-0">
                                <p className="text small text-right">VS Code</p>
                                <p className="text small text-right">Theme</p>
                            </div>
                        </div>
                        <div>
                            <p className="text normal">
                                A minimalist VS Code theme built for developers seeking a refined
                                aesthetic. Combines soft slate palettes with intentional contrast
                                to keep the editor clean, modern, and easy on the eyes.
                            </p>
                        </div>
                    </div>
                </a>
                <a target="_blank" href="https://expense-tracker-fawn-psi-24.vercel.app/">
                    <div className="card bottom flex flex-col justify-between gap-4">
                        <div className="flex justify-between gap-3">
                            <div>
                                <h2 className="text-heavy link-title">Expense Tracker</h2>
                            </div>
                            <div className="shrink-0">
                                <p className="text small text-right">Web App</p>
                            </div>
                        </div>
                        <div>
                            <p className="text normal">
                                A clean personal finance web app designed to log transactions,
                                categorize spending, and visualize cash flow in real time.
                            </p>
                        </div>
                    </div>
                </a>
                <a target="_blank" href="https://github.com/3stannn/Tyto">
                    <div className="card bottom flex flex-col justify-between gap-4">
                        <div className="flex justify-between gap-3">
                            <div>
                                <h2 className="text-heavy link-title">Tyto — Payment Ledger System</h2>
                            </div>
                            <div className="shrink-0">
                                <p className="text small text-right">Application</p>
                            </div>
                        </div>
                        <div>
                            <p className="text normal">
                                Architected a reliable ledger management system to handle
                                transaction entries, compute real-time balances, and maintain
                                financial records. Emphasized clean UI controls and rigorous data
                                integrity.
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}
export default Projects;
