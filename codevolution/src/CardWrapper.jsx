export const CardWrapper = ({title}) => {
    return(
        <>
        <div className="card">
            <h2>{title}</h2>
            <div className="card-content">Nested content goes here</div>
        </div>
        </>
    )
}