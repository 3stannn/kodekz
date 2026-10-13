import { Link } from "react-router-dom";

function Experience() {
    return (
        <div className="max-w-3xl mx-auto px-6 mt-12">
            <div className="flex flex-row justify-between mb-4">
                <h1 className="text">01 — experience</h1>
                <Link className="text tab" to="/experiences">
                    view all &#8594;&#xfe0e;
                </Link>
            </div>
            <div className="card thin flex flex-col sm:flex-row sm:items-center sm:justify-between py-2 sm:py-1 gap-1 sm:gap-4">
                <div className="flex items-baseline justify-between sm:justify-start sm:gap-12">
                    <p className="text text-xs sm:text-sm shrink-0 sm:w-28">
                        2024 - Present
                    </p>
                    <h1 className="text-heavy text-sm sm:text-base">Web Developer</h1>
                </div>
                <p className="text text-xs sm:text-sm sm:text-right">Freelance</p>
            </div>
            <div className="card thin bottom flex flex-col sm:flex-row sm:items-center sm:justify-between py-2 sm:py-1 gap-1 sm:gap-4">
                <div className="flex items-baseline justify-between sm:justify-start sm:gap-12">
                    <p className="text text-xs sm:text-sm shrink-0 sm:w-28">
                        2022 - Present
                    </p>
                    <h1 className="text-heavy text-sm sm:text-base">Graphic Designer</h1>
                </div>
                <p className="text text-xs sm:text-sm sm:text-right">Freelance</p>
            </div>
        </div>
    );
}
export default Experience;
