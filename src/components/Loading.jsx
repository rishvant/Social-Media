const Loading = () => {
    return (
        <div className="text-center loading">
            <div className="spinner-border" role="status" style={{width:"5rem",height:"5rem"}}>
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loading;