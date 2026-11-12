import { Link } from "react-router-dom";

function Experience() {
    return (
        <div className="max-w-2xl mx-auto px-6 mt-20">
            <div className="flex flex-row justify-between mb-4">
                <h1 className="text">01 — experience</h1>
                <Link className="text tab whitespace-nowrap" to="/experiences">
                    view all <span className="link-arrow" aria-hidden="true">&#8594;</span>
                </Link>
            </div>
            <div className="card thin flex flex-col sm:flex-row sm:items-center sm:justify-between py-2 sm:py-1 gap-1 sm:gap-4">
                <div className="flex items-baseline justify-between sm:justify-start sm:gap-12">
                    <p className="text small  sm:text-sm shrink-0 whitespace-nowrap sm:w-36">
                        2026 - Present
                    </p>
                    <h1 className="text-heavy normal text-sm sm:text-base">AWSLC - Tech Officer</h1>
                </div>
                <p className="text small sm:text-sm sm:text-right">AWS - Genesis | TSU Chapter</p>
            </div>
            <div className="card thin bottom flex flex-col sm:flex-row sm:items-center sm:justify-between py-2 sm:py-1 gap-1 sm:gap-4">
                <div className="flex items-baseline justify-between sm:justify-start sm:gap-12">
                    <p className="text small  sm:text-sm shrink-0 whitespace-nowrap sm:w-36">
                        2024 - Present
                    </p>
                    <h1 className="text-heavy normal text-sm sm:text-base">Web Developer</h1>
                </div>
                <p className="text small sm:text-sm sm:text-right">Freelance</p>
            </div>
            <div className="card thin bottom flex flex-col sm:flex-row sm:items-center sm:justify-between py-2 sm:py-1 gap-1 sm:gap-4">
                <div className="flex items-baseline justify-between sm:justify-start sm:gap-12">
                    <p className="text small  sm:text-sm shrink-0 whitespace-nowrap sm:w-36">
                        2022 - Present
                    </p>
                    <h1 className="text-heavy normal text-sm sm:text-base">Graphic Designer</h1>
                </div>
                <p className="text small sm:text-sm sm:text-right">Freelance</p>
            </div>
        </div>
    );
}
export default Experience;
