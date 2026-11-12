import Certificate from "@/components/common/Certificate";
import { Link } from "react-router-dom";

function Certifications() {
    return (
        <div className="max-w-2xl mx-auto px-6 mt-20">
            <div className="flex flex-row justify-between mb-4">
                <h1 className="text">05 — certifications</h1>
                <Link className="text tab" to="/certificates">
                    view all <span className="link-arrow" aria-hidden="true">&#8594;</span>
                </Link>
            </div>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                <Certificate
                    certName="Intro to Networks"
                    certProvider="CCNA"
                    link="https://www.credly.com/badges/a4bb5c18-4a8a-4cc5-9719-78c7b6e53e15/public_url"
                />
                <Certificate
                    certName="Switching, Routing, and Wireless Essentials"
                    certProvider="CCNA"
                    link="https://www.credly.com/badges/702e4599-77ff-4f5e-b686-348ce7b047a1/public_url"
                />
                <Certificate
                    certName="HTML Fundamentals"
                    certProvider="CodeCred"
                    link="https://www.codecred.dev/verify/482e33bd-2832-4efa-af1a-acc7ad4105f5"
                />
            </div>
        </div>
    );
}
export default Certifications;
