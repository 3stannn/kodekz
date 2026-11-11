import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import kipScreen from "@/assets/project-screens/kip.png";
import instaFrameScreen from "@/assets/project-screens/instaframe.png";
import schedyScreen from "@/assets/project-screens/schedy.png";
import "./ProjectCarousel.css";

const projects = [
    {
        name: "Kip",
        title: "Kip - AI Coding Agent Orchestration",
        description:
            "Kip is an easy-setup AI orchestration utility that prevents low-quality AI code generation, optimizing workflows for Codex, Claude Code, and Antigravity.",
        type: "AI Dev Tool",
        href: "https://usekip.vercel.app/",
        screen: kipScreen,
    },
    {
        name: "InstaFrame",
        title: "InstaFrame — Webpage Studio & Responsive Viewports",
        description:
            "Eliminates the friction of manual browser resizing and third-party mockup tools. Provides live, multi-device viewport previews and converts active web tabs into studio-grade mockups in a single click.",
        type: "Dev Tool",
        href: "https://insta-frame-three.vercel.app/",
        screen: instaFrameScreen,
    },
    {
        name: "Schedy",
        title: "Schedy — Shared Workspace and Calendar",
        description:
            "Designed and engineered an intuitive shared workspace that pairs event scheduling with a central bulletin board. Built with responsive layouts and real-time state updates to keep teams aligned effortlessly.",
        type: "Web App",
        href: "https://schedy-sepia.vercel.app/",
        screen: schedyScreen,
    },
];

const lastSlide = projects.length - 1;

function slideSpacing(viewport) {
    const [first, second] = viewport.children;
    return second.getBoundingClientRect().left - first.getBoundingClientRect().left;
}

function ProjectCarousel() {
    const viewportRef = useRef(null);
    const settleTimer = useRef(null);
    const returnTween = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        return () => {
            window.clearTimeout(settleTimer.current);
            returnTween.current?.kill();
        };
    }, []);

    function returnToFirst(viewport) {
        window.clearTimeout(settleTimer.current);

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            viewport.scrollTo({ left: 0, behavior: "instant" });
            setActiveIndex(0);
            return;
        }

        viewport.classList.add("project-carousel__viewport--returning");

        function restoreScrolling() {
            viewport.classList.remove("project-carousel__viewport--returning");
            returnTween.current = null;
        }

        returnTween.current = gsap.to(viewport, {
            scrollLeft: 0,
            duration: 0.65,
            ease: "power2.inOut",
            onComplete: () => {
                restoreScrolling();
                setActiveIndex(0);
            },
            onInterrupt: restoreScrolling,
        });
    }

    function move(direction) {
        if (returnTween.current) return;

        const viewport = viewportRef.current;
        const spacing = slideSpacing(viewport);
        const currentIndex = Math.round(viewport.scrollLeft / spacing);
        const nextIndex = currentIndex + direction;

        if (nextIndex < 0) return;

        if (nextIndex > lastSlide) {
            returnToFirst(viewport);
        } else {
            viewport.scrollTo({ left: spacing * nextIndex });
        }
    }

    function settle(viewport) {
        const spacing = slideSpacing(viewport);
        const currentIndex = Math.round(viewport.scrollLeft / spacing);
        if (Math.abs(viewport.scrollLeft - spacing * currentIndex) > 2) return;

        setActiveIndex(currentIndex);
    }

    function handleScroll(event) {
        if (returnTween.current) return;

        const viewport = event.currentTarget;
        // Lenis intercepts native scrollend events at the window.
        window.clearTimeout(settleTimer.current);
        settleTimer.current = window.setTimeout(() => settle(viewport), 100);
    }

    function interruptReturn() {
        if (!returnTween.current) return;

        returnTween.current.kill();
        settle(viewportRef.current);
    }

    function handleKeyDown(event) {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            move(event.key === "ArrowLeft" ? -1 : 1);
        }
    }

    return (
        <section
            className="project-carousel"
            aria-label="Featured projects"
            aria-roledescription="carousel"
        >
            <div
                className="project-carousel__viewport"
                id="featured-project-slides"
                ref={viewportRef}
                onScroll={handleScroll}
                onPointerDown={interruptReturn}
                onWheel={(event) => {
                    if (event.deltaX || event.shiftKey) interruptReturn();
                }}
                data-lenis-prevent-horizontal
            >
                {projects.map((project, index) => {
                    const isActive = index === activeIndex;

                    return (
                        <article
                            key={project.name}
                            className="project-carousel__slide"
                            inert={!isActive}
                        >
                            <a
                                className="project-carousel__link"
                                href={project.href}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div className="project-carousel__frame">
                                    <img src={project.screen} alt="" width="1920" height="1080" />
                                </div>
                                <div className="project-carousel__caption">
                                    <h2 className="project-carousel__title">
                                        {project.title}{" "}
                                        <span className="link-arrow" aria-hidden="true">&#8599;</span>
                                    </h2>
                                    <span className="project-carousel__type text">{project.type}</span>
                                </div>
                            </a>
                            <p className="project-carousel__description text normal">{project.description}</p>
                        </article>
                    );
                })}
            </div>
            <div className="project-carousel__controls" onKeyDown={handleKeyDown}>
                <button
                    type="button"
                    aria-label="Previous project"
                    aria-controls="featured-project-slides"
                    aria-disabled={activeIndex === 0}
                    onClick={() => move(-1)}
                >
                    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                        <path fill="currentColor" d="M8 1.5 3.5 6 8 10.5Z" />
                    </svg>
                </button>
                <button
                    type="button"
                    aria-label="Next project"
                    aria-controls="featured-project-slides"
                    onClick={() => move(1)}
                >
                    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                        <path fill="currentColor" d="m4 1.5 4.5 4.5L4 10.5Z" />
                    </svg>
                </button>
                <span className="project-carousel__announcement" aria-live="polite" aria-atomic="true">
                    {projects[activeIndex].name}
                </span>
            </div>
        </section>
    );
}

export default ProjectCarousel;
