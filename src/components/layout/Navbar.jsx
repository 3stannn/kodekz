import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
    {
        label: "Experience",
        to: "/experiences",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                <path d="M8.25 6.5V6C8.25 4.3431 9.5931 3 11.25 3H12.75C14.4069 3 15.75 4.3431 15.75 6V6.5M2 10.5C6 12.75 18 12.75 22 10.5M9.5 12.1132V13.5C9.5 14.6046 10.3954 15.5 11.5 15.5H12.5C13.6046 15.5 14.5 14.6046 14.5 13.5V12.1132M5 6.5H19C20.6569 6.5 22 7.8431 22 9.5V18C22 19.6569 20.6569 21 19 21H5C3.3431 21 2 19.6569 2 18V9.5C2 7.8431 3.3431 6.5 5 6.5Z" />
            </svg>
        ),
    },
    {
        label: "Projects",
        to: "/projects",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                <path d="M4.1043 15.8632C2.8523 15.4715 2 14.3118 2 13L2 6C2 4.3431 3.3431 3 5 3L19 3C20.6569 3 22 4.3431 22 6L22 13C22 14.3118 21.1477 15.4715 19.8957 15.8632M12.8 14.0667L16.8 19.4C17.2944 20.0592 16.824 21 16 21L8 21C7.176 21 6.7056 20.0592 7.2 19.4L11.2 14.0667C11.6 13.5333 12.4 13.5333 12.8 14.0667Z" />
            </svg>
        ),
    },
    {
        label: "Stack",
        to: "/stacks",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                <path
                    d="M12.4382 2.1011L21.4382 6.4886C22.1873 6.8538 22.1873 7.9212 21.4382 8.2864L12.4382 12.6739C12.1616 12.8087 11.8384 12.8087 11.5618 12.6739L2.5618 8.2864C1.8127 7.9212 1.8127 6.8538 2.5618 6.4886L11.5618 2.1011C11.8384 1.9663 12.1616 1.9663 12.4382 2.1011ZM2 12.625L11.5618 17.2864C11.8384 17.4212 12.1616 17.4212 12.4382 17.2864L22 12.625M2 17.2375L11.5618 21.8989C11.8384 22.0337 12.1616 22.0337 12.4382 21.8989L22 17.2375"
                    fill="none"
                />
            </svg>
        ),
    },
    {
        label: "Certificates",
        to: "/certificates",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                <path
                    d="M20.3692 8.5334C21.4021 9.3883 22 10.6592 22 12C22 13.3408 21.4021 14.6117 20.3692 15.4666C20.3825 15.6071 20.3891 15.748 20.3891 15.8891C20.3891 18.3744 18.3744 20.3891 15.8891 20.3891C15.748 20.3891 15.6071 20.3825 15.4666 20.3692C14.6117 21.4021 13.3408 22 12 22C10.6592 22 9.3883 21.4021 8.5334 20.3692C8.3929 20.3825 8.252 20.3891 8.1109 20.3891C5.6256 20.3891 3.6109 18.3744 3.6109 15.8891C3.6109 15.748 3.6175 15.6071 3.6308 15.4666C2.5979 14.6117 2 13.3408 2 12C2 10.6592 2.5979 9.3883 3.6308 8.5334C3.6175 8.3929 3.6109 8.252 3.6109 8.1109C3.6109 5.6256 5.6256 3.6109 8.1109 3.6109C8.252 3.6109 8.3929 3.6175 8.5334 3.6308C9.3883 2.5979 10.6592 2 12 2C13.3408 2 14.6117 2.5979 15.4666 3.6308C15.6071 3.6175 15.748 3.6109 15.8891 3.6109C18.3744 3.6109 20.3891 5.6256 20.3891 8.1109C20.3891 8.252 20.3825 8.3929 20.3692 8.5334Z"
                    fill="none"
                />
                <path
                    d="M8.45 8.45L11.29 11.29L8.45 14.13M12.71 15.55L15.55 15.55"
                    fill="none"
                />
            </svg>
        ),
    },
    {
        label: "Services",
        to: "/services",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                <path d="M4 16V6C4 4.8954 4.8954 4 6 4H18C19.1046 4 20 4.8954 20 6V16M2.5 16H21.5C21.7761 16 22 16.2239 22 16.5V18C22 19.1046 21.1046 20 20 20H4C2.8954 20 2 19.1046 2 18V16.5C2 16.2239 2.2239 16 2.5 16Z" />
            </svg>
        ),
    },
    {
        label: "Contact",
        to: "/contacts",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                <path
                    d="M2 4C2 2.8954 2.8954 2 4 2L7 2C8.1046 2 9 2.8954 9 4L9 7C9 7.6295 8.7036 8.2223 8.2 8.6L7.7388 8.9459C7.487 9.1348 7.3388 9.4312 7.3388 9.7459C7.3388 9.8992 7.374 10.0504 7.4417 10.1879C8.8053 12.9552 11.0448 15.1947 13.8121 16.5583C13.9496 16.626 14.1008 16.6612 14.2541 16.6612C14.5688 16.6612 14.8652 16.513 15.0541 16.2612L15.4 15.8C15.7777 15.2964 16.3705 15 17 15L20 15C21.1046 15 22 15.8954 22 17L22 20C22 21.1046 21.1046 22 20 22C10.0589 22 2 13.9411 2 4Z"
                    fill="none"
                />
            </svg>
        ),
    },
];

