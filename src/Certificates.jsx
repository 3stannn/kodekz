import Certificate from "./components/Certificate"
import { Link } from 'react-router-dom'

function Certificates() {
    return (
        <div className="mx-auto mt-12 max-w-3xl px-6">
            <div className="mb-10 flex items-start justify-between gap-6">
                <div>
                    <p className="text mb-2">05 — certifications</p>
                    <h1 className="text-3xl font-semibold tracking-tight">Certifications</h1>
                    <p className="text mt-3 max-w-xl">Credentials & Qualifications.</p>
                </div>
                <Link className="text tab whitespace-nowrap" to="/">&#8592; back home</Link>
            </div>
            <div>
                <p className="text mb-4">Hackathon</p>
                <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                    <Certificate certName="IBM Bob 2.0 Hackathon" certProvider="LABLAB.AI" link="https://lablab.ai/u/@kodekz/ai-hackathons/ibm-bob-2-hackathon/certificate" />
                </div>
            </div>
            <div className="mt-10">
                <p className="text mb-4">Networks</p>
                <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                    <Certificate certName="Intro to Networks" certProvider="CCNA" link="https://www.credly.com/badges/a4bb5c18-4a8a-4cc5-9719-78c7b6e53e15/public_url" />
                    <Certificate certName="Switching, Routing, and Wireless Essentials" certProvider="CCNA" link="https://www.credly.com/badges/702e4599-77ff-4f5e-b686-348ce7b047a1/public_url" />
                </div>
            </div>
            <div className="mt-10">
                <p className="text mb-4">Web</p>
                <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                    <Certificate certName="HTML Fundamentals" certProvider="CodeCred" link="https://www.codecred.dev/verify/482e33bd-2832-4efa-af1a-acc7ad4105f5" />
                </div>
            </div>
        </div>
    )
}
export default Certificates