export const Greeting = ({name="Guest", message="Hello"}) =>{
    return(
        <>
        <h2 className="text-blue-400">{message},{name} </h2>
        </>
    )
}