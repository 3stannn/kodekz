function Footer() {
    return (
        <div className="mt-12 md:mt-24">
            <div className="max-w-3xl mx-auto px-6 mt-6 text-center mb-6">
                <div className="flex flex-row items-center justify-between">
                    <div>
                        <p className="text small">
                            &copy;<span>{new Date().getFullYear()}</span> Thristan Dave Bumagat
                        </p>
                    </div>
                    <div className="flex flex-row gap-2">
                        <a
                            className="text small link whitespace-nowrap"
                            target="_blank"
                            href="https://github.com/3stannn"
                        >
                            github{" "}
                            <span className="link-arrow" aria-hidden="true">
                                &#8599;
                            </span>
                        </a>
                        <a
                            className="text small link whitespace-nowrap"
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
            </div>
        </div>
    );
}
export default Footer;
