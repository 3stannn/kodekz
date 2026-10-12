function Footer() {
    return(
        <div className="mt-12 md:mt-24">
            <div className="max-w-3xl mx-auto px-6">
                <p className="hr mb-6"></p>
                <p className="text-heavy">Let's building something great together.</p>
                <a className="text email" href="mailto:thristandave12@gmail.com">thristandave@gmail.com</a>
            </div>
            <div className="max-w-3xl mx-auto px-6 mt-6 text-center mb-6">
                <p className="text footer">&copy;<span>{new Date().getFullYear()}</span> Thristan Dave Bumagat | Tarlac, PH</p>
            </div>
        </div>
    )
}
export default Footer