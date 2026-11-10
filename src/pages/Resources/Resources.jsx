import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { toast } from "@yusufceng1z/ding-react";
import portfolioSkill from "@/assets/files/SKILL.md?url";

const MD_ICON = `data:image/svg+xml;utf8,${encodeURIComponent(
    `
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <circle cx="16" cy="16" r="16" fill="#2b2d31"/>
  <text x="16" y="16.5" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="700" font-size="10.5" letter-spacing="0.5">MD</text>
</svg>
`.trim(),
)}`;

function Resources() {
    const downloadIntervalRef = useRef(null);

    useEffect(() => {
        return () => {
            if (downloadIntervalRef.current) {
                clearInterval(downloadIntervalRef.current);
            }
        };
    }, []);

    const handleDownload = (e) => {
        e.preventDefault();

        if (downloadIntervalRef.current) {
            return;
        }

        let progress = 0;
        const fileName = "portfolio-skill.md";

        const cancelDownload = () => {
            if (downloadIntervalRef.current) {
                clearInterval(downloadIntervalRef.current);
                downloadIntervalRef.current = null;
            }
        };

        const toastId = toast.info(fileName, {
            description: "Downloading · 0%",
            progress: 0,
            image: MD_ICON,
            action: {
                label: "Cancel",
                onClick: () => {
                    cancelDownload();
                    return {
                        type: "info",
                        title: "Download cancelled",
                        description: fileName,
                        progress: null,
                        duration: 2500,
                    };
                },
            },
        });

        downloadIntervalRef.current = setInterval(() => {
            const activeToast = toast.getState().toasts.find((t) => t.id === toastId);
            if (
                !activeToast ||
                activeToast.phase === "exit" ||
                activeToast.phase === "closing"
            ) {
                cancelDownload();
                return;
            }

            progress += Math.floor(Math.random() * 8) + 6;

            if (progress >= 100) {
                progress = 100;
                cancelDownload();

                // The built file has a hashed name (SKILL-abc123.md). Saving it
                // through a blob URL makes the browser use fileName instead.
                fetch(portfolioSkill)
                    .then((response) => {
                        if (!response.ok) throw new Error(response.statusText);
                        return response.blob();
                    })
                    .then((blob) => {
                        const blobUrl = URL.createObjectURL(
                            new Blob([blob], { type: "text/markdown" }),
                        );
                        const link = document.createElement("a");
                        link.href = blobUrl;
                        link.download = fileName;
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                        setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);

                        toast.update(toastId, {
                            type: "success",
                            title: fileName,
                            description: "Download complete",
                            progress: null,
                            action: null,
                            duration: 3500,
                        });
                    })
                    .catch(() => {
                        toast.update(toastId, {
                            type: "error",
                            title: fileName,
                            description: "Download failed",
                            progress: null,
                            action: null,
                            duration: 3500,
                        });
                    });
            } else {
                toast.update(toastId, {
                    description: `Downloading · ${progress}%`,
                    progress: progress / 100,
                });
            }
        }, 120);
    };

    return (
        <div className="mx-auto mt-12 max-w-3xl px-6">
            <div className="mb-10 flex items-start justify-between gap-6">
                <div>
                    <h1 className="text-2xl font-medium tracking-tight">Resources</h1>
                    <p className="text normal mt-4 max-w-xl">
                        My go-to templates, tools, and guides—all in one spot.
                    </p>
                </div>
                <Link className="text tab whitespace-nowrap" to="/">
                    <span className="link-arrow link-arrow--back" aria-hidden="true">
                        &#8592;
                    </span>{" "}
                    back home
                </Link>
            </div>
            <p className="text mb-4">Tools I use</p>
            <div className="card flex flex-col">
                <span className="text-heavy">Claude Code</span>
                <span className="text">Pro Plan</span>
            </div>
            <div className="card bottom flex flex-col">
                <span className="text-heavy">Claude Design</span>
                <span className="text">Creative assets</span>
            </div>
            <div className="card bottom flex flex-col">
                <span className="text-heavy">Codex</span>
                <span className="text">Pro Plan</span>
            </div>
            <div className="card bottom flex flex-col mb-12">
                <span className="text-heavy">Gemini</span>
                <span className="text">Pro Plan</span>
            </div>
            <p className="text mb-4">Skills I use</p>
            <a
                href={portfolioSkill}
                download="portfolio-skill.md"
                onClick={handleDownload}
                className="cursor-pointer"
            >
                <div className="card">
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-col">
                            <span className="text-heavy">Portfolio Skill</span>
                            <span className="text">My own Portfolio Skill</span>
                        </div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M12 3V14M8 10L12 14L16 10M4 18V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V18" />
                        </svg>
                    </div>
                </div>
            </a>
            <a href="https://usekip.vercel.app/">
                <div className="card bottom mb-8">
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-col">
                            <span className="text-heavy">
                                Kip - AI Coding Agent Orchestration
                            </span>
                            <span className="text">Open Source</span>
                        </div>
                        <p className="text link">
                            <span className="link-arrow" aria-hidden="true">
                                &#8599;
                            </span>
                        </p>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default Resources;
