function Navbar() {
    return (
        <nav>
            <div className='max-w-3xl mx-auto px-6 mt-6 md:mt-8'>
                <div className='flex flex-row justify-between items-center'>
                    <h1 className='brand-name'>Kodekz</h1>
                    {/* <ul className='flex flex-row gap-4'>
                        <li className='text link'><a href="">experience</a></li>
                        <li className='text link'><a href="">projects</a></li>
                        <li className='text link'><a href="">contact</a></li>
                    </ul> */}
                </div>
            </div>
        </nav>
    )
}
export default Navbar