function NavToggle({ expanded, controls, label, onClick }) {
    return (
        <button
            className={`nav-toggle${expanded ? " nav-toggle--expanded" : ""}`}
            type="button"
            aria-expanded={expanded}
            aria-controls={controls}
            aria-label={label}
            onClick={onClick}
        >
            <div className="nav-btn">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                >
                    <path d="M6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6C3 4.34315 4.34315 3 6 3ZM9 3V21M13 9L16 12L13 15" />
                </svg>
            </div>
        </button>
    );
}

function Navbar() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isDesktopOpen, setIsDesktopOpen] = useState(true);

    useEffect(() => {
        document.body.classList.toggle("mobile-menu-active", isMobileOpen);

        const closeOnEscape = (event) => {
            if (event.key === "Escape") {
                setIsMobileOpen(false);
            }
        };

        window.addEventListener("keydown", closeOnEscape);

        return () => {
            document.body.classList.remove("mobile-menu-active");
            window.removeEventListener("keydown", closeOnEscape);
        };
    }, [isMobileOpen]);

    return (
        <header
            className={isDesktopOpen ? "desktop-nav-open" : "desktop-nav-closed"}
        >
            <nav className="mobile-nav" aria-label="Mobile navigation">
                <div className="mobile-nav__bar">
                    <div className="flex flex-row items-center gap-2">
                        <NavToggle
                            expanded={isMobileOpen}
                            controls="mobile-menu"
                            label={
                                isMobileOpen ? "Close navigation menu" : "Open navigation menu"
                            }
                            onClick={() => setIsMobileOpen((isOpen) => !isOpen)}
                        />
                        <Link
                            className="whitespace-nowrap brand-name"
                            to="/"
                            onClick={() => setIsMobileOpen(false)}
                        >
                            Kodekz
                        </Link>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <svg
                            width={8}
                            height={8}
                            viewBox="0 0 24 24"
                            aria-label="Available"
                        >
                            <circle cx="12" cy="12" r="10" fill="#22c55e" />
                        </svg>
                        <p className="text small mr-4">Available</p>
                    </div>
                </div>

                <div
                    id="mobile-menu"
                    className={`mobile-menu${isMobileOpen ? " mobile-menu--open" : ""}`}
                    aria-hidden={!isMobileOpen}
                    data-lenis-prevent
                >
                    <div>
                        <div className="mobile-menu__bar">
                            <Link
                                className="whitespace-nowrap brand-name"
                                to="/"
                                tabIndex={isMobileOpen ? 0 : -1}
                                onClick={() => setIsMobileOpen(false)}
                            >
                                Kodekz
                            </Link>
                            <NavToggle
                                expanded={isMobileOpen}
                                controls="mobile-menu"
                                label="Close navigation menu"
                                onClick={() => setIsMobileOpen(false)}
                            />
                        </div>
                        <div className="mobile-menu__links">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    className="text small navigation flex items-center gap-3"
                                    to={link.to}
                                    tabIndex={isMobileOpen ? 0 : -1}
                                    onClick={() => setIsMobileOpen(false)}
                                >
                                    {link.icon}
                                    <span>{link.label}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="mobile-menu__footer">
                        <p className="hr mb-4"></p>
                        <p className="text small">
                            Let's building something great together.
                        </p>
                        <div className="flex flex-row gap-2 items-center mt-2">
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
                                className="text-heavy email"
                                href="mailto:thristandave12@gmail.com"
                                tabIndex={isMobileOpen ? 0 : -1}
                            >
                                thristandave@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            <nav
                className={`desktop-nav${isDesktopOpen ? "" : " desktop-nav--collapsed"}`}
                aria-label="Desktop navigation"
            >
                <div>
                    <div className="desktop-nav__bar">
                        <Link
                            className="desktop-nav__label whitespace-nowrap brand-name"
                            to="/"
                        >
                            Kodekz
                        </Link>
                        <NavToggle
                            expanded={isDesktopOpen}
                            controls="desktop-menu"
                            label={isDesktopOpen ? "Collapse sidebar" : "Expand sidebar"}
                            onClick={() => setIsDesktopOpen((isOpen) => !isOpen)}
                        />
                    </div>

                    <div id="desktop-menu" className="desktop-nav__content">
                        <div className="sidebar-availability flex flex-row items-center gap-2">
                            <svg
                                width={8}
                                height={8}
                                viewBox="0 0 24 24"
                                aria-label="Available"
                            >
                                <circle cx="12" cy="12" r="10" fill="#22c55e" />
                            </svg>
                            <p className="text small">Available</p>
                        </div>
                        <div className="mt-12 flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    className="text small navigation flex items-center gap-3"
                                    to={link.to}
                                >
                                    {link.icon}
                                    <span>{link.label}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="desktop-nav__footer mb-2">
                    <p className="hr mb-4"></p>
                    <p className="text small">Let's building something great together.</p>
                    <div className="flex flex-row gap-2 items-center mt-2">
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
                            className="text-heavy email"
                            href="mailto:thristandave12@gmail.com"
                            tabIndex={isMobileOpen ? 0 : -1}
                        >
                            thristandave@gmail.com
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
