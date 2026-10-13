function Footer() {
    return (
        <div className="mt-12 md:mt-24">
            <div className="max-w-3xl mx-auto px-6 mt-6 text-center mb-6">
                <p className="hr mb-6"></p>
                <p className="text footer">
                    &copy;<span>{new Date().getFullYear()}</span> Thristan Dave Bumagat |
                    Tarlac, PH
                </p>
            </div>
        </div>
    );
}
export default Footer;
