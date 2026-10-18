import { Link } from "react-router-dom";

const contactGroups = [
    {
        title: "links",
        contacts: [
            {
                name: "GitHub",
                username: "3stannn",
                href: "https://github.com/3stannn",
            },
            {
                name: "LinkedIn",
                username: "thristandavebumagat",
                href: "https://linkedin.com/in/thristandavebumagat",
            },
        ],
    },
    {
        title: "social",
        contacts: [
            {
                name: "TikTok",
                username: "kodekzdev",
                href: "https://www.tiktok.com/@kodekzdev",
            },
            {
                name: "Discord",
                username: "kodekz01",
                href: "https://discord.com/users/662096336161603602",
            },
        ],
    },
];

function Contacts() {
    return (
        <div className="mx-auto mt-12 max-w-3xl px-6">
            <div className="mb-10 flex items-start justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-semibold tracking-tight">
                        Get in Touch
                    </h1>
                    <p className="text mt-3 max-w-xl">Have an opportunity, a project in mind, or just want to connect? Reach out anytime.</p>
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
                        <a className="text-heavy email" href="mailto:thristandave12@gmail.com">
                            thristandave12@gmail.com
                        </a>
                    </div>
                </div>
                <Link className="text tab whitespace-nowrap" to="/">
                    &#8592; back home
                </Link>
            </div>
            <div>
                {contactGroups.map((group, index) => (
                    <section
                        key={group.title}
                        className={index > 0 ? "mt-10" : ""}
                    >
                        <p className="text">{group.title}</p>

                        <div className="links-container mt-4">
                            {group.contacts.map((contact, contactIndex) => (
                                <a
                                    key={contact.name}
                                    href={contact.href}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div className={contactIndex > 0 ? "card bottom flex flex-row items-center justify-between" : "card flex flex-row items-center justify-between"}>
                                        <div>
                                            <p className="text-heavy">{contact.name}</p>
                                            <p className="text">@{contact.username}</p>
                                        </div>
                                        <p className="text link">&#8599;&#xfe0e;</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    )
}
export default Contacts
