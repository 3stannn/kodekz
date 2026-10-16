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
                    <p className="text mb-2">contacts</p>
                    <h1 className="text-3xl font-semibold tracking-tight">
                        Get in Touch
                    </h1>
                    <p className="text mt-3 max-w-xl">Have an opportunity, a project in mind, or just want to connect? Reach out anytime.</p>
                    <div className="mt-2">
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
