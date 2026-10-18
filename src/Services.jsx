import { Link } from "react-router-dom";

function Services() {
    return (
        <div className="mx-auto mt-12 max-w-3xl px-6">
            <div className="mb-10 flex items-start justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-semibold tracking-tight">
                        What I Can Build for You
                    </h1>
                    <p className="text mt-3 max-w-xl">I design and develop responsive, user-friendly websites and web
                        applications tailored to your goals.</p>
                </div>
                <Link className="text tab whitespace-nowrap" to="/">
                    &#8592; back home
                </Link>
            </div>
        </div>
    )
}
export default Services