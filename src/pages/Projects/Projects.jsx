import { Link } from "react-router-dom";
import ProjectCarousel from "./ProjectCarousel";

function Projects() {
    return (
        <div className="mt-12">
            <div className="mx-auto mb-10 grid max-w-2xl grid-cols-[minmax(0,1fr)_auto] items-start gap-x-6 gap-y-4 px-6">
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
            <ProjectCarousel />
            <div className="mx-auto mt-10 max-w-3xl px-6 lg:px-16">
                <a
                    target="_blank"
                    href="https://marketplace.visualstudio.com/items?itemName=kodekz01.simply-slate-theme"
                >
                    <div className="card thin flex flex-col justify-between gap-4">
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
                                A minimalist VS Code theme built for developers seeking a
                                refined aesthetic. Combines soft slate palettes with intentional
                                contrast to keep the editor clean, modern, and easy on the eyes.
                            </p>
                        </div>
                    </div>
                </a>
                <a
                    target="_blank"
                    href="https://schedy-sepia.vercel.app/"
                >
                    <div className="card bottom thin flex flex-col justify-between gap-4">
                        <div className="flex justify-between gap-3">
                            <div>
                                <h2 className="text-heavy link-title">
                                    Schedy — Shared Workspace & Calendar
                                </h2>
                            </div>
                            <div className="shrink-0">
                                <p className="text small text-right">Wep App</p>
                            </div>
                        </div>
                        <div>
                            <p className="text normal">
                                Designed and engineered an intuitive shared workspace that pairs
                                event scheduling with a central bulletin board. Built with
                                responsive layouts and real-time state updates to keep teams
                                aligned effortlessly.
                            </p>
                        </div>
                    </div>
                </a>
                <a
                    target="_blank"
                    href="https://expense-tracker-fawn-psi-24.vercel.app/"
                >
                    <div className="card bottom thin bottom flex flex-col justify-between gap-4">
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
                    <div className="card thin bottom flex flex-col justify-between gap-4">
                        <div className="flex justify-between gap-3">
                            <div>
                                <h2 className="text-heavy link-title">
                                    Tyto — Payment Ledger System
                                </h2>
                            </div>
                            <div className="shrink-0">
                                <p className="text small text-right">Application</p>
                            </div>
                        </div>
                        <div>
                            <p className="text normal">
                                Architected a reliable ledger management system to handle
                                transaction entries, compute real-time balances, and maintain
                                financial records. Emphasized clean UI controls and rigorous
                                data integrity.
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}
export default Projects;
