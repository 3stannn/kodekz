import { Link } from 'react-router-dom'
import resume from '../../assets/resume.pdf'
import devpfp from '../../assets/dev.png'

function Hero() {
    return (
        <div className='mt-10 md:mt-12'>
            <div className="max-w-3xl mx-auto px-6">
                <div className="flex flex-row gap-4 items-center">
                    <img className='w-20 h-20 rounded-full' src={devpfp} alt="Thristan Dave Bumagat" srcset="" />
                    <div className='flex flex-col gap-0'>
                        <div className='flex flex-row items-center gap-2'>
                            <h1 className="devName text-xl">Thristan Dave Bumagat</h1>
                            <svg viewBox="0 0 24 24" width="15" height="15"
                                fill="#3b82f6">
                                <path
                                    d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.416-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .495.083.965.238 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z">
                                </path>
                            </svg>
                        </div>
                        <div>
                            <h1 className='text role'>&#9657; Web Developer</h1>
                        </div>
                    </div>
                </div>
                <p className="text text-justify mt-6">A 3rd-year Computer Science student, aspiring software engineer.
                    Building clean full-stack platforms, bridging frontier AI models with agentic tooling,
                    and architecting normalized relational backends.
                </p>
                <p className='text text-justify mt-2'>Constantly learning and improving through hands-on development.</p>
                <div className="flex flex-row gap-8 mt-6 justify-between">
                    <a className="text button" target="_blank" href={resume}>Download CV</a>
                    <div className='flex flex-row gap-8'>
                        <a className="text link" target="_blank" href="https://github.com/3stannn">github &#8599;&#xfe0e;</a>
                        <a className="text link" target="_blank" href="https://www.linkedin.com/in/kodekz01">linkedin &#8599;&#xfe0e;</a>
                    </div>
                </div>
                <div className="flex flex-row gap-8 mt-12">
                    <div className="flex w-full justify-between">
                        <Link className='tile left w-full' to="/experiences">
                            <div className='flex flex-row justify-between'>
                                <h1 className='text-xl'>&lt; 1</h1>
                                <p className='text link'>&#8599;&#xfe0e;</p>
                            </div>
                            <p className='text'>experience</p>
                        </Link>
                        <Link className='tile w-full' to="/stacks">
                            <div className='flex flex-row justify-between'>
                                <h1 className='text-xl'>10+</h1>
                                <p className='text link'>&#8599;&#xfe0e;</p>
                            </div>
                            <p className='text'>technologies</p>
                        </Link>
                        <Link className='tile right w-full' to="/projects">
                            <div className='flex flex-row justify-between'>
                                <h1 className='text-xl'>3</h1>
                                <p className='text link'>&#8599;&#xfe0e;</p>
                            </div>
                            <p className='text'>projects shipped</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero