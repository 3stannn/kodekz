import { Link } from "react-router-dom";
import { toast } from "@yusufceng1z/ding-react";

function Services() {
    const handleCopyEmail = async (e) => {
        e.preventDefault();
        try {
            await navigator.clipboard.writeText("thristandave12@gmail.com");
            toast.success("Email copied to clipboard!");
        } catch {
            toast.error("Failed to copy email");
        }
    };

    return (
        <div className="mx-auto mt-12 max-w-3xl px-6">
            <div className="mb-10 flex items-start justify-between gap-6">
                <div>
                    <p className="text mb-2">04 — services</p>
                    <h1 className="text-2xl font-medium tracking-tight">
                        What I Can Build for You
                    </h1>
                    <p className="text normal mt-4 max-w-xl">
                        I design and develop responsive, user-friendly websites and web
                        applications tailored to your goals.
                    </p>
                </div>
                <Link className="text tab whitespace-nowrap" to="/">
                    <span className="link-arrow link-arrow--back" aria-hidden="true">
                        &#8592;
                    </span>{" "}
                    back home
                </Link>
            </div>
            <div>
                <div className="card flex flex-row items-center gap-2">
                    <span className="text">Currently working: </span>
                    <span className="chip flex flex-row items-center gap-2">
                        <svg
                            width={8}
                            height={8}
                            viewBox="0 0 24 24"
                            aria-label="Available"
                        >
                            <circle cx="12" cy="12" r="10" fill="#22c55e" />
                        </svg>
                        <span className="text normal">Freelance</span>
                    </span>
                </div>
            </div>
            <div className="mt-10">
                <span className="text">What I build</span>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div className="service-card flex flex-col gap-2 h-full">
                        <span className="text-heavy normal">Websites</span>
                        <span className="text normal">
                            Clean, modern websites crafted for personal brands, growing
                            businesses, and creative projects.
                        </span>
                    </div>
                    <div className="service-card flex flex-col gap-2 h-full">
                        <span className="text-heavy normal">Custom CRMs</span>
                        <span className="text normal">
                            Tailored dashboards and client management systems built to
                            streamline your exact business workflow—without the bloat of
                            off-the-shelf software.
                        </span>
                    </div>
                    <div className="service-card flex flex-col gap-2 h-full">
                        <span className="text-heavy normal">Automation</span>
                        <span className="text normal">
                            Eliminating repetitive tasks with smart, automated workflows.
                        </span>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <span className="text">Have a project in mind?</span>
                <div className="mt-2 flex flex-row items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path d="M5 4H19C20.6569 4 22 5.34315 22 7V17C22 18.6569 20.6569 20 19 20H5C3.34315 20 2 18.6569 2 17V7C2 5.34315 3.34315 4 5 4ZM2 7L11.2929 11C11.7154 11.2817 12.2846 11.2817 12.7071 11L22 7" />
                    </svg>
                    <a
                        className="text email"
                        href="mailto:thristandave12@gmail.com"
                        onClick={handleCopyEmail}
                    >
                        thristandave12@gmail.com
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Services;
