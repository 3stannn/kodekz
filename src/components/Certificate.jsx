function Certificate(props) {
    return (
        <div className="h-full">
            <div className="outer-card h-full">
                <a className="block h-full" target="_blank" href={props.link}>
                    <div className="inner-card flex h-full flex-col items-center justify-center p-4 text-center">
                        <h1 className="text-heavy">{props.certName}</h1>
                        <p className="text">{props.certProvider}</p>
                        <p className="text link mt-2">&lt; Verify &gt;</p>
                    </div>
                </a>
            </div>
        </div>
    )
}
export default Certificate