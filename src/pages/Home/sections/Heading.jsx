import { Link } from "react-router-dom";
import { toast } from "@yusufceng1z/ding-react";
import resume from "@/assets/docs/resume.pdf";
import devpfp from "@/assets/images/dev.png";
import { Mascot } from "@/components/common/Mascot";
import GradientASCII from "@/components/common/GradientASCII/GradientASCII";

const kipColors = ["#1e3fd8", "#f6f8ff", "#a5d8ff", "#38bdf8"];

function Hero() {
    return (
        <div className="mt-10 md:mt-12">
            <div className="max-w-3xl mx-auto px-6">
                <div className="flex flex-row gap-4 items-center">
                    <img
                        className="w-20 h-20 rounded-full"
                        src={devpfp}
                        alt="Thristan Dave Bumagat"
                        srcset=""
                    />
                    <div className="flex flex-col gap-0">
                        <div className="flex flex-row items-center gap-2">
                            <h1 className="devName text-xl">Thristan Dave Bumagat</h1>
                            <svg viewBox="0 0 24 24" width="15" height="15" fill="#3b82f6">
                                <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.416-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .495.083.965.238 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                            </svg>
                        </div>
                        <div>
                            <h1 className="text font-normal role">&#9657; Web Developer</h1>
                        </div>
                    </div>
                </div>
                <p className="text font-normal normal text-justify mt-6">
                    A 3rd-year{" "}
                    <span className="text normal small font-medium chip inline-flex items-center gap-2 align-middle whitespace-nowrap">
                        Computer Science
                    </span>{" "}
                    student, aspiring software engineer. Building clean{" "}
                    <span className="text normal small font-medium chip inline-flex items-center gap-2 align-middle whitespace-nowrap">
                        &lt;/&gt; full-stack
                    </span>{" "}
                    platforms, bridging frontier{" "}
                    <span className="text normal small font-medium chip inline-flex items-center gap-2 align-middle whitespace-nowrap">AI</span> models with
                    agentic tooling, and architecting normalized relational backends.
                </p>
                <div className="flex flex-row items-center justify-between gap-3 sm:gap-8 mt-6">
                    <a
                        className="text button whitespace-nowrap"
                        target="_blank"
                        href={resume}
                        onClick={() => toast.success("Resume opened in a new tab")}
                    >
                        Download CV
                    </a>
                    <div className="flex flex-row items-center gap-3 sm:gap-8">
                        <a
                            className="text link whitespace-nowrap"
                            target="_blank"
                            href="https://github.com/3stannn"
                        >
                            github{" "}
                            <span className="link-arrow" aria-hidden="true">
                                &#8599;
                            </span>
                        </a>
                        <a
                            className="text link whitespace-nowrap"
                            target="_blank"
                            href="https://www.linkedin.com/in/kodekz01"
                        >
                            linkedin{" "}
                            <span className="link-arrow" aria-hidden="true">
                                &#8599;
                            </span>
                        </a>
                    </div>
                </div>
                <div className="mt-6">
                    <div className="kip-card">
                        <div className="kip-card__background" aria-hidden="true">
                            <GradientASCII
                                colors={kipColors}
                                shape="horizon"
                                characters=" =+xX0S8#@"
                                cellSize={18}
                                density={0.8}
                            />
                        </div>
                        <div className="kip-card__copy flex flex-col">
                            <span className="text normal">
                                <b>AI Coding Agent Orchestration</b>
                            </span>
                            <span className="text normal">Pre-Configured Agent Skills</span>
                            <span className="text normal">
                                Built for Codex, Claude Code & Antigravity
                            </span>
                            <a
                                className="mt-4"
                                target="_blank"
                                href="https://usekip.vercel.app/"
                            >
                                <span className="text small">
                                    <b>
                                        Check it out{" "}
                                        <span className="link-arrow" aria-hidden="true">
                                            &#8599;
                                        </span>
                                    </b>
                                </span>
                            </a>
                        </div>
                        <Mascot />
                    </div>
                </div>
                <div className="flex flex-row gap-8 mt-6">
                    <div className="flex w-full justify-between">
                        <Link className="tile left w-full" to="/experiences">
                            <div className="flex flex-row justify-between">
                                <h1 className="text-xl">&lt; 1</h1>
                                <p className="text link">
                                    <span className="link-arrow" aria-hidden="true">
                                        &#8599;
                                    </span>
                                </p>
                            </div>
                            <p className="text small normal">year experience</p>
                        </Link>
                        <Link className="tile w-full" to="/stacks">
                            <div className="flex flex-row justify-between">
                                <h1 className="text-xl">10+</h1>
                                <p className="text link">
                                    <span className="link-arrow" aria-hidden="true">
                                        &#8599;
                                    </span>
                                </p>
                            </div>
                            <p className="text small normal">technologies</p>
                        </Link>
                        <Link className="tile right w-full" to="/projects">
                            <div className="flex flex-row justify-between">
                                <h1 className="text-xl">3</h1>
                                <p className="text link">
                                    <span className="link-arrow" aria-hidden="true">
                                        &#8599;
                                    </span>
                                </p>
                            </div>
                            <p className="text small normal">projects shipped</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
