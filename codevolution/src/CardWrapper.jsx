export const CardWrapper = ({title, children}) => {
    return(
        <>
        <div className="card mt-5">
            <h2>{title}</h2>
            <div className="card-content">{children}</div>
        </div>
        </>
    )
